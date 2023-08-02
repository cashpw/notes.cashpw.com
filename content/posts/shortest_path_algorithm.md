+++
title = "Shortest path algorithm"
author = ["Cash Prokop-Weaver"]
date = 2022-12-21T06:03:00-08:00
lastmod = 2023-08-02T12:25:27-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "555129b5-299e-4605-a2cd-9f77ebcede3d"
+++

> In graph theory [[Graph theory]({{< relref "graph_theory.md" >}})], the shortest path problem is the problem of finding a path between two vertices (or nodes) in a graph such that the sum of the weights of its constituent edges is minimized.


## Algorithms {#algorithms}

-   [Single-source shortest path problem]({{< relref "single_source_shortest_path_problem.md" >}})
    -   Non-negative weights: [Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}}), [A\*]({{< relref "a_star_algorithm.md" >}})
    -   Negative weights: [Bellman-Ford algorithm]({{< relref "bellman_ford_algorithm.md" >}})
-   [Single-pair shortest path problem]({{< relref "single_pair_shortest_path_problem.md" >}})
    -   Non-negative weights: [Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}})
    -   Negative weights: [Bellman-Ford algorithm]({{< relref "bellman_ford_algorithm.md" >}})
-   [All-pairs shortest path problem]({{< relref "all_pairs_shortest_path_problem.md" >}})
    -   [Floyd-Warshall algorithm]({{< relref "floyd_warshall_algorithm.md" >}})


## Flashcards {#flashcards}


### Definition {#definition}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.95 | 6   | 142.51   | 2023-08-12T02:05:35Z |
| back     | 2.65 | 6   | 139.58   | 2023-08-11T07:51:59Z |

Optimal path between two [Vertices]({{< relref "vertex.md" >}}) in a [Graph]({{< relref "graph.md" >}})


#### Back {#back}

A path \\(p\\) between two [Vertices]({{< relref "vertex.md" >}}) such that \\(\operatorname{cost}(p) \leq \operatorname{cost}(p^\prime) \\;\forall\\; p^\prime \\;\text{in}\\; P\\).


#### Source {#source}


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.80 | 7   | 330.71   | 2024-05-18T18:13:12Z |
| back     | 2.80 | 7   | 300.48   | 2024-04-20T01:02:00Z |

[Negative cycle]({{< relref "cycle.md#negative-cycle" >}}) in the context of [Shortest path problem]({{< relref "shortest_path_algorithm.md" >}})


#### Back {#back}

[Negative cycles]({{< relref "cycle.md#negative-cycle" >}}) allow for infinitely small distances between nodes and make it impossible to find the cheapest path between points which can reach the cycle.


#### Source {#source}

(<a href="#citeproc_bib_item_3">“Shortest Path Problem” 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 7   | 235.13   | 2024-01-13T23:16:42Z |
| 1        | 2.80 | 6   | 146.34   | 2023-08-26T05:41:28Z |

{{[Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}})}{single algorithm}@0} solves the [Single-pair shortest path problem]({{< relref "single_pair_shortest_path_problem.md" >}}) for [Graphs]({{< relref "graph.md" >}}) {{without}@1} negative weights.


#### Source {#source}

(<a href="#citeproc_bib_item_2">“Dijkstra’s Algorithm” 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 6   | 149.13   | 2023-08-16T19:33:12Z |
| 1        | 2.65 | 7   | 262.45   | 2024-03-12T01:00:37Z |

{{[Bellman-Ford algorithm]({{< relref "bellman_ford_algorithm.md" >}})}@0} solves the [Single-pair shortest path problem]({{< relref "single_pair_shortest_path_problem.md" >}}) for [Graphs]({{< relref "graph.md" >}}) {{with}{with/without}@1} negative weights


#### Source {#source}

(<a href="#citeproc_bib_item_1">“BellmanFord Algorithm” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“BellmanFord Algorithm.” 2022. <i>Wikipedia</i>, May. <a href="https://en.wikipedia.org/w/index.php?title=Bellman%E2%80%93Ford_algorithm&oldid=1088801570">https://en.wikipedia.org/w/index.php?title=Bellman%E2%80%93Ford_algorithm&#38;oldid=1088801570</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>“Dijkstra’s Algorithm.” 2022. <i>Wikipedia</i>, December. <a href="https://en.wikipedia.org/w/index.php?title=Dijkstra%27s_algorithm&oldid=1127202995">https://en.wikipedia.org/w/index.php?title=Dijkstra%27s_algorithm&#38;oldid=1127202995</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_3"></a>“Shortest Path Problem.” 2022. <i>Wikipedia</i>, December. <a href="https://en.wikipedia.org/w/index.php?title=Shortest_path_problem&oldid=1126599032">https://en.wikipedia.org/w/index.php?title=Shortest_path_problem&#38;oldid=1126599032</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Single-pair shortest path problem]({{< relref "single_pair_shortest_path_problem.md" >}})
-   [Single-source shortest path problem]({{< relref "single_source_shortest_path_problem.md" >}})
-   [Directed acyclic graph]({{< relref "directed_acyclic_graph.md" >}})
-   [December 2022]({{< relref "december_2022.md" >}})
-   [Todos]({{< relref "todos.md" >}})
-   [Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}})
-   [Ali Kemal Sinop, Lisa Fawcett, Sreenivas Gollapudi, Kostas Kollias | Robust Routing Using Electrical Flows]({{< relref "ali_kemal_sinop_lisa_fawcett_sreenivas_gollapudi_kostas_kollias_robust_routing_using_electrical_flows.md" >}})
-   [All-pairs shortest path problem]({{< relref "all_pairs_shortest_path_problem.md" >}})
-   [Widest path problem]({{< relref "widest_path_problem.md" >}})
-   [Contraction hierarchies]({{< relref "contraction_hierarchies.md" >}})
