+++
title = "Topological order by Depth-first search in Python"
author = ["Cash Prokop-Weaver"]
date = 2023-01-30T09:50:00-08:00
lastmod = 2023-08-02T12:53:45-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "2c232805-4cb3-47ba-8f89-d9090f29f740"
+++

An [Implementation]({{< relref "implementation.md" >}}) of a [Depth-first search]({{< relref "depth_first_search.md" >}})-based algorithm for finding a [Topological order]({{< relref "topological_order.md" >}}) for a [Directed acyclic graph]({{< relref "directed_acyclic_graph.md" >}}) in [Python]({{< relref "python.md" >}}).

```python
from random import choice
from itertools import count
from dataclasses import dataclass, field
from typing import Mapping, List, TypeVar, Generic

T = TypeVar('T')
VertexId = int

@dataclass
class Vertex(Generic[T]):
    value: T
    id: VertexId = field(default_factory=count().__next__)

def topological_sort(adjacency_list: Mapping[VertexId, List[VertexId]]) -> List[VertexId]:
    """Return a topological ordering of ADJACENCY_LIST."""

    evaluated = set()
    evaluating = set()
    topological_order = []

    def visit(id: VertexId) -> None:
        if id in evaluated:
            return

        if id in evaluating:
            raise Exception(f"Provided adjacency list contains a cycle including {id}")

        evaluating.add(id)

        if id in adjacency_list:
            for neighbor_id in adjacency_list[id]:
                visit(neighbor_id)

        evaluating.remove(id)
        evaluated.add(id)
        topological_order.insert(0, id)

    for id in adjacency_list:
        visit(id)

    return topological_order

a = Vertex(value='a') # 0
b = Vertex(value='b') # 1
c = Vertex(value='c') # 2
d = Vertex(value='d') # 3
e = Vertex(value='e') # 4
f = Vertex(value='f') # 5
adjacency_list = {
    a.id: [d.id],
    b.id: [d.id],
    c.id: [d.id],
    d.id: [e.id],
    e.id: [f.id],
}
print(topological_sort(adjacency_list), 'should be [(2,1,0 in any order), 3, 4, 5]')
```


## Flashcards {#flashcards}


### Normal {#normal}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.65 | 5   | 46.31    | 2023-08-11T23:34:26Z |

Implement [Topological sorting]({{< relref "topological_order.md" >}}) using [Depth-first search]({{< relref "depth_first_search.md" >}}) in [Python]({{< relref "python.md" >}})


#### Back {#back}

[Topological order by Depth-first search in Python]({{< relref "topological_order_by_depth_first_search_in_python.md" >}})


#### Source {#source}

[Topological order by Depth-first search in Python]({{< relref "topological_order_by_depth_first_search_in_python.md" >}})


## Backlinks {#backlinks}

-   [Topological order]({{< relref "topological_order.md" >}})
