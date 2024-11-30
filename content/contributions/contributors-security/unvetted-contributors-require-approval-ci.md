---
layout: practice
weight: 3
title: Unvetted contributors should require approval to run CI
what: >
  Until a contributor is vetted, their contributions should require manual
  approval before CI runs.
why: >
  If contributors can automatically run CI, malicious actors can use a trivial
  pull request (e.g., typo fixes) to gain access to run CI, and then replace
  the actual code with something that abuses the CI runner (e.g.,
  cryptomining).
when: From the beginning
recommendation: >
  Select “Require approval for all outside contributors” (under Settings →
  Actions → General → Fork pull request workflows from outside collaborators)
see_also:
  - "[GitHub docs on approving workflow runs](https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-workflow-runs/approving-workflow-runs-from-public-forks#approving-workflow-runs-on-a-pull-request-from-a-public-fork)"
---
