---
layout: section
title: Standards and best practices
weight: 5
sidebar:
  order: 5
---

### Version controlled

A high quality benchmark set is version controlled. The input dataset, the protocol, and the output (i.e. the result from running the protocol on the input) should be version controlled BEFORE the change and AFTER the change to document how any changes to the input or protocol affects the output

### Accessibility

The file formats should be widely known and available through widely used software

### Automated

High quality benchmarks are automatically run on a continuous basis. The implementation of a general benchmarking framework makes that possible.

### Independent

A newly developed method should not just be tested on the benchmark set that it was developed with \- it should be tested in entirely independent test sets that were created with different parameters and workflows, ideally by different people or labs. A method developed from a defined benchmark set will always be biased towards that benchmark set, even if the benchmark set was split into training and testing set\!

### Tested 

High-quality scientific benchmarks have several foundational requirements that need to be fulfilled first: (1) Unit tests need to exist and pass and (2) integration tests need to exist and pass, before scientific accuracy can be evaluated. See section *How does benchmarking differ from testing?*

### Documented

High-quality benchmarks should be thoroughly documented to ensure clarity, reproducibility, and long-term usability. Key elements typically include:

* **Benchmark design:** Outline the testing criteria, datasets used, and conditions under which tests are run.  
* **Metrics and methodology:** Clearly define what is being measured, how it's measured, and how data is collected.  
* **Comparative analysis:** Include side-by-side evaluation of multiple tools under identical conditions, if applicable.  
* **Results interpretation:** Explain how to interpret results within the scientific context (e.g., what a specific score means).  
* **Best practices and tool-specific guidance:** Provide suggestions for improving performance based on common pitfalls, recommended parameter settings, or known limitations.  
* **Reproducibility and open science:** Share data, code, and environment details to allow others to validate or reuse the benchmark.

### Shared

If a benchmark is widely shared and used, that can be a sign of quality, trust, and community validation. However, this might not always be the case.

**Widespread use does not guarantee quality.** A benchmark might gain traction simply because it was published early, is easy to use, or became a de facto standard—even if it lacks rigor, diversity, or proper documentation. In some cases, commonly used benchmarks may be outdated, biased, or poorly maintained, leading to misleading comparisons or overfitting. It’s important to assess the actual design and scope of a benchmark, not just its popularity.
