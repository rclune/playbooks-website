# Guide for Developers

This is intended to help contributors who want to contribute to the web
development side of the playbooks: changing the layout templates, the CSS, etc.
If your interest is in adding content, please see the
[CONTRIBUTING.md](./CONTRIBUTING.md) guide.

This document assumes that you have already read and are familiar with the main
contributions guide at [CONTRIBUTING.md](./CONTRIBUTING.md).

## Theme

We're using the [Hugo Flex](https://themes.gohugo.io/themes/hugo-flex/) theme.

## Layouts

* **Practices** (`layouts/_default/practice.html`): This controls the layout of
  individual practice pages.
* **Comparisons** (`layouts/_default/comparison.html`): This controls the
  layout of comparison pages.
* **Topic Index** (`layouts/_default/section.html`): This controls the layout of
  the topic index page.
* **Playbook Index** 
* **Landing page** (`layouts/_default/home.html`): This controls the layout of
  the landing page.

## CSS

Currently all CSS is in `assets/css/playbooks.css`. It would be better to
separate this, but it seems that the theme currently just appends this to the
end of the main CSS file.

## Author-facing templates

For each page type, we have an author-facing template. This makes it easier for
authors to fill in the necessary information. Detailed usage descriptions for
each are in [CONTRIBUTING.md](./CONTRIBUTING.md).

* **Practices**: `templates/practice.md`
* **Comparisons**: `templates/comparison.md`

## CI/CD and testing
