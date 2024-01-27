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
