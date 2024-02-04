# We live on GCP
terraform {
    required_providers {
        google = {
            source = "hashicorp/google"
            version = ">=5.13.0"
        }
    }
}

provider "google" {
    project = "baaahsorg-prod"

    # Choosing a region is actually kind of annoying. us-west1 is Oregon and generally
    # pretty good, but it lacks some of the AI things in us-central1, which is Iowa.
    # us-west2 might be another good choice because it is LA and Starlink from The Incline
    # does downlink to LA. Plus the Bay Area to LA is a pretty solid backbone, but you can't
    # do AI things there. Since AI is future and we want fast web for the majority of our
    # users we're going with LA for now and other things can be elsewhere as or if needed.
    region  = "us-west2"
}


# One IP address to rule them all. Traffic will be routed by the load
# balancer based on hostname.
resource "google_compute_global_address" "default" {
    name = "lb-ip"
}

# Certificates won't deploy without DNS for the name pointing at the load balancer.
# Thus, instead of doing all hosts together, this is all hosts except the production
# names.
resource "google_compute_managed_ssl_certificate" "non-prod" {
    name = "non-prod"
    managed {
        domains = ["static.baaahs.org", "staging.baaahs.org", "dev.baaahs.org"]
    }
}

# This is a temporary name for the production bucket.
resource "google_compute_managed_ssl_certificate" "www-gcp" {
    name = "www-gcp"
    managed {
        domains = ["www-gcp.baaahs.org"]
    }
}


# ---------------------------------------------------------------------------
# The four backend buckets themselves, each of which needs to have public
# permissions set on it.
#
# Notice that while the static bucket is as you would expect - a default
# index.html and 404.html page, all of the other three buckets have the
# not_found_page set to be the index.html page. This is so that the client
# side React Router stuff will work. When it goes asking for crazy paths that
# the front-end folks just invented out of thin air, it will just shovel the
# same old SPA index.html page back. Now, it will send it with a 404 instead
# of a 200, but browsers don't seem to care. This is a much easier, albeit
# somewhat hacky and cache-busting, way to get the front-end routing working.
#
# Inspiration for this approach came from the github pages section of this
# documentation https://create-react-app.dev/docs/deployment/

resource "google_storage_bucket" "prod" {
    name          = "www.baaahs.org"
    location      = "US"
    force_destroy = true

    uniform_bucket_level_access = true

    website {
        main_page_suffix = "index.html"
        not_found_page   = "index.html"
    }

    # TODO: Review this attribute
    cors {
        origin          = ["https://www.baaahs.org"]
        method          = ["GET", "HEAD", "PUT", "POST", "DELETE"]
        response_header = ["*"]
        max_age_seconds = 3600
    }
}

resource "google_storage_bucket" "static" {
    name          = "static.baaahs.org"
    location      = "US"

    # In case this bucket gets nuked from terraform, don't kill the content
    force_destroy = false

    uniform_bucket_level_access = true

    website {
        main_page_suffix = "index.html"
        not_found_page   = "404.html"
    }
    cors {
        origin          = ["https://static.baaahs.org"]
        method          = ["GET", "HEAD", "PUT", "POST", "DELETE"]
        response_header = ["*"]
        max_age_seconds = 3600
    }
}

resource "google_storage_bucket" "staging" {
    name          = "staging.baaahs.org"
    location      = "US"
    force_destroy = true

    uniform_bucket_level_access = true

    website {
        main_page_suffix = "index.html"
        not_found_page   = "index.html"
    }

    # TODO: Review this attribute
    cors {
        origin          = ["https://staging.baaahs.org"]
        method          = ["GET", "HEAD", "PUT", "POST", "DELETE"]
        response_header = ["*"]
        max_age_seconds = 3600
    }
}


#/* Temporarily removing until quota is increased
resource "google_storage_bucket" "dev" {
    name          = "dev.baaahs.org"
    location      = "US"
    force_destroy = true

    uniform_bucket_level_access = true

    website {
        main_page_suffix = "index.html"
        not_found_page   = "index.html"
    }

    # TODO: Review this attribute
    cors {
        origin          = ["https://dev.baaahs.org"]
        method          = ["GET", "HEAD", "PUT", "POST", "DELETE"]
        response_header = ["*"]
        max_age_seconds = 3600
    }
}

# At this point the AI decided an array with a for_each made sense.
# Regarding IAM permissions, this is where terraform kinda breaks down
# and doesn't seem plausible to be able to start from scratch and achieve
# working infrastructure. But that's okay (sort-of) since we are using
# shared state at the terraform cloud project.
locals {
    buckets = ["www", "static", "staging", "dev"]
}

# Make all the buckets public
resource "google_storage_bucket_iam_binding" "buckets_public" {
    for_each = toset(local.buckets)

    bucket = "${each.key}.baaahs.org"
    role   = "roles/storage.objectViewer"
    members = [
        "allUsers",
    ]
}

# Handle static differently because it needs the extra binding stacked on
data "google_iam_policy" "static" {
    binding {
        role = "roles/storage.objectViewer"
        members = [ "allUsers" ]
    }

    binding {
        role = "roles/storage.objectAdmin"
        members = [ "group:gcp-static-bucket@baaahs.org" ]
    }
}

# This bucket needs to be writable to devs
resource "google_storage_bucket_iam_binding" "buckets_gcp_static" {
    bucket = "static.baaahs.org"
    role   = "roles/storage.objectAdmin"
    members = [
        "group:gcp-static-bucket@baaahs.org",
    ]
}

#data "google_client_openid_userinfo" "me" {}
#data "google_client_config" "me" {}
#
#resource "google_storage_bucket_iam_binding" "buckets_service_account" {
#    depends_on = [google_project_iam_member.sa_storage_iam]
#    for_each = toset(local.buckets)
#
#    bucket = "${each.key}.baaahs.org"
#    role   = "roles/storage.objectAdmin"
#    members = [
#        "serviceAccount:${data.google_client_openid_userinfo.me.email}",
#    ]
#}
#
#resource "google_project_iam_member" "sa_storage_iam" {
#    project = data.google_client_config.me.project
#    role    = "roles/storage.admin"
#    member  = "serviceAccount:${data.google_client_openid_userinfo.me.email}"
#}
#
#resource "google_project_iam_member" "group_static_iam" {
#    project = data.google_client_config.me.project
#    role    = "roles/storage.objectAdmin"
#    member  = "group:gcp-static-bucket@baaahs.org"
#}

# ---------------------------------------------------------------------------
# To be accessible to the load balancer each bucket needs to be exposed
# as a google_compute_backend_bucket as well. This is where we could
# enable cloud CDN for these things, but it's not yet clear what the
# cost or utility would be, so this is more a note for the future.

resource "google_compute_backend_bucket" "prod" {
    name        = "prod"
    bucket_name = google_storage_bucket.prod.name
}

resource "google_compute_backend_bucket" "static" {
    name        = "static"
    bucket_name = google_storage_bucket.static.name
}

resource "google_compute_backend_bucket" "staging" {
    name        = "staging"
    bucket_name = google_storage_bucket.staging.name
}

resource "google_compute_backend_bucket" "dev" {
    name        = "dev"
    bucket_name = google_storage_bucket.dev.name
}

# ---------------------------------------------------------------------------
# Now we need a url map to get traffic to the right bucket, and eventually
# to the right backends for api things. So we have a request that has various
# parts, and we're trying to get it matched up with one of those services
# we defined above.

resource "google_compute_url_map" "main" {
    name            = "lb-map"

    # If nothing else matches go to this backend. This is required.
    default_service = google_compute_backend_bucket.prod.id

    # Host rules get us from a hostname to a named path_matcher. Since they do not
    # have a service attribute, we must use a path_matcher to connect to an actual
    # service.
    host_rule {
        path_matcher = "prod"
        hosts        = ["www.baaahs.org", "baaahs.org", "www-gcp.baaahs.org"]
    }

    host_rule {
        path_matcher = "static"
        hosts        = ["static.baaahs.org"]
    }

    host_rule {
        path_matcher = "staging"
        hosts        = ["staging.baaahs.org"]
    }

    host_rule {
        path_matcher = "dev"
        hosts        = ["dev.baaahs.org"]
    }


    # -------------------------------
    # Path Matchers
    #
    # The name of the path matcher is referenced by the host_rule above.
    # Ideally we might extend each path_matcher so that it understands all routes
    # the client might request and then did fancy url rewriting. However,
    # we've come up with an alternative approach documented above so all of
    # our path_matchers are now simple.

    path_matcher {
        name            = "prod"
        default_service = google_compute_backend_bucket.prod.id
    }

    path_matcher {
        name            = "staging"
        default_service = google_compute_backend_bucket.staging.id
    }

    path_matcher {
        name            = "dev"
        default_service = google_compute_backend_bucket.dev.id
    }

    # The static path_matcher is easy. It's a filesystem. No fancy stuff.
    path_matcher {
        name            = "static"
        default_service = google_compute_backend_bucket.static.id
    }
}

# Now we need targets that will be used by the port level rules.
# One for https with all the certs and one for http access.
# TODO: Add make all the http stuff redirect to https
resource "google_compute_target_https_proxy" "default" {
    name             = "https-proxy"
    url_map          = google_compute_url_map.main.id
    ssl_certificates = [
        google_compute_managed_ssl_certificate.non-prod.id,
        google_compute_managed_ssl_certificate.www-gcp.id
    ]
}

resource "google_compute_target_http_proxy" "default" {
    name             = "http-proxy"
    url_map          = google_compute_url_map.main.id
}

# And finally the actual border rules which bind an ip:port to a
# target for all of the above. The two standard web ports
resource "google_compute_global_forwarding_rule" "tls" {
    name       = "https-rule"
    ip_address = google_compute_global_address.default.address
    target     = google_compute_target_https_proxy.default.id

    port_range = "443"
}

resource "google_compute_global_forwarding_rule" "plain" {
    name       = "http-rule"
    ip_address = google_compute_global_address.default.address
    target     = google_compute_target_http_proxy.default.id

    port_range = "80"
}
