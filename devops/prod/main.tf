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

# A single cert that covers all our hosts
resource "google_compute_managed_ssl_certificate" "non-prod" {
    name = "non-prod"
    managed {
        # Removing the production servers which currently point at AWS because
        # this seems to be preventing the cert from being issued.
        # domains = ["www.baaahs.org", "static.baaahs.org", "baaahs.org", "staging.baaahs.org", "dev.baaahs.org"]
        domains = ["static.baaahs.org", "staging.baaahs.org", "dev.baaahs.org"]
    }
}

resource "google_compute_managed_ssl_certificate" "www-gcp" {
    name = "www-gcp"
    managed {
        domains = ["www-gcp.baaahs.org"]
    }
}


# ---------------------------------------------------------------------------
# The four backend buckets themselves, each of which needs to have public
# permissions set on it.

resource "google_storage_bucket" "prod" {
    name          = "www.baaahs.org"
    location      = "US"
    force_destroy = true

    uniform_bucket_level_access = true

    website {
        main_page_suffix = "index.html"
        not_found_page   = "404.html"
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
        not_found_page   = "404.html"
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
        not_found_page   = "404.html"
    }

    # TODO: Review this attribute
    cors {
        origin          = ["https://dev.baaahs.org"]
        method          = ["GET", "HEAD", "PUT", "POST", "DELETE"]
        response_header = ["*"]
        max_age_seconds = 3600
    }
}


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

# Handle static differently because it needs the extra thing stacked on
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

#resource "google_storage_bucket_iam_policy" "static" {
#    depends_on = [
#        google_project_iam_member.sa_storage_iam,
#        google_project_iam_member.group_static_iam,
#    ]
#    bucket = google_storage_bucket.static.name
#    policy_data = data.google_iam_policy.static.policy_data
#}

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

    # If nothing else matches go to this backend
    # Disabling for now in order to work through all the things
    # default_service = google_compute_backend_bucket.prod.id

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
    # The path_matchers also do some trickery for the React websites that want to
    # be able to have arbitrary paths all map to the same set of source files.
    # We're trying to do this with 302 temporary redirects for two reasons. The first
    # is so that the browser understands it already has the file locally and the second
    # is tha the React front end code is going to use the URL in the location to determine
    # what UI to show.

    path_matcher {
        name            = "prod"
        default_service = google_compute_backend_bucket.prod.id
    }

    path_matcher {
        name            = "static"
        default_service = google_compute_backend_bucket.static.id
    }

    path_matcher {
        name            = "staging"
        default_service = google_compute_backend_bucket.staging.id
    }

    path_matcher {
        name            = "dev"

        # The bucket is obvious even though we are going to muck with paths
        default_service = google_compute_backend_bucket.dev.id

        # TS: Disagree with myself here.....
        # We must use path_rule not route_rule according to documentation that
        # says "route_rules are not for external load balancers"

        # This first one I think is not strictly necessary. I believe we are
        # saying if you have no path elements, send to default service with no
        # modifications. May remove this.
#        path_rule {
#            paths = [ "/*" ]
#        }

        # Now we are going to send redirects for one level of path
#        path_rule {
#            paths = [ "/{one = *}/*", ]
#        }

        # Documentation at https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_url_map#argument-reference
        # Says "routeRules are not supported in UrlMaps intended for External load balancers"
        # Let's see if that's true???

        # A route_rules block needs a match_rules attribute and either a route_action
        # or a url_redirect attribute

        route_rules {
            priority = 10

            match_rules {
                path_template_match = "/{one=*}/*"
            }

            url_redirect {
                path_redirect = "/"
                redirect_response_code = "TEMPORARY_REDIRECT"
            }
        }
    }

    # The static path_matcher is easy. It's a filesystem. No fancy stuff.
    path_matcher {
        name            = "static"
        default_service = google_compute_backend_bucket.static.id
    }
}

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
