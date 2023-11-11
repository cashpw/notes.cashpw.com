+++
title = "Bubble sort"
author = ["Cash Prokop-Weaver"]
date = 2022-06-30T10:47:00-07:00
lastmod = 2023-11-10T10:29:49-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "c6bc266e-1090-492f-bdba-f044e04db3ff"
+++

> Bubble sort, sometimes referred to as sinking sort, is a simple [Sorting algorithm]({{< relref "sorting_algorithm.md" >}}) that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.
>
> [links added]
>
> (“Bubble Sort” 2022)

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


## Backlinks {#backlinks}

-   [Bubble sort implementation in Python]({{< relref "bubble_sort_implementation_in_python.md" >}})
-   [Stable sorting algorithm]({{< relref "stable_sorting_algorithm.md" >}})
