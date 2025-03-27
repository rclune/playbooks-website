---
layout: practice
weight: 3
title: Determine if you will include your tests in the module or not
what: >
  In Python, you can opt to include your tests into your released module or opt to keep them external
why: >
  Choosing whether your tests are internal or external allows for end-users to have the capability to have access to tests on installation. Excluding your tests keeps the package size small.
when: Inception
importance: High
see_also:
  - "[pytest good practices for test layouts](https://docs.pytest.org/en/stable/explanation/goodpractices.html#choosing-a-test-layout)"
---

When structuring your Python package, you need to decide whether tests will be included as part of the installable package or kept separate:

**Tests inside the package**:
```
mypackage/
├── __init__.py
├── module.py
└── tests/
    ├── __init__.py
    └── test_module.py
```

**Tests outside the package**:
```
repository/
├── mypackage/
│   ├── __init__.py
│   └── module.py
└── tests/
    └── test_module.py
```

Including tests in your package makes them available to end-users, which can be helpful for verifying installation or understanding usage. However, it increases the package size and may unnecessarily bloat installations.

External tests keep your package smaller and create a clearer separation between production code and test code, but users won't have direct access to the tests after installation.

