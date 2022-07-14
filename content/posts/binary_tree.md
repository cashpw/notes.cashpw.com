+++
title = "Binary tree"
author = ["Cash Weaver"]
date = 2022-06-28T15:26:00-07:00
lastmod = 2022-07-13T20:30:01-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
+++

> In computer science, a binary tree is a tree [[Tree]({{< relref "tree.md" >}})] data structure [[Data structure]({{< relref "data_structures.md" >}})] in which each node has at most two children, which are referred to as the left child and the right child.
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

-   [Binary tree implementation in java]({{< relref "binary_tree_implementation_in_java.md" >}})


## Representations {#representations}


### Array {#array}


#### Indexing {#indexing}

Assuming a 0-indexed array: child nodes for a node at index \\(i\\) are at \\(\text{left}=2i+1\\) and \\(\text{right}=2i+2\\). Similarly, the parent node for a node at index \\(i\\) is at \\(\lfloor\frac{i-1}{2}\rfloor\\).

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Binary Tree.” 2022. <i>Wikipedia</i>, June. <a href="https://en.wikipedia.org/w/index.php?title=Binary_tree&oldid=1092722102">https://en.wikipedia.org/w/index.php?title=Binary_tree&#38;oldid=1092722102</a>.</div>
</div>
