+++
title = "Heapsort"
author = ["Cash Prokop-Weaver"]
date = 2022-06-29T09:32:00-07:00
lastmod = 2023-07-25T10:44:47-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "cf64c166-6ad5-4dd7-88c6-155a320a7ea3"
+++

> In computer science, heapsort is a comparison-based sorting algorithm. Heapsort can be thought of as an improved [Selection sort]({{< relref "selection_sort.md" >}}): like selection sort, heapsort divides its input into a sorted and an unsorted region, and it iteratively shrinks the unsorted region by extracting the largest element from it and inserting it into the sorted region. Unlike selection sort, heapsort does not waste time with a linear-time scan of the unsorted region; rather, heap sort maintains the unsorted region in a [Heap]({{< relref "heap.md" >}}) [Data structure]({{< relref "data_structures.md" >}}) to more quickly find the largest element in each step.
>
> (<a href="#citeproc_bib_item_1">“Heapsort” 2022</a>)

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


## Flashcards {#flashcards}


### Algorithm {#algorithm}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 6   | 81.72    | 2023-09-30T08:45:50Z |

[Heapsort]({{< relref "heapsort.md" >}})


#### Back {#back}

For a given list, `items`, and a comparator function, `comparator`:

1.  Heapify `items` by `comparator`
2.  For `len(items) - 1` to `1` as `i`:
    1.  Swap `items[0]` and `items[i]`
    2.  Heapify `items[0:i-1]` by `comparator`


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Heapsort” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Heapsort.” 2022. <i>Wikipedia</i>, September. <a href="https://en.wikipedia.org/w/index.php?title=Heapsort&oldid=1110069153">https://en.wikipedia.org/w/index.php?title=Heapsort&#38;oldid=1110069153</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Heapsort implementation in python]({{< relref "heapsort_in_python.md" >}})
