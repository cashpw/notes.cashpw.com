+++
title = "Quicksort implementation in Python"
author = ["Cash Prokop-Weaver"]
date = 2022-06-30T13:57:00-07:00
lastmod = 2022-12-17T14:05:39-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "ed982b37-6f8e-4b89-bb51-ac608510325e"
+++

An implementation of [Quicksort]({{< relref "quicksort.md" >}}) in [Python]({{< relref "python.md" >}}).

```python
from typing import List, Callable

def swap(ints: List[int], indexA: int, indexB: int) -> None:
    """Swap the values in INTS at INDEXA and INDEXB."""
    valueA = ints[indexA]
    ints[indexA] = ints[indexB]
    ints[indexB] = valueA

def partition(ints: List[int], comparator: Callable[[id:int, int], bool], low_index: int, high_index: int) -> int:
    """Sorts sublist into [{<= pivot}, pivot, {> than pivot}]"""

    pivot_index = high_index
    i = low_index - 1

    for j in range(low_index, high_index):
        if comparator(ints[j], ints[pivot_index]):
            i += 1
            swap(ints, i, j)
    i += 1
    swap(ints, i, pivot_index)

    return i

def quick_sort_inner(ints: List[int], comparator: Callable[[id:int, int], bool], low_index: int, high_index: int) -> List[int]:
    if low_index >= high_index or low_index < 0:
        return

    pivot_index = partition(ints, comparator, low_index, high_index)

    quick_sort_inner(ints, comparator, 0, pivot_index - 1)
    quick_sort_inner(ints, comparator, pivot_index + 1, high_index)

    return ints

def quick_sort(ints: List[int], comparator: Callable[[id:int, int], bool]) -> List[int]:
       return quick_sort_inner(ints, comparator, 0, len(ints) - 1)


a = [10, 15, 5, 8, 2, 1, 3, 9]
print(quick_sort(a, lambda a, b: a <= b))
```


## Flashcards {#flashcards}


## Backlinks {#backlinks}

-   [Quicksort]({{< relref "quicksort.md" >}})
-   [Quicksort's `partition` function iterates `j` from `{{range(low_index, high_index)}@0}`]({{< relref "quicksort.md#id-d7bcd831-6a3f-4885-a654-15f0b11c9966-quicksort-s-partition-function-iterates-j-from-range--low-index-high-index--0" >}})
-   [Implement Quicksort in Python]({{< relref "quicksort.md#implement-id-d7bcd831-6a3f-4885-a654-15f0b11c9966-quicksort-in-python" >}})
