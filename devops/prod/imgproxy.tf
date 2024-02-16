###############################################################################
# This file defines the infrastructure elements for the image proxy which
# automagically transforms images. Note that a start from scratch approach
# with this file is likely to encounter some issues because a service
# account is necessary as well as deploying an image into the artifact
# registry that is created here. The git history should lead future folks
# through what has actually been done in sequence though.
#
# The core concept is that this is a translation of the "click the UI"
# tutorial found at https://medium.com/@sirajmohammad/serving-next-generation-images-using-google-cloud-cdn-cloud-run-and-image-proxy-4d2e65d87fbc
#
# Google provider docs: https://registry.terraform.io/providers/hashicorp/google/latest/docs
# General site for imgproxy: https://imgproxy.net/
# Github for imgproxy: https://github.com/imgproxy/imgproxy
#

# First things first, we need the artifact registry (which will probably get
# used for other container images later anyway). This fails the first time
# because the API is not enabled. To enable it https://console.developers.google.com/apis/api/artifactregistry.googleapis.com/overview?project=baaahsorg-prod


resource "google_artifact_registry_repository" "docker" {
    repository_id = "docker"
    format        = "DOCKER"

    docker_config {
        # I'm not entirely sure if we need immutable tags, but the example
        # in the registry documentation had this set so /shrug
        immutable_tags = true
    }
}

# Second step is to pull the latest imgproxy container, tag it, and then
# push it into the new registry as described in the tutorial linked above.
# VERY IMPORTANT - this either has to be done from an amd64 architecture machine
# (as in not a M-series mac) or perhaps you can fiddle around to get docker to
# respect the amd64 platform.
#
#     gcloud auth login
#     gcloud auth configure-docker us-west2-docker.pkg.dev
#     docker pull darthsim/imgproxy:latest
#     docker tag darthsim/imgproxy:latest us-west2-docker.pkg.dev/baaahsorg-prod/docker/imgproxy:2024021601
#     docker push us-west2-docker.pkg.dev/baaahsorg-prod/docker/imgproxy:2024021601
#

# With the image pushed into the artifact registry we can setup the cloud run service
# Similiarly will fail on first run needing the API enabled https://console.developers.google.com/apis/api/run.googleapis.com/overview?project=baaahsorg-prod
resource "google_cloud_run_v2_service" "imgproxy" {
    name = "imgproxy"
    location = "us-west2"

    # This probably could be INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER
    ingress = "INGRESS_TRAFFIC_ALL"

    template {
        scaling {
            min_instance_count = 0
            max_instance_count = 2
        }

        containers {
            image = "us-west2-docker.pkg.dev/baaahsorg-prod/docker/imgproxy:2024021601"

            resources {
                limits = {
                    cpu    = 1
                    memory = "512Mi"
                }

                # May want to explore this for cold-start latency
                # startup_cpu_boost = true
            }

            # Options reference https://docs.imgproxy.net/configuration/options
            env {
                name  = "IMGPROXY_DOWNLOAD_TIMEOUT"
                value = "10"
            }

            env {
                name  = "IMGPROXY_TTL"
                value = "31536000"
            }

            env {
                name  = "IMGPROXY_ENFORCE_WEBP"
                value = "true"
            }

            env {
                name  = "IMGPROXY_ENFORCE_AVIF"
                value = "true"
            }

            env {
                name  = "IMGPROXY_ENABLE_CLIENT_HINTS"
                value = "true"
            }

            env {
                name  = "IMGPROXY_LOG_FORMAT"
                value = "gcp"
            }

            env {
                name  = "IMGPROXY_USE_GCS"
                value = "true"
            }

            env {
                name = "IMGPROXY_ALLOWED_SOURCES"
                value = "gs://static.baaahs.org"
            }
        }
    }
}

# The Cloud Run needs to be accessible to people who aren't bringing an oauth token along
resource "google_cloud_run_v2_service_iam_member" "allusers" {
    name = google_cloud_run_v2_service.imgproxy.name
    location = google_cloud_run_v2_service.imgproxy.location
    member = "allUsers"
    role = "roles/run.invoker"
}

# Cloud Run is a managed instance service, so a region NEG is the only
# type of NEG that can be used for it.
resource "google_compute_region_network_endpoint_group" "imgproxy-west2" {
    name = "imgproxy-west2"
    network_endpoint_type = "SERVERLESS"
    region = "us-west2"
    cloud_run {
        service = google_cloud_run_v2_service.imgproxy.name
    }
}

# But the url map really wants global things, so we define a global
# backend that uses that region group.
resource "google_compute_backend_service" "imgproxy" {
    name = "imgproxy"
    backend {
        group = google_compute_region_network_endpoint_group.imgproxy-west2.id
    }
    enable_cdn = false
#    cdn_policy {
        # Hmmm, something is whacky
#        cache_key_policy {
#            include_http_headers = [ "dpr", "width", "viewport-width" ]
#        }

#        signed_url_cache_max_age_sec = 14000

        # No really, actually do some caching please...
#        cache_mode = "USE_ORIGIN_HEADERS"
#    }
}

