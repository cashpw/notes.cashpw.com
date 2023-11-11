+++
title = "Binary heap"
author = ["Cash Prokop-Weaver"]
date = 2022-06-29T09:22:00-07:00
lastmod = 2023-11-10T10:28:17-08:00
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
> (“Binary Heap” 2022)

<!--quoteend-->

> Example of a [Complete]({{< relref "complete_binary_tree.md" >}}) binary [Max heap]({{< relref "heap_property.md#max-heap-property" >}}).
>
> {{< figure src="/ox-hugo/Max-Heap.svg.png" >}}
>
> (“Binary Heap” 2022)


## Implementation {#implementation}

-   [Max binary heap implementation in java]({{< relref "max_binary_heap_implementation_in_java.md" >}})
-   [Binary heap implementation in python]({{< relref "binary_heap_implementation_in_python.md" >}})


## Operations {#operations}


### Insert {#insert}

> 1.  Add the element to the bottom level of the heap at the leftmost open space.
> 2.  Compare the added element with its parent; if they are in the correct order, stop.
> 3.  If not, swap the element with its parent and return to the previous step.
>
> (“Binary Heap” 2022)


### Extract {#extract}

> 1.  Replace the root of the heap with the last element on the last level.
> 2.  Compare the new root with its children; if they are in the correct order, stop.
> 3.  If not, swap the element with one of its children and return to the previous step. (Swap with its smaller child in a min-heap and its larger child in a max-heap.)
>
> (“Binary Heap” 2022)


## Backlinks {#backlinks}

-   [Heap]({{< relref "heap.md" >}})
-   [Binary heap implementation in python]({{< relref "binary_heap_implementation_in_python.md" >}})
-   [Jarnik's algorithm]({{< relref "jarkik_s_algorithm.md" >}})
-   [Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}})
