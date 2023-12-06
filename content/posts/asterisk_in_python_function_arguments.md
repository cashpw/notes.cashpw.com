+++
title = "Asterisk in Python function arguments"
author = ["Cash Prokop-Weaver"]
date = 2023-02-08T09:43:00-08:00
lastmod = 2023-12-05T13:44:43-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "63cf63ea-ec98-4b14-b5d3-50d9b0c9f4e6"
+++

## Single asterisk {#single-asterisk}


### In function definition {#in-function-definition}

A single asterisk indicates that all following arguments **must** be [Python keyword arguments]({{< relref "python_keyword_argument.md" >}}). Additionally, if the asterisk is immediately followed by a parameter (e.g. `*args`) then `args` holds all following positional arguments.

-   Standalone asterisk: Forces all arguments after the `*` to be passed as [Python keyword arguments]({{< relref "python_keyword_argument.md" >}})
    ```python
    def foo(pos, *, forcenamed):
        return (pos, forcenamed)

    print(foo(pos=10, forcenamed=20))
    print(foo(10, forcenamed=20))
    try:
        print(foo(10, 20))
    except TypeError as e:
        print(e)
    ```

-   Asterisk with parameter: Forces all arguments after the `*` to be passed as [Python keyword arguments]({{< relref "python_keyword_argument.md" >}}) **and** collects positional arguments.
    ```python
    def foo(pos, *args, forcenamed):
        return (pos, args, forcenamed)

    print(foo(pos=10, forcenamed=30))
    print(foo(10, 20, 30, 30, forcenamed=50))
    try:
        print(foo(10, 20))
    except TypeError as e:
        print(e)
    ```


### In function invocation {#in-function-invocation}

A single asterisk in a [Python]({{< relref "python.md" >}}) function invocation expands a tuple of positional arguments.

```python
def foo(a, b, c):
    return a, b, c

args = (10, 20, 30)
print(foo(*args))
```


## Double asterisk {#double-asterisk}

A double asterisk (i.e. `**`) precedes a dictionary of [Python keyword arguments]({{< relref "python_keyword_argument.md" >}}).

```python
def foo(a, b, **c):
    return a, b, c

print(foo(10, 20))
print(foo(10, 20, c=30, d=40))
try:
    print(foo(10, 20, 30))
except TypeError as e:
    print(e)
```


### In function invocation {#in-function-invocation}

A double asterisk in a [Python]({{< relref "python.md" >}}) function invocation expands a dictionary of keyword arguments.

```python
def foo(a, b, c):
    return a, b, c

kwargs = {'b': 20, 'c': 30}
print(foo(10, **kwargs))
```


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
</div>


## Backlinks {#backlinks}

-   [Python keyword argument]({{< relref "python_keyword_argument.md" >}})
