+++
title = "Breadth-first search in python"
author = ["Cash Prokop-Weaver"]
date = 2023-06-26T05:19:00-07:00
lastmod = 2023-12-05T13:49:34-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "50d70056-c314-40bd-b9d2-64e254fe3f50"
+++

```python
from queue import Queue
from itertools import count
from typing import TypeVar, Generic, Optional
from collections.abc import Mapping
from dataclasses import dataclass, field

T = TypeVar('T')
VertexId = int
Adjacencies = Mapping[VertexId, VertexId]

@dataclass
class Vertex(Generic[T]):
    value: T
    id: VertexId = field(default_factory=count().__next__)

Vertices = Mapping[VertexId, Vertex]

def breadth_first_search(root_id: VertexId, target_id: VertexId, graph: Adjacencies, vertices: Vertices) -> Optional[Vertex]:
    """Search for TARGET within GRAPH using breadth-first search."""
    queue = Queue()
    queue.put(root_id)
    visited = set()

    while not queue.empty():
        current_id = queue.get()

        if current_id == target_id:
            return vertices[current_id]

        if current_id in visited:
            continue
        visited.add(current_id)

        if current_id in adjacencies:
            for neighbor_id in [id for id in adjacencies[current_id]]:
                queue.put(neighbor_id)

    return None

a = Vertex(value='a')
b = Vertex(value='b')
c = Vertex(value='c')
d = Vertex(value='d')
e = Vertex(value='e')
f = Vertex(value='f')
adjacencies = {
    a.id: {b.id, c.id},
    c.id: {d.id},
    d.id: {e.id, f.id},
}
vertices = {
    a.id: a,
    b.id: b,
    c.id: c,
    d.id: d,
    e.id: e,
    f.id: f,
}
print(breadth_first_search(a.id, a.id, adjacencies, vertices), 'should be a')
print(breadth_first_search(a.id, e.id, adjacencies, vertices), 'should be e')
print(breadth_first_search(c.id, a.id, adjacencies, vertices), 'should be None')
print(breadth_first_search(a.id, 100, adjacencies, vertices), 'should be None')
```


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
</div>


## Backlinks {#backlinks}

-   [Breadth-first search]({{< relref "breadth_first_search.md" >}})
