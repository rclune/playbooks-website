---
layout: section
title: Challenges
weight: 3
---
**Time** \- Implementing high-quality benchmarks typically requires a high time investment. The goal here is to minimize the time while establishing high-quality benchmarks

**No one wants to do it** \- Implementing benchmarks doesn’t provide satisfying results. It doesn’t result in new scientific insights, it is difficult to publish, and academic incentives are often misaligned with the establishment of scientific benchmarks

**A very high bar** \- Establishing scientific benchmarks requires a high bar of rigor and precision to ensure that the methods and metrics used are robust, reproducible, and reflect the highest standards of accuracy and performance in the field

**ROI is very delayed** \- Since the idea of scientific benchmarks is to catch changes in scientific results due to changes to the codebase, the apparent value of benchmarks can be very delayed and often months or even years after implementation.

**High computing requirements** \- Scientific benchmarks require a lot of computing power, especially when run automatically and continuously

**Need to test the “right” things \-** (Can’t see what you don’t test for) \- Changes to the codebase might result in changes to the scientific output, but if you don’t test for it, you won’t be able to see them. Such changes are not covered by the standard framework of unit tests and integration tests.

**Community buy-in and agreement** \- Benchmarking in a community setting often faces challenges in achieving consensus and buy-in, as diverse stakeholders may have differing priorities, methodologies, or goals for measuring success. Achieving alignment on standards requires balancing technical rigor with inclusivity, ensuring that benchmarks are widely accepted while still accurately reflecting the community's objectives.

**Example**: In one case we implemented a new score function that performed well on several benchmark sets. We adopted the new score function only to realize after the fact that it wasn’t tested on a critical benchmark set for which performance was bad. Continuous and automated benchmarking would have allowed us to catch and more easily remedy this error before it occurred. 
