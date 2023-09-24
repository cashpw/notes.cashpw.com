+++
title = "Bellman-Ford algorithm"
author = ["Cash Prokop-Weaver"]
date = 2022-12-22T10:49:00-08:00
lastmod = 2023-09-24T09:55:11-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "2fe284fb-7fbc-4956-9857-db90b66e504e"
+++

> The Bellman–Ford algorithm is an algorithm that computes shortest paths from a single source vertex to all of the other vertices in a weighted digraph. It is slower than Dijkstra's algorithm for the same problem, but more versatile, as it is capable of handling graphs in which some of the edge weights are negative numbers.
>
> (<a href="#citeproc_bib_item_1">“Bellman–Ford Algorithm” 2022</a>)


## Algorithm {#algorithm}

> ```nil
> function BellmanFord(list vertices, list edges, vertex source) is
>
>     // This implementation takes in a graph, represented as
>     // lists of vertices (represented as integers [0..n-1]) and edges,
>     // and fills two arrays (distance and predecessor) holding
>     // the shortest path from the source to each vertex
>
>     distance := list of size n
>     predecessor := list of size n
>
>     // Step 1: initialize graph
>     for each vertex v in vertices do
>
>         distance[v] := inf             // Initialize the distance to all vertices to infinity
>         predecessor[v] := null         // And having a null predecessor
>
>     distance[source] := 0              // The distance from the source to itself is, of course, zero
>
>     // Step 2: relax edges repeatedly
>
>     repeat |V|−1 times:
>          for each edge (u, v) with weight w in edges do
>              if distance[u] + w < distance[v] then
>                  distance[v] := distance[u] + w
>                  predecessor[v] := u
>
>     // Step 3: check for negative-weight cycles
>     for each edge (u, v) with weight w in edges do
>         if distance[u] + w < distance[v] then
>             // Step 4: find a negative-weight cycle
>             negativeloop := [v, u]
>             repeat |V|−1 times:
>                 u := negativeloop[0]
>                 for each edge (u, v) with weight w in edges do
>                     if distance[u] + w < distance[v] then
>                         negativeloop := concatenate([v], negativeloop)
>             find a cycle in negativeloop, let it be ncycle
>             // use any cycle detection algorithm here
>             error "Graph contains a negative-weight cycle", ncycle
>
>     return distance, predecessor
>
> ```
>
> Simply put, the algorithm initializes the distance to the source to 0 and all other nodes to infinity. Then for all edges, if the distance to the destination can be shortened by taking the edge, the distance is updated to the new lower value.
>
> The core of the algorithm is a loop that scans across all edges at every loop. For every \\(i \leq |V| - 1\\), at the end of the \\(i\text{-th}\\) iteration, from any vertex v, following the predecessor trail recorded in predecessor yields a path that has a total weight that is at most distance[v], and further, distance[v] is a lower bound to the length of any path from source to v that uses at most i edges.
>
> Since the longest possible path without a cycle can be \\(|V| - 1\\) edges, the edges must be scanned \\(|V| - 1\\) times to ensure the shortest path has been found for all nodes. A final scan of all the edges is performed and if any distance is updated, then a path of length \\(|V|\\) edges has been found which can only occur if at least one negative cycle exists in the graph.
>
> (<a href="#citeproc_bib_item_1">“Bellman–Ford Algorithm” 2022</a>)

[Bellman-Ford implementation in Python]({{< relref "bellman_ford_implementation_in_python.md" >}})


## Flashcards {#flashcards}


### Compare and contrast {#compare-and-contrast}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 7   | 291.51   | 2024-04-17T13:59:00Z |

[Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}}) and [Bellman-Ford algorithm]({{< relref "bellman_ford_algorithm.md" >}})


#### Back {#back}

-   Both solve the [Single-pair]({{< relref "single_pair_shortest_path_problem.md" >}}) and [Single-source shortest path problem]({{< relref "single_source_shortest_path_problem.md" >}})
-   [Bellman-Ford algorithm]({{< relref "bellman_ford_algorithm.md" >}}) supports negative weights whereas [Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}}) doesn't


#### Source {#source}

-   (<a href="#citeproc_bib_item_1">“Bellman–Ford Algorithm” 2022</a>)
-   (<a href="#citeproc_bib_item_2">“Dijkstra’s Algorithm” 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 7   | 349.26   | 2024-07-14T06:16:22Z |
| 1        | 2.65 | 7   | 269.55   | 2024-03-20T02:35:03Z |

Failure cases for {{[Bellman-Ford algorithm]({{< relref "bellman_ford_algorithm.md" >}})}@0} are {{[Negative cycles]({{< relref "cycle.md#negative-cycle" >}})}@1}, but not negative edges.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Bellman–Ford Algorithm” 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 7   | 347.49   | 2024-07-02T03:03:32Z |

[Bellman-Ford algorithm]({{< relref "bellman_ford_algorithm.md" >}}) is {{slower}{speed}@0} than [Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}})


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Bellman–Ford Algorithm” 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 1.60 | 8   | 59.96    | 2023-11-03T12:23:41Z |

Time complexity of [Bellman-Ford algorithm]({{< relref "bellman_ford_algorithm.md" >}}) is {{\\(\bigtheta{|V||E|}\\)}@0}.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Bellman–Ford Algorithm” 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 7   | 300.07   | 2024-05-05T17:19:30Z |

[Bellman-Ford algorithm]({{< relref "bellman_ford_algorithm.md" >}}) iterates over {{[Edges]({{< relref "edge.md" >}})}@0}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Bellman–Ford Algorithm” 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.20 | 6   | 79.63    | 2023-11-11T07:36:34Z |
| back     | 2.80 | 7   | 409.31   | 2024-10-20T22:23:57Z |

Iterations in [Bellman-Ford algorithm]({{< relref "bellman_ford_algorithm.md" >}})


#### Back {#back}

The algorithm iterates through all edges in the graph \\(|V|\\) times.

1.  The first \\(|V|-1\\) times are to solve the [Single-source shortest path problem]({{< relref "single_source_shortest_path_problem.md" >}}).
2.  The \\(|V|\_{\text{th}}\\) time through the edges is to check for negative cycles.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Bellman–Ford Algorithm” 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.35 | 7   | 258.49   | 2024-03-17T12:52:21Z |
| back     | 2.50 | 7   | 267.62   | 2024-04-05T03:51:12Z |

[Bellman-Ford algorithm]({{< relref "bellman_ford_algorithm.md" >}})


#### Back {#back}

An exhaustive (try every combination) search for the optimal pathway.

1.  Initialize
    1.  Distances to all nodes to be \\(\infty\\)
    2.  Distance to the source node to be \\(0\\)
2.  Relax edges
    ````nil
       repeat |V|−1 times:
         for each edge (u, v) with weight w in edges do
           if distance[u] + w < distance[v] then
             distance[v] := distance[u] + w
             predecessor[v] := u
    ````

3.  Check for any [Negative cycle]({{< relref "cycle.md#negative-cycle" >}})
    1.  Iterate over all edges one more time. If any distances can be updated, then there's a negative cycle; throw an error.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Bellman–Ford Algorithm” 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.95 | 7   | 498.04   | 2025-01-15T16:24:14Z |

[Bellman-Ford algorithm]({{< relref "bellman_ford_algorithm.md" >}}) supports negative weights because {{it's an exhaustive search; it tries every pathway}@0}.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Bellman–Ford Algorithm” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Bellman–Ford Algorithm.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Bellman%E2%80%93Ford_algorithm&oldid=1088801570">https://en.wikipedia.org/w/index.php?title=Bellman%E2%80%93Ford_algorithm&#38;oldid=1088801570</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>“Dijkstra’s Algorithm.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Dijkstra%27s_algorithm&oldid=1127202995">https://en.wikipedia.org/w/index.php?title=Dijkstra%27s_algorithm&#38;oldid=1127202995</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Single-pair shortest path problem]({{< relref "single_pair_shortest_path_problem.md" >}})
-   [Bellman-Ford implementation in Python]({{< relref "bellman_ford_implementation_in_python.md" >}})
-   [Shortest path algorithm]({{< relref "shortest_path_algorithm.md" >}})
-   [Single-source shortest path problem]({{< relref "single_source_shortest_path_problem.md" >}})
