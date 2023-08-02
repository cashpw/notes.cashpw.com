+++
title = "Iterative deepening depth-first-search"
author = ["Cash Prokop-Weaver"]
date = 2022-06-29T18:09:00-07:00
lastmod = 2023-08-02T11:15:29-07:00
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
| 0        | 2.35 | 8   | 427.55   | 2024-08-16T02:32:47Z |
| 1        | 2.20 | 6   | 63.45    | 2023-09-16T00:03:39Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_2">“Iterative Deepening Depth-First Search” 2021</a>)


### {{[Iterative deepening depth-first-search]({{< relref "iterative_deepening_depth_first_search.md" >}})}@1} {{uses much less memory}@2} than {{[Breadth-first search]({{< relref "breadth_first_search.md" >}})}@0} {#iterative-deepening-depth-first-search--iterative-deepening-depth-first-search-dot-md--1-uses-much-less-memory-2-than-breadth-first-search--breadth-first-search-dot-md--0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 2        | 2.65 | 7   | 287.40   | 2023-12-11T01:58:01Z |
| 1        | 2.50 | 7   | 228.28   | 2023-08-23T21:55:51Z |
| 0        | 2.65 | 8   | 371.74   | 2024-06-12T08:20:15Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_2">“Iterative Deepening Depth-First Search” 2021</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.95 | 7   | 259.99   | 2023-10-13T14:30:19Z |
| back     | 2.65 | 7   | 252.48   | 2023-12-05T03:47:35Z |

[Iterative deepening depth-first-search]({{< relref "iterative_deepening_depth_first_search.md" >}})


#### Back {#back}

-   A modified version of [Depth-first search]({{< relref "depth_first_search.md" >}}) which is depth-limited and slowly expands its depth.
-   Has a lower memory requirement than [Breadth-first search]({{< relref "breadth_first_search.md" >}})


#### Source {#source}

(<a href="#citeproc_bib_item_2">“Iterative Deepening Depth-First Search” 2021</a>)


### Implement {#implement}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 1.90 | 3   | 6.00     | 2023-08-04T14:56:04Z |

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

-   [Iterative deepening depth-first-search implementation in Python]({{< relref "iterative_deepening_depth_first_search_implementation_in_python.md" >}})
-   [Depth-first search]({{< relref "depth_first_search.md" >}})
