+++
title = "Breadth-first search"
author = ["Cash Prokop-Weaver"]
date = 2022-06-29T17:20:00-07:00
lastmod = 2023-09-24T09:57:18-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "cff4f06c-6179-423d-aa1d-ba54d85615e2"
+++

> Breadth-first search (BFS) is an algorithm for searching a [Tree]({{< relref "tree.md" >}}) [or [Graph]({{< relref "graph.md" >}})] [Data structure]({{< relref "data_structures.md" >}}) for a node that satisfies a given property. It starts at the tree root and explores all nodes at the present depth prior to moving on to the nodes at the next depth level. Extra memory, usually a [Queue]({{< relref "queue.md" >}}), is needed to keep track of the child nodes that were encountered but not yet explored.


## Algorithm {#algorithm}

[Breadth-first search]({{< relref "breadth_first_search.md" >}}) follows [Level-order tree traversal]({{< relref "level_order_tree_traversal.md" >}}).

```nil
procedure breadthFirstSearch(graph, rootNode)
  define a Queue: queue
  define a Set: visited

  visited.add(rootNode)
  queue.enqueue(rootNode)

  while not queue.empty() do
    node = queue.dequeue()
    if node not in visited do
      visited.add(node)
      for connectedNode in graph.connectedNodes(node) do
        queue.enqueue(connectedNode)
```

Based on the algorithm in (<a href="#citeproc_bib_item_1">“Breadth-First Search” 2022</a>).


## Complexity {#complexity}

|       | Worst-case                             |
|-------|----------------------------------------|
| Time  | \\(O(\href{/posts/cardinality}{\vert V \vert} + \href{/posts/cardinality}{\vert E \vert})\\) |
| Space | \\(O(\href{/posts/cardinality}{\vert V \vert})\\)                 |


## Flashcards {#flashcards}


### Describe {#describe}

[Breadth-first search]({{< relref "breadth_first_search.md" >}})


#### Back {#back}

A [Graph]({{< relref "graph.md" >}}) and [Tree]({{< relref "tree.md" >}}) traversal algorithm which follows [Level-order tree traversal]({{< relref "level_order_tree_traversal.md" >}}). The implementation uses a [Queue]({{< relref "queue.md" >}}).

|       | Worst-case                             |
|-------|----------------------------------------|
| Time  | \\(O(\href{/posts/cardinality}{\vert V \vert} + \href{/posts/cardinality}{\vert E \vert})\\) |
| Space | \\(O(\href{/posts/cardinality}{\vert V \vert})\\)                 |


#### Source {#source}

(<a href="#citeproc_bib_item_2">“Quicksort” 2022</a>)


### Compare and contrast: [Breadth-first search]({{< relref "breadth_first_search.md" >}}) and [Depth-first search]({{< relref "depth_first_search.md" >}}) {#compare-and-contrast-breadth-first-search--breadth-first-search-dot-md--and-depth-first-search--depth-first-search-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 7   | 257.53   | 2024-01-11T11:34:23Z |


#### Context {#context}

Computer science


#### Back {#back}

-   [Breadth-first search]({{< relref "breadth_first_search.md" >}}) requires more memory than [Depth-first search]({{< relref "depth_first_search.md" >}}) due to the queue
-   [Breadth-first search]({{< relref "breadth_first_search.md" >}}) uses a queue
-   [Depth-first search]({{< relref "depth_first_search.md" >}}) uses either a stack (iterative) or the call-stack (recursive)
-   [Breadth-first search]({{< relref "breadth_first_search.md" >}}) is guaranteed to find the shortest path to the goal (optimal) whereas [Depth-first search]({{< relref "depth_first_search.md" >}}) isn't optimal


#### Source {#source}


### [Breadth-first search]({{< relref "breadth_first_search.md" >}}) is {{guaranteed}@0} to find the shortest path to the goal {#breadth-first-search--breadth-first-search-dot-md--is-guaranteed-0-to-find-the-shortest-path-to-the-goal}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 7   | 242.45   | 2023-11-12T02:03:55Z |


#### Extra {#extra}


#### Source {#source}


### {{[Breadth-first search]({{< relref "breadth_first_search.md" >}})}@0} follows {{[Level-order]({{< relref "level_order_tree_traversal.md" >}})}{traversal order}@1} {#breadth-first-search--breadth-first-search-dot-md--0-follows-level-order--level-order-tree-traversal-dot-md--traversal-order-1}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 7   | 314.91   | 2024-02-03T17:04:29Z |
| 1        | 2.50 | 7   | 207.69   | 2023-09-26T08:17:16Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_3">“Tree Traversal” 2022</a>)


### [Breadth-first search]({{< relref "breadth_first_search.md" >}}) time complexity: {{\\(O(\href{/posts/cardinality}{\vert V \vert} + \href{/posts/cardinality}{\vert E \vert})\\)}@0} {#breadth-first-search--breadth-first-search-dot-md--time-complexity-o--vert-v-vert-plus-vert-e-vert--0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 1.90 | 8   | 146.97   | 2023-12-30T14:54:01Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Breadth-First Search” 2022</a>)


### [Breadth-first search]({{< relref "breadth_first_search.md" >}}) space complexity: {{\\(O(\href{/posts/cardinality}{\vert V \vert})\\)}@0} {#breadth-first-search--breadth-first-search-dot-md--space-complexity-o--vert-v-vert--0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 8   | 442.15   | 2024-08-24T19:08:09Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Breadth-First Search” 2022</a>)


### Implement [Breadth-first search]({{< relref "breadth_first_search.md" >}}) in [Python]({{< relref "python.md" >}}) {#implement-breadth-first-search--breadth-first-search-dot-md--in-python--python-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.35 | 3   | 6.00     | 2023-08-14T14:58:37Z |

[Breadth-first search in python]({{< relref "breadth_first_search_in_python.md" >}})

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Breadth-First Search.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Breadth-first_search&oldid=1091199031">https://en.wikipedia.org/w/index.php?title=Breadth-first_search&#38;oldid=1091199031</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>“Quicksort.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Quicksort&oldid=1093780310">https://en.wikipedia.org/w/index.php?title=Quicksort&#38;oldid=1093780310</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_3"></a>“Tree Traversal.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Tree_traversal&oldid=1083604462">https://en.wikipedia.org/w/index.php?title=Tree_traversal&#38;oldid=1083604462</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Level-order tree traversal]({{< relref "level_order_tree_traversal.md" >}})
-   [Iterative deepening depth-first-search]({{< relref "iterative_deepening_depth_first_search.md" >}})
