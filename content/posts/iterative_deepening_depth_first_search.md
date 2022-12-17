+++
title = "Iterative deepening depth-first-search"
author = ["Cash Prokop-Weaver"]
date = 2022-06-29T18:09:00-07:00
lastmod = 2022-12-17T11:17:25-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "0ad51c11-995b-4437-a218-82df11697f7a"
+++

> In computer science, iterative deepening search or more specifically iterative deepening depth-first search[2] (IDS or IDDFS) is a state space/graph search strategy in which a depth-limited version of [Depth-first search]({{< relref "depth_first_search.md" >}}) search is run repeatedly with increasing depth limits until the goal is found. IDDFS is optimal like [Breadth-first search]({{< relref "breadth_first_search.md" >}}), but uses much less memory; at each iteration, it visits the nodes in the search tree in the same order as depth-first search, but the cumulative order in which nodes are first visited is effectively breadth-first.
>
> (<a href="#citeproc_bib_item_2">“Iterative Deepening Depth-First Search” 2021</a>)


## Algorithm {#algorithm}


### Implementation {#implementation}

-   [Iterative deepening depth-first-search implementation in Python]({{< relref "iterative_deepening_depth_first_search_implementation_in_python.md" >}})


## Complexity {#complexity}


### Time {#time}

Worst-case: \\(\bigo{b^d}\\) where \\(b\\) is the branching factor (e.g. 2 for [Binary trees]({{< relref "binary_tree.md" >}})) and \\(d\\) is the depth of the shallowest solution.


## Flashcards {#flashcards}


### {{[Iterative deepening depth-first-search]({{< relref "iterative_deepening_depth_first_search.md" >}})}@1} is {{optimal}@0}, unlike [Depth-first search]({{< relref "depth_first_search.md" >}}) {#iterative-deepening-depth-first-search--iterative-deepening-depth-first-search-dot-md--1-is-optimal-0-unlike-depth-first-search--depth-first-search-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 6   | 74.08    | 2022-12-18T03:43:26Z |
| 1        | 2.50 | 7   | 139.09   | 2023-05-03T22:43:48Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_2">“Iterative Deepening Depth-First Search” 2021</a>)


### {{[Iterative deepening depth-first-search]({{< relref "iterative_deepening_depth_first_search.md" >}})}@1} {{uses much less memory}@2} than {{[Breadth-first search]({{< relref "breadth_first_search.md" >}})}@0} {#iterative-deepening-depth-first-search--iterative-deepening-depth-first-search-dot-md--1-uses-much-less-memory-2-than-breadth-first-search--breadth-first-search-dot-md--0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 2        | 2.50 | 6   | 108.49   | 2023-02-24T02:52:33Z |
| 1        | 2.65 | 6   | 86.73    | 2023-01-07T08:12:30Z |
| 0        | 2.65 | 6   | 65.88    | 2022-12-25T22:45:12Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_2">“Iterative Deepening Depth-First Search” 2021</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.80 | 6   | 87.42    | 2023-01-23T01:16:40Z |
| back     | 2.50 | 5   | 38.47    | 2022-12-19T04:55:51Z |

[Iterative deepening depth-first-search]({{< relref "iterative_deepening_depth_first_search.md" >}})


#### Back {#back}

-   A modified version of [Depth-first search]({{< relref "depth_first_search.md" >}}) which is depth-limited and slowly expands its depth.
-   Has a lower memory requirement than [Breadth-first search]({{< relref "breadth_first_search.md" >}})


#### Source {#source}

(<a href="#citeproc_bib_item_2">“Iterative Deepening Depth-First Search” 2021</a>)


### Implement {#implement}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.65 | 4   | 13.73    | 2022-12-14T10:33:06Z |

Implement [Iterative deepening depth-first-search]({{< relref "iterative_deepening_depth_first_search.md" >}})


#### Back {#back}

[Iterative deepening depth-first-search implementation in Python]({{< relref "iterative_deepening_depth_first_search_implementation_in_python.md" >}})


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Depth-First Search” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Depth-First Search.” 2022. <i>Wikipedia</i>, June. <a href="https://en.wikipedia.org/w/index.php?title=Depth-first_search&oldid=1091833357">https://en.wikipedia.org/w/index.php?title=Depth-first_search&#38;oldid=1091833357</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>“Iterative Deepening Depth-First Search.” 2021. <i>Wikipedia</i>, January. <a href="https://en.wikipedia.org/w/index.php?title=Iterative_deepening_depth-first_search&oldid=1001650193">https://en.wikipedia.org/w/index.php?title=Iterative_deepening_depth-first_search&#38;oldid=1001650193</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Depth-first search]({{< relref "depth_first_search.md" >}})
