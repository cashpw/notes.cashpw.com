+++
title = "Merge sort"
author = ["Cash Prokop-Weaver"]
date = 2022-07-01T11:23:00-07:00
lastmod = 2023-11-10T11:04:56-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "4ad76968-7e82-4d68-b8fa-ff6059f3c843"
+++

> Conceptually, a merge sort works as follows:
>
> 1.  Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).
> 2.  Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.
>
> (“Merge Sort” 2022)

Merge sort is:

-   [Stable sorting algorithm]({{< relref "stable_sorting_algorithm.md" >}})
-   [External memory algorithm]({{< relref "external_memory_algorithm.md" >}})


## Algorithm {#algorithm}

```nil
procedure MergeSort(list) is
  if length of list <= 1 then
    return list

  left, right = split(list)
  MergeSort(left)
  MergeSort(right)

  return Merge(left, right)
```


## Implementation {#implementation}

-   [Merge sort implementation in Python]({{< relref "merge_sort_implementation_in_python.md" >}})


## Complexity {#complexity}

|       | Worst-case                       | Best-case                        |
|-------|----------------------------------|----------------------------------|
| Time  | \\(O(n \operatorname{log}(n))\\) | \\(O(n \operatorname{log}(n))\\) |
| Space | \\(O(n)\\)                       | \\(O(n)\\)                       |


## Backlinks {#backlinks}

-   [Merge sort implementation in Python]({{< relref "merge_sort_implementation_in_python.md" >}})
-   [External memory algorithm]({{< relref "external_memory_algorithm.md" >}})
-   [Stable sorting algorithm]({{< relref "stable_sorting_algorithm.md" >}})
