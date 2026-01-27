---
layout: section
title: Guides for Using Images and Containers
weight: 2
---

Before we get started, images and containers are related, but different, so let's reinforce some definitions:
- An **image** is a snapshot of a file system and configuration needed to run an application and includes information about dependencies, environment variables, etc. 
- A **container** is a running instance of an image and making changes inside the container does not affect the original image.

It is also important to note that Docker and Apptainer (formerly singularity) are slightly different. Docker has features like [DockerHub](https://hub.docker.com/) which make it easy for users to find and use your images, but is much harder to use on HPC clusters than Apptainer assuming the user has root access. There are ways to convert an apptainer `.sif` file into a Docker image and vice versa, but if your tool will predominantly be run on an HPC cluster, we recommend supplying an Apptainer `.sif` file. 

>*Writing Tip:* If you are hosting your image on DockerHub, the information for this section of your Installation Guide(s) can be used for the Overview of your image on DockerHub as well. 

The guide for using your image should include: 
- Links to the repository and external documentation
- 1 or 2 sentences about what the tool is/does
- Any notes about systems that it can/cannot be used on
- Syntax example - how would a user typically use this image
- Where to find the image recipe if available
- *Optional:* How to convert the image from Docker to Apptainer or vice versa

