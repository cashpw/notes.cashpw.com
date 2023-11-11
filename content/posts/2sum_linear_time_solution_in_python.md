+++
title = "2sum linear time solution in Python"
author = ["Cash Prokop-Weaver"]
date = 2023-02-07T16:13:00-08:00
lastmod = 2023-11-10T10:22:56-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "0d2abc68-9f65-4676-9f62-37b07cb1b86b"
+++

[2sum]({{< relref "2sum.md" >}}) is a [Technical interview question]({{< relref "technical_interview_question.md" >}}) and a variant of the [Subset sum problem]({{< relref "subset_sum_problem.md" >}}).

```python
from typing import Optional, List

def two_sum(numbers: List[int], target: int) -> Optional[List[int]]:
    """Return the two elements in NUMBERS which sum to TARGET; else None."""

    previous_numbers = {}

    for num in numbers:
        difference = target - num
        if difference in previous_numbers:
            return [num, difference]

        previous_numbers[num] = True

    return None

print(two_sum([2,4,5], 7), 'should be [2, 5]')
print(two_sum([2,4,5], 2), 'should be None')
```


## Backlinks {#backlinks}

-   [2sum]({{< relref "2sum.md" >}})
