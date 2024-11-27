---
title: Comparison of different options for communication channels
layout: comparison
weight: 100

options:
  - name: GitHub Issues
    advantages:
      - Natural for development based on GitHub
    disadvantages:
      - Using GitHub Issues for everything means that your issues are cluttered, and typically then either requires active triage/labeling of issues to distinguish different types of communication.
      - Requires registration
    bestfor:
      - Bug reports
      - Feature requests
  - name: Discourse forum
    advantages: []
    disadvantages: []
    bestfor:
      - Usage questions
      - Feature requests
      - Development help
  - name: Slack
    advantages:
      - Natural for a mixture of synchronous and asynchronous communication
      - Widely used, especially by developers
    disadvantages:
      - Not publically indexed (won’t show up in web search)
    bestfor:
      - Development help
  - name: GitHub Discussions
    advantages:
      - Part of GitHub, so natural for development based on GitHub
    disadvantages:
    bestfor:
      - Usage questions
      - Feature requests
      - Development help
  - name: Email list
    advantages:
      - Ubiquitous
    disadvantages:
      - Typically requires registration to ask a question, which is a barrier for users who want to ask a question but not continue to receive unrelated emails
    bestfor:
      - Usage questions
      - Development help
  - name: StackExchange (mattermodeling)
    advantages:
      - Questions that are not actually about your software, but about the ecosystem around your software (e.g., Python-related questions for a Python-based library) or about the scientific subject (e.g., “what is a force field”) might be answered by other experts.
      - Easily searchable and ranks highly in general search engines.
      - No maintenance burden.
    disadvantages:
      - Requires users to have a StackExchange (StackOverflow) account to ask questions.
      - Requires adding a tag for your software project (the MatterModeling SE team has been helpful with this before)
    bestfor:
      - Usage questions
---

Many of the potential communications channels are good options for multiple
types of communications. Many projects begin by having all communications come
through a single channel (frequently GitHub Issues), and then divide them into
multiple channels as the project grows.

As a general rule, we want all of these to be something that is publicly
readable without login.

