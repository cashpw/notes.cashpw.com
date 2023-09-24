+++
title = "Asterisk in Python function arguments"
author = ["Cash Prokop-Weaver"]
date = 2023-02-08T09:43:00-08:00
lastmod = 2023-09-24T09:54:14-07:00
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


## Flashcards {#flashcards}


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.65 | 6   | 142.60   | 2023-10-01T05:36:50Z |
| back     | 2.65 | 7   | 308.71   | 2024-07-06T07:26:02Z |

Single [Asterisk in Python function arguments]({{< relref "asterisk_in_python_function_arguments.md" >}})


#### Back {#back}

-   Indicates all following arguments must be [Python keyword arguments]({{< relref "python_keyword_argument.md" >}})
-   If followed by a parameter, collects positional arguments in a tuple


#### Source {#source}

(<a href="#citeproc_bib_item_1">Python Documentation n.d.</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 7   | 214.04   | 2024-03-05T16:12:22Z |
| back     | 2.80 | 7   | 355.66   | 2024-08-19T07:02:39Z |

Double [Asterisk in Python function arguments]({{< relref "asterisk_in_python_function_arguments.md" >}})


#### Back {#back}

-   Collects keywords arguments in a dictionary


#### Source {#source}

(<a href="#citeproc_bib_item_1">Python Documentation n.d.</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 7   | 277.45   | 2024-05-30T01:34:59Z |
| back     | 2.65 | 7   | 301.03   | 2024-06-26T13:21:57Z |

Single [Asterisk in Python function invocations]({{< relref "asterisk_in_python_function_arguments.md" >}})


#### Back {#back}

Expands a tuple of arguments into positional arguments


#### Source {#source}

(<a href="#citeproc_bib_item_1">Python Documentation n.d.</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.80 | 7   | 325.03   | 2024-07-25T14:17:37Z |
| back     | 2.80 | 6   | 145.19   | 2023-10-01T21:15:30Z |

Double [Asterisk in Python function invocations]({{< relref "asterisk_in_python_function_arguments.md" >}})


#### Back {#back}

Expands a dictionary of keyword arguments


#### Source {#source}

(<a href="#citeproc_bib_item_1">Python Documentation n.d.</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 7   | 339.44   | 2024-08-01T00:19:53Z |

Positional arguments {{can't}{can(not)}@0} come after `*` in a [Python]({{< relref "python.md" >}}) function.


#### Source {#source}

(<a href="#citeproc_bib_item_1">Python Documentation n.d.</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Python Documentation. n.d. “Glossary.” Python documentation. Accessed February 8, 2023. <a href="https://docs.python.org/3/glossary.html">https://docs.python.org/3/glossary.html</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Python keyword argument]({{< relref "python_keyword_argument.md" >}})
