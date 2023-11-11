+++
title = "3sum solution in Python"
author = ["Cash Prokop-Weaver"]
date = 2023-02-07T16:26:00-08:00
lastmod = 2023-11-10T10:22:57-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "8940a6c3-151a-4bbd-8264-fc4cecd7ba5a"
+++

```python
from typing import List, Optional, Mapping

def three_sum(numbers: List[float], target: float) -> Optional[List[float]]:
    """Return a subset of NUMBERS of length 3 which sum to TARGET if one exists; else None.

    Assumes that floats in NUMBERS can repeat."""

    # Mapping from float to the number of times we've seen that float
    previous_numbers: Mapping[float, int] = {}

    for i in range(len(numbers)):
        if numbers[i] in previous_numbers:
            previous_numbers[numbers[i]] += 1
        else:
            previous_numbers[numbers[i]] = 1

        for j in range(len(numbers)):
            if j == i:
                continue

            difference = target - (numbers[i] + numbers[j])
            if difference in previous_numbers:
                subset = set([numbers[i], numbers[j], difference])
                subset_as_list = [numbers[i], numbers[j], difference]

                if len(subset) == 3:
                    return subset_as_list

                if len(subset) == 2:
                    if numbers[i] == numbers[j] or previous_numbers[difference] > 1:
                        return subset_as_list

                if len(subset) == 1:
                    if previous_numbers[difference] > 2:
                        return subset_as_list

    return None

print(three_sum([2,3,4,5,6], 12), 'should be [2,4,6] or [3,4,5]')
print(three_sum([2,3,4,5,-6], 0), 'should be [2,4,-6]')
print(three_sum([2,3,4,2,2], 6), 'should be [2,2,2]')
print(three_sum([2,3,4,5,2], 6), 'should be None')
```


## Backlinks {#backlinks}

-   [Three sum]({{< relref "three_sum.md" >}})
