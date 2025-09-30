---
layout: section
title: Installation guide
weight: 5
---
The README for your project should include the best method(s) for the user to install your tool. Any information about available images (Docker, Apptainer, etc.) can go here as well. 

>*Writing Tip:* In order to keep the README concise, if there are multiple installation options, choose the recommended one(s) and leave the others in the external documentation.

## Prerequisites
List all system and software requirements before installation. These may include:
- Operating systems supported
- Hardware requirements (GPU support, minimum RAM)
- Software requirements
- Programming language version
- Required compilers or interpreters
- Package managers used
- Tools/libraries used
- You can also point to a file (e.g. requirements.txt) that lists any software dependencies

>*Writing Tip:* It is good to provide links here to any external tools/libraries/package managers, etc. so that your users can easily find more information if they have issues installing any dependencies. 

## Installation Methods
Include instructions for how to install. Different options include but are not limited to:
- pip/conda
- From source through cloning repository
- Using docker image
- Precompiled binaries

>*Writing Tip:* Even if you have a Docker image, it’s still good to give installation instructions as developers will most likely want to install your tool locally or generate their own image.
 
>*Writing Tip:* Make sure to test your installation instructions and have someone else on a **different machine** test them as well. It's easy to forget that you already had a dependency installed or set an environment variable. 

## Post-Installation Setup
Is there anything else the user needs to do before running the software? Examples: 
- Do they need to set any environment variables?
- Do they need to activate a virtual environment?
