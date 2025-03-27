---
layout: practice
weight: 3
title: Test example code in documentation before release
what: >
  The process of testing code examples that are referenced in your documentation
why: >
  Ensures that the examples in your documentation still work as expected. Helps new users have tested examples.
when: Pre-Release
importance: Medium
implementations:
  - desc: doctest
  - desc: pydoctest
recommendation: doctest
see_also:
  - "[doctest Documentation](https://docs.python.org/3/library/doctest.html)"
  - "[pydoctest on PyPI](https://pypi.org/project/pydoctest/)"
---

Documentation examples are often the first code that users try to run when learning your software. Ensuring these examples work correctly is crucial for a positive first impression and effective onboarding.

For scientific software, where users may be less familiar with programming, working examples are especially important. They demonstrate correct usage, expected inputs and outputs, and can help illustrate scientific concepts.

By setting up automated testing of documentation examples, you can catch issues when:
- Your API changes but examples aren't updated
- Examples rely on dependencies that have changed
- Examples use features that have been deprecated

This practice greatly improves the user experience by preventing the frustration of following documentation that doesn't work.
