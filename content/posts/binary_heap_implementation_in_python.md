+++
title = "Binary heap implementation in python"
author = ["Cash Prokop-Weaver"]
date = 2022-10-21T09:21:00-07:00
lastmod = 2024-02-24T11:46:10-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "8178ba27-6553-4e8e-b7d4-125e72278029"
+++

An [Implementation]({{< relref "implementation.md" >}}) of a [Binary heap]({{< relref "binary_heap.md" >}}) in [Python]({{< relref "python.md" >}}).

```python
from typing import List, TypeVar, Generic, Tuple, Optional
from collections.abc import Callable
from math import floor

T = TypeVar('T')
Comparator = Callable[[id:T, T], int]

class Heap(Generic[T]):
    def __init__(self, comparator: Comparator) -> None:
        self.comparator = comparator
        self.items = []

    def add(self, value: T) -> None:
        """Add the provided value into the heap."""
        self.items.append(value)
        self._heapify_up()

    def pop(self) -> Optional[T]:
        """Remove and return the value at the top of the heap"""
        if len(self.items) == 0:
            return None

        value = self.items.pop(0)
        self._heapify_down()

        return value

    def peek(self) -> Optional[T]:
        """Return, without removing, the value at the top of the heap"""
        if len(self.items) == 0:
            return None

        return self.items[0]

    def _heapify_up(self) -> None:
        if len(self.items) == 0:
            return

        child_index = len(self.items) - 1
        while True:
            parent_index = self._get_parent_index(child_index)
            if child_index == 0 and parent_index == 0:
                break

            if self._compare(child_index, parent_index) <= 0:
                break

            self._swap(child_index, parent_index)
            child_index = parent_index

    def _heapify_down(self) -> None:
        parent_index = 0
        while True:
            if not self._index_is_in_bounds(parent_index):
                break

            child_a_index, child_b_index = self._get_child_indices(parent_index)
            swap_index = None

            if self._index_is_in_bounds(child_a_index) and self._compare(child_a_index, parent_index) > 0:
                swap_index = child_a_index

            if self._index_is_in_bounds(child_b_index) and self._compare(child_b_index, parent_index) > 0 and self._compare(child_b_index, child_a_index):
                swap_index = child_b_index

            if swap_index is None:
                break

            self._swap(swap_index, parent_index)
            parent_index = swap_index

    def _compare(self, index_a: int, index_b: int) -> int:
        return self.comparator(self.items[index_a], self.items[index_b])

    def _get_parent_index(self, child_index: int) -> int:
        return floor(child_index / 2)

    def _get_child_indices(self, parent_index: int) -> Tuple[int, int]:
        return (parent_index * 2) + 1, (parent_index * 2) + 2

    def _swap(self, index_a: int, index_b: int) -> None:
        if not self._index_is_in_bounds(index_a):
            return

        if not self._index_is_in_bounds(index_b):
            return

        value_a = self.items[index_a]
        self.items[index_a] = self.items[index_b]
        self.items[index_b] = value_a

    def _index_is_in_bounds(self, index: int) -> None:
        return index >= 0 and index < len(self.items)

h = Heap(lambda x,y: 1 if x < y else -1)
h.add(5)
h.add(3)
h.add(10)
print(h.peek())
print(h.pop())
print(h.peek())
print(h.pop())
print(h.peek())
print(h.pop())
print(h.peek())
```


## Bibliography {#bibliography}

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
</div>


## Backlinks {#backlinks}

-   [Binary heap]({{< relref "binary_heap.md" >}})
