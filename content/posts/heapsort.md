+++
title = "Heapsort"
author = ["Cash Prokop-Weaver"]
date = 2022-06-29T09:32:00-07:00
lastmod = 2023-11-10T10:51:37-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "cf64c166-6ad5-4dd7-88c6-155a320a7ea3"
+++

> In computer science, heapsort is a comparison-based sorting algorithm. Heapsort can be thought of as an improved [Selection sort]({{< relref "selection_sort.md" >}}): like selection sort, heapsort divides its input into a sorted and an unsorted region, and it iteratively shrinks the unsorted region by extracting the largest element from it and inserting it into the sorted region. Unlike selection sort, heapsort does not waste time with a linear-time scan of the unsorted region; rather, heap sort maintains the unsorted region in a [Heap]({{< relref "heap.md" >}}) [Data structure]({{< relref "data_structures.md" >}}) to more quickly find the largest element in each step.
>
> (“Heapsort” 2022)

-   [Internal memory algorithm]({{< relref "internal_memory_algorithm.md" >}})
-   [Unstable sorting algorithm]({{< relref "unstable_sorting_algorithm.md" >}})


## Algorithm {#algorithm}

1.  Create a heap which is ordered as you'd like to sort the list (e.g. [Min heap property]({{< relref "heap_property.md#min-heap-property" >}}) or [Max heap property]({{< relref "heap_property.md#max-heap-property" >}})) from all elements in the list to be sorted
2.  Swap the first element in the list (the top of the heap) with the last element
3.  Limit the heap's scope to not include the recently swapped element
4.  Heapify
5.  Goto step 2 unil the list is sorted


## Implementation {#implementation}

[Heapsort implementation in python]({{< relref "heapsort_in_python.md" >}})


## Backlinks {#backlinks}

-   [Heapsort implementation in python]({{< relref "heapsort_in_python.md" >}})
