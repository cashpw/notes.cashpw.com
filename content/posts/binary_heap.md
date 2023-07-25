+++
title = "Binary heap"
author = ["Cash Prokop-Weaver"]
date = 2022-06-29T09:22:00-07:00
lastmod = 2023-07-25T08:42:54-07:00
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


## Flashcards {#flashcards}


### Definition (Computer science) {#definition--computer-science}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.80 | 8   | 525.49   | 2024-12-30T15:42:10Z |
| front    | 2.95 | 7   | 337.24   | 2024-01-27T09:27:50Z |

[Binary heap]({{< relref "binary_heap.md" >}})


#### Back {#back}

A [Heap]({{< relref "heap.md" >}}) [Data structure]({{< relref "data_structures.md" >}}) that takes the form of a [Binary tree]({{< relref "binary_tree.md" >}}).


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Binary Heap” 2022</a>)


### {{[Binary heaps]({{< relref "binary_heap.md" >}})}@0} are a common way of implementing {{[Priority queues]({{< relref "priority_queue.md" >}})}@1} {#binary-heaps--binary-heap-dot-md--0-are-a-common-way-of-implementing-priority-queues--priority-queue-dot-md--1}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 1        | 2.95 | 7   | 348.63   | 2024-02-21T18:18:31Z |
| 0        | 2.80 | 7   | 352.96   | 2024-03-04T13:06:21Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Binary Heap” 2022</a>)


### Algorithm {#algorithm}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.80 | 7   | 364.62   | 2024-06-17T05:15:32Z |

Insertion into a [Binary heap]({{< relref "binary_heap.md" >}})


#### Back {#back}

1.  Add the element to the bottom level of the heap at the leftmost open space.
2.  `heapify_up`


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Binary Heap” 2022</a>)


### Algorithm {#algorithm}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.80 | 7   | 405.87   | 2024-08-01T22:17:37Z |

`Heap.pop` for a [Binary heap]({{< relref "binary_heap.md" >}})


#### Back {#back}

1.  Replace the root of the heap with the last element on the last level.
2.  Remove the last element of the heap
3.  `heapify_down`
4.  Return the element from step 2


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Binary Heap” 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 3.10 | 7   | 470.56   | 2024-11-04T17:09:42Z |
| back     | 2.80 | 7   | 383.23   | 2024-07-27T21:08:22Z |

`Heap.heapify_up` algorithm


#### Back {#back}

-   Called after inserting a new value into the heap
-   Swaps elements in the [Heap]({{< relref "heap.md" >}}) such that it maintains its [Heap property]({{< relref "heap_property.md" >}})

Steps:

1.  Compare the element at the end of the heap with its parent; if they are in the correct order, stop.
2.  If not, swap the element with its parent and return to the previous step.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Binary Heap” 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.65 | 7   | 374.57   | 2024-06-12T18:14:03Z |
| back     | 2.35 | 7   | 326.83   | 2024-05-06T20:38:26Z |

`Heap.heapify_down` algorithm


#### Back {#back}

-   Called after removing the top of the heap
-   Swaps elements in the [Heap]({{< relref "heap.md" >}}) such that it maintains its [Heap property]({{< relref "heap_property.md" >}})

Steps:

1.  Compare the root with its children; if they are in the correct order, stop.
2.  If not, swap the element with one of its children and return to the previous step. (Swap with its smaller child in a min-heap and its larger child in a max-heap.)


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Binary Heap” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Binary Heap.” 2022. <i>Wikipedia</i>, May. <a href="https://en.wikipedia.org/w/index.php?title=Binary_heap&oldid=1087856345">https://en.wikipedia.org/w/index.php?title=Binary_heap&#38;oldid=1087856345</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Heap]({{< relref "heap.md" >}})
-   [Binary heap implementation in python]({{< relref "binary_heap_implementation_in_python.md" >}})
-   [Jarnik's algorithm]({{< relref "jarkik_s_algorithm.md" >}})
-   [Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}})
