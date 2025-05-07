---
title: Benchmarking Playbook
layout: playbook
weight: 3
---
## TL;DR

Use the checklists at the end of this playbook to quickly guide the setup of individual benchmarks, benchmarking frameworks, and community engagement best practices.

## Introduction

This playbook is designed to help projects improve the accuracy and reliability of their scientific results through effective benchmarking practices. The target audience is the technical and scientific leadership of scientific software and research projects at OMSF or other open science projects. The recommendations in this guide are particularly oriented toward large projects with many loosely affiliated scientific contributors, such as trainees in academic research groups. This document will cover key aspects of managing and implementing benchmarking efforts, with a focus on ensuring that tools and methods meet high-quality standards.

**What is benchmarking?** 

Benchmarking is the process of systematically comparing the performance, accuracy, and efficiency of scientific methods, software, or tools against established standards or references, ideally in an automated way. It plays a crucial role in validating scientific results by providing objective metrics for evaluating how well different approaches perform under specific conditions.

**Why is benchmarking important?** 

* **Can’t see what you don’t test for** \- Changes to the codebase might result in changes to the scientific output, but if you don’t test for it, you won’t be able to see them. Such changes are not covered by the standard framework of unit tests and integration tests.

* Effective benchmarking ensures that research outputs are trustworthy, reproducible, and competitive within the scientific community. By adopting best practices in benchmarking, projects can identify areas for improvement, enhance collaboration, and maintain credibility. While many of the recommendations will be relevant to internal scientific development practices, this playbook specifically addresses the procedures and strategies for conducting effective benchmarking. The concepts outlined are general and not tied to any particular scientific domain, but some terminology and examples may reference widely used software platforms or benchmarking frameworks.
