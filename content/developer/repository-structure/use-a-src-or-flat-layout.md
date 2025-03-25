---
layout: practice
weight: 2
title: Use a src or flat layout
what: >
  A src layout is a project that uses a src directory to house code whereas a flat layout is where the source files are in the root of the directory
why: >
  The choice of layout impacts how your package is built, tested, and installed
when: Inception
importance: High
see_also:
  - "[`src` layout vs flat layout discussion](https://packaging.python.org/en/latest/discussions/src-layout-vs-flat-layout/)"
---

When organizing your Python package, you need to decide between a src layout or a flat layout:

**Src Layout**: Your package code is housed in a `src/` directory:
```
myproject/
├── src/
│   └── mypackage/
│       ├── __init__.py
│       └── module.py
├── tests/
└── setup.py
```

**Flat Layout**: Your package code is directly in the project root:
```
myproject/
├── mypackage/
│   ├── __init__.py
│   └── module.py
├── tests/
└── setup.py
```

Each has its advantages, but the src layout is often preferred for larger projects as it helps avoid import confusion during development and makes it easier to have a clear separation between installed code and development files.
