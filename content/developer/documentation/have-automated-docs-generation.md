---
layout: practice
weight: 1
title: Have automated docs generation based on code
what: >
  Documentation should be generated from the comments in your code
why: >
  Having automated documentation ensures developers have up-to-date information about how code functions.
when: Pre Release
importance: High
implementations:
  - desc: Sphinx
    advantages:
      - Provides a way to generate code documentation and other non-code based documentation
      - Works well in mixed-language codebases
    disadvantages:
      - Requires the use of tools like napoleon to handle standard formats like numpy or Google
  - desc: pdoc
    advantages:
      - Simple to use, does not require extensions
    disadvantages: 
      - Very opinionated on how docs should
      - Only extracts public API docs by default
  - desc: Doxygen
    advantages:
      - Provides a way to generate documentation for multiple languages
recommendation: Sphinx
see_also:
  - "[Scientific Python Docs Tutorial](https://learn.scientific-python.org/development/tutorials/docs/)"
  - "[Scientific Python Module Tutorial](https://learn.scientific-python.org/development/tutorials/module/)"
  - "[Sphinx Quick Start Guide](https://www.sphinx-doc.org/en/master/usage/quickstart.html)"
  - "[pdoc Documentation](https://pdoc3.github.io/pdoc/)"
  - "[Better Scientific Software Documentation Resources](https://bssw.io/items?topic=documentation)"
---
