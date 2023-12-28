+++
title = "Floyd-Warshall algorithm"
author = ["Cash Prokop-Weaver"]
date = 2022-12-22T10:12:00-08:00
lastmod = 2023-12-23T12:02:10-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "d0a89ea1-4add-495b-8df4-1f27e9de71c6"
+++

> In computer science, the Floyd–Warshall algorithm (also known as Floyd's algorithm, the Roy–Warshall algorithm, the Roy–Floyd algorithm, or the WFI algorithm) is an algorithm for finding shortest paths in a directed weighted graph with positive or negative edge weights (but with no negative cycles).
>
> (<a href="#citeproc_bib_item_1">“FloydWarshall Algorithm” 2022</a>)


## Algorithm {#algorithm}

1.  Initialize distances
    1.  `distance` is a \\(|V| \times |V|\\) matrix with values initialized to \\(\infty\\)
    2.  `distance[u][v] = edge[u][v]`
    3.  `distance[u][u] = 0`
2.  Nested: for k, i, j from 1 to \\(|V|\\), do
    1.  `candidate_distance = distance[i][k] + distance[k][j]`
    2.  `distance[i][j] = candidate_distance if distance[i][j] < candidate_distance`

In pseudocode:

> ```nil
> let dist be a |V| × |V| array of minimum distances initialized to ∞ (infinity)
> for each edge (u, v) do
>     dist[u][v] ← w(u, v)  // The weight of the edge (u, v)
> for each vertex v do
>     dist[v][v] ← 0
> for k from 1 to |V|
>     for i from 1 to |V|
>         for j from 1 to |V|
>             if dist[i][j] > dist[i][k] + dist[k][j]
>                 dist[i][j] ← dist[i][k] + dist[k][j]
>             end if
>
> ```
>
> (<a href="#citeproc_bib_item_1">“FloydWarshall Algorithm” 2022</a>)


## Complexity {#complexity}

-   Time: \\(\bigtheta{|V|^3}\\)
-   Space: \\(\bigtheta{|V|^2}\\)


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“FloydWarshall Algorithm.” 2022. <i>Wikipedia</i>, September. <a href="https://en.wikipedia.org/w/index.php?title=Floyd%E2%80%93Warshall_algorithm&oldid=1113259725">https://en.wikipedia.org/w/index.php?title=Floyd%E2%80%93Warshall_algorithm&#38;oldid=1113259725</a>.</div>
</div>



## Backlinks {#backlinks}

-   [All-pairs shortest path problem]({{< relref "all_pairs_shortest_path_problem.md" >}})
-   [Shortest path algorithm]({{< relref "shortest_path_algorithm.md" >}})
