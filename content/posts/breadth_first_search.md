+++
title = "Breadth-first search"
author = ["Cash Prokop-Weaver"]
date = 2022-06-29T17:20:00-07:00
lastmod = 2023-12-22T21:38:04-08:00
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


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Breadth-First Search.” 2022. <i>Wikipedia</i>, June. <a href="https://en.wikipedia.org/w/index.php?title=Breadth-first_search&oldid=1091199031">https://en.wikipedia.org/w/index.php?title=Breadth-first_search&#38;oldid=1091199031</a>.</div>
</div>

foo1


## Backlinks {#backlinks}

-   [Iterative deepening depth-first-search]({{< relref "iterative_deepening_depth_first_search.md" >}})
-   [Level-order tree traversal]({{< relref "level_order_tree_traversal.md" >}})
