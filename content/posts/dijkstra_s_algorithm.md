+++
title = "Dijkstra's algorithm"
author = ["Cash Prokop-Weaver"]
date = 2022-12-21T07:30:00-08:00
lastmod = 2023-08-02T10:49:45-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "668cbbcc-170b-42c8-b92b-75f6868a0138"
+++

> Dijkstra's original algorithm found the shortest path between two given nodes, but a more common variant fixes a single node as the "source" node and finds shortest paths from the source to all other nodes in the graph, producing a shortest-path tree.
>
> (<a href="#citeproc_bib_item_2">“Dijkstra’s Algorithm” 2022</a>)

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


## Flashcards {#flashcards}


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.20 | 7   | 192.82   | 2023-12-11T20:55:01Z |

[Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}}) can solve {{both the [Single-pair shortest path problem]({{< relref "single_pair_shortest_path_problem.md" >}}) and [Single-source shortest path problem]({{< relref "single_source_shortest_path_problem.md" >}})}{[Shortest path problem]({{< relref "shortest_path_algorithm.md" >}})}@0}


#### Source {#source}

(<a href="#citeproc_bib_item_2">“Dijkstra’s Algorithm” 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.20 | 7   | 148.09   | 2023-10-11T17:07:24Z |
| back     | 2.05 | 7   | 131.38   | 2023-09-07T23:48:19Z |

[Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}}) for solving the [Single-source shortest path problem]({{< relref "single_source_shortest_path_problem.md" >}})


#### Back {#back}

-   [Dynamic programming]({{< relref "dynamic_programming.md" >}})
-   [Greedy algorithm]({{< relref "greedy_algorithm.md" >}})

Algorithm:

1.  Mark all nodes as unvisited; create an empty visited `set`
2.  Set a temporary distance of infinity for all nodes except for the source which has a distance of 0
3.  Push all nodes onto the minqueue
4.  Work through the minqueue: mark nodes visited and update their non-visited children if the potential distance is less than the currently known distance
5.  Return the mapping of distances and previous nodes


#### Source {#source}

(<a href="#citeproc_bib_item_2">“Dijkstra’s Algorithm” 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.95 | 6   | 149.30   | 2023-08-16T23:31:45Z |
| 1        | 2.50 | 7   | 176.01   | 2023-10-31T17:21:58Z |

{{[Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}})}@0} can solve the [Shortest path problem]({{< relref "shortest_path_algorithm.md" >}}) for {{non-negative}{positive/negative}@1} edge weights.


#### Source {#source}

(<a href="#citeproc_bib_item_2">“Dijkstra’s Algorithm” 2022</a>)


### Normal {#normal}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 7   | 272.97   | 2024-03-25T15:38:08Z |

Time complexity of [Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}})


#### Back {#back}

-   \\(\bigtheta{(|E| + |V|)\log|V|}\\), or \\(\bigtheta{|E|\log(|V|)}\\) for a connected graph, when implemented with a [Binary heap]({{< relref "binary_heap.md" >}}).
-   \\(\bigtheta{|E| + |V|\log|V|}\\) when implemented with a [Fibonacci heap]({{< relref "fibonacci_heap.md" >}}).


#### Source {#source}

(<a href="#citeproc_bib_item_2">“Dijkstra’s Algorithm” 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 7   | 271.46   | 2024-03-31T12:53:05Z |

{{[Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}})}@0} is, asymptotically, the fastest known [Single-source shortest path problem]({{< relref "single_source_shortest_path_problem.md" >}}) solution for arbitrary directed graphs with unbounded non-negative weights.


#### Source {#source}

(<a href="#citeproc_bib_item_2">“Dijkstra’s Algorithm” 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 1.30 | 8   | 20.46    | 2023-08-09T00:48:05Z |
| 1        | 2.50 | 7   | 179.35   | 2024-01-19T12:22:11Z |

Time complexity for [Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}}) is {{\\(\bigtheta{(|E| + |V|)\log(|V|)}\\), or \\(\bigtheta{|E|\log(|V|)}\\) for a connected graph}@0} when {{implemented with a [Binary heap]({{< relref "binary_heap.md" >}}) or [Binary search tree]({{< relref "binary_search_tree.md" >}})}@1}.


#### Source {#source}

(<a href="#citeproc_bib_item_2">“Dijkstra’s Algorithm” 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.95 | 6   | 146.91   | 2023-08-11T12:03:31Z |
| 1        | 2.20 | 6   | 79.19    | 2023-08-04T17:10:16Z |

Time complexity for [Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}}) is {{\\(\bigtheta{|E| + |V|\log(|V|)}\\)}@0} when {{implemented with a [Fibonacci heap]({{< relref "fibonacci_heap.md" >}})}@1}.


#### Source {#source}

(<a href="#citeproc_bib_item_2">“Dijkstra’s Algorithm” 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 7   | 251.30   | 2024-02-26T03:24:26Z |
| 1        | 2.50 | 7   | 234.76   | 2024-01-15T08:19:54Z |

Failure cases for {{[Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}})}{algorithm}@0} are {{any negative weights}@1}.


#### Source {#source}

(<a href="#citeproc_bib_item_2">“Dijkstra’s Algorithm” 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.95 | 6   | 160.93   | 2023-08-29T15:39:04Z |
| back     | 2.80 | 7   | 326.58   | 2024-05-27T18:07:29Z |

Why does [Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}}) fail with negative weights?


#### Back {#back}

[Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}}) is [Greedy]({{< relref "greedy_algorithm.md" >}}); it halts once it has found a single pathway between the source and target nodes.


#### Source {#source}

(<a href="#citeproc_bib_item_2">“Dijkstra’s Algorithm” 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 7   | 240.83   | 2024-02-14T10:14:32Z |

[Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}}) iterates over {{[Vertices]({{< relref "vertex.md" >}})}@0}.


#### Source {#source}

(<a href="#citeproc_bib_item_2">“Dijkstra’s Algorithm” 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.80 | 6   | 128.55   | 2023-09-09T04:57:19Z |

Benefit(s) of only queuing a single item at the start of [Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}}).


#### Back {#back}

-   The set of nodes relevant to the shortest path is likely to be smaller than the total set of nodes in a graph
-   Allows the algorithm to be applied to infinite graphs or graphs too large to fit into memory


#### Source {#source}

(<a href="#citeproc_bib_item_2">“Dijkstra’s Algorithm” 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.20 | 7   | 149.96   | 2023-10-12T16:11:57Z |

[A\*]({{< relref "a_star_algorithm.md" >}}) and [Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}}) are generally outperformed by {{algorithms which can pre-process the graph}@0}.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“A* Search Algorithm” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“A* Search Algorithm.” 2022. <i>Wikipedia</i>, December. <a href="https://en.wikipedia.org/w/index.php?title=A*_search_algorithm&oldid=1127312005">https://en.wikipedia.org/w/index.php?title=A*_search_algorithm&#38;oldid=1127312005</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>“Dijkstra’s Algorithm.” 2022. <i>Wikipedia</i>, December. <a href="https://en.wikipedia.org/w/index.php?title=Dijkstra%27s_algorithm&oldid=1127202995">https://en.wikipedia.org/w/index.php?title=Dijkstra%27s_algorithm&#38;oldid=1127202995</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Single-pair shortest path problem]({{< relref "single_pair_shortest_path_problem.md" >}})
-   [Single-source shortest path problem]({{< relref "single_source_shortest_path_problem.md" >}})
-   [Directed acyclic graph]({{< relref "directed_acyclic_graph.md" >}})
-   [Dynamic programming]({{< relref "dynamic_programming.md" >}})
-   [Shortest path algorithm]({{< relref "shortest_path_algorithm.md" >}})
-   [Dijkstra's algorithm implementation in Python]({{< relref "dijkstra_s_algorithm_implementation_in_python.md" >}})
-   [Bellman-Ford algorithm]({{< relref "bellman_ford_algorithm.md" >}})
-   [Branch and bound]({{< relref "branch_and_bound.md" >}})
-   [A-star search algorithm]({{< relref "a_star_algorithm.md" >}})
-   [Topological order]({{< relref "topological_order.md" >}})
-   [Contraction hierarchies]({{< relref "contraction_hierarchies.md" >}})
-   [Customizable route planning]({{< relref "customizable_route_planning.md" >}})
