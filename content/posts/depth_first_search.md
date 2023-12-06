+++
title = "Depth-first search"
author = ["Cash Prokop-Weaver"]
date = 2022-06-29T16:36:00-07:00
lastmod = 2023-12-05T14:00:58-08:00
tags = ["hastodo", "concept", "hastodo", "concept"]
categories = ["hastodo", "concept"]
draft = false
slug = "81c88eaa-3ec9-486c-bcdf-457dd40b4eba"
+++

> Depth-first search (DFS) is an algorithm for traversing or searching [Tree]({{< relref "tree.md" >}}) or [Graph]({{< relref "graph.md" >}}) [Data structures]({{< relref "data_structures.md" >}}). The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking.
>
> (<a href="#citeproc_bib_item_1">“Depth-First Search” 2022</a>)


## Algorithm {#algorithm}


### Iterative {#iterative}

```nil
procedure DepthFirstSearch (graph, rootNode) is
  define a Stack: stack
  define a Set: visited

  stack.push(rootNode)

  while not stack.empty() do
    node = stack.pop()
    if node not in visited then
      if node is a goal then
        return node
      for connectedNode in graph.connectedNodes(node) do
        stack.push(connectedNode)
```

Based on iterative algorithm in (<a href="#citeproc_bib_item_1">“Depth-First Search” 2022</a>).
\#+end_quote


### Recursive {#recursive}

```nil
procedure DepthFirstSearch (graph, node) is
  define a Set: visited

  procedure DepthFirstSearchInner (graph, node) is
    if node in visited then
      return nil
    visited.add(node)

    if node is a goal then
      return node

    found = nil
    for connectedNode in graph.connectedNodes(node) do
      found = DepthFirstSearchInner(graph, connectedNode)
      if found then
         return found

    return nil

  return DepthFirstSearchInner(graph, node)
```

Based on recursive algorithm in (<a href="#citeproc_bib_item_1">“Depth-First Search” 2022</a>).


## Complexity {#complexity}

|       | Worst-case                                 |
|-------|--------------------------------------------|
| Time  | \\(\bigo{\href{/posts/cardinality}{\vert V \vert} + \href{/posts/cardinality}{\vert E \vert}}\\) |
| Space | \\(\bigo{\href{/posts/cardinality}{\vert V \vert}}\\)                 |

Where \\(V\\) is the set of [Vertices]({{< relref "vertex.md" >}}) and \\(E\\) is the set of [Edges]({{< relref "edge.md" >}}).


## Alternatives {#alternatives}

-   [Iterative deepening depth-first-search]({{< relref "iterative_deepening_depth_first_search.md" >}})


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Depth-First Search.” 2022. <i>Wikipedia</i>, June. <a href="https://en.wikipedia.org/w/index.php?title=Depth-first_search&oldid=1091833357">https://en.wikipedia.org/w/index.php?title=Depth-first_search&#38;oldid=1091833357</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Iterative deepening depth-first-search]({{< relref "iterative_deepening_depth_first_search.md" >}})
-   [Trie]({{< relref "trie.md" >}})
-   [Topological order by Depth-first search in Python]({{< relref "topological_order_by_depth_first_search_in_python.md" >}})
-   [Breadth-first search]({{< relref "breadth_first_search.md" >}})
-   [Topological order]({{< relref "topological_order.md" >}})
