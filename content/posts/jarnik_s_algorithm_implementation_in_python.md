+++
title = "Jarnik's algorithm implementation in Python"
author = ["Cash Prokop-Weaver"]
date = 2023-01-17T08:52:00-08:00
lastmod = 2023-08-02T11:16:59-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "575409bd-1bb2-45c0-84a3-63abaa4b899b"
+++

[Implementation]({{< relref "implementation.md" >}}) of [Jarnik's algorithm]({{< relref "jarkik_s_algorithm.md" >}}) in [Python]({{< relref "python.md" >}}).

```python
from queue import PriorityQueue
from random import choice
from typing import Mapping, Optional, TypeVar, Generic, List, Tuple, Any
from dataclasses import dataclass, field
from itertools import count

T = TypeVar('T')
VertexId = int
EdgeWeight = int
WeightedEdges = Mapping[VertexId, Mapping[VertexId, EdgeWeight]]
AdjacencyList = List[Tuple[VertexId, VertexId]]

@dataclass
class Vertex(Generic[T]):
    value: T
    id: VertexId = field(default_factory=count().__next__)

@dataclass(order=True)
class PrioritizedItem:
    priority: int
    item: Any = field(compare=False)

def jarniks_minimum_spanning_tree(edges: WeightedEdges) -> AdjacencyList:
    """Return a minimum spanning tree for the provided EDGES.

    TODO: Explain arguments
    TODO: Explain return values"""

    included = set()
    initial_vertex_id = choice(list(edges.keys()))
    min_queue = PriorityQueue()
    adjacency_list = []

    current_id = initial_vertex_id
    for neighbor_id, edge_weight in [(neighbor_id, edges[current_id][neighbor_id]) for neighbor_id in edges[current_id] if neighbor_id not in included]:
        min_queue.put(PrioritizedItem(priority=edge_weight, item=(current_id, neighbor_id)))

    while not min_queue.empty():
        prioritizedItem = min_queue.get()
        vertex_a_id, vertex_b_id = prioritizedItem.item
        edge_weight = prioritizedItem.priority

        if vertex_a_id in included and vertex_b_id in included:
            continue

        adjacency_list.append((vertex_a_id, vertex_b_id))
        included.add(vertex_a_id)
        included.add(vertex_b_id)

        current_id = vertex_b_id
        for neighbor_id, edge_weight in [(neighbor_id, edges[current_id][neighbor_id]) for neighbor_id in edges[current_id] if neighbor_id not in included]:
            min_queue.put(PrioritizedItem(priority=edge_weight, item=(current_id, neighbor_id)))

    return adjacency_list

a = Vertex('a') # 0
b = Vertex('b') # 1
c = Vertex('c') # 2
d = Vertex('d') # 3
e = Vertex('e') # 4
f = Vertex('f') # 5
adjacency_list = [
    (a.id, b.id, 4),
    (a.id, c.id, 5),
    (a.id, e.id, 6),
    (a.id, f.id, 2),
    (b.id, c.id, 1),
    (b.id, d.id, 9),
    (c.id, d.id, 8),
    (e.id, f.id, 11),
]
edges = {}
for vertex_a_id, vertex_b_id, edge_weight in adjacency_list:
    if vertex_a_id not in edges:
        edges[vertex_a_id] = {}
    edges[vertex_a_id][vertex_b_id] = edge_weight

    if vertex_b_id not in edges:
        edges[vertex_b_id] = {}
    edges[vertex_b_id][vertex_a_id] = edge_weight

print(sorted(jarniks_minimum_spanning_tree(edges)), 'should be [(a,b), (a,e), (a,f), (b,c), (c,d)]')
```


## Flashcards {#flashcards}


### Implement {#implement}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 1.90 | 2   | 2.00     | 2023-08-03T15:00:10Z |

Implement [Jarnik's algorithm]({{< relref "jarkik_s_algorithm.md" >}}) in [Python]({{< relref "python.md" >}})


#### Back {#back}

[Jarnik's algorithm implementation in Python]({{< relref "jarnik_s_algorithm_implementation_in_python.md" >}})


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Prim’s Algorithm” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Prim’s Algorithm.” 2022. <i>Wikipedia</i>, December. <a href="https://en.wikipedia.org/w/index.php?title=Prim%27s_algorithm&oldid=1127278141">https://en.wikipedia.org/w/index.php?title=Prim%27s_algorithm&#38;oldid=1127278141</a>.</div>
</div>
