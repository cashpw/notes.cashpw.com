+++
title = "Single-source shortest path with topological sort in Python"
author = ["Cash Prokop-Weaver"]
date = 2023-01-31T07:08:00-08:00
lastmod = 2023-09-24T10:45:40-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "3642d973-8af3-4d0f-a446-9ee24c2f85e7"
+++

An [Implementation]({{< relref "implementation.md" >}}) of a solution to the [Single-source shortest path problem]({{< relref "single_source_shortest_path_problem.md" >}}) which leverages the [Topological order]({{< relref "topological_order.md" >}}) of the underlying graph (in [Python]({{< relref "python.md" >}})).

```python
import math

from typing import List, Mapping, TypeVar, Generic
from dataclasses import dataclass, field
from itertools import count

T = TypeVar('T')
NodeId = int
EdgeWeight = int
Edges = Mapping[NodeId, Mapping[NodeId, EdgeWeight]]
Previouses = Mapping[NodeId, NodeId]
Distances = Mapping[NodeId, EdgeWeight]

@dataclass
class Node(Generic[T]):
    value: T
    id: NodeId = field(defualt_factory=count().__next__)

def single_source_shortest_path(target_id: NodeId, topological_ordering: List[NodeId], edges: Edges) -> Tuple[Previouses, Distances]:
    """Find the shortest paths from TARGET_ID to all vertices in EDGES which are connected to TARGET_ID.

    Return a tuple of:
    - previouses: Mapping from Node.id to the previous Node.id in the shortest path
    - distances: Mapping from Node.id to the distance from TARGET_ID to that Node"""

    distances = {}
    previouses = {}

    for node_id in edges:
        distances[node_id] = math.inf
        previouses[node_id] = None

    distances[target_id] = 0

    def visit(node_id: NodeId) -> None:
        for neighbor_id, edge_weight in [(neighbor_id, edges[node_id][neighbor_id]) for neighbor_id in edges[node_id]]:
            if distances[neighbor_id] > distances[node_id] + edge_weight:
                distances[neighbor_id] = distances[node_id] + edge_weight
                previouses[neighbor_id] = node_id

    visit(target_id)
    for node_id in [id for id in topological_ordering if id != target_id]:
        visit(node_id)

    return distances, previouses
```


## Flashcards {#flashcards}


### Normal {#normal}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 0   | 0.00     | 2023-02-02T15:42:24Z |

Implement a solution to the [Single-source shortest path problem]({{< relref "single_source_shortest_path_problem.md" >}}) which leverages a [Topological order]({{< relref "topological_order.md" >}}) in [Python]({{< relref "python.md" >}})


#### Back {#back}

[Single-source shortest path with topological sort in Python]({{< relref "single_source_shortest_path_with_topological_sort_in_python.md" >}})


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Topological Sorting” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Topological Sorting.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Topological_sorting&oldid=1123299686">https://en.wikipedia.org/w/index.php?title=Topological_sorting&#38;oldid=1123299686</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Topological order]({{< relref "topological_order.md" >}})
