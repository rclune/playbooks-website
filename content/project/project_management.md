---
layout: section
title: Project Management
weight: 3
sidebar:
  order: 3
---

Translating projects’ vision and mission is never easy, and execution paths will depend on many things, including available resources, environment, and even personalities of people involved in the execution.At OMSF, we came to rely on Project Managers to assist with the project execution. The PM takes the vision laid out by project leadership and enacts it. While it may seem that a PM does not need to be an expert in either the scientific field or in software engineering, we found that  having knowledge and skill in the area is immensely helpful. The most important skills for a PM are prioritization and delegation, but putting these skills into practice requires a deep intuition for the nature of the problem being solved. This intuition comes from domain context, as do awareness of the skills and limitations of the other members of the team. The PM must be able to hold onto the vision of the project and keep it in sight of the rest of the team, helping them resist distraction and prevent scope creep. For projects that have to manage lots of ideas and potential solutions, this strict focus is an uphill battle. The PM should also be comfortable thinking in possibilities, to make strategic decisions that consider both the present reality of the project and multiple potential futures.

## Following the roadmap
The [annual roadmap]() serves as the definitive guide to the desires of the governing body and the tactical plan for the project. Following the roadmap means delivering the approved objectives, but in practice it usually means *not* delivering non-approved features. It also means assigning a sequence, or order of completion, to the objectives on the roadmap.

### Delivering subprojects
The annual roadmap should be divided into a set of distinct features or deliverables that can be planned separately and worked on independently. We sometimes call these discrete efforts "subprojects." Dividing the project into subprojects provides a framework for planning work, managing scope, setting priorities, estimating effort, and assigning work. 

#### Tips for Success
* Map out dependencies between subprojects to adjust priority and set sequence. Subprojects that must be completed before other subprojects are called "bottlenecks" or "blockers."
* Set a delivery date for each project based on priority (higher priority things first), dependencies (bottlenecks first), and effort estimate (larger things first).
* Assign a Driver to each subproject based on the skills required, interests and preferences, and balance of workload.
* Also identify which other team members will contribute
* Estimate the length of calendar time required to complete the subproject, considering all other work assigned to the responsible team members
* Schedule work on a Quarterly basis

### Preventing scope creep

In software development, the temptation to add *just one more feature* before the next release is called "scope creep." Scientific software projects are especially vulnerable to scope creep as engineering advances enable scientific discoveries that enable further engineering advances. One of the most important functions of project management is to manage this process and prevent it from grinding progress to a halt. Preventing scope creep requires recognizing it, and recognizing it means defining your scope in advance and evaluating all development decisions against the agreed-upon scope. 

The Driver assigned to a particular subproject is usually tasked with proposing ("scoping") the list of features to be included in the subproject. The project leadership considers the proposed scope in the context of the entire roadmap and the estimated effort required, and approves it with any necessary changes. Any changes to the scope, once the subproject is underway, must also be approved by leadership.

### Defining Scope

There are a few different frameworks for defining scope, from simplest to must complex:
* Minimum Viable Product (MVP): An important concept in Agile software development, the MVP is the smallest set of features or capabilities that can be given to users. In this framework, no additional features are included until required based on user feedback.
* Must-have, nice-to-have, not-in-scope: This is the framework OMSF projects use most commonly to discuss scope. The must-have scope corresponds closely to the MVP, but nice-to-have items are identified in advance and are only included if they don't slow down progress toward the must-have items. In our experience, defining not-in-scope is crucial both to developers, to keep them focused, and to stakeholders, to give them a chance to argue for why their own feature should be included.
* MoSCoW: The MoSCoW framework defines Must have, Should have, Could have, and Won't have. It adds one more level of scope. Some of our projects have attempted to use this scope framework, but have found it less helpful than the three-tier definition.

### Estimating effort

To plan follow the roadmap, the project manager must make some estimate of the amount of effort required to deliver each subproject. All effort estimates are wrong, but some are more useful than others. The two useful techniques that we have used in OMSF projects are
* T-shirt sizes: Most work tasks are defined as Small, Medium, or Large, where the amount of work that these sizes map onto are completely context-dependent (as with T-shirts). If necessary, work items can also be estimated as X-Small or X-Large (as with T-shirts).
* Story points: An arbitrary unit of developer time used to measure how complex a task is. We usually approximate one story point as 30 minutes of developer effort, but it is important not to overestimate the precision of story points. Assigning powers of 2 or Fibbonacci numbers can give a reasonable approximation of the precision of story points.

## Defining and Building a Developer Team
