---
layout: section
title: Writing How-To Guides/Examples
weight: 2
---

These pieces of documentation can be as simple as putting the command/script in a file that a user can run and adding descriptive comments, like in [RFdiffusion](https://github.com/RosettaCommons/RFdiffusion/tree/main/examples). They can also have more formatting and function more like a short tutorial, where the introduction, setup, glossary, and other elements are removed or abbreviated. [OpenFE’s Cookbook](https://docs.openfree.energy/en/latest/cookbook/index.html) is a good example of this approach.

## How Much To Write? 
Which end of this spectrum you want to be on is highly dependent on
1. The feature you want to showcase
2. How much time you have 
3. What your typical user will find most useful

If the feature can be demonstrated with just a few commands that require little explanation, or has already been explained elsewhere in your documentation, then a quick example is usually sufficient. Similarly, if the feature requires very specific input parameters that would take longer to create as dummy files than to run a real example, providing a runnable example with sufficient explanation is more efficient and useful to your audience.

Time is another consideration. While a fully developed tutorial would be ideal for every feature, tutorials are time-consuming to write and maintain. More experienced users often do not need detailed introductions or glossaries. When deciding how much explanation and structure (headings, images, discrete steps, etc.) to provide, consider the time available. Even a simple, runnable script with a descriptive title and a top-line comment is far better than nothing. If you have the time to add line-by-line comments and details about input files or parameters, your users will greatly appreciate it.

Finally, consider your intended audience. If your tool is highly specialized and assumes expertise in the field, you may not need to explain how to generate input files and can focus on the specifics of running the tool. Conversely, if your users are new to this type of tool or their scientific field, more explanation and links to additional resources may be necessary—even if they’ve already completed the tutorial(s).

## What Should I Use as an Example or Show in a How-To Guide? 
- Integration tests are often good examples because they test specific functionality that you likely want your users to know about.
- As users explore your tool, they may expose gaps in your documentation, use these opportunities to create examples.
- Any feature in your reference documentation that lacks an example or tutorial should have one added.

Once your tool has a sizable user base, you can also solicit examples from users or encourage them to contribute directly to the repository.

## What do I Need to Include? 
- **Input files** Provide any files the user will need to run the example or how-to guide, even if they are dummy files.
- **Output files** Include expected outputs so users can verify their results and troubleshoot issues.
    - If your tool has stochastic (random) elements, provide output files but note where results may differ, or use a fixed `seed` parameter.
- **Setup instructions** Clearly state any assumptions about directory structure or other setup required for the script to run.



