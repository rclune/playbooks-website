---
layout: section
title: Writing a Contribution Guide
weight: 2
---

## Code Style and Quality
Even if you are just abiding by the style guide for the coding language(s) you are using, for example [PEP8](https://peps.python.org/pep-0008/) for Python, mention it here. Any details you can give about what you expect from contributed code will help reduce the number of iterations a contributor needs to go through before their pull request (PR) is accepted.

If your project uses tools to check for code quality or style, such as a linter or formatter, list them here as well.

If your tool relies on an API interface and uses docstrings to automatically generate documentation, include details about your expected docstring format (e.g., Google, NumPy, or Sphinx).

## Writing Tests
Your codebase likely includes several types of tests stored in different locations. Contributors may need to create or modify tests to ensure that your tool continues to function correctly as new code is added.

In this section describe:
- Where different types of tests are stored
- Whether any tests are automatically run when a PR is opened or merged
- Which tools are used to write and run tests (e.g., pytest, unittest, tox)

The easier you make it to write and run tests, the more likely contributors will do so. Tests are crucial for ensuring that new changes do not break existing functionality, making this one of the most important sections in your guide.

## Creating a Pull Request
If you use a PR template, link to it here. While creating templates is beyond the scope of this Playbook, the GitHub Docs provide an excellent guide: [Creating a pull request template for your repository](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository) in the GitHub Docs. 

Be explicit about which branch contributors should target (e.g., `main`, `develop`, or `staging`). If you use a branching strategy that involves review branches or periodic merges to main, describe that process here.

If you have different instructions for different PR types (e.g., bug fixes vs. new features), consider creating subsections for each.

### Merging Pull Requests
This section should clarify who has merge permissions and how those permissions are granted. Think carefully about how much control you want to retain over your project:
- Should only the original maintainers merge PRs?
- Do you want to empower trusted community members to help manage contributions?

The answers to these questions will determine what you write here. 

There are several merge strategies available:
- Merge Commit: The default on GitHub. Links the histories of both branches and preserves all commits.
- Squash and Merge: Combines all commits from the feature branch into a single commit, simplifying the history.
- Rebase and Merge: Rewrites the history to appear as if the feature branch work was done directly on the target branch.

For a more thorough discussion of these merge types and their pros and cons, see [About merge methods on GitHub](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/about-merge-methods-on-github) in the GitHub docs.

## Creating an Issue
If you use issue templates, describe them here and link to them. To learn how to create templates, see [Configuring issue templates for your repository](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository). 

Issues typically fall into two categories:
- Feature Requests
- Bug Reports

Encourage contributors to use a short tag (e.g., `[Feature]` or `[Bug]`) at the start of their issue title to help triage reports.

### Feature Requests
When requesting a new feature, users should provide enough context for others to understand the motivation and desired outcome. They can include examples from similar projects, pseudocode, or a written explanation of what the feature should achieve.

### Bug Reports
Clearly specify what information contributors should include to help reproduce and diagnose the issue. Depending on your tool, this may include:
- Input and output files
- Screenshots
- Error messages
- System information

Many users will not provide these details unless prompted, so include explicit instructions here.

## Contributing to the Documentation
Provide instructions for how to build the documentation here. This may include needing to install extra dependencies, such as Sphinx.

You should also describe the structure of your documentation, so contributors know whether to append content to an existing section or create a new one.

If your documentation is automatically generated from code (e.g., using docstrings or autodoc extensions), explain this here so contributors understand when code changes will also affect documentation.

## Code of Conduct
The depth of this section will depend on the size and scope of your community.
If your project is part of a larger organization, you can likely adapt that organization’s Code of Conduct.

If not, describe:
- The standards of communication and behavior you expect in community spaces
- The procedure for reporting violations
- What happens when the Code of Conduct is not followed

If you list a contact email, ensure it is regularly monitored so that reports are handled promptly and confidentially.

