+++
title = "Python typing"
author = ["Cash Prokop-Weaver"]
date = 2022-08-25T09:29:00-07:00
lastmod = 2023-12-23T00:10:47-08:00
tags = ["hastodo", "concept", "hastodo", "concept"]
categories = ["hastodo", "concept"]
draft = false
slug = "7667a3b3-727e-42e4-a2e6-a3d7c7169366"
+++

Type hints in [Python]({{< relref "python.md" >}}).


## Generics {#generics}

```python
from typing import TypeVar

T = TypeVar("T")

def generic_adder(a: T, b: T) -> T:
    return a + b
```

```python
from typing import TypeVar, Generic, List
from dataclasses import dataclass

T = TypeVar("T")

@dataclass
class Vertex(Generic[T]):
    children: List[Vertex]
    value: T
```


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
</div>
