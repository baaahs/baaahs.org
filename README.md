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

