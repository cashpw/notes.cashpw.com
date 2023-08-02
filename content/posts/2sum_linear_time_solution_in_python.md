+++
title = "2sum linear time solution in Python"
author = ["Cash Prokop-Weaver"]
date = 2023-02-07T16:13:00-08:00
lastmod = 2023-08-02T10:32:52-07:00
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


## Flashcards {#flashcards}


### Solve {#solve}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.65 | 5   | 34.71    | 2023-08-07T18:44:09Z |

> Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
>
> You may assume that each input would have exactly one solution, and you may not use the same element twice.
>
> You can return the answer in any order.
>
> (<a href="#citeproc_bib_item_1">LeetCode n.d.</a>)


#### Back {#back}

[2sum linear time solution in Python]({{< relref "2sum_linear_time_solution_in_python.md" >}})


#### Source {#source}

[2sum linear time solution in Python]({{< relref "2sum_linear_time_solution_in_python.md" >}})

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>LeetCode. n.d. “Two Sum.” <i>Leetcode</i>. Accessed February 8, 2023. <a href="https://leetcode.com/problems/two-sum/description">https://leetcode.com/problems/two-sum/description</a>.</div>
</div>


## Backlinks {#backlinks}

-   [2sum]({{< relref "2sum.md" >}})
