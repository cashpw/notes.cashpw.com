+++
title = "Binary tree"
author = ["Cash Prokop-Weaver"]
date = 2022-06-28T15:26:00-07:00
lastmod = 2022-12-17T11:06:15-08:00
tags = ["has-todo", "concept", "has-todo", "concept"]
categories = ["has-todo", "concept"]
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
| back     | 2.20 | 3   | 6.00     | 2022-12-19T02:24:46Z |
| front    | 2.65 | 5   | 32.69    | 2022-11-15T10:03:29Z |

\\(\operatorname{parent}(i)\\) \\(\forall\\) child indexes, \\(i\\)


#### Back {#back}

\\(f(i)=\lfloor\frac{i}{2}\rfloor\\)


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Binary Tree” 2022</a>)


### Definition (Array implementation of a [Binary tree]({{< relref "binary_tree.md" >}})) {#definition--array-implementation-of-a-binary-tree-binary-tree-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.65 | 7   | 79.83    | 2023-01-09T10:39:08Z |
| front    | 2.65 | 6   | 101.30   | 2023-02-09T23:52:33Z |

\\(\operatorname{children}(i)\\) \\(\forall\\) parent indexes, \\(i\\)


#### Back {#back}

\\(f(i)=\\{2i+1, 2i+2\\}\\)


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Binary Tree” 2022</a>)


### Definition (Computer science) {#definition--computer-science}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.50 | 6   | 71.03    | 2022-12-28T15:58:02Z |
| front    | 2.80 | 7   | 151.62   | 2023-04-19T07:02:06Z |

[Binary tree]({{< relref "binary_tree.md" >}})


#### Back {#back}

A [Tree]({{< relref "tree.md" >}}) [Data structure]({{< relref "data_structures.md" >}}) in which each node has at most two children.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Binary Tree” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Binary Tree.” 2022. <i>Wikipedia</i>, June. <a href="https://en.wikipedia.org/w/index.php?title=Binary_tree&oldid=1092722102">https://en.wikipedia.org/w/index.php?title=Binary_tree&#38;oldid=1092722102</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Tree rotation]({{< relref "tree_rotation.md" >}})
-   [Definition (Graph theory)]({{< relref "tree_rotation.md#definition--id-5bc61709-6612-4287-921f-3e2509bd2261-graph-theory" >}})
-   [Describe]({{< relref "tree_rotation.md#describe" >}})
-   [Describe]({{< relref "tree_rotation.md#describe" >}})
-   [Definition (Computer science)]({{< relref "perfect_binary_tree.md#definition--computer-science" >}})
-   [Height-balanced binary tree]({{< relref "height_balanced_binary_tree.md" >}})
-   [Definition (Binary tree)]({{< relref "height_balanced_binary_tree.md#definition--id-323bf406-41e6-4e5f-9be6-689e1055b118-binary-tree" >}})
-   [Definition (Binary tree)]({{< relref "height_balanced_binary_tree.md#definition--id-323bf406-41e6-4e5f-9be6-689e1055b118-binary-tree" >}})
-   [Definition (Computer science)]({{< relref "complete_binary_tree.md#definition--computer-science" >}})
-   [Definition (Computer science)]({{< relref "balanced_binary_tree.md#definition--computer-science" >}})
-   [Binary search tree]({{< relref "binary_search_tree.md" >}})
-   [Binary heap]({{< relref "binary_heap.md" >}})
-   [Definition (Computer science)]({{< relref "binary_heap.md#definition--computer-science" >}})
-   [Iterative deepening depth-first-search]({{< relref "iterative_deepening_depth_first_search.md" >}})
-   [Definition (Computer science)]({{< relref "full_binary_tree.md#definition--computer-science" >}})
-   [Example(s)]({{< relref "succinct_data_structure.md#example--s" >}})
-   [Definition (Computer science)]({{< relref "degenerate_binary_tree.md#definition--computer-science" >}})
