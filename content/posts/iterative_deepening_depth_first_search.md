+++
title = "Iterative deepening depth-first-search"
author = ["Cash Prokop-Weaver"]
date = 2022-06-29T18:09:00-07:00
lastmod = 2023-12-22T22:41:24-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "0ad51c11-995b-4437-a218-82df11697f7a"
+++

> In computer science, iterative deepening search or more specifically iterative deepening depth-first search[2] (IDS or IDDFS) is a state space/graph search strategy in which a depth-limited version of [Depth-first search]({{< relref "depth_first_search.md" >}}) search is run repeatedly with increasing depth limits until the goal is found. IDDFS is optimal like [Breadth-first search]({{< relref "breadth_first_search.md" >}}), but uses much less memory; at each iteration, it visits the nodes in the search tree in the same order as depth-first search, but the cumulative order in which nodes are first visited is effectively breadth-first.
>
> (NO_ITEM_DATA:IterativeDeepeningDepthfirstSearch2021)


## Algorithm {#algorithm}


### Implementation {#implementation}

-   [Iterative deepening depth-first-search implementation in Python]({{< relref "iterative_deepening_depth_first_search_implementation_in_python.md" >}})


## Complexity {#complexity}


### Time {#time}

Worst-case: \\(\bigo{b^d}\\) where \\(b\\) is the branching factor (e.g. 2 for [Binary trees]({{< relref "binary_tree.md" >}})) and \\(d\\) is the depth of the shallowest solution.


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry">NO_ITEM_DATA:IterativeDeepeningDepthfirstSearch2021</div>
</div>

foo1


## Backlinks {#backlinks}

-   [Depth-first search]({{< relref "depth_first_search.md" >}})
-   [Iterative deepening depth-first-search implementation in Python]({{< relref "iterative_deepening_depth_first_search_implementation_in_python.md" >}})
