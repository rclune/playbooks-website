---
title: Reference Documentation
layout: topic
weight: 6
---

Your reference documentation should include information about everything a user might interact with or modify when using your tool. It should be a living document (or documents) that evolves and grows as your tool evolves and grows. 

If your tool relies on an API interface, the reference documentation will primarily describe the functions users can call and the objects they can create. In this case, much of the documentation can be **automatically generated** from the docstrings you wrote when defining your classes and functions. The [companion GitHub repository](https://github.com/omsf/OMSF_docs_template) includes the infrastructure needed to generate this type of documentation, along with additional information on how to set it up.

If your tool does not rely on API calls, you may need to write your reference documentation manually or use Sphinx extensions and other tools to automate parts of the process. For example, there is a [`sphinx-argparse`](https://sphinx-argparse.readthedocs.io/en/latest/) extension that allows you to generate documentation for command line tools. The number of such extensions and use cases is too large to cover in this playbook, but exploring these resources can greatly improve your documentation. 

 For manually written documentation, the companion repository provides a [Markdown file](https://github.com/omsf/OMSF_docs_template/blob/main/docs/doc_templates/reference_table.md) that demonstrates how to create tables in Markdown.

> Note: There are also many tools available to convert tables from other applications (Excel, Google Sheets, etc.) into Markdown format, which can help you save time and maintain a consistent style.

This section covers: 
- What to include in your reference documentation
- How to write clear, useful docstrings
- What information to include in manually written reference documentation