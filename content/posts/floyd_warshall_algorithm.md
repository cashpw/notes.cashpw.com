+++
title = "Floyd-Warshall algorithm"
author = ["Cash Prokop-Weaver"]
date = 2022-12-22T10:12:00-08:00
lastmod = 2023-09-24T10:11:16-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "d0a89ea1-4add-495b-8df4-1f27e9de71c6"
+++

> In computer science, the Floyd–Warshall algorithm (also known as Floyd's algorithm, the Roy–Warshall algorithm, the Roy–Floyd algorithm, or the WFI algorithm) is an algorithm for finding shortest paths in a directed weighted graph with positive or negative edge weights (but with no negative cycles).
>
> (<a href="#citeproc_bib_item_1">“Floyd–Warshall Algorithm” 2022</a>)


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
> (<a href="#citeproc_bib_item_1">“Floyd–Warshall Algorithm” 2022</a>)


## Complexity {#complexity}

-   Time: \\(\bigtheta{|V|^3}\\)
-   Space: \\(\bigtheta{|V|^2}\\)


## Flashcards {#flashcards}


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 7   | 298.83   | 2024-04-19T13:32:08Z |

Time complexity for [Floyd-Warshall algorithm]({{< relref "floyd_warshall_algorithm.md" >}}) is {{\\(\bigtheta{|V|^3}\\)}@0}.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Floyd–Warshall Algorithm” 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 7   | 303.81   | 2024-04-29T21:06:33Z |

Space complexity for [Floyd-Warshall algorithm]({{< relref "floyd_warshall_algorithm.md" >}}) is {{\\(\bigtheta{|V|^2}\\)}@0}.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Floyd–Warshall Algorithm” 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.65 | 7   | 328.06   | 2024-07-13T17:23:05Z |
| back     | 2.20 | 7   | 150.31   | 2023-10-30T08:45:45Z |

[Floyd-Warshall algorithm]({{< relref "floyd_warshall_algorithm.md" >}}) for solving [All-pairs shortest path problem]({{< relref "all_pairs_shortest_path_problem.md" >}})


#### Back {#back}

-   Exhaustive search
-   Time complexity: \\(\bigtheta{|V|^3}\\)
-   Space complexity: \\(\bigtheta{|V|^2}\\)

<!--listend-->

````nil
let dist be a |V| × |V| array of minimum distances initialized to ∞ (infinity)
for each edge (u, v) do
    dist[u][v] ← w(u, v)  // The weight of the edge (u, v)
for each vertex v do
    dist[v][v] ← 0
for k from 1 to |V|
    for i from 1 to |V|
        for j from 1 to |V|
            if dist[i][j] > dist[i][k] + dist[k][j]
                dist[i][j] ← dist[i][k] + dist[k][j]
            end if
````


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Floyd–Warshall Algorithm” 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 7   | 285.32   | 2024-04-20T23:24:46Z |

Nested iteration in [Floyd-Warshall algorithm]({{< relref "floyd_warshall_algorithm.md" >}}) goes {{k from 1 to \\(|V|\\), i from 1 to \\(|V|\\), j from 1 to \\(|V|\\)}@0}.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Floyd–Warshall Algorithm” 2022</a>)


### Normal {#normal}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 1.45 | 5   | 12.20    | 2023-09-22T18:23:55Z |

[Floyd-Warshall algorithm]({{< relref "floyd_warshall_algorithm.md" >}})

````nil
for k from 1 to |V|
  for i from 1 to |V|
    for j from 1 to |V|
      [...]
````


#### Back {#back}

````nil
for k from 1 to |V|
  for i from 1 to |V|
    for j from 1 to |V|
      if dist[i][j] > dist[i][k] + dist[k][j]
        dist[i][j] ← dist[i][k] + dist[k][j]
````


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Floyd–Warshall Algorithm” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Floyd–Warshall Algorithm.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Floyd%E2%80%93Warshall_algorithm&oldid=1113259725">https://en.wikipedia.org/w/index.php?title=Floyd%E2%80%93Warshall_algorithm&#38;oldid=1113259725</a>.</div>
</div>


## Backlinks {#backlinks}

-   [All-pairs shortest path problem]({{< relref "all_pairs_shortest_path_problem.md" >}})
-   [Shortest path algorithm]({{< relref "shortest_path_algorithm.md" >}})
