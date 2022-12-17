+++
title = "Binary search tree"
author = ["Cash Prokop-Weaver"]
date = 2022-07-23T16:43:00-07:00
lastmod = 2022-12-17T11:06:10-08:00
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
| 0        | 2.95 | 5   | 51.59    | 2023-01-20T08:37:30Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Binary Search Tree” 2022</a>)


### [Binary search tree]({{< relref "binary_search_tree.md" >}}) time complexity for search: {{\\(O(\log n)\\)}@0} {#binary-search-tree--binary-search-tree-dot-md--time-complexity-for-search-o--log-n--0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.95 | 6   | 103.19   | 2023-03-16T00:09:09Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Binary Search Tree” 2022</a>)


### [Binary search tree]({{< relref "binary_search_tree.md" >}}) time complexity for insert: {{\\(O(\log n)\\)}@0} {#binary-search-tree--binary-search-tree-dot-md--time-complexity-for-insert-o--log-n--0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 7   | 179.45   | 2023-05-25T01:45:50Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Binary Search Tree” 2022</a>)


### [Binary search tree]({{< relref "binary_search_tree.md" >}}) time complexity for delete: {{\\(O(\log n)\\)}@0} {#binary-search-tree--binary-search-tree-dot-md--time-complexity-for-delete-o--log-n--0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 5   | 44.57    | 2023-01-21T05:20:47Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Binary Search Tree” 2022</a>)


### Definition {#definition}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.50 | 6   | 71.22    | 2023-01-17T20:18:04Z |
| front    | 2.50 | 5   | 37.97    | 2022-12-23T14:24:00Z |

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
| 0        | 2.65 | 9   | 109.81   | 2023-02-04T10:25:59Z |
| 1        | 2.65 | 6   | 83.48    | 2022-12-16T03:36:59Z |
| 2        | 2.65 | 6   | 69.61    | 2023-01-15T12:17:49Z |

-   {{[Binary search tree]({{< relref "binary_search_tree.md" >}})}@0}
-   {{[Sorted binary tree]({{< relref "binary_search_tree.md" >}})}@1}
-   {{[Ordered search tree]({{< relref "binary_search_tree.md" >}})}@2}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Binary Search Tree” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Binary Search Tree.” 2022. <i>Wikipedia</i>, July. <a href="https://en.wikipedia.org/w/index.php?title=Binary_search_tree&oldid=1099579299">https://en.wikipedia.org/w/index.php?title=Binary_search_tree&#38;oldid=1099579299</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Self-balancing binary search tree]({{< relref "self_balancing_binary_search_tree.md" >}})
-   [Definition (Computer science)]({{< relref "self_balancing_binary_search_tree.md" >}})
-   [B-tree]({{< relref "b_tree.md" >}})
-   [{{B-trees}@0} generalize {{Binary search tree}@1}]({{< relref "b_tree.md#id-170cf2cd-adb9-4a26-8793-1b31b2ef40c2-b-trees-0-generalize-id-dc929031-e15a-4566-a7bd-7331768ee02f-binary-search-tree-1" >}})
