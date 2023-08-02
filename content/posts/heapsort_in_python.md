+++
title = "Heapsort implementation in python"
author = ["Cash Prokop-Weaver"]
date = 2022-10-17T09:22:00-07:00
lastmod = 2023-08-02T11:05:49-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "1866a9ee-480e-4c8e-95d1-549bd30f13dc"
+++

An [Implementation]({{< relref "implementation.md" >}}) of [Heapsort]({{< relref "heapsort.md" >}}) in [Python]({{< relref "python.md" >}}).

```python
from typing import List, TypeVar, Generic, Tuple
from collections.abc import Callable
from math import floor

T = TypeVar('T')
Comparator = Callable[[id:T,T], int]

def get_parent_index(child_index: int) -> int:
    if child_index == 0:
        return 0

    return floor((child_index - 1) / 2.0)

def get_child_indices(parent_index: int) -> Tuple[int, int]:
    return (parent_index * 2) + 1, (parent_index * 2) + 2

def heapsort(items: List[T], comparator: Comparator) -> List[T]:
    """Sort ITEMS in-place using heapsort."""
    def heapify(heap_range: Tuple[int, int]) -> None:
        # TODO: Validate indices

        heap_start, heap_end = heap_range
        for i in range(heap_start + 1, heap_end + 1):
            heapify_up((heap_start, i))

    def heapify_up(heap_range: Tuple[int, int]) -> None:
        # TODO: Validate indices

        _, heap_end = heap_range
        child_index = heap_end
        parent_index = get_parent_index(child_index)
        while True:
            if child_index == parent_index:
                break

            if comparator(items[child_index], items[parent_index]) <= 0:
                break

            swap(parent_index, child_index)
            child_index = parent_index
            parent_index = get_parent_index(child_index)

    def heapify_down(heap_range: Tuple[int, int]) -> None:
        # TODO: Validate indices

        heap_start, heap_end = heap_range
        parent_index = heap_start
        while True:
            child_a_index, child_b_index = get_child_indices(parent_index)
            swap_index = parent_index

            if child_a_index <= heap_end and comparator(items[child_a_index], items[parent_index]) > 0:
                swap_index = child_a_index

            if child_b_index <= heap_end and comparator(items[child_b_index], items[parent_index]) > 0 and comparator(items[child_b_index], items[child_a_index]) > 0:
                swap_index = child_b_index

            if swap_index == parent_index:
                break

            swap(swap_index, parent_index)
            parent_index = swap_index


    def swap(index_a: int, index_b: int) -> None:
        # TODO: Validate indices
        value_a = items[index_a]
        items[index_a] = items[index_b]
        items[index_b] = value_a

    heapify((0, len(items)-1))
    for heap_end in reversed(range(1, len(items))):
        swap(0, heap_end)
        heapify_down((0, heap_end-1))

    return items

print(heapsort([4,2,5,19,1], lambda x,y: 1 if x > y else -1))
print(heapsort([4,2,5,19,1], lambda x,y: 1 if x < y else -1))

# Test get_parent_index
#print("Pass" if get_parent_index(1) == 0 else "Fail")
#print("Pass" if get_parent_index(2) == 0 else "Fail")
#print("Pass" if get_parent_index(3) == 1 else "Fail")
#print("Pass" if get_parent_index(4) == 1 else "Fail")
#print("Pass" if get_parent_index(5) == 2 else "Fail")
#print("Pass" if get_parent_index(0) == 0 else "Fail")

# Test get_child_indices
#print("Pass" if get_child_indices(0) == (1,2) else ("Fail", get_child_indices(0)))
#print("Pass" if get_child_indices(1) == (3,4) else ("Fail", get_child_indices(1)))
#print("Pass" if get_child_indices(2) == (5,6) else ("Fail", get_child_indices(1)))
```


## Flashcards {#flashcards}


## Backlinks {#backlinks}

-   [Heapsort]({{< relref "heapsort.md" >}})
