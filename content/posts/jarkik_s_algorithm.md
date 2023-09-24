+++
title = "Jarnik's algorithm"
author = ["Cash Prokop-Weaver"]
date = 2023-01-17T08:41:00-08:00
lastmod = 2023-09-24T10:20:59-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "2e340461-20cb-4d63-afdb-cac74fbea013"
+++

> In computer science, Prim's algorithm (also known as Jarník's algorithm) is a greedy algorithm [Greedy algorithm]({{< relref "greedy_algorithm.md" >}})] that finds a minimum spanning tree [[Minimum spanning tree]({{< relref "minimum_spanning_tree.md" >}})] for a weighted undirected graph [[Graph]({{< relref "graph.md" >}})]. This means it finds a subset of the edges that forms a tree that includes every vertex, where the total weight of all the edges in the tree is minimized. The algorithm operates by building this tree one vertex at a time, from an arbitrary starting vertex, at each step adding the cheapest possible connection from the tree to another vertex.
>
> (<a href="#citeproc_bib_item_1">“Prim’s Algorithm” 2022</a>)


## Algorithm {#algorithm}

> The algorithm may informally be described as performing the following steps:
>
> 1.  Initialize a tree with a single vertex, chosen arbitrarily from the graph.
> 2.  Grow the tree by one edge: of the edges that connect the tree to vertices not yet in the tree, find the minimum-weight edge, and transfer it to the tree.
> 3.  Repeat step 2 (until all vertices are in the tree).
>
> (<a href="#citeproc_bib_item_1">“Prim’s Algorithm” 2022</a>)


## Time complexity {#time-complexity}

-   With [Binary heap]({{< relref "binary_heap.md" >}}) and an [Adjacency list]({{< relref "adjacency_list.md" >}}): \\(\bigo{|E|\log(|V|)}\\)
-   With [Fibonacci heap]({{< relref "fibonacci_heap.md" >}}) and an [Adjacency list]({{< relref "adjacency_list.md" >}}): \\(\bigo{|E| + |V|\log(|V|)}\\)


## Flashcards {#flashcards}


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.65 | 7   | 225.56   | 2024-02-01T04:11:59Z |
| back     | 2.80 | 6   | 142.00   | 2023-10-01T15:57:05Z |

Discovery of [Jarnik's algorithm]({{< relref "jarkik_s_algorithm.md" >}})


#### Back {#back}

-   Discovered by Vojtěch Jarník in 1930
-   Rediscovered by Robert Prim in 1957
-   Rediscovered by Dijkstra in 1959


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Prim’s Algorithm” 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 7   | 314.43   | 2024-06-01T13:55:08Z |

[Jarnik's algorithm]({{< relref "jarkik_s_algorithm.md" >}}) is {{a [Greedy algorithm]({{< relref "greedy_algorithm.md" >}})}{heuristic}@0}.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Prim’s Algorithm” 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 1.45 | 7   | 14.89    | 2023-09-24T20:33:40Z |
| back     | 2.65 | 6   | 145.57   | 2023-10-02T06:35:44Z |

Time complexity of [Jarnik's algorithm]({{< relref "jarkik_s_algorithm.md" >}})


#### Back {#back}

([Minimum spanning tree]({{< relref "minimum_spanning_tree.md" >}}))

-   With [Binary heap]({{< relref "binary_heap.md" >}}) and an [Adjacency list]({{< relref "adjacency_list.md" >}}): \\(\bigo{|E|\log(|V|)}\\)
-   With [Fibonacci heap]({{< relref "fibonacci_heap.md" >}}) and an [Adjacency list]({{< relref "adjacency_list.md" >}}): \\(\bigo{|E| + |V|\log(|V|)}\\)


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Prim’s Algorithm” 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 7   | 236.20   | 2024-02-12T20:28:30Z |

[Jarnik's algorithm]({{< relref "jarkik_s_algorithm.md" >}})'s purpose: {{find a [Minimum spanning tree]({{< relref "minimum_spanning_tree.md" >}})}@0}.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Prim’s Algorithm” 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.05 | 7   | 129.83   | 2023-12-29T08:49:59Z |
| back     | 2.80 | 6   | 137.37   | 2023-09-25T00:52:09Z |

[Jarnik's algorithm]({{< relref "jarkik_s_algorithm.md" >}}) in pseudocode


#### Back {#back}

> 1.  Initialize a tree with a single vertex, chosen arbitrarily from the graph.
> 2.  Grow the tree by one edge: of the edges that connect the tree to vertices not yet in the tree, find the minimum-weight edge, and transfer it to the tree.
> 3.  Repeat step 2 (until all vertices are in the tree).


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Prim’s Algorithm” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Prim’s Algorithm.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Prim%27s_algorithm&oldid=1127278141">https://en.wikipedia.org/w/index.php?title=Prim%27s_algorithm&#38;oldid=1127278141</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Jarnik's algorithm implementation in Python]({{< relref "jarnik_s_algorithm_implementation_in_python.md" >}})
-   [Minimum spanning tree]({{< relref "minimum_spanning_tree.md" >}})
