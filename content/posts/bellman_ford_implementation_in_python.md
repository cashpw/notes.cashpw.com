+++
title = "Bellman-Ford implementation in Python"
author = ["Cash Prokop-Weaver"]
date = 2022-12-28T08:37:00-08:00
lastmod = 2023-07-25T08:41:21-07:00
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


## Flashcards {#flashcards}


### Implement {#implement}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.80 | 6   | 129.51   | 2023-09-26T04:31:18Z |

Implement [Bellman-Ford algorithm]({{< relref "bellman_ford_algorithm.md" >}}) in [Python]({{< relref "python.md" >}}) to solve the [Single-source shortest path problem]({{< relref "single_source_shortest_path_problem.md" >}})


#### Back {#back}

[Bellman-Ford implementation in Python]({{< relref "bellman_ford_implementation_in_python.md" >}})


#### Source {#source}

(<a href="#citeproc_bib_item_1">“BellmanFord Algorithm” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“BellmanFord Algorithm.” 2022. <i>Wikipedia</i>, May. <a href="https://en.wikipedia.org/w/index.php?title=Bellman%E2%80%93Ford_algorithm&oldid=1088801570">https://en.wikipedia.org/w/index.php?title=Bellman%E2%80%93Ford_algorithm&#38;oldid=1088801570</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Bellman-Ford algorithm]({{< relref "bellman_ford_algorithm.md" >}})
