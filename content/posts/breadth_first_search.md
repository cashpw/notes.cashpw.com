+++
title = "Breadth-first search"
author = ["Cash Prokop-Weaver"]
date = 2022-06-29T17:20:00-07:00
lastmod = 2022-12-17T11:06:44-08:00
tags = ["has-todo", "concept", "has-todo", "concept"]
categories = ["has-todo", "concept"]
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
| front    | 2.65 | 5   | 44.48    | 2023-01-05T13:36:48Z |


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
| 0        | 2.65 | 6   | 89.67    | 2023-03-14T10:53:00Z |


#### Extra {#extra}


#### Source {#source}


### {{[Breadth-first search]({{< relref "breadth_first_search.md" >}})}@0} follows {{[Level-order]({{< relref "level_order_tree_traversal.md" >}})}{traversal order}@1} {#breadth-first-search--breadth-first-search-dot-md--0-follows-level-order--level-order-tree-traversal-dot-md--traversal-order-1}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 6   | 107.36   | 2023-03-25T00:19:18Z |
| 1        | 2.50 | 6   | 85.70    | 2023-03-01T10:33:06Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_3">“Tree Traversal” 2022</a>)


### [Breadth-first search]({{< relref "breadth_first_search.md" >}}) time complexity: {{\\(O(\href{/posts/cardinality}{\vert V \vert} + \href{/posts/cardinality}{\vert E \vert})\\)}@0} {#breadth-first-search--breadth-first-search-dot-md--time-complexity-o--vert-v-vert-plus-vert-e-vert--0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 4   | 18.15    | 2022-12-21T22:49:40Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Breadth-First Search” 2022</a>)


### [Breadth-first search]({{< relref "breadth_first_search.md" >}}) space complexity: {{\\(O(\href{/posts/cardinality}{\vert V \vert})\\)}@0} {#breadth-first-search--breadth-first-search-dot-md--space-complexity-o--vert-v-vert--0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 6   | 65.36    | 2022-12-25T23:19:46Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Breadth-First Search” 2022</a>)


### Implement [Breadth-first search]({{< relref "breadth_first_search.md" >}}) in [Python]({{< relref "python.md" >}}) {#implement-breadth-first-search--breadth-first-search-dot-md--in-python--python-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.5  | -1  | 0        | 2022-01-01T13:00:00Z |

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Breadth-First Search.” 2022. <i>Wikipedia</i>, June. <a href="https://en.wikipedia.org/w/index.php?title=Breadth-first_search&oldid=1091199031">https://en.wikipedia.org/w/index.php?title=Breadth-first_search&#38;oldid=1091199031</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>“Quicksort.” 2022. <i>Wikipedia</i>, June. <a href="https://en.wikipedia.org/w/index.php?title=Quicksort&oldid=1093780310">https://en.wikipedia.org/w/index.php?title=Quicksort&#38;oldid=1093780310</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_3"></a>“Tree Traversal.” 2022. <i>Wikipedia</i>, April. <a href="https://en.wikipedia.org/w/index.php?title=Tree_traversal&oldid=1083604462">https://en.wikipedia.org/w/index.php?title=Tree_traversal&#38;oldid=1083604462</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Level-order tree traversal]({{< relref "level_order_tree_traversal.md" >}})
-   [Iterative deepening depth-first-search]({{< relref "iterative_deepening_depth_first_search.md" >}})
-   [{{Iterative deepening depth-first-search}@1} {{uses much less memory}@2} than {{Breadth-first search}@0}]({{< relref "iterative_deepening_depth_first_search.md#id-0ad51c11-995b-4437-a218-82df11697f7a-iterative-deepening-depth-first-search-1-uses-much-less-memory-2-than-id-cff4f06c-6179-423d-aa1d-ba54d85615e2-breadth-first-search-0" >}})
-   [Describe]({{< relref "iterative_deepening_depth_first_search.md#describe" >}})
