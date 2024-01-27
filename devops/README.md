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

Each of the three environments prod, staging, and dev, map to corresponding GCP projects. Static is part of prod. Each of these projects has a corresponding workspace within the Hashicorp Terraform Cloud, and each of these workspaces maps to a `deploy-XXX` branch as noted.


# Terraform

Terraform is a popular infrastructure-as-code software tool created by HashiCorp. It allows developers to use a high-level configuration language to describe the desired "end-state" cloud or on-premises infrastructure for running an application. Then it generates a plan for reaching that end-state and executes the plan.

In this directory, the terraform configuration files are created to set up the Google Cloud storage buckets, potentially along with load balancers, to host three websites: `dev.baaahs.org`, `staging.baaahs.org`, and `www.baaahs.org`. 

These websites are linked with the respective branches: `deploy-dev`, `deploy-staging`, and `deploy-prod` in github. Using the Terraform cloud workspace simplifies collaboration and sharing within the team. 

When commits are made on these branches, they will trigger the Terraform runs. This pipeline helps to ensure the consistency of the infrastructure with the code in repositories and automate the process of infrastructure provisioning.

## WIP Notes

Do we need one terraform workspace for each deployment?

Do we need a GCP project per deployment?

