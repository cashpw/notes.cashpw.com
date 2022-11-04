+++
title = "Bubble sort implementation in Python"
author = ["Cash Weaver"]
date = 2022-06-30T10:52:00-07:00
lastmod = 2022-11-04T14:50:33-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "af832252-c4a9-4364-bdef-59c1a8ea6ebe"
+++

An implementation of [Bubble sort]({{< relref "bubble_sort.md" >}}) in [Python]({{< relref "python.md" >}}).

```python
from typing import List

def bubble_sort(ints: List[int]) -> List[int]:
    def do_pass() -> bool:
        sorted = True

        for i in range(len(ints)-1):
            if ints[i] > ints[i + 1]:
                sorted = False
                swap(i, i+1)

        return sorted

    def swap(indexA: int, indexB: int) -> None:
        valueA = ints[indexA]
        ints[indexA] = ints[indexB]
        ints[indexB] = valueA

    sorted = False
    while not sorted:
        sorted = do_pass()

    return ints

return bubble_sort([10, 5, 4, 40])
```