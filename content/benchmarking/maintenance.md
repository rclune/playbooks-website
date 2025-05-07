---
layout: section
title: Maintenance
weight: 7
sidebar:
  order: 7
---

Different types of failures:

* **Technical Failures**: These involve errors like compiler issues or script failures and usually require minor adjustments by the test author or dedicated engineers.  
* **Stochastic Failures**: These occur due to the inherent randomness in some algorithms and are resolved by rerunning the test or adjusting criteria.  
* **Scientific Failures**: More complex, requiring detailed troubleshooting by designated maintainers and scientific understanding of the problem.

### What to do when benchmarks are expensive to run?

**When benchmarks are expensive to run**, start by identifying the minimal useful test set and protocol that still yield meaningful results. Assess available compute resources, calculate how long each benchmark takes, and schedule them to run continuously, i.e. restart the benchmark when the previous one has finished. For example, if each benchmark takes about a week, schedule them once a week.

**Additional strategies:**

* **Tiered benchmarks:** Divide tests into fast, moderate, and expensive tiers. Run quick sanity checks frequently, and reserve full-scale benchmarks for scheduled intervals.

* **Spot checks:** Instead of running the full benchmark suite, periodically run a representative subset to catch regressions early.

* **Cloud bursts:** Use temporary cloud compute resources for infrequent, high-cost benchmarks without overloading internal infrastructure.

* **Benchmark-on-change:** Trigger expensive benchmarks only when critical scientific or code components are updated.

* **Asynchronous scheduling:** Run long benchmarks during off-hours or on low-priority machines to minimize disruption to active development.

### Recommendations

Based on the compute expense for each benchmark and how much computing resources are available on which nodes, create a schedule on how often which benchmarks should be run. More expensive benchmarks can be run less often than more inexpensive ones. 

Maintain clear documentation to guide troubleshooting and test repair.

Maintaining benchmarks is a collective responsibility \- Create a maintainer hierarchy

* **Observers or test authors** handle immediate repairs.  
* **Lab members or broader community** developers address unresolved issues.  
* **Regular hackathons or workshops** can address widespread or systemic failures.

#### Maintaining upstream packages and environments

**Containerizing**: Containerizing (Dockerizing) can be a good idea for maintaining upstream packages and environments for scientific benchmarks because it ensures reproducibility, isolates dependencies, and simplifies deployment. To maintain scientific benchmarks in compute environments, start by defining a consistent base environment using Docker. Create a Docker file specifying system dependencies, libraries, and scripts needed for the benchmark. Use versioned container images to track updates and ensure reproducibility. Automate the container build and deployment process using CI pipelines, enabling regular validation of benchmarks. Test containers across different platforms to catch environment-specific issues early, and document any changes clearly for long-term maintainability.

Dockerizing comes with limitations like increased storage and memory usage, as well as potential compatibility issues with high-performance computing (HPC) systems. Alternatives include:

1. **Singularity Containers**: Designed for HPC environments, Singularity allows container-based reproducibility while integrating well with cluster schedulers and shared filesystems.  
2. **Virtual Machines (VMs)**: Though more resource-intensive, VMs provide full-system isolation, ensuring maximum compatibility but requiring more maintenance.  
3. **Conda Environments**: Use Conda for managing dependencies in a lightweight way, ideal for scientific computing when Docker is too heavy or not supported on HPC clusters.  
4. **Infrastructure as Code (IaC)**: Tools like Terraform or Ansible automate environment setup and configuration, offering flexibility without requiring containers.

Each approach balances reproducibility, scalability, and system compatibility, so the best choice depends on project goals, compute resources, and technical constraints.

**Logging**: Logging is essential when maintaining upstream packages and environments for scientific benchmarks because it provides traceability, debugging support, and performance monitoring. Here’s how to implement effective logging:

1. **Environment Setup Logs**: Record every step of environment creation, including package installations, version checks, and system configurations. Use tools like Docker build logs, Conda environment export files, or Ansible playbooks for clear tracking.  
2. **Benchmark Execution Logs**: Capture runtime logs detailing benchmark execution, including timestamps, input parameters, system resource usage, and any warnings or errors encountered.  
3. **Dependency Change Logs**: Track updates to upstream packages using version control systems. Maintain a changelog file summarizing updates, reasons for changes, and compatibility adjustments.  
4. **Monitoring and Alerts**: Use monitoring tools like Prometheus or ELK Stack (Elasticsearch, Logstash, Kibana) to collect and visualize performance metrics over time. Set up alerts for unusual behavior or performance regressions.  
5. **Archival and Reproducibility**: Store logs securely in long-term archives, ensuring historical data is accessible for troubleshooting, performance reviews, and reproducibility audits.

Effective logging ensures that even as upstream packages evolve, you can diagnose issues, replicate results, and maintain scientific integrity in benchmarks.
