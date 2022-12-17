+++
title = "B-tree"
author = ["Cash Prokop-Weaver"]
date = 2022-07-23T16:55:00-07:00
lastmod = 2022-12-17T11:05:30-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "170cf2cd-adb9-4a26-8793-1b31b2ef40c2"
+++

> In computer science, a B-tree is a self-balancing [Tree]({{< relref "tree.md" >}}) data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time. The B-tree generalizes the [Binary search tree]({{< relref "binary_search_tree.md" >}}), allowing for nodes with more than two children. Unlike other [Self-balancing binary search trees]({{< relref "self_balancing_binary_search_tree.md" >}}), the B-tree is well suited for storage systems that read and write relatively large blocks of data, such as databases and file systems.
>
> (<a href="#citeproc_bib_item_1">“B-Tree” 2022</a>)

{{< figure src="/ox-hugo/2022-09-21_17-58-24_b-tree.png" >}}

((<a href="#citeproc_bib_item_4">Programiz n.d.</a>))

> Each internal node of a B-tree contains a number of keys. The keys act as separation values which divide its subtrees. For example, if an internal node has 3 child nodes (or subtrees) then it must have 2 keys: \\(a\_1\\) and \\(a\_2\\) [(e.g. \\(30\\) and \\(33\\) in the image above)]. All values in the leftmost subtree will be less than \\(a\_1\\), all values in the middle subtree will be between \\(a\_1\\) and \\(a\_2\\), and all values in the rightmost subtree will be greater than \\(a\_2\\).
>
> (<a href="#citeproc_bib_item_1">“B-Tree” 2022</a>)


## Properties {#properties}

For a given [B-tree]({{< relref "b_tree.md" >}}) of order \\(m\\):

1.  Each [Vertex]({{< relref "vertex.md" >}}) has at most \\(m\\) children
2.  The root has at least two children unless it's a leaf
3.  Internal (non-leaf) [Vertices]({{< relref "vertex.md" >}}) store:
    1.  Pointers to child [Vertices]({{< relref "vertex.md" >}})
    2.  Keys which indicate the bounds of the elements in the leaves below.
4.  Internal [Vertices]({{< relref "vertex.md" >}}) have between \\(\lceil m/2 \rceil\\) and \\(m\\) children
5.  Internal [Vertices]({{< relref "vertex.md" >}}) with \\(k\\) children have \\(k - 1\\) keys
6.  Leaf [Vertices]({{< relref "vertex.md" >}}) store data
7.  Leaf [Vertices]({{< relref "vertex.md" >}}) are all on the same level


## Operations {#operations}


### Lookup {#lookup}

> Lookup in a [B-tree]({{< relref "b_tree.md" >}}) is straightforward. Given a node to start from, we use a simple linear or binary search to find whether the desired element is in the node, or if not, which child pointer to follow from the current node.
>
> (<a href="#citeproc_bib_item_2">“B-Trees” n.d.</a>)


#### Time complexity {#time-complexity}

Worst case: \\(\bigo{\log n}\\)


### Insertion {#insertion}

> Insertion and deletion from a B-tree are more complicated; in fact, they are notoriously difficult to implement correctly. For insertion, we first find the appropriate leaf node into which the inserted element falls (assuming it is not already in the tree). If there is already room in the node, the new element can be inserted simply. Otherwise the current leaf is already full and must be split into two leaves, one of which acquires the new element. The parent is then updated to contain a new key and child pointer. If the parent is already full, the process ripples upwards, eventually possibly reaching the root. If the root is split into two, then a new root is created with just two children, increasing the height of the tree by one.
>
> For example, here is the effect of a series of insertions. The first insertion (13) merely affects a leaf. The second insertion (14) overflows the leaf and adds a key to an internal node. The third insertion propagates all the way to the root.
>
> (<a href="#citeproc_bib_item_2">“B-Trees” n.d.</a>)

{{< figure src="/ox-hugo/2022-09-21_18-50-51_B-trees-insert.gif" >}}

{{< figure src="/ox-hugo/2022-09-21_18-51-06_B-trees-insert2.gif" >}}

{{< figure src="/ox-hugo/2022-09-21_18-51-20_B-trees-insert3.gif" >}}

((<a href="#citeproc_bib_item_2">“B-Trees” n.d.</a>))

{{< figure src="/ox-hugo/2022-09-21_18-53-50_insertion.png" >}}

((<a href="#citeproc_bib_item_3">“Insertion into a B-tree” n.d.</a>))


#### Time complexity {#time-complexity}

Worst case: \\(\bigo{\log n}\\)


### Deletion {#deletion}

> Deletion works in the opposite way: the element is removed from the leaf. If the leaf becomes empty, a key is removed from the parent node. If that breaks invariant 3, the keys of the parent node and its immediate right (or left) sibling are reapportioned among them so that invariant 3 is satisfied. If this is not possible, the parent node can be combined with that sibling, removing a key another level up in the tree and possible causing a ripple all the way to the root. If the root has just two children, and they are combined, then the root is deleted and the new combined node becomes the root of the tree, reducing the height of the tree by one.
>
> (<a href="#citeproc_bib_item_2">“B-Trees” n.d.</a>)


#### Time complexity {#time-complexity}

Worst case: \\(\bigo{\log n}\\)


## Flashcards {#flashcards}


### {{Inner [Vertices]({{< relref "vertex.md" >}})}@0} in [B-trees]({{< relref "b_tree.md" >}}) of order \\(m\\) have between {{\\(\lceil \frac{m}{2} \rceil\\) and \\(m\\)}@1} children {#inner-vertices--vertex-dot-md--0-in-b-trees--b-tree-dot-md--of-order-m-have-between-lceil-frac-m-2-rceil-and-m-1-children}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 1.75 | 4   | 10.48    | 2022-12-21T06:03:52Z |
| 1        | 2.20 | 2   | 2.00     | 2022-12-17T20:18:49Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“B-Tree” 2022</a>)


### {{[Vertices]({{< relref "vertex.md" >}})}@0} in [B-trees]({{< relref "b_tree.md" >}}) with \\(k\\) children have {{\\(k-1\\)}@1} keys {#vertices--vertex-dot-md--0-in-b-trees--b-tree-dot-md--with-k-children-have-k-1-1-keys}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.20 | 5   | 31.00    | 2023-01-10T18:27:41Z |
| 1        | 2.35 | 5   | 33.91    | 2023-01-19T15:55:38Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“B-Tree” 2022</a>)


### [B-tree]({{< relref "b_tree.md" >}}) {{leaf [Vertices]({{< relref "vertex.md" >}})}@0} are {{all on the same level}{level}@1} {#b-tree--b-tree-dot-md--leaf-vertices--vertex-dot-md--0-are-all-on-the-same-level-level-1}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.95 | 5   | 47.30    | 2023-01-07T00:29:06Z |
| 1        | 2.95 | 5   | 51.99    | 2023-01-17T14:51:41Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“B-Tree” 2022</a>)


### The root [Vertex]({{< relref "vertex.md" >}}) of a [B-tree]({{< relref "b_tree.md" >}}) has {{\\(\ge 2\\)}@0} children unless {{it's a leaf}@1} {#the-root-vertex--vertex-dot-md--of-a-b-tree--b-tree-dot-md--has-ge-2-0-children-unless-it-s-a-leaf-1}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 1.60 | 0   | 0.00     | 2022-12-16T17:48:17Z |
| 1        | 2.35 | 3   | 6.00     | 2022-12-09T19:43:59Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“B-Tree” 2022</a>)


### [B-tree]({{< relref "b_tree.md" >}}) {{internal [Vertices]({{< relref "vertex.md" >}})}@2} store {{keys}@0} and {{pointers to child [Vertices]({{< relref "vertex.md" >}})}@1} {#b-tree--b-tree-dot-md--internal-vertices--vertex-dot-md--2-store-keys-0-and-pointers-to-child-vertices--vertex-dot-md--1}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 2        | 2.65 | 5   | 41.91    | 2023-01-25T15:14:02Z |
| 0        | 2.80 | 4   | 17.12    | 2022-12-20T01:58:56Z |
| 1        | 2.50 | 1   | 1.00     | 2022-12-16T20:45:25Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“B-Tree” 2022</a>)


### [B-tree]({{< relref "b_tree.md" >}}) {{leaf}@0} [Vertices]({{< relref "vertex.md" >}}) store {{data}@1} {#b-tree--b-tree-dot-md--leaf-0-vertices--vertex-dot-md--store-data-1}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 4   | 16.56    | 2022-12-19T07:27:31Z |
| 1        | 2.65 | 3   | 6.00     | 2022-12-19T18:04:52Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“B-Tree” 2022</a>)


### Image {#image}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 5   | 33.35    | 2022-12-24T10:47:11Z |
| back     | 2.65 | 5   | 47.97    | 2023-01-16T15:10:27Z |

[B-tree]({{< relref "b_tree.md" >}})


#### Back {#back}

{{< figure src="/ox-hugo/2022-09-21_17-58-24_b-tree.png" >}}


#### Source {#source}

(<a href="#citeproc_bib_item_4">Programiz n.d.</a>)


### [B-trees]({{< relref "b_tree.md" >}}) are {{self-balancing}{balance}@0} {#b-trees--b-tree-dot-md--are-self-balancing-balance-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 5   | 45.95    | 2023-01-04T14:59:41Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“B-Tree” 2022</a>)


### {{[B-trees]({{< relref "b_tree.md" >}})}@0} generalize {{[Binary search tree]({{< relref "binary_search_tree.md" >}})}@1} {#b-trees--b-tree-dot-md--0-generalize-binary-search-tree--binary-search-tree-dot-md--1}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.95 | 5   | 45.25    | 2023-01-02T22:11:57Z |
| 1        | 2.35 | 5   | 33.23    | 2023-01-15T07:22:18Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“B-Tree” 2022</a>)


### Time complexity for [B-tree]({{< relref "b_tree.md" >}}) insert: {{\\(\bigo{\log n}\\)}@0} {#time-complexity-for-b-tree--b-tree-dot-md--insert-bigo-log-n-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 5   | 50.60    | 2023-01-19T08:37:24Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“B-Tree” 2022</a>)


### Time complexity for [B-tree]({{< relref "b_tree.md" >}}) delete: {{\\(\bigo{\log n}\\)}@0} {#time-complexity-for-b-tree--b-tree-dot-md--delete-bigo-log-n-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 5   | 44.67    | 2023-01-21T07:48:33Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“B-Tree” 2022</a>)


### Time complexity for [B-tree]({{< relref "b_tree.md" >}}) lookup: {{\\(\bigo{\log n}\\)}@0} {#time-complexity-for-b-tree--b-tree-dot-md--lookup-bigo-log-n-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.95 | 5   | 47.96    | 2023-01-01T15:33:06Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“B-Tree” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“B-Tree.” 2022. <i>Wikipedia</i>, August. <a href="https://en.wikipedia.org/w/index.php?title=B-tree&oldid=1106759183">https://en.wikipedia.org/w/index.php?title=B-tree&#38;oldid=1106759183</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>“B-Trees.” n.d. Accessed September 22, 2022. <a href="https://www.cs.cornell.edu/courses/cs3110/2012sp/recitations/rec25-B-trees/rec25.html">https://www.cs.cornell.edu/courses/cs3110/2012sp/recitations/rec25-B-trees/rec25.html</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_3"></a>“Insertion into a B-tree.” n.d. Accessed September 22, 2022. <a href="https://www.programiz.com/dsa/insertion-into-a-b-tree">https://www.programiz.com/dsa/insertion-into-a-b-tree</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_4"></a>Programiz. n.d. “B-Tree.” Accessed September 22, 2022. <a href="https://www.programiz.com/dsa/b-tree">https://www.programiz.com/dsa/b-tree</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Self-balancing binary search tree]({{< relref "self_balancing_binary_search_tree.md" >}})
-   [Example(s) (balance)]({{< relref "self_balancing_binary_search_tree.md" >}})
