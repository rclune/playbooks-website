---
layout: section
title: Writing Reference Documentation
weight: 2
---

This section does not cover the technical details of setting up automatic reference documentation. For guidance on that process, see the companion GitHub repository. <!-- TO DO: link documentation repo --> Instead, this section focuses on the content and formatting of the text you’ll provide to users. 

## API Documentation

As mentioned earlier, reference documentation based on your API can be generated automatically once the required infrastructure is set up. Most of this configuration is already prepared in the companion repository. <!-- TODO: link repo --> However, the generation of automatic API documentation by tools like Sphinx only works effectively if you write consistent and well-formatted docstrings throughout your codebase

### What to put in a docstring

For a deeper dive into this topic, we recommend David Anderson’s excellent article: [Writing Great Docstrings in Python](https://jdkandersson.com/2023/01/07/writing-great-docstrings-in-python/).

#### Module docstrings
**Required:**
- A brief summary (a few sentences) describing the function and purpose of the module

**Optional:**
- A more detailed description of the module's functionality
- Short descriptions of each of public class and function in the module
- Usage example(s)

#### Class docstrings
**Required:**
- A short summary (1–2 sentences) of the purpose of the class
- Short descriptions of all public methods
- Short descriptions of all public attributes (including those defined via `@property`)

**Optional:**
- A more detailed description of the class
- Usage examples

#### Method docstrings 
**Required:**
- A short summary (1-2 sentences) of what the function does
- Short descriptions of all input arguments
    - Use type hints whenever possible; if not, specify data types in the description
- Short descriptions the return value(s), if any

**Optional:**
- Exceptions the function may raise
- Usage examples
- Implementation details (helpful for future developers)

### Docstring formats

There are many accepted docstring formats. Here we focus on the three most common supported by Sphinx.

1. [**Sphinx format**](https://sphinx-rtd-tutorial.readthedocs.io/en/latest/docstrings.html):

Sphinx docstrings use the [reSTructuredText](https://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html) markup language.
There are specific 'directives' that can be specified by surrounding the directive with colons (:). The most important ones are shown in the method and class docstring examples below. However, there are more that you can learn about [here](https://www.sphinx-doc.org/en/master/usage/domains/python.html).

Module docstring example:

```
"""
A short summary of your module

List of the public classes: 

* Description of public_class_1
* Description of public_class_2
* etc. 

List of the public functions: 

* Description of public_function_1
* Description of public_function_2
* etc. 

Usage examples:

"""
```

Class docstring example: 
```
"""
Description of your class.

Descriptions of the public methods: 

* Description of public method 1
* Description of public method 2
* etc. 

Descriptions of the public class attributes: 
:param param1: Description of param1
:type param1: param1's data type (not necessary if using type hints)
:param param2: Description of param2
:type param2: param2's data type
etc. 

Usage examples

"""
```

Method docstring example
```
"""
Summary of the method

:param param1: Description of param1, defaults to...
:type param1: Data type of param1, not necessary if using type hints
etc.
:raises errorType1: Description of errorType1
etc. 
:return: Return description
:rtype: Data type of the object returned, not necessary if using type hints

Usage examples
"""
```
2. **Google and NumPy formats**

Sphinx also supports using Google and NumPy docstring formats via its Napoleon extension. This extension is already included in the companion repository. <!-- TODO: link repo --> You can learn more in the [Sphinx Napoleon documentation](https://www.sphinx-doc.org/en/master/usage/extensions/napoleon.html).

Rather than reproducing those examples here, we recommend consulting the following authoritative guides:
- **Google**: 
    - [Sphinx's Google Style Python Docstring Example](https://www.sphinx-doc.org/en/master/usage/extensions/example_google.html)
    - [Section 3.8 of the Google Python Style Guide](https://google.github.io/styleguide/pyguide.html#38-comments-and-docstrings)

- **NumPy**: 
    - [Sphinx's NumPy Style Python Docstring Example](https://www.sphinx-doc.org/en/master/usage/extensions/example_numpy.html#example-numpy)
    - [Numpy's Style Guide](https://numpydoc.readthedocs.io/en/latest/format.html)


## What to include in other types of reference documentation

The structure of non-API reference documentation depends on how your tool works, but in general, you should document every object, option, or function that users can directly interact with.

Each entry should include:

- The name/label of the object, option, or function
- A short (1-2 sentence) summary 
- A list of required inputs and their data types
    - If it’s not obvious how to obtain the correct input, include guidance here
    - Example: “The script expects the input file in PDB format, which can be downloaded from the [RSCB PDB library](https://www.rcsb.org/)."
- Any recommended value ranges or default values
- Dependencies or interactions with other objects, options, or functions
    - Does this option only take effect when another setting is enabled?
    - Does it enable additional functionality elsewhere?
- Syntax examples
    - A list of any usage examples that reference the object, option, or function


