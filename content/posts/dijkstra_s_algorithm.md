+++
title = "Dijkstra's algorithm"
author = ["Cash Prokop-Weaver"]
date = 2022-12-21T07:30:00-08:00
lastmod = 2023-12-23T11:31:43-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "668cbbcc-170b-42c8-b92b-75f6868a0138"
+++

> Dijkstra's original algorithm found the shortest path between two given nodes, but a more common variant fixes a single node as the "source" node and finds shortest paths from the source to all other nodes in the graph, producing a shortest-path tree.
>
> (<a href="#citeproc_bib_item_1">“Dijkstra’s Algorithm” 2022</a>)

Dijkstra's algorithm is a [Greedy]({{< relref "greedy_algorithm.md" >}}) [Best-first search]({{< relref "best_first_search.md" >}}) algorithm.


## Algorithm {#algorithm}

Dijkstra's algorithm uses [Dynamic programming]({{< relref "dynamic_programming.md" >}}). Since we re-use previously-computed information (i.e. the distance up to the current point).


### [Single-source shortest path problem]({{< relref "single_source_shortest_path_problem.md" >}}) {#single-source-shortest-path-problem--single-source-shortest-path-problem-dot-md}

1.  Mark all nodes as unvisited; create an empty visited `set`
2.  Set a temporary distance of infinity for all nodes except for the source which has a distance of 0
3.  Push all nodes onto the minqueue
4.  Work through the minqueue: mark nodes visited and update their non-visited children if the potential distance is less than the currently known distance
5.  Return the mapping of distances and previous nodes

[Dijkstra's algorithm implementation in Python]({{< relref "dijkstra_s_algorithm_implementation_in_python.md" >}})


### [Single-pair shortest path problem]({{< relref "single_pair_shortest_path_problem.md" >}}) {#single-pair-shortest-path-problem--single-pair-shortest-path-problem-dot-md}

Same as the single-source solution, but stop when you've found the target node.


## Time complexity {#time-complexity}

-   \\(\bigtheta((|E| + |V|)\log|V|)\\), or \\(\bigtheta{|E|\log(|V|)}\\) for a connected graph, when implemented with a [Binary heap]({{< relref "binary_heap.md" >}}).
-   \\(\bigtheta(|E| + |V|\log|V|)\\) when implemented with a [Fibonacci heap]({{< relref "fibonacci_heap.md" >}}).


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Dijkstra’s Algorithm.” 2022. <i>Wikipedia</i>, December. <a href="https://en.wikipedia.org/w/index.php?title=Dijkstra%27s_algorithm&oldid=1127202995">https://en.wikipedia.org/w/index.php?title=Dijkstra%27s_algorithm&#38;oldid=1127202995</a>.</div>
</div>



## Backlinks {#backlinks}

-   [A-star search algorithm]({{< relref "a_star_algorithm.md" >}})
-   [Bellman-Ford algorithm]({{< relref "bellman_ford_algorithm.md" >}})
-   [Branch and bound]({{< relref "branch_and_bound.md" >}})
-   [Contraction hierarchies]({{< relref "contraction_hierarchies.md" >}})
-   [Customizable route planning]({{< relref "customizable_route_planning.md" >}})
-   [Dijkstra's algorithm implementation in Python]({{< relref "dijkstra_s_algorithm_implementation_in_python.md" >}})
-   [Directed acyclic graph]({{< relref "directed_acyclic_graph.md" >}})
-   [Dynamic programming]({{< relref "dynamic_programming.md" >}})
-   [Shortest path algorithm]({{< relref "shortest_path_algorithm.md" >}})
-   [Single-pair shortest path problem]({{< relref "single_pair_shortest_path_problem.md" >}})
-   [Single-source shortest path problem]({{< relref "single_source_shortest_path_problem.md" >}})
-   [Topological order]({{< relref "topological_order.md" >}})
