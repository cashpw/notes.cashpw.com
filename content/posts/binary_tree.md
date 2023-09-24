+++
title = "Binary tree"
author = ["Cash Prokop-Weaver"]
date = 2022-06-28T15:26:00-07:00
lastmod = 2023-09-24T09:56:07-07:00
tags = ["hastodo", "concept", "hastodo", "concept"]
categories = ["hastodo", "concept"]
draft = false
slug = "323bf406-41e6-4e5f-9be6-689e1055b118"
+++

> In computer science, a binary tree is a [Tree]({{< relref "tree.md" >}}) [Data structure]({{< relref "data_structures.md" >}}) in which each node has at most two children, which are referred to as the left child and the right child.
>
> (<a href="#citeproc_bib_item_1">“Binary Tree” 2022</a>)


## Types {#types}

-   [Complete binary tree]({{< relref "complete_binary_tree.md" >}})
-   [Full binary tree]({{< relref "full_binary_tree.md" >}})
-   [Perfect binary tree]({{< relref "perfect_binary_tree.md" >}})
-   [Balanced binary tree]({{< relref "balanced_binary_tree.md" >}})
-   [Degenerate binary tree]({{< relref "degenerate_binary_tree.md" >}})
-   [Skewed binary tree]({{< relref "skewed_binary_tree.md" >}})


## Implementation {#implementation}


## Representations {#representations}


### Array {#array}


#### Indexing {#indexing}

Assuming a 0-indexed array: child nodes for a node at index \\(i\\) are at \\(\text{left}=2i+1\\) and \\(\text{right}=2i+2\\). Similarly, the parent node for a node at index \\(i\\) is at \\(\lfloor\frac{i-1}{2}\rfloor\\).


## Flashcards {#flashcards}


### Definition (Array implementation of a [Binary tree]({{< relref "binary_tree.md" >}})) {#definition--array-implementation-of-a-binary-tree-binary-tree-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 1.90 | 8   | 231.10   | 2024-03-15T17:19:26Z |
| front    | 2.35 | 8   | 427.23   | 2024-10-27T19:02:28Z |

\\(\operatorname{parent}(i)\\) \\(\forall\\) child indexes, \\(i\\)


#### Back {#back}

\\(f(i)=\lfloor\frac{i}{2}\rfloor\\)


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Binary Tree” 2022</a>)


### Definition (Array implementation of a [Binary tree]({{< relref "binary_tree.md" >}})) {#definition--array-implementation-of-a-binary-tree-binary-tree-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.80 | 9   | 644.45   | 2025-05-31T02:01:44Z |
| front    | 2.65 | 7   | 275.24   | 2023-11-14T23:14:43Z |

\\(\operatorname{children}(i)\\) \\(\forall\\) parent indexes, \\(i\\)


#### Back {#back}

\\(f(i)=\\{2i+1, 2i+2\\}\\)


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Binary Tree” 2022</a>)


### Definition (Computer science) {#definition--computer-science}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.80 | 8   | 449.99   | 2024-09-17T17:00:12Z |
| front    | 2.80 | 8   | 417.49   | 2024-06-24T09:50:24Z |

[Binary tree]({{< relref "binary_tree.md" >}})


#### Back {#back}

A [Tree]({{< relref "tree.md" >}}) [Data structure]({{< relref "data_structures.md" >}}) in which each node has at most two children.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Binary Tree” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Binary Tree.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Binary_tree&oldid=1092722102">https://en.wikipedia.org/w/index.php?title=Binary_tree&#38;oldid=1092722102</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Perfect binary tree]({{< relref "perfect_binary_tree.md" >}})
-   [Binary search tree]({{< relref "binary_search_tree.md" >}})
-   [Binary heap]({{< relref "binary_heap.md" >}})
-   [Tree rotation]({{< relref "tree_rotation.md" >}})
-   [Balanced binary tree]({{< relref "balanced_binary_tree.md" >}})
-   [Degenerate binary tree]({{< relref "degenerate_binary_tree.md" >}})
-   [Iterative deepening depth-first-search]({{< relref "iterative_deepening_depth_first_search.md" >}})
-   [Height-balanced binary tree]({{< relref "height_balanced_binary_tree.md" >}})
-   [Complete binary tree]({{< relref "complete_binary_tree.md" >}})
-   [Succinct data structure]({{< relref "succinct_data_structure.md" >}})
