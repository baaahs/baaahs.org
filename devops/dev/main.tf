# main.tf

terraform {
    required_providers {
        google = {
            source = "hashicorp/google"
            version = ">=5.13.0"
        }
    }
}

provider "google" {
    # Configuration options
    project = "baaahsorg-dev"
}