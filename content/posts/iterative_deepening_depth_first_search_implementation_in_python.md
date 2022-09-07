+++
title = "Iterative deepening depth-first-search implementation in Python"
author = ["Cash Weaver"]
date = 2022-09-06T09:32:00-07:00
lastmod = 2022-09-06T09:32:55-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "7c092555-c1f9-4c9d-9d02-c31d8096ce51"
+++

```python
from typing import TypeVar, List, Generic, Optional
from dataclasses import dataclass

T = TypeVar('T')

@dataclass
class Vertex(Generic[T]):
    children: List[Vertex]
    value: T

def iterative_deepening_dfs(target: T, root_vertex: Vertex) -> Optional[Vertex]:
    """Return vertex with value of TARGET if found."""

    def inner_iterative_deepening_dfs(target: T, vertex: Vertex) -> Optional[Vertex]:
        if vertex in visited:
            return None
        visited.add(vertex)

        if vertex.value == target:
            return vertex

        for child in vertex.children:
            result = inner_iterative_deepening_dfs(target, child)
            if result is not None:
                return result

        return None

    visited = set()
    return inner_iterative_deepening_dfs(target, root_vertex)
```
