+++
title = "Bubble sort"
author = ["Cash Prokop-Weaver"]
date = 2022-06-30T10:47:00-07:00
lastmod = 2023-12-05T13:49:52-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "c6bc266e-1090-492f-bdba-f044e04db3ff"
+++

> Bubble sort, sometimes referred to as sinking sort, is a simple [Sorting algorithm]({{< relref "sorting_algorithm.md" >}}) that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.
>
> [links added]
>
> (<a href="#citeproc_bib_item_1">“Bubble Sort” 2022</a>)

Bubble sort is [stable]({{< relref "stable_sorting_algorithm.md" >}}).


## Algorithm {#algorithm}

```nil
while list is not sorted do
  for i in range(len(list) - 1) do
    if list[i] > list[i+1] do
      swap(i, i+1)
```


## Implementation {#implementation}

-   [Bubble sort implementation in Python]({{< relref "bubble_sort_implementation_in_python.md" >}})


## Complexity {#complexity}

|       | Worst-case   | Best-case  |
|-------|--------------|------------|
| Time  | \\(O(n^2)\\) | \\(O(n)\\) |
| Space | \\(O(n)\\)   | \\(O(n)\\) |


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Bubble Sort.” 2022. <i>Wikipedia</i>, June. <a href="https://en.wikipedia.org/w/index.php?title=Bubble_sort&oldid=1093592571">https://en.wikipedia.org/w/index.php?title=Bubble_sort&#38;oldid=1093592571</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Bubble sort implementation in Python]({{< relref "bubble_sort_implementation_in_python.md" >}})
-   [Stable sorting algorithm]({{< relref "stable_sorting_algorithm.md" >}})
