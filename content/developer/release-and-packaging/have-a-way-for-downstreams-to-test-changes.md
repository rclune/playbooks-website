---
layout: practice
weight: 7
title: Have a way for downstreams to test changes
what: >
  Provide a testing version to users so they can validate their workflows before major changes are made.
why: >
  This gives power users the ability to test your software before a more general release is made. Reduces bugs for final release.
implementations:
  - desc: Provide betas/release candidates
    advantages:
      - Provides a dedicated testing phase with focused user feedback
      - Creates clear staging between development and production
      - Gives users predictable release cycles
      - Introduces a phase for fleshing out and reviewing documentation
    disadvantages:
      - Introduces more complexity around release process
      - May result in large, disruptive changes rather than incremental ones
  - desc: Always releasable main branch
    advantages:
      - Reduces release complexity
      - Encourages smaller, incremental changes
      - Great for rolling release environments
    disadvantages:
      - May lack dedicated testing periods, instead relying on quality CI
      - Creates potential inconcistencies in documentation
when: Pre-release
importance: Medium
---
This practice focuses on providing downstream users with opportunities to test changes before they're officially released. By implementing either beta/release candidate programs or maintaining an always releasable main branch, you enable users to validate their workflows against upcoming changes. This approach creates a valuable feedback loop where power users and maintainers can identify potential issues early, reducing the likelihood of critical bugs making it to final release. It's particularly important for projects with complex dependencies or when making significant architectural changes that might impact downstream consumers. Implementing a testing strategy strengthens the relationship with your user community by demonstrating transparency and involving them in the quality assurance process.
