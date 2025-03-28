---
layout: practice
weight: 3
title: Benchmark execution time
what: >
  Run tests to see how long it takes your code to run
why: >
  Allows for you to test your tool against other tools to see how fast you run in comparison
when: Long term
importance: Medium
implementations:
  - desc: hyperfine
  - desc: pytest-benchmark
  - desc: Inferno
see_also:
  - "[hyperfine GitHub repository](https://github.com/sharkdp/hyperfine)"
  - "[pytest-benchmark documentation](https://pytest-benchmark.readthedocs.io/en/latest/)"
  - "[Inferno GitHub repository](https://github.com/jonhoo/inferno)"
---

Benchmarking execution time allows you to measure your code's performance objectively, track changes over time, and compare against alternative implementations.

For scientific software, benchmarking is particularly important because:
- It provides quantitative evidence of performance improvements
- It helps detect regressions that might affect research timelines
- It facilitates comparison between different algorithmic approaches

When benchmarking scientific code, use realistic data sizes and representative workloads. Consider creating a suite of benchmarks that cover different aspects of your software, from core algorithms to data loading and preprocessing.

Automated benchmarking can be integrated into your continuous integration pipeline to catch performance regressions before they affect users.