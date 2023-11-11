+++
title = "Dijkstra's algorithm implementation in Python"
author = ["Cash Prokop-Weaver"]
date = 2022-12-21T12:19:00-08:00
lastmod = 2023-11-10T10:40:50-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "d3309005-8d35-4421-8f3d-60ab14e1f2eb"
+++

An [Implementation]({{< relref "implementation.md" >}}) of [Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}}) in [Python]({{< relref "python.md" >}}).

```python
from queue import PriorityQueue
import math
from typing import TypeVar, Generic, Optional, Any
from dataclasses import dataclass, field
from itertools import count
from collections.abc import Mapping

T = TypeVar('T')
VertexId = int
EdgeWeight = float

@dataclass(order=True)
class PrioritizedItem:
    priority: float
    item: Any = field(compare = False)

@dataclass
class Vertex(Generic[T]):
    value: T
    id: VertexId = field(default_factory=count().__next__)
AdjacencyList = Mapping[VertexId, Mapping[VertexId, EdgeWeight]]

def dijkstra_single_pair_shortest_path(source_id: VertexId, target_id: VertexId, graph: AdjacencyList) -> Optional[list[VertexId]]:
    """Return shortest path between SOURCE_ID and TARGET_ID within GRAPH using Dijkstra's."""

    previouses = {}
    distances = {}
    visited = set()
    min_queue = PriorityQueue()
    min_queue.add(PrioritizedItem(priority=0, item=source_id))

    while not min_queue.empty():
        edge_weight, parent_id = min_queue.get()

        if parent_id == target_id:
            break

        for child_id, edge_weight in [(child_id, graph[parent_id][child_id]) for child_id in graph[parent_id] if child_id not in visited]:
            if to_id not in distances:
                distances[to_id] = math.inf
                #min_queue.put((math.inf, (source_id, child_id)))
            distance_through_parent = distances[parent_id] + edge_weight
            if distance_through_parent < distance[child_id]:
                distances[child_id] = distance_through_parent
                previouses[child_id] = parent_id
                min_queue.

    if target_id not in previouses:
        return None

    # TODO: Refactor as function?
    shortest_path = []
    current_id = target_id
    while current_id != source_id:
        shortest_path.append(current_id)
        current_id = previouses[current_id]
    shortest_path.append(source_id)
    return reversed(shortest_path)

a = Vertex(value='a')
b = Vertex(value='b')
c = Vertex(value='c')
d = Vertex(value='d')
e = Vertex(value='e')
f = Vertex(value='f')
adjacency_list = {
    a.id: {b.id: 3, c.id: 5},
    b.id: {c.id: 1},
    c.id: {d.id: 2, e.id: 5},
    d.id: {f.id: 10},
    e.id: {f.id: 1},
}
print(dijkstra_single_pair_shortest_path(a.id, f.id, adjacency_list), 'should be [0, 1, 2, 4, 5]')
print(dijkstra_single_pair_shortest_path(b.id, a.id, adjacency_list), 'should be None')
```


## Backlinks {#backlinks}

-   [Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}})
