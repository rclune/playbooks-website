---
layout: section
title: Implementations
weight: 6
sidebar:
  order: 6
---

* Decide which route to go: either implementing a manual benchmark or whether to spend the effort to implement a benchmarking framework which makes implementing multiple benchmarks much easier   
* Decide who is on the team  
  * For industry benchmarks, identify which requirements each party has  
  * When implementing a framework, the core team should be 2-4 people who work on the design, implementation and documentation of the benchmarking framework; these folks will drive the whole project forward

### Single benchmarks

* Advantages:   
  * Easier and faster to set up  
  * Can come up with your own metrics and implementations, is less restricted by external constraints and requirements  
* Disadvantages:  
  * Have to manually rerun them which ultimately leads to them not being run because people get busy  
  * Running them manually is often a burden because it’s thankless busywork that is not very satisfying  
* Benchmark dataset varieties  
  * Metrics  
  * Toy examples  
  * Real-world examples  
  * Experimental measurements  
  * Simulated datasets  
* Generalizability requirement for benchmark protocols, methods or applications:  
  * the more specific a method is, the less useful and useable across different modalities; in creating benchmark sets for highly specific methods you have to overcome the challenge of sparse or insufficient data  
  * The more general a method is, the more useful it is; benchmarking a general method requires a more diverse and larger dataset but often isn’t as limited by data availability

**Implementation quality matters:** The usefulness of single benchmarks is often influenced by who implements the method. A small or inexperienced team might produce a scientifically sound method that benchmarks poorly due to usability or setup issues. Conversely, a polished but scientifically weak tool might appear to perform well. When interpreting single-benchmark results, it's important to consider both the *scientific validity* of the method and the *quality of its implementation*—especially when benchmarks are run manually and lack broader context.

### Benchmarking frameworks

* Advantages:  
  * Once the framework is set up and set up well, implementation is quick and easy  
  * Automated rerunning of benchmarks  
  * Can run many different benchmarks at once  
  * No confusion about metrics, setup and documentation  
* Disadvantages:  
  * Takes more upfront effort and time to set up the automated testing framework, metrics, etc.   
* Recommendation: Take some time to design and implement a general framework that can run scientific benchmarks automatically and continuously and covers various programming languages.   
  * Resource: [https://doi.org/10.1038/s41467-021-27222-7](https://doi.org/10.1038/s41467-021-27222-7)

* Determine goals and requirements for the benchmarks \- recommendations:  
  * **Simplicity**: a simple setup facilitates broad adoption and support from the community  
  * **Generalization**: new tests should support multiple interfaces or projects and languages  
    * Example: command line, RosettaScripts, PyRosetta  
  * **Automation**: automatically running tests requires fewer human resources (people get busy)  
  * **Documentation**: anyone should quickly and easily add new benchmarks without having to ask someone \- the quality of the documentation should be high enough to enable self-directed learning and implementation  
  * **Distribution**: the existence of the framework, the framework, and documentation should be widely distributed to limit people re-inventing the wheel; distribution beyond publication should be sought and the community should be reminded periodically  
  * **Maintenance**: test failures and maintenance should be handled by a defined procedure that also involves the broader community, not just a single person   
* Design framework  
  * Recommendation: the following framework has been shown to be useful in fulfilling the above goals and over 40 scientific benchmarks were implemented based on that (Fig 1 in REF 7\)

![image](/images/benchmarking-framework.png)

* Implement framework  
  * Choose a widely used language, setup, and software in your field  
    * It is strongly encouraged to integrate it with automated CI testing  
  * Documentation:  
    * Documentation of the framework: should be so self-explanatory that anyone should be able to add a benchmark to the framework without much input  
    * Documentation of specific benchmarks: using a template of questions or headings ensures that the documentation across benchmarks is consistent. The template discourages writing short, insufficient, free-form documentation, and instead encourages the addition of important details and significantly lowers the barrier for writing extensive documentation. The questionnaire-style readme template saves time to locate necessary details to repair broken tests.   
* Test and optimize framework   
  * Add a couple of known benchmarks to framework for beta-testing of the framework  
* Create templates and documentation for adding benchmarks to the framework  
  * Make it as easy as possible for others to add benchmarks to the framework. This includes proper code commenting, a template directory of input / run / output files, an example directory  
  * Documentation for the framework should exist and be self-explanatory  
  * Provide templates for how “users” should write documentation  
  * Files that need to be adjusted by the “user” or implementer of specific benchmarks should include prominently visible “EDIT HERE \>\>\>” text   
* Let others add benchmarks to the framework based on your documentation alone and no other help\! \- this tests the documentation of the framework\!  
  * Iterate on the framework, documentation, and template directories and files based on the feedback provided

