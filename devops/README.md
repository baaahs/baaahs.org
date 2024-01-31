# How To Deploy The Website

Push a commit to one of the deployment branches which are: `deploy-prod`, `deploy-staging`, and `deploy-dev`

***NOTE:*** As of 2024-01-28 the dev environment is not yet functional. This is because of silly quota restrictions within GCP limiting the number of cloud storage buckets in a project to 3, whereas we want 4. Buttons have been clicked to request an increase in this quota, which I think is an easy thing, but I also think a human has to be found, and those are hard to come by at goog sometimes.

That's it. There is no step 2. 

To see if the deployment worked or not you can check the [github actions](https://github.com/baaahs/baaahs.org/actions) page for this repo.

# Putting Big Files in The Static Bucket

You will need a google identity and then you must be added to the <gcp-static-bucket@baaahs.org> google group within the `baaahs.org` google workspace. Note that this is a different workspace and set of groups than the ones which control access to the long-lived BAAAHS gdrive. Talk to Tom to get this access. I will need to know what email you commonly authenticate to google with.

Once your account has been added to the group you currently have two options to upload files. For one offs I would probably recommend just using the [google cloud web console](https://console.cloud.google.com/storage/browser/static.baaahs.org) directly. It's not the best but it should largely work - usually.

If you have lots of files to upload you will want to use the `gsutil` command line tool that is part of the gcloud CLI. This is a two step process to get setup.

1. Follow the instructions from the official documentation, making appropriate choices as you do so.
2. Run the `gcloud init` command. Information you will need to know:

    **Region / Zone** = `us-west2-a`

    **Project** = `baaahsorg-prod`
3. Run `gcloud auth login` which will open your default browser. Be sure to use the same email when logging in to google that was granted permissions 

At this point you should be able to run `gcloud` and `gsutil` commands at the command line. Follow the google docs to debug issues. Depending on what you're doing there may be other necessary environment tweaks. If this documentation is missing stuff, please update it.

Making it this far gets you the reward of being able to run the `devops/rsync_static.sh` script which will rsync from the `/static` folder within the repo hierarchy up to the root of https://static.baaahs.org

The `/static` folder is in `.gitignore` so you can have big stuff in there, or it can be symlinked out as necessary and rsync should do it's magic. Note that the command specifically does not use the `-d` option, which is the full sync where it would delete files on the remote drive that you don't already have locally. You probably don't have everything that others have uploaded, so this seems safest.

***TODO (maybe)*** - Someone might someday want to write a similar script to download all the stuff from the server. 

***TODO*** - The local `/static` should be served by the same local web server when you do a `yarn run` This isn't strictly important because if you have internet you can just refer to the files in the cloud, but maybe it would be handy for something.


-------


## How The BAAAHS Web Presence Works

Since we are us, our web presence is both hand-crafted and uses all the latest big boy tools.

There are 4 websites under the `baaahs.org` domain.

https://www.baaahs.org
: Also referred to as ***prod*** or ***production***, this is the real deal main website. Maps to the `deploy-prod` branch,

https://static.baaahs.org
: Hosts large files. Conceptually this is part of the production infrastructure. 

https://staging.baaahs.org
: Things that are about to be production. From the `deploy-staging` branch.

https://dev.baaahs.org
: Latest work in progress stuff. Is broken. On purpose. That's how things get made. From `deploy-dev` 

What about `main`? Well, you can think of one more environment named ***local*** which refers to running the website (and possibly services) on your local machine. If the local code you are running needs a backend you don't want to host locally, it should probably use the development backend. We are starting with a static site though so this concern will be addressed as we come to it.

When commits are made on the deployment branches a github action is kicked off which will build the site from source and presuming things go well will then push the build artifacts into google cloud storage buckets that map one to one with the deployment branches. There is a fourth bucket for the static files.

While three Terraform Cloud workspaces got created in the exploration of how to set things up correctly, it has shaken out that we are only using the `prod` workspace. The driving factor was that to use a custom domain name in GCP you have to do it right and terminate TLS at a load balancer. The load balancer can then only be backended by resources in the same GCP project. Load balancers cost money, so we don't want unnecessary extra ones laying around just because. Thus, one load balancer, one GCP project, multiple buckets for the github build actions to push artifacts into.

The `staging` and `dev` terraform cloud workspaces and corresponding GCP projects are still hanging out simply because it was a bit of a hassle to set them up to begin with, and they're there, so if we change our mind in the future it is probably easier to have these things functional. You may note that the `main.tf` files for these dormant infrastructures are null. So no costs are happening.

