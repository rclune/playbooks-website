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
themes:
  - Live the contributor experience
---

There are several differences in how GitHub (and other forges) treat [pull
requests that come from forks](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) vs. [pull requests that come from branches in the
main repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request). These differences are due to security concerns, and you
certainly want them to be in place for pull requests from potentially malicious
sources.

However, these can also cause problems for contributions from well-meaning
external contributors. For example, [GitHub Actions](https://github.com/features/actions) workflows will run within a
fork (though not successfully if [secrets](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions) are required.) If core devs are not
working from forks, they may not be aware that this is an annoyance to external
contributors. By working from forks, it will annoy the core devs as well, and
they'll add the necessary if-statement to prevent the workflow from running in
a fork.

In some cases, it is essential that PRs use repository secrets. PRs from forks
cannot use secrets. In this situation, it is reasonable to have core developers
work off of branches of the main repo.

Some developers have also expressed concern that the workflow for a different
user checking out and continuing a PR is somewhat more complicated when the PR
comes from a fork. However, this obstacle is easily surmountable.
