# Contributing to the OMSF Playbooks Website

Welcome, and thank you for your interest in contributing to the OMSF Playbooks
Website! 🎉

The OMSF Playbooks Website is generated using [Hugo](https://gohugo.io/), and
the content is primarily written in [Markdown](https://www.markdownguide.org/)
with [YAML](https://yaml.org/) frontmatter. Whether you're fixing a typo,
adding new content, or suggesting an improvement, we appreciate all
contributions that help improve this resource for the community.

We use a [GitHub repository](https://github.com/your-repository-link) for
managing all changes, and contributions are handled through **pull requests
(PRs)**. To contribute, <!-- TODO: something about fork & PR model -->

## Contributing to the content

### File structure

The website content is located in the `content` directory. The `content`
directory is split into subdirectories for each playbook. Then each playbook is
split into several "topics", each with its own subdirectory. Finally, there are
individual pages in each topic subdirectory. So the overall path to a file is:

```text
content/PLAYBOOK/TOPIC/PAGE.md
```

Note that index pages at `content/PLAYBOOK/index.html` and
`content/PLAYBOOK/TOPIC/index.html` are automatically generated. See the
[DEVELOPERS.md](./DEVELOPERS.md) documentation for details.

Pages come in two types: practices and comparisons. A "practice" describes one
of our recommended practices. 


### Creating a new practice

To create a new practice, make a copy of the `templates/practice.md` template and 

### Creating a new comparison page

To create

## Contributing to site development

If your interest is less about content and more about contributing to the
presentation of that content, please see the guide in
[DEVELOPERS.md](./DEVELOPERS.md). 
