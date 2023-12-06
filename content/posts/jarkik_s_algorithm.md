+++
title = "Jarnik's algorithm"
author = ["Cash Prokop-Weaver"]
date = 2023-01-17T08:41:00-08:00
lastmod = 2023-12-05T20:24:15-08:00
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


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Prim’s Algorithm.” 2022. <i>Wikipedia</i>, December. <a href="https://en.wikipedia.org/w/index.php?title=Prim%27s_algorithm&oldid=1127278141">https://en.wikipedia.org/w/index.php?title=Prim%27s_algorithm&#38;oldid=1127278141</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Jarnik's algorithm implementation in Python]({{< relref "jarnik_s_algorithm_implementation_in_python.md" >}})
-   [Minimum spanning tree]({{< relref "minimum_spanning_tree.md" >}})
