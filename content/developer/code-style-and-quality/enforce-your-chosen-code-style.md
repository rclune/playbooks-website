---
layout: practice
weight: 2
title: Enforce your chosen code style
what: >
  Use tools to ensure that your code matches the style you wish to maintain
why: >
  Eases the process of developers writing code by ensuring that all developers use the same style
when: Early Development
importance: High
implementations:
  - desc: Format in CI
    advantages:
      - Provides a repeatable environment to ensure formatting/style
      - Has a lot of configuration options for different style preferences
      - Independent of version control forge (ie GitHub, GitLab, etc.)
    disadvantages:
      - May hold up contributions in Pull Requests due to maintainers needing to review style
  - desc: Formatting pre-commit hook
    advantages:
      - Runs on the developer machine to ensure that commits are formatted correctly before being committed
      - Ensures that only formatted commits get checked into version control
    disadvantages:
      - Runs on every commit which can be detrimental to enabling contribution
      - Higher learning curve for new developers
  - desc: Pep8speaks
    advantages:
      - Provides a very succinct and clear description of style/linting changes needed on a PR
    disadvantages:
      - Requires greater setup in GitHub to use
      - Only works on GitHub
  - desc: Ruff
    advantages:
      - Very fast and provides lots of linting options
      - Highly configurable to match many different style options
      - Provides a VSCode extension for developers
      - Adopted by the NumPy project to help prevent breaking changes due to deprecations
  - desc: Black
    advantages:
      - The standard in linting/formatting for Python projects
      - Provides a GitHub Action for linting in CI
see_also:
  - "[pep8speaks](https://github.com/pep8speaks-org/pep8speaks)"
  - "[Ruff VSCode extension](https://marketplace.visualstudio.com/items?itemName=charliermarsh.ruff)"
---
