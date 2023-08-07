+++
title = "Depth-first search"
author = ["Cash Prokop-Weaver"]
date = 2022-06-29T16:36:00-07:00
lastmod = 2023-08-02T10:48:51-07:00
tags = ["has-todo", "concept", "has-todo", "concept"]
categories = ["has-todo", "concept"]
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


## Flashcards {#flashcards}


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.95 | 7   | 258.03   | 2023-10-23T04:46:20Z |
| back     | 3.10 | 7   | 405.26   | 2024-06-18T22:31:34Z |

[Depth-first search]({{< relref "depth_first_search.md" >}})


#### Back {#back}

A [Graph]({{< relref "graph.md" >}}) and [Tree]({{< relref "tree.md" >}}) traversal algorithm which follows [Pre-order tree traversal]({{< relref "pre_order_tree_traversal.md" >}}). The non-recursive implementation uses a [Stack]({{< relref "stack.md" >}}).

|       | Worst-case                                 |
|-------|--------------------------------------------|
| Time  | \\(\bigo{\href{/posts/cardinality}{\vert V \vert} + \href{/posts/cardinality}{\vert E \vert}}\\) |
| Space | \\(\bigo{\href{/posts/cardinality}{\vert V \vert}}\\)                 |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Depth-First Search” 2022</a>)


### [Depth-first search]({{< relref "depth_first_search.md" >}}) follows {{[Pre-order tree traversal]({{< relref "pre_order_tree_traversal.md" >}})}{traversal order}@0} {#depth-first-search--depth-first-search-dot-md--follows-pre-order-tree-traversal--pre-order-tree-traversal-dot-md--traversal-order-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 9   | 387.99   | 2024-06-08T12:06:59Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Depth-First Search” 2022</a>)


### AKA (Computer science) {#aka--computer-science}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 9   | 389.57   | 2024-05-22T12:23:41Z |
| 1        | 2.80 | 7   | 195.98   | 2023-08-04T16:46:44Z |

-   {{[Depth-first search]({{< relref "depth_first_search.md" >}})}@0}
-   {{[DFS]({{< relref "depth_first_search.md" >}})}@1}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Depth-First Search” 2022</a>)


### The iterative version of [Depth-first search]({{< relref "depth_first_search.md" >}}) uses a {{[Stack]({{< relref "stack.md" >}})}@0} {#the-iterative-version-of-depth-first-search--depth-first-search-dot-md--uses-a-stack--stack-dot-md--0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 1.90 | 5   | 25.37    | 2023-08-02T09:15:24Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Depth-First Search” 2022</a>)


### [Depth-first search]({{< relref "depth_first_search.md" >}}) is {{not guaranteed}@0} to find the shortest path to the goal {#depth-first-search--depth-first-search-dot-md--is-not-guaranteed-0-to-find-the-shortest-path-to-the-goal}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.95 | 7   | 310.68   | 2024-01-18T07:23:22Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Depth-First Search” 2022</a>)


### [Depth-first search]({{< relref "depth_first_search.md" >}}) time complexity: {{\\(O(\href{/posts/cardinality}{\vert V \vert} + \href{/posts/cardinality}{\vert E \vert})\\)}@0} {#depth-first-search--depth-first-search-dot-md--time-complexity-o--vert-v-vert-plus-vert-e-vert--0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 1.90 | 9   | 203.76   | 2024-02-09T09:40:18Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Depth-First Search” 2022</a>)


### [Depth-first search]({{< relref "depth_first_search.md" >}}) space complexity: {{\\(O(\href{/posts/cardinality}{\vert V \vert})\\)}@0} {#depth-first-search--depth-first-search-dot-md--space-complexity-o--vert-v-vert--0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.05 | 6   | 51.83    | 2023-08-18T11:22:28Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Depth-First Search” 2022</a>)


### Implement recursive [Depth-first search]({{< relref "depth_first_search.md" >}}) {#implement-recursive-depth-first-search--depth-first-search-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.5  | -1  | 0        | 2022-01-01T13:00:00Z |

TODO


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Depth-First Search” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Depth-First Search.” 2022. <i>Wikipedia</i>, June. <a href="https://en.wikipedia.org/w/index.php?title=Depth-first_search&oldid=1091833357">https://en.wikipedia.org/w/index.php?title=Depth-first_search&#38;oldid=1091833357</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Breadth-first search]({{< relref "breadth_first_search.md" >}})
-   [Topological order by Depth-first search in Python]({{< relref "topological_order_by_depth_first_search_in_python.md" >}})
-   [Trie]({{< relref "trie.md" >}})
-   [Iterative deepening depth-first-search]({{< relref "iterative_deepening_depth_first_search.md" >}})
-   [Topological order]({{< relref "topological_order.md" >}})