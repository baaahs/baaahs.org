# How The BAAAHS Web Presence Works

Since we are us, our web presence is both hand-crafted and uses all the latest big boy tools.

There are 4 websites under the `baaahs.org` domain.

https://www.baaahs.org
: Also referred to as ***prod*** or ***production***, this is the real deal main website. Maps to the `deploy-prod` branch,

https://static.baaahs.org
: Hosts large files. Conceptually this is part of the production infrastructure

https://staging.baaahs.org
: Things that are about to be production. From the `deploy-staging` branch.

https://dev.baaahs.org
: Latest work in progress stuff. Is broken. On purpose. That's how things get made. From `deploy-dev` 

What about `main`? Well, you can think of one more environment named ***local*** which refers to running the website (and possibly services) on your local machine. If the local code you are running needs a backend you don't want to host locally, it should probably use the development backend. We are starting with a static site though so this concern will be addressed as we come to it.

When commits are made on the deployment branches a github action is kicked off which will build the site from source and presuming things go well will then push the build artifacts into google cloud storage buckets that map one to one with the branch. There is a fourth bucket for the static files.

(Ok, at this exact moment, 2024-01-28, the GCP project has a limitation of only 3 buckets so the `dev` bucket is aspirational. A quota increase request has been sent and this should be fine in a few days.)

While three Terraform Cloud workspaces got created in the exploration of how to set things up correctly, it has shaken out that we are only using the `prod` workspace. The driving factor was that to use a custom domain name in GCP you have to do it right and terminate TLS at a load balancer. The load balancer can then only be backended by resources in the same GCP project. Load balancers cost money, so we don't want unnecessary extra ones laying around just because. Thus, one load balancer, one GCP project, multiple buckets for the github build actions to push artifacts into.

The `staging` and `dev` terraform cloud workspaces and corresponding GCP projects are still hanging out simply because it was a bit of a hassle to set them up to begin with, and they're there, so if we change our mind in the future it is probably easier to have these things functional. You will note that the `main.tf` files for these dormant infrastructures are null. So no costs are happening.

