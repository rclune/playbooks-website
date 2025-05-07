---
layout: section
title: What is a Benchmark?
weight: 1
sidebar:
  order: 1
---
Benchmarking is the process of measuring the performance of a product or process against a standard or set of standards. In this context, we mostly think about scientific software in its performance in both technical and scientific context. 

### Datasets vs. protocols:

* “Benchmarks” can refer to a dataset, i.e. a benchmark set which is a defined, curated input to test a method and/or its implementation.  
* “Benchmarks” can also refer to a protocol, i.e. a benchmarking protocol which is a defined and optimized protocol by which different datasets can be tested for variety, coverage, and “quality” by whatever defined metric.

### Types of benchmarks

* **Computing performance benchmarks**  
  Evaluate the speed, efficiency, and memory usage of your software.  
  *Example*: How long does a molecular dynamics simulation take to complete on different machines or under different parallelization strategies?

* **Scientific benchmarks**  
  Assess the scientific accuracy or validity of the method, typically by comparing predicted results to known ground truth.  
  *Example*: In protein structure prediction, compare model RMSD values to experimentally determined structures.  
    
* **Usability benchmarks**  
  Determine how easy the software is to install, configure, use, and understand, including quality of documentation.  
  *Example*: Measure installation success rate across different systems, or track time-to-first-result for new users.  
    
* **Portability benchmarks**  
  Test how well the software runs across different hardware and operating systems (e.g., Linux vs. MacOS, CPU vs. GPU).  
  *Example*: Run the same task on an HPC cluster, a local workstation, and a cloud environment to verify consistent results.

**Considerations**: Think about which aspect of your software you want to improve—and what the main bottleneck is. A bottleneck refers to the most limiting factor that prevents your software from achieving better performance, wider adoption, or scientific credibility. It could be:

* **Technical**, such as long runtimes, excessive memory use, or system incompatibility.  
* **Scientific**, such as low prediction accuracy or failure to generalize to new data.  
* **User-facing**, such as complex setup steps, missing documentation, or poor UX.  
* **Maintenance-related**, such as difficulty in debugging or integrating with CI pipelines.

Identifying the bottleneck helps you choose which benchmark(s) to prioritize.

### How does benchmarking differ from testing? 

**Different types of tests:**  
High-quality scientific benchmarks have several foundational requirements that need to be fulfilled first: (1) Unit tests need to exist and pass and (2) integration tests need to exist and pass, before scientific accuracy can be evaluated. 

* **Unit tests** are software tests that test a tiny unit of code. For example, an *addition* function that adds two numbers to create a sum needs to be tested to produce accurate results, with special attention paid to testing various edge cases like negative numbers or zero. Unit tests need to be implemented and they need to pass (testing for code correctness) for protocols, i.e. ensuring correctness of a method.   
* **Integration tests** are a type of software test that verifies how different components or modules of an application work together. While unit tests focus on individual pieces of code, integration tests examine interactions between those pieces, such as how functions, classes, or services communicate and pass data to each other. The goal of integration testing is to ensure that combined components function correctly and to identify issues that might arise when they interact. These tests are especially valuable in detecting issues like interface mismatches, incorrect data handling, and unexpected behaviors across modules. Integration tests often occur after unit testing, providing a bridge that helps verify that the pieces of an application fit together correctly. Integration tests run a single protocol on a single input to produce a single output, f.ex. Run protein-protein docking on a specific example to produce a single output model.  
* **Scientific benchmarks** refer to both the benchmark datasets as well as protocol runs, meaning they can test (or verify the scientific accuracy of) a dataset using different methods or a method on different datasets. Scientific benchmarks are run on an entire, curated benchmark set to produce a scientific result. F.ex. when running de novo protein structure prediction on ‘these specific’ 100 proteins, 93% will result in a model better than 3 Angstrom RMSD to the crystal structure. Because scientific benchmarks are run on a whole dataset, they are computationally very expensive. With the definition of metrics for pass or failure, one can track how different software versions perform on a defined benchmark set. F.ex. in the de novo structure prediction example with the baseline performance above, if on a new version of the software only 90% of the protein models will result in a model RMSD better than 3 Angstrom, the new software version would perform worse. 

**CI vs Benchmarking:**  
**Continuous Integration** (CI) is a software development practice where developers frequently merge code changes into a shared repository, often multiple times a day. Each integration triggers an automated process that builds and tests the code, providing immediate feedback on issues. This approach encourages small, incremental changes, reducing the risk of integration problems and improving overall code quality. Common CI tools include Jenkins, GitHub Actions, and GitLab CI.

**Benchmarking** is the process of evaluating the performance, efficiency, or quality of software or systems by running standardized tests or comparisons. It focuses on performance metrics such as execution time, memory usage, throughput, and scalability. Benchmarking results provide insights into how a system performs under specific conditions, enabling developers to identify bottlenecks, compare against industry standards, and guide optimization efforts.

| Aspect | Continuous Integration | Benchmarking |
| :---- | :---- | :---- |
| **Purpose** | Code integration & testing | Performance evaluation |
| **When Used** | During development cycles | After development or updates |
| **Focus** | Code correctness & stability | System performance, accuracy & efficiency |
| **Automation Level** | Fully automated (builds & tests) | Semi-automated or manual, depending on the setup |
| **Outcome** | Working builds, reduced bugs | Performance reports & optimization insights |

### Public and private benchmarks

**Public benchmarks** include datasets and protocols so that any user can either apply their own method to the benchmark dataset or use their own dataset in the benchmark protocol. 

Advantages: 

* **Transparent evaluation:** Anyone can inspect and verify how methods perform, increasing scientific trust and accountability.

* **Community comparability:** Common benchmarks provide a shared reference point for comparing tools and methods across groups.

* **Reusability:** Public datasets and protocols can be reused in new studies, saving time and enabling cumulative progress.

* **Standardization driver:** Widely adopted benchmarks help align expectations for performance, usability, and documentation.

* **Familiarity accelerates adoption:** Well-known benchmarks reduce onboarding time for new users and make it easier to demonstrate results to others.

Disadvantages: 

* **Overfitting risk:** Methods may be tuned to perform well on specific benchmarks without generalizing to broader use cases.

* **Limited scope:** Many public benchmarks cover narrow problem types or datasets, which can misrepresent a method’s overall performance.

* **False sense of rigor:** A method that performs well on a public benchmark may still have poor scientific accuracy or robustness elsewhere, especially if the benchmark is outdated or poorly designed.

* **Maintenance burden:** Public benchmarks require ongoing upkeep—documentation updates, data integrity checks, and tool compatibility—which is often neglected.

* **Usability challenges:** Despite being public, many benchmarks are hard to access, poorly documented, or require specialized tools, limiting true reusability.

**Private benchmarks** Private benchmarks evaluate performance in cases where either the method or the dataset (or both) are not publicly available. For example:

* A **public tool** tested on a **private/proprietary dataset**  
* A **private tool** tested on a **public dataset**

Advantages:

* **Access to otherwise unavailable data:** Allows evaluation using proprietary or sensitive datasets (e.g., clinical or industrial data) that are more representative of real-world use cases.

* **Tool selection support:** Performance results—if shared—can guide users in selecting appropriate tools, even if full benchmarking details are not public.

* **Facilitates industry participation:** Enables companies to evaluate tools internally without exposing proprietary methods, data, or infrastructure.

* **Encourages benchmarking where openness isn’t possible:** Even partial results or summary statistics can be better than no benchmarking at all.

Disadvantages:

* **Lack of transparency:** Users cannot verify the benchmark inputs, processes, or metrics, which limits trust.

* **Non-reproducible results:** Without access to the dataset or method, others cannot repeat or validate the results.

* **Limited generalizability:** Results may be specific to the private dataset or tool and not representative of broader performance.

* **Minimal community benefit:** Other researchers can’t build on or reuse the benchmark, reducing its long-term impact.
