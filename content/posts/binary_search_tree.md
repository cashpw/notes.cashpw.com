+++
title = "Binary search tree"
author = ["Cash Prokop-Weaver"]
date = 2022-07-23T16:43:00-07:00
lastmod = 2023-09-24T09:56:01-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "dc929031-e15a-4566-a7bd-7331768ee02f"
+++

> In computer science, a binary search tree (BST), also called an ordered or sorted binary tree, is a rooted [Binary tree]({{< relref "binary_tree.md" >}}) [Data structure]({{< relref "data_structures.md" >}}) with the key of each internal node being greater than all the keys in the respective node's left subtree and less than the ones in its right subtree. The time complexity of operations on the binary search tree is directly proportional to the height of the tree.
>
> (<a href="#citeproc_bib_item_1">“Binary Search Tree” 2022</a>)


## Complexity {#complexity}

|        | Worst-case          | Best-case      |
|--------|---------------------|----------------|
| Space  | \\(\bigo{n}\\)      | \\(\bigo{n}\\) |
| Search | \\(\bigo{\log n}\\) | \\(\bigo{n}\\) |
| Insert | \\(\bigo{\log n}\\) | \\(\bigo{n}\\) |
| Delete | \\(\bigo{\log n}\\) | \\(\bigo{n}\\) |


## Flashcards {#flashcards}


### [Binary search tree]({{< relref "binary_search_tree.md" >}}) space complexity: {{\\(O(n)\\)}@0} {#binary-search-tree--binary-search-tree-dot-md--space-complexity-o--n--0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 7   | 415.47   | 2024-08-18T08:01:14Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Binary Search Tree” 2022</a>)


### [Binary search tree]({{< relref "binary_search_tree.md" >}}) time complexity for search: {{\\(O(\log n)\\)}@0} {#binary-search-tree--binary-search-tree-dot-md--time-complexity-for-search-o--log-n--0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.95 | 7   | 302.07   | 2024-01-13T15:40:02Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Binary Search Tree” 2022</a>)


### [Binary search tree]({{< relref "binary_search_tree.md" >}}) time complexity for insert: {{\\(O(\log n)\\)}@0} {#binary-search-tree--binary-search-tree-dot-md--time-complexity-for-insert-o--log-n--0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 8   | 503.36   | 2024-10-09T22:44:58Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Binary Search Tree” 2022</a>)


### [Binary search tree]({{< relref "binary_search_tree.md" >}}) time complexity for delete: {{\\(O(\log n)\\)}@0} {#binary-search-tree--binary-search-tree-dot-md--time-complexity-for-delete-o--log-n--0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 7   | 339.45   | 2024-05-12T01:48:56Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Binary Search Tree” 2022</a>)


### Definition {#definition}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.20 | 8   | 354.07   | 2024-06-29T14:39:10Z |
| front    | 2.20 | 7   | 107.17   | 2023-11-08T08:09:50Z |

[Binary search tree]({{< relref "binary_search_tree.md" >}})


#### Back {#back}

A binary tree in which satisfies the binary search property. That is, the nodes are arranged in [Total order]({{< relref "total_order.md" >}}):

1.  A given node's key is greater than all the keys along the node's left subtree.
2.  A given node's key is less than all the keys along the node's right subtree.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Binary Search Tree” 2022</a>)


### AKA {#aka}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 10  | 272.70   | 2023-11-06T16:47:50Z |
| 1        | 1.90 | 5   | 22.27    | 2023-09-26T20:10:23Z |
| 2        | 2.50 | 8   | 356.19   | 2024-06-13T06:21:45Z |

-   {{[Binary search tree]({{< relref "binary_search_tree.md" >}})}@0}
-   {{[Sorted binary tree]({{< relref "binary_search_tree.md" >}})}@1}
-   {{[Ordered search tree]({{< relref "binary_search_tree.md" >}})}@2}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Binary Search Tree” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Binary Search Tree.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Binary_search_tree&oldid=1099579299">https://en.wikipedia.org/w/index.php?title=Binary_search_tree&#38;oldid=1099579299</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}})
-   [Self-balancing binary search tree]({{< relref "self_balancing_binary_search_tree.md" >}})
-   [B-tree]({{< relref "b_tree.md" >}})
