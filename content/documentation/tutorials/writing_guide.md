---
title: Writing a Tutorial
layout: section
weight: 3
---
## Thinking About the Audience
The audience for tutorials, especially the Basic Use Case Tutorial, is a user who is new to your tool. However, what other knowledge can you assume they have? 
- How familiar are they with your scientific field?
- Do they know particular programming or scripting languages?
- Have they used related tools, such as visualization or analysis software?
Clarifying what you assume your audience knows will help you write tutorials that users can actually follow. A great way to test this is to have someone who matches your target user profile run through a draft of your tutorial and note where they get stuck or confused.

Your understanding of the audience also shapes what counts as **jargon**.
If your expected user is working on their PH.D. in physical chemistry, you likely won't need to explain what Schrödinger's equation is, but they might not be familiar with software development terms you use every day. Try to review your documentation from your user’s perspective, and when possible, have someone from your intended audience read it. Their feedback is one of the best ways to catch unclear explanations or unexplained jargon.

## Keep It Brief

While clear explanations are essential, tutorials should stay focused and concise. If you find yourself needing several paragraphs to explain a single step, consider these options:
- Move the detailed explanation to another documentation page and link to it from the tutorial.
- Link to existing external documentation if it already explains the step, there is no need to rewrite a piece of documentation if it already exists.
This approach lets users dive deeper when they want more context while allowing others to continue through the tutorial smoothly.

Remember that tutorials are meant to demonstrate the “how,” not the “why.” Avoid long theoretical or conceptual discussions, these can go in dedicated documentation pages if necessary. Tutorials should prioritize hands-on learning and clear, actionable steps.

## Choosing a Tutorial Topic
### Basic Use Case Tutorial
When planning your Basic Use Case Tutorial, focus on the features every user will interact with, no matter their experience level. Consider these guiding questions:
- Which features are essential for a new user to get started? Use these to structure your tutorial outline.
- Do you have a test or workflow that verifies the basic functionality of your tool? This can serve as a natural example for the introductory tutorial.
- You can include multiple systems or examples if needed to demonstrate core functionality.
- Stuck on writing? Try screen recording yourself completing the example while narrating your actions. The transcript can serve as your first draft.
    - Alternatively, you can take notes instead of recording—the key is capturing the steps clearly in your own words.

### Additional Tutorials
Additional tutorials are an opportunity to explore common use cases beyond the basics:
- Are there workflows or scenarios not covered in the introductory tutorial? These are strong candidates for additional tutorials.
- Existing examples or how-to guides can be expanded with explanations, organization, and context to transform them into full tutorials.
- If users frequently ask how to accomplish something—even when examples exist—creating a dedicated tutorial can provide clearer guidance and save repeated support efforts.

## Testing Your Tutorial
Once you’ve written your tutorial, especially when you think it’s finished, run through the entire process yourself from start to finish. Then, have someone else do the same, ideally someone who matches your intended user profile.

Testing your tutorial this way helps you catch missing steps, unclear instructions, or differences in user environments that you might not notice on your own. A fresh perspective from someone similar to your target audience often reveals gaps that the author naturally overlooks.

# Expanded Template
The rest of the sections are titled to match what you will find in the templates in the companion GitHub repository. 
You will actually find two templates in the repository, one is a Python notebook and one is a Markdown template. 
The Python notebook is great for tutorials where users will largely be using a tool's API while the Markdown template is more versatile. 

## Title
The title should give users a good idea of what they will learn and/or create by going through the tutorial.
> Writing Tips: 
>    - If you’re having trouble coming up with a good title, think about what you would say if someone asked you what your tutorial was about? Your response is likely a good starting point. 
>    - Using AI tools can also help turn a concept into a descriptive title. 

## Table of Contents
(Optional) A table of contents is a nice way for your users to see what’s in the tutorial and allows them to go to specific sections if they are using the tutorial as a reference for specific functionalities showcased. 

## Introduction
This section will give an overview of what will be covered in the tutorial. This includes learning objectives and any outputs that the user will have created by the end of the tutorial. Background on the system being used in the tutorial or some tool-specific jargon definitions can go here as well. 
> Writing Tips: 
> - Expand on your title: think about how you would convince a user that this tutorial is worth their time. For example, will it step them through how to create a specific output they need for their project? 

## Input and Output Files
If your tutorial does not need any external input files or generates any output files, skip this section.

**Why give output files?** If the tutorial does not work for some reason or the user wants to check to make sure they followed the instructions correctly, they can download the example output files to see the expected behavior of your tool. 

The input and output files should be easily accessible and well organized. Make sure that their names match what is in the tutorial. In the tutorial, make sure the instructions given will not cause the user to overwrite the example output files. 

## Prerequisites
What are you assuming the user is starting with? Do they need to have specific tools installed or environments activated? Do they need to have some knowledge of a programming or scripting language? 

Instead of rewriting documentation for other tools, link out to their documentation resources whenever possible. 

> Writing Tips: 
> - The best way to check for prerequisites is to have someone who fits the profile of your intended user test the tutorial and make note of anything extra they had to install or set up before they could follow any of the tutorial steps.
> - Make a list of all the places something external to your tool is used.

## Setup
For notebooks, this is where any code needed to get the notebook working correctly can go. (See the ‘Setup for Google Colab’ section in the [OpenFE Showcase notebook](https://colab.research.google.com/github/OpenFreeEnergy/ExampleNotebooks/blob/main/showcase/openfe_showcase.ipynb#scrollTo=AUgaKFN7eCt5) for an example.)

For tutorials meant to be run on local machines, this is where instructions on making directories, accessing the input files, etc. can go. 

## Step 1: ...
Replace the title of this section with a short description of what is covered within. 

Break down your tutorial into manageable sections. Feel free to add subsections when necessary.

> Writing Tips: 
> - Does your tutorial generate different outputs? It might make sense to end a section when a new output has been generated.
> - If the tutorial shows off disparate pieces of your tool, it might make sense to make subsections for each of these pieces.

## Glossary
Your tutorial will likely have some tool-specific jargon in it. Emphasize these terms and then define them in the text **and** in this section. 

> Writing Tips:  
> - Once again, having a potential user test out your tutorial and take notes on what they find confusing is the best way to figure out what terms need to be defined
> - Go back to your brainstorming about the audience, what jargon do you think they would be unfamiliar with?

## Resources and References
What did you use to create this tutorial?

> Writing Tips:
> - Take note of any papers, websites, and/or other tutorials you looked at while trying to generate this one. 






