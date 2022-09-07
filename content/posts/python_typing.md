+++
title = "Python typing"
author = ["Cash Weaver"]
date = 2022-08-25T09:29:00-07:00
lastmod = 2022-09-06T14:11:04-07:00
tags = ["concept", "concept"]
categories = ["concept"]
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

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
</div>
