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

# And the for realsies names that we could only add after first updating DNS
resource "google_compute_managed_ssl_certificate" "www" {
    name = "www"
    managed {
        domains = ["www.baaahs.org", "baaahs.org"]
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
    enable_cdn = true
}

resource "google_compute_backend_bucket" "static" {
    name        = "static"
    bucket_name = google_storage_bucket.static.name
    enable_cdn = true
}

resource "google_compute_backend_bucket" "staging" {
    name        = "staging"
    bucket_name = google_storage_bucket.staging.name
    enable_cdn = true
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
#
# Documentation https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_url_map

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

        route_rules {
            priority = 10
            match_rules {
                full_path_match = "/drive"
            }
            url_redirect {
                https_redirect = true
                host_redirect = "drive.google.com"
                path_redirect = "/drive/folders/0B_TasILTM6TWa18zdHdmNHpUYzg"
            }
        }

        # TODO: Check if this one is still valid
        route_rules {
            priority = 20
            match_rules {
                full_path_match = "/pspride"
            }
            url_redirect {
                https_redirect = true
                path_redirect = "/psp/"
            }
        }

        route_rules {
            priority = 30
            match_rules {
                full_path_match = "/join"
            }
            url_redirect {
                https_redirect = true
                host_redirect = "goo.gl"
                path_redirect = "/forms/XUvltyxql2"
            }
        }

        # TODO: Check if this one is still valid
        route_rules {
            priority = 40
            match_rules {
                full_path_match = "/setup"
            }
            url_redirect {
                https_redirect = true
                path_redirect = "/setup/"
            }
        }

        route_rules {
            priority = 50
            match_rules {
                full_path_match = "/geometry"
            }
            url_redirect {
                https_redirect = true
                host_redirect = "baaahs.github.io"
                path_redirect = "/geometry/html/viewer.html?#map"
            }
        }

        route_rules {
            priority = 60
            match_rules {
                full_path_match = "/model"
            }
            url_redirect {
                https_redirect = true
                host_redirect = "baaahs.github.io"
                path_redirect = "/geometry/html/viewer.html?#map"
            }
        }

        route_rules {
            priority = 70
            match_rules {
                full_path_match = "/cal"
            }
            url_redirect {
                https_redirect = true
                host_redirect = "calendar.google.com"
                path_redirect = "/calendar?cid=ODlydDZ0MWs1am1oMm9odnZicXBvbTZyMW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
            }
        }

        route_rules {
            priority = 80
            match_rules {
                full_path_match = "/cal-private"
            }
            url_redirect {
                https_redirect = true
                host_redirect = "calendar.google.com"
                path_redirect = "/calendar/embed?src=eo8lcds32ki40o14dr6m5t0o5s%40group.calendar.google.com&ctz=America%2FLos_Angeles"
            }
        }

        route_rules {
            priority = 90
            match_rules {
                full_path_match = "/slack"
            }
            url_redirect {
                https_redirect = true
                host_redirect = "baaahs.slack.com"
                path_redirect = "/"
            }
        }

        route_rules {
            priority = 100
            match_rules {
                full_path_match = "/slack-invite"
            }
            url_redirect {
                https_redirect = true
                host_redirect = "join.slack.com"
                path_redirect = "/t/baaahs/shared_invite/enQtODg3MTE3NTk1ODA4LTRhMDEyZTY1MmI4YjIzN2JlYmUxMWQyNGMyYjA4MDhkMmMwMTU3YWFjOTVjNGZhZGY3YTc4MTNlZDE1NzFmMmY"
            }
        }

        route_rules {
            priority = 110
            match_rules {
                full_path_match = "/2020"
            }
            url_redirect {
                https_redirect = true
                host_redirect = "drive.google.com"
                path_redirect = "/drive/folders/1-5VGf1gZXyzGN1lYNVF1KwGBrJ6n9t4L"
            }
        }

        route_rules {
            priority = 120
            match_rules {
                full_path_match = "/2020-form"
            }
            url_redirect {
                https_redirect = true
                host_redirect = "docs.google.com"
                path_redirect = "/forms/d/e/1FAIpQLSfuh4BvWp1q4eQ_W_sVCDsKmlOPPB1N5RekJHLTjCsR5qdeFQ/viewform"
            }
        }

        route_rules {
            priority = 130
            match_rules {
                full_path_match = "/2020-doc"
            }
            url_redirect {
                https_redirect = true
                host_redirect = "docs.google.com"
                path_redirect = "/document/d/10Do2qdITwrQxGOeMGd7pe1jrIxQejF-W5jHK2wbagfE"
            }
        }

        route_rules {
            priority = 140
            match_rules {
                full_path_match = "/2020-sheet"
            }
            url_redirect {
                https_redirect = true
                host_redirect = "docs.google.com"
                path_redirect = "/spreadsheets/d/11FeKLaktPhMq_Oh_mG8TBK3U9_eY2oHBGxE0T3GzLhU"
            }
        }

        route_rules {
            priority = 150
            match_rules {
                full_path_match = "/crew"
            }
            url_redirect {
                https_redirect = true
                host_redirect = "docs.google.com"
                path_redirect = "/document/d/11mQX1lZpP0rMNNV1Uni_J0hutXaMEhsjvKtermUuY6Q"
            }
        }

        route_rules {
            priority = 160
            match_rules {
                full_path_match = "/dj"
            }
            url_redirect {
                https_redirect = true
                host_redirect = "docs.google.com"
                path_redirect = "/forms/d/e/1FAIpQLSeaDIVG7c5uKHetUvo1IX4R6PrTg1agjyGdEMnxYOvTBCF_YQ/viewform?usp=sf_link"
            }
        }

        route_rules {
            priority = 170
            match_rules {
                full_path_match = "/apply"
            }
            url_redirect {
                https_redirect = true
                host_redirect = "bit.ly"
                path_redirect = "/baaahs-2024-application"
            }
        }
    }

    path_matcher {
        name            = "staging"
        default_service = google_compute_backend_bucket.staging.id
    }

    path_matcher {
        name            = "dev"
        default_service = google_compute_backend_bucket.dev.id

        # The following is the general format of a redirect. Rather than
        # repeating them across all environments I'm only going to put them on prod
        # because typing. Someday it might be nice to have a script that reads
        # a simpler format and generates the terraform format.
        route_rules {
            priority = 10
            match_rules {
                full_path_match = "/drive"
            }
            url_redirect {
                https_redirect = true
                host_redirect = "drive.google.com"
                path_redirect = "/drive/folders/0B_TasILTM6TWa18zdHdmNHpUYzg"
            }
        }
    }

    # The static path_matcher is relatively easy. Mostly it's a filesystem without
    # fancy stuff, but the imgproxy service is mapped in so content can be
    # requested either through the imgproxy or not.
    path_matcher {
        name            = "static"
        default_service = google_compute_backend_bucket.static.id

        # This provides an escape mechanism to avoid the imgproxy
        # We are pretty limited by the restrictions on global load balancers. I
        # guess we could get tricky and try to stack an INTERNAL_SELF_MANAGED
        # load balancer behind the global one, but that seems like it's own
        # version of whack - oh and actually I don't think it would work right anyway,
        # but I honestly haven't fully thought it through. For now, let's go
        # with the approach of "If you want raw access, you must specify that"
        route_rules {
            priority = 10
            service = google_compute_backend_bucket.static.id

            match_rules {
                prefix_match = "/raw/"
            }
            route_action {
                url_rewrite {
                    path_prefix_rewrite = "/"
                }
            }
        }

        # Things that make it here go through the imgproxy
        route_rules {
            priority = 200
            service = google_compute_backend_service.imgproxy.id

            match_rules {
                prefix_match = "/"
            }
            route_action {
                url_rewrite {
                    path_prefix_rewrite = "/_/plain/gs://static.baaahs.org/"
                }
            }
        }
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
        google_compute_managed_ssl_certificate.www-gcp.id,
        google_compute_managed_ssl_certificate.www.id
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
