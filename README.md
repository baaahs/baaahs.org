# baaahs.org website

This repository contains the source for the baaahs.org website. The current iteration of the website is built on a React template called theFront and the README from that template has been moved to the `doc` directory.

## Quick start for local development

- Install dependencies: `yarn install`
- Start the server: `yarn run start`


## Infrastructure / DevOps

The deployment pipeline is based on commits to this repo as documented in the `devops` folder. 

As we are a largely trusting group, if you have commit access to this repo, you can, by committing to the deployment branches, directly cause changes to both "what is on the website" as well as the infrastructure the website is running on - including deleting everything. Please be careful.

## Routing

The way a React website works is that the front-end code expects that `/` and `/someRoute/` will actually return the same same `index.html` file. React wasn't really mean to be the entire website, and all client side UI trickery based on the URL was layered on later.

After much soul-searching and gnashing of teeth, it seems like our best option is to name `index.html` as both the default document and the 404 document for our static buckets. This seems to work more or less okay since the user isn't all that aware of whether the server returned a 404 or a 200 status code along with the `index.html` content when they hit `/someRoute/`. It screws with effective caching of course and is philosophically inappropriate, but this is the world we live in these days.

More detail in the devops directory and the terraform configuration for prod.

## Automatic Image Optimization

Images hosted from the `static.baaahs.org` can now be automagically optimized on the fly. All you have to do is prepend the path element `/Z/` at the beginning of the path to get the magic version of the image. For example:

   https://static.baaahs.org/gladbox_hanging.png    21.4 MB
   https://static.baaahs.org/Z/gladbox_hanging.png   2.0 MB (and it is converted to AVIF or WEBP)

Note that this magic only happens when using the actual `static.baaahs.org` hostname. There are currently some images that are being referenced using the `storage.googleapis.com` hostname directly, and that is incorrect. You will not get magic via that URL.

More detail can be found in the `devops/prop/imgproxy.tf` file and eventually in the `devops/README.md` file as well.


