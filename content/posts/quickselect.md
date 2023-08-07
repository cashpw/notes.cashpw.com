+++
title = "Quickselect"
author = ["Cash Prokop-Weaver"]
date = 2022-07-01T16:09:00-07:00
lastmod = 2023-08-02T12:08:29-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "df6876e1-5035-4432-9b8a-19898faa4fdd"
+++

> In computer science, quickselect is a [Selection algorithm]({{< relref "selection_algorithm.md" >}}) to find the kth smallest element in an unordered list. It is related to the [Quicksort]({{< relref "quicksort.md" >}}) [Sorting algorithm]({{< relref "sorting_algorithm.md" >}}).


## Algorithm {#algorithm}

To find the `k`-th smallest element in a `list`:

1.  Select a `pivotIndex`
2.  `Partition` the `list` around the `pivotIndex`
3.  If `Partition(...)` returns `k`: `return list[k]`
4.  Else if `Partition(...) < k`: Apply `Quicksort` to the left set
5.  Else: Apply `Quicksort` to the right set

<!--listend-->

```nil
procedure QuickSort(list, targetIndex) is
  procedure Swap(list, indexA, indexB) is
    ...

  procedure Partition(list, leftIndex, rightIndex, pivotIndex) is
    pivotValue = list[pivotIndex]
    swap list[pivotIndex] and list[rightIndex]

    i = leftIndex - 1
    for j from leftIndex to rightIndex - 1 do
      if list[j] <= pivotValue then
        i += 1
        swap list[i] and list[j]
    i += 1
    swap list[i] and list[rightIndex]
    return i

  procedure QuickSortInner(list, leftIndex, rightIndex, targetIndex) is
    pivotIndex = rightIndex
    pivotIndex = Partition(list, leftIndex, rightIndex, pivotIndex)

    if targetIndex is pivotIndex then
      return list[pivotIndex]

    if targetIndex < pivotIndex then
      return QuickSortInner(list, leftIndex, pivotIndex - 1, targetIndex)

    return QuickSortInner(list, pivotIndex + 1, rightIndex, targetIndex)

  return QuickSortInner(list, 0, len(list)-1, targetIndex)
```


## Implementation {#implementation}

-   [Quickselect implementation in Python]({{< relref "quickselect_implementation_in_python.md" >}})


## Flashcards {#flashcards}


### Basic with Source {#basic-with-source}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.35 | 4   | 14.23    | 2023-07-22T20:32:25Z |

Implement [Quickselect]({{< relref "quickselect.md" >}}) in [Python]({{< relref "python.md" >}})


#### Back {#back}

[Quickselect implementation in Python]({{< relref "quickselect_implementation_in_python.md" >}})


### Algorithm {#algorithm}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.80 | 7   | 348.68   | 2024-05-21T07:21:22Z |
| back     | 2.35 | 7   | 169.52   | 2023-10-20T10:10:15Z |

[Quickselect]({{< relref "quickselect.md" >}})


#### Back {#back}

To find the `k`-th smallest element in a `list`:

1.  Select a `pivotIndex`
2.  `Partition` the `list` around the `pivotIndex`
3.  If `Partition(...)` returns `k`: `return list[k]`
4.  Else if `Partition(...) < k`: Apply `Quicksort` to the left set
5.  Else: Apply `Quicksort` to the right set


## Backlinks {#backlinks}

-   [Quickselect implementation in Python]({{< relref "quickselect_implementation_in_python.md" >}})
-   [Selection algorithm]({{< relref "selection_algorithm.md" >}})