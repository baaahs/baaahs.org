# main.tf

terraform {
    required_providers {
        google = {
            source = "hashicorp/google"
            version = ">=5.13.0"
        }
    }
}

resource "google_storage_bucket" "static-site" {
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


provider "google" {
    # Configuration options
    project = "baaahsorg-dev"
}