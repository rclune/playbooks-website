---
layout: section
title: Writing an Installation Guide
weight: 3
---
There is a [Markdown template for the installation guide](https://github.com/omsf/OMSF_docs_template/blob/main/docs/doc_templates/installation_guide_template.md) in the companion GitHub repository.
Here are some notes to help guide the creation of this guide: 

## Prerequisites
This section contains any system and software requirements for the installation of your software. When possible, provide links to installation instructions for any external software required.

If your installation process uses a text, YAML, or TMOL file to install dependencies then you can point the user to that file instead of listing the full set of software requirements here.

Here's a list of what might go in this section: 
- Supported operating systems
- Hardware requirements (e.g. minimum available RAM)
- Dependencies and required versions
- Required compilers or interpreters
- Required or recommended package managers

## Installation via...
If you have multiple sets of installation instructions, create more of these sections and give them descriptive headings. This might occur if your software can be installed multiple ways or if different instructions are needed for different operating systems.

Organize these instructions into discrete steps and use section headings to break up the instructions into pieces if the guide is long. Make sure to use code blocks when applicable. 

## Post-Installation Setup
Is there anything else that needs to be done before a user can get started? 
- Do environment variables need to be set? 
- Does the user need to remember to activate any environments?

## Verify the Installation
What can the user quickly run to ensure that everything was installed correctly? 
You can:
- Show the expected output of a successful installation procedure
- Tell the user to run a simple test or executable
    - Even something as simple as `<tool_name> --help` would work
- Point them to the basic use case shown in the README