<<<<<<< Updated upstream
# main.tf

terraform {
    required_providers {
        null = {
            source  = "hashicorp/null"
            version = "~> 3.1"
        }
    }
    required_version = "~> 1.1"
}

provider "null" {
    # Provider-level configurations
}
=======
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
    # TODO: Review if this is the best region for us
    region  = "us-central1"
}


# One IP address to rule them all. Traffic will be routed by the load
# balancer based on hostname.
resource "google_compute_global_address" "default" {
    name = "lb-ip"
}

# A single cert that covers all our hosts
resource "google_compute_managed_ssl_certificate" "default" {
    name = "ssl-cert"
    managed {
        domains = ["www.baaahs.org", "static.baaahs.org", "baaahs.org", "staging.baaahs.org", "dev.baaahs.org"]
    }
}

# ---------------------------------------------------------------------------
# The four backend buckets themselves

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
    force_destroy = true

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

# ---------------------------------------------------------------------------
# To be accessible to the load balancer each bucket needs to be exposed
# as a google_compute_backend_bucket as well

resource "google_compute_backend_bucket" "prod" {
    name        = "backend"
    bucket_name = google_storage_bucket.static.name
}

resource "google_compute_backend_bucket" "static" {
    name        = "backend"
    bucket_name = google_storage_bucket.static.name
}

resource "google_compute_url_map" "default" {
    name            = "lb-map"
    default_service = google_compute_backend_bucket.default.id

    host_rule {
        path_matcher = "allpaths"
        hosts        = ["www.baaahs.org"]
    }

    path_matcher {
        name            = "allpaths"
        default_service = google_compute_backend_bucket.default.id
    }
}

resource "google_compute_target_https_proxy" "default" {
    name             = "https-proxy"
    url_map          = google_compute_url_map.default.id
    ssl_certificates = [google_compute_managed_ssl_certificate.default.id]
}

resource "google_compute_global_forwarding_rule" "default" {
    name       = "https-rule"
    ip_address = google_compute_global_address.default.address
    target     = google_compute_target_https_proxy.default.id

    port_range = "443"
}

# -------

>>>>>>> Stashed changes
