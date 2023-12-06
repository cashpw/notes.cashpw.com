+++
title = "Binary heap"
author = ["Cash Prokop-Weaver"]
date = 2022-06-29T09:22:00-07:00
lastmod = 2023-12-05T19:56:28-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "a0c1d3a6-51b9-4cab-9a5e-f47e9e6ec3ad"
+++

> A binary heap is a [Heap]({{< relref "heap.md" >}}) [Data structure]({{< relref "data_structures.md" >}}) that takes the form of a [Binary tree]({{< relref "binary_tree.md" >}}). Binary heaps are a common way of implementing [Priority queues]({{< relref "priority_queue.md" >}}).
>
> [...]
>
> A binary heap is defined as a binary tree with two additional constraints:
>
> 1.  Shape property: a binary heap is a [Complete binary tree]({{< relref "complete_binary_tree.md" >}}); that is, all levels of the tree, except possibly the last one (deepest) are fully filled, and, if the last level of the tree is not complete, the nodes of that level are filled from left to right.
> 2.  [Heap property]({{< relref "heap_property.md" >}}): the key stored in each node is either greater than or equal to (≥; [Max heap]({{< relref "heap_property.md#max-heap-property" >}})) or less than or equal to (≤; [Min heap]({{< relref "heap_property.md#min-heap-property" >}})) the keys in the node's children, according to some total order.
>
> [...]
>
> Binary heaps are also commonly employed in the heapsort sorting algorithm, which is an in-place algorithm because binary heaps can be implemented as an [Implicit data structure]({{< relref "implicit_data_structure.md" >}}), storing keys in an [Array]({{< relref "array.md" >}}) and using their relative positions within that array to represent child–parent relationships.
>
> [formatting and links added]
>
> (<a href="#citeproc_bib_item_1">“Binary Heap” 2022</a>)

<!--quoteend-->

> Example of a [Complete]({{< relref "complete_binary_tree.md" >}}) binary [Max heap]({{< relref "heap_property.md#max-heap-property" >}}).
>
> {{< figure src="/ox-hugo/Max-Heap.svg.png" >}}
>
> (<a href="#citeproc_bib_item_1">“Binary Heap” 2022</a>)


## Implementation {#implementation}

-   [Max binary heap implementation in java]({{< relref "max_binary_heap_implementation_in_java.md" >}})
-   [Binary heap implementation in python]({{< relref "binary_heap_implementation_in_python.md" >}})


## Operations {#operations}


### Insert {#insert}

> 1.  Add the element to the bottom level of the heap at the leftmost open space.
> 2.  Compare the added element with its parent; if they are in the correct order, stop.
> 3.  If not, swap the element with its parent and return to the previous step.
>
> (<a href="#citeproc_bib_item_1">“Binary Heap” 2022</a>)


### Extract {#extract}

> 1.  Replace the root of the heap with the last element on the last level.
> 2.  Compare the new root with its children; if they are in the correct order, stop.
> 3.  If not, swap the element with one of its children and return to the previous step. (Swap with its smaller child in a min-heap and its larger child in a max-heap.)
>
> (<a href="#citeproc_bib_item_1">“Binary Heap” 2022</a>)


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Binary Heap.” 2022. <i>Wikipedia</i>, May. <a href="https://en.wikipedia.org/w/index.php?title=Binary_heap&oldid=1087856345">https://en.wikipedia.org/w/index.php?title=Binary_heap&#38;oldid=1087856345</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Binary heap implementation in python]({{< relref "binary_heap_implementation_in_python.md" >}})
-   [Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}})
-   [Jarnik's algorithm]({{< relref "jarkik_s_algorithm.md" >}})
-   [Heap]({{< relref "heap.md" >}})
