+++
title = "Bellman-Ford algorithm"
author = ["Cash Prokop-Weaver"]
date = 2022-12-22T10:49:00-08:00
lastmod = 2023-12-23T10:39:44-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "2fe284fb-7fbc-4956-9857-db90b66e504e"
+++

> The Bellman–Ford algorithm is an algorithm that computes shortest paths from a single source vertex to all of the other vertices in a weighted digraph. It is slower than Dijkstra's algorithm for the same problem, but more versatile, as it is capable of handling graphs in which some of the edge weights are negative numbers.
>
> (<a href="#citeproc_bib_item_1">“BellmanFord Algorithm” 2022</a>)


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
> (<a href="#citeproc_bib_item_1">“BellmanFord Algorithm” 2022</a>)

[Bellman-Ford implementation in Python]({{< relref "bellman_ford_implementation_in_python.md" >}})


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“BellmanFord Algorithm.” 2022. <i>Wikipedia</i>, May. <a href="https://en.wikipedia.org/w/index.php?title=Bellman%E2%80%93Ford_algorithm&oldid=1088801570">https://en.wikipedia.org/w/index.php?title=Bellman%E2%80%93Ford_algorithm&#38;oldid=1088801570</a>.</div>
</div>

foo1


## Backlinks {#backlinks}

-   [Bellman-Ford implementation in Python]({{< relref "bellman_ford_implementation_in_python.md" >}})
-   [Shortest path algorithm]({{< relref "shortest_path_algorithm.md" >}})
-   [Single-pair shortest path problem]({{< relref "single_pair_shortest_path_problem.md" >}})
-   [Single-source shortest path problem]({{< relref "single_source_shortest_path_problem.md" >}})
