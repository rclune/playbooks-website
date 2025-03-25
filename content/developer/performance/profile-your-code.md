---
layout: practice
weight: 2
title: Profile your code
what: >
  The process of benchmarking the runtime performance of your code.
why: >
  This helps to find slow areas of your code and gives you a visual way to determine what is taking a lot of time or resources to run.
when: Long term
importance: Medium
implementations:
  - desc: py-spy
  - desc: cProfile
  - desc: flameprof
  - desc: flamegraph
  - desc: perftester
  - desc: timeit
recommendation: py-spy
see_also:
  - "[Python profiling documentation](https://docs.python.org/3/library/profile.html)"
  - "[py-spy GitHub repository](https://github.com/benfred/py-spy)"
---

Profiling helps you identify which parts of your code consume the most time or resources. In scientific software, optimizing these hotspots can dramatically improve overall performance.

Profiling tools provide insights like:
- Which functions take the most time
- How many times each function is called
- The call hierarchies that consume the most resources

For Python scientific code, statistical profilers like py-spy are particularly useful as they can profile code with minimal overhead. They sample your program's state at regular intervals, giving you a representative view of where time is spent without significantly slowing execution.

When profiling scientific code, pay special attention to:
- Numeric computation loops
- File I/O operations
- Data preprocessing steps
- Visualization generation