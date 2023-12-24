+++
title = "Bellman-Ford implementation in Python"
author = ["Cash Prokop-Weaver"]
date = 2022-12-28T08:37:00-08:00
lastmod = 2023-12-23T10:39:49-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "1e2daf6b-a3b6-471c-b273-b91f3e1f745d"
+++

An [Implementation]({{< relref "implementation.md" >}}) of [Bellman-Ford algorithm]({{< relref "bellman_ford_algorithm.md" >}}) in [Python]({{< relref "python.md" >}}).

```python
import math

from dataclasses import dataclass, field
from typing import Generic, TypeVar, Mapping, List
from itertools import count

T = TypeVar('T')

@dataclass
class Node(Generic[T]):
    value: T
    id: int = field(default_value=count().__next__)

NodeId = int
EdgeWeight = int
Edges = Mapping[NodeId, Mapping[NodeId, EdgeWeight]]
Nodes = Mapping[NodeId, Node]
Distances = Mapping[NodeId, int]
Previouses = Mapping[NodeId, NodeId]

def bellman_ford(source: Node, edges: Edges, nodes: Nodes) -> Tuple[Distances, Previouses]:
    """Solve single-source shortest path using Bellman Ford.

    TODO: Return types, explain parameters.
    """

    def list_edges() -> Tuple[NodeId, NodeId, EdgeWeight]:
        for a_id in edges:
            for b_id, weight in edges[a_id]:
                yield a_id, b_id, weight

    distances = {}
    previouses = {}

    for node_id,_ in nodes:
        distance[node_id] = math.inf
        previouses[node_id] = None

    distance[source.id] = 0

    # Find single-source shortest paths
    for _ in range(len(nodes) - 1):
         for a_id, b_id, weight in list_edges():
            if distance[a_id] + weight < distance[b_id]:
                distance[b_id] = distance[a_id] + weight
                previouses[b_id] = a_id

    # Test for negative cycle
    for a_id, b_id, weight in list_edges():
        if distance[a_id] + weight < distance[b_id]:
            raise Exception('Negative cycle present.')

    return distances, previouses
```


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
</div>

foo1


## Backlinks {#backlinks}

-   [Bellman-Ford algorithm]({{< relref "bellman_ford_algorithm.md" >}})
