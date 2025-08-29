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

Developing molecular software requires expert skill in both science and software engineering, and recruiting these double-experts is a fundamental challenge in our field, particularly because they can often command high wages in industry. Developers with these skills are usually graduates of PhD programs in computational chemistry or physics. The archetypal molecular sciences software developer is a recent PhD who found themselves more interested in writing production-quality code than in publishing in Nature. In our experience, it is much less common to find graduates of Computer Science programs who have learned molecular sciences outside the classroom. 

In scientific software development, as in other knowledge work, virtually all management boils down to Human Resource Management. The success of your project depends entirely on the performance of your team. The skills required to do this work come mostly from PhD-level training, so they necessarily come along with independence, creativity, and persistence. Scientific developers need to be given aagency and respect to do their best work, and these depend on factors that have traditionally been relegated to HR. The conventional HR functions of defining and filling positions, setting fair compensation and benefits, promoting "work-life balance," and resolving disputes (especially with managers) are essential to the performance of the team. Get these things right, and your team can't help but succeed. In short, if you take care of your people, then your people will take care of the work.

### Roles and Responsibilities

OMSF projects are typically built by small teams of experts. Each person on the team may have to "wear multiple hats," performing a mix of scientific and engineering tasks. We use two distinct job titles and descriptions ("Software Scientist" and "Research Software Engineer" to help define responsibilities and identify candidates, but in reality, each individual role can be thought of on a sliding scale between Science and Engineering. The exact position of that slider may be set by the particular skills and interests of the person in the role, but it may also shift over time, or even day-to-day, based on the work that needs to be done in the project. 

The basic job descriptions for these two roles can be summarized:
* *Research Software Engineer:* Skilled software engineers who understand the needs of the scientific community, RSEs create new code to solve scientific problems. A burgeoning community of RSEs in Europe are defining the position as a distinct career path, and the US is beginning to catch up.
* *Software Scientist:* The Software Scientist expands the capabilities of existing software, through either experimentation or method development.

OMSF's compensation policy defines a single category of developer ("RSE") at three levels of seniority. Typical qualifications and responsibilities are as follows:
* *RSE:* PhD, Master's +3, or Bachelor's +5. Works under supervision, interacting primarily with immediate team members and supervisor.
* *Senior RSE:* PhD +3 or Master's +6. Works independently, mentors team members, and interacts with the broader community.
* *Technical Lead:* PhD +5 or Master's +8: Takes responsibility across multiple dimensions of the project, supervises team members, interacts directly with project governance, represents the project in public.

Following the division of RSEs into Software Engineers and Software Scientists, some OMSF projects have two Technical Leads:
* *Science Lead:* Supervises Software Scientists. Responsible for designing and conducting any relevant experiments, ensuring scientific accuracy and applicability of code, publishing any scientific papers that come out of the project
* *Infrastructure Lead:* Supervises Research Software Engineers. Responsible for designing software architecture, ensuring performance and stability of the code base, and leading testing and documentation efforts.

### Hiring Strategy

When defining the roles that will make up your project team, it is important to write realistic job descriptions that match real candidates. Accurate, realistic, detailed job description will allow candidates to self-select roles that will best match their own skills and interests. Job descriptions that are too ambitious may select for candidates with over-inflated views of their own abilities. There are no superhero software developers, or if there are, a non-profit budget can't afford them. Selecting a candidate who is both an accomplished scientist and a skilled software engineer likely means choosing someone with poor teamwork or other important weaknesses.

The most important consideration when hiring is not the individual skills being added to the team, but the overall impact on team health. A team member's ability to come to agreement on what problems need to be solved is far more important than their ability to solve the hardest problems. Just as importantly, a highly productive individual contributor who destroys the harmony of the team with a rude or belittling attitude is a net negative to the team's productivity.

