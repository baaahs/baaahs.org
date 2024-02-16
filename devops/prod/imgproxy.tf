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
# used for other container images later anyway)

resource "google_artifact_registry_repository" "docker" {
    repository_id = "docker"
    format        = "DOCKER"

    docker_config {
        # I'm not entirely sure if we need immutable tags, but the example
        # in the registry documentation had this set so /shrug
        immutable_tags = true
    }
}