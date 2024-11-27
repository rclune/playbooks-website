---
weight: 2
layout: practice
title: Work from forks when possible
what: >
  Instead of working from branches on the main repository, it is better for
  core developers to work from personal forks.
why: >
  Contributors will necessarily need to develop from forks, so using a
  fork-based workflow for the core development team ensures that they have the
  same experience.
when: From the beginning
challenges:
  - >
    In some cases, it is essential that PRs use repository secrets. PRs from
    forks cannot use secrets. In this situation, it is reasonable to have core
    developers work off of branches of the main repo.
  - >
    The workflow for a different user checking out and continuing a PR is
    different in this case.
themes:
  - Live the contributor experience
---
