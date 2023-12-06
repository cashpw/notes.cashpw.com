+++
title = "Iterative deepening depth-first-search implementation in Python"
author = ["Cash Prokop-Weaver"]
date = 2022-09-06T09:32:00-07:00
lastmod = 2023-12-05T20:23:09-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "7c092555-c1f9-4c9d-9d02-c31d8096ce51"
+++

An [Implementation]({{< relref "implementation.md" >}}) of [Iterative deepening depth-first-search]({{< relref "iterative_deepening_depth_first_search.md" >}}) in [Python]({{< relref "python.md" >}}).

```python
from __future__ import annotations
from typing import TypeVar, Generic, List, Optional, Tuple
from dataclasses import dataclass

T = TypeVar('T')

@dataclass(frozen=True, eq=True)
class Vertex(Generic[T]):
    children: List[Vertex]
    value: T

    def __hash__(self):
        return hash(self.value)

def depth_limited_dfs(target: T, root_vertex: Vertex, max_depth: int) -> Tuple[Optional[T], bool]:
    """Perform a depth-limited depth-first search for the TARGET, starting from ROOT_VERTEX.

    Return a tuple composed of:
      1. The target, if found, else None
      2. True if (1) we visited all reachable vertexes or (2) we found the target, else False"""
    def inner_depth_limited_dfs(target: T, vertex: Vertex, max_depth: int) -> Tuple[Optional[T], bool]:
        if vertex in visited:
            return None, True
        visited.add(vertex)

        if vertex.value == target:
            return vertex, True

        if max_depth == 0:
            if any([child not in visited for child in vertex.children]):
                return None, False

            return None, True

        reached_all_vertexes = True
        for child in vertex.children:
            result, reached_all = inner_depth_limited_dfs(target, child, max_depth - 1)
            reached_all_vertexes = reached_all_vertexes if reached_all is True else False
            if result is not None:
                return result, reached_all_vertexes

        return None, reached_all_vertexes

    if max_depth < 0:
        return None

    visited = set()

    return inner_depth_limited_dfs(target, root_vertex, max_depth)

def iterative_deepening_dfs(target: T, root_vertex: Vertex) -> Optional[T]:
    reached_all_vertexes = False
    max_depth = 1
    while reached_all_vertexes is not True:
        maybe_vertex, reached_all_vertexes = depth_limited_dfs(target, root_vertex, max_depth)

        if maybe_vertex is not None:
            return maybe_vertex

        max_depth += 1

    return None

i = Vertex(children=[], value='i')
h = Vertex(children=[], value='h')
g = Vertex(children=[], value='g')
f = Vertex(children=[i], value='f')
e = Vertex(children=[], value='e')
d = Vertex(children=[h], value='d')
c = Vertex(children=[f,g], value='c')
b = Vertex(children=[d,e], value='b')
a = Vertex(children=[b,c], value='a')

print(iterative_deepening_dfs('a', a))
print(iterative_deepening_dfs('b', a))
print(iterative_deepening_dfs('c', a))
print(iterative_deepening_dfs('d', a))
print(iterative_deepening_dfs('e', a))
print(iterative_deepening_dfs('f', a))
print(iterative_deepening_dfs('g', a))
print(iterative_deepening_dfs('h', a))
print(iterative_deepening_dfs('i', a))
```


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
</div>


## Backlinks {#backlinks}

-   [Iterative deepening depth-first-search]({{< relref "iterative_deepening_depth_first_search.md" >}})
