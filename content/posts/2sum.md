+++
title = "2sum"
author = ["Cash Prokop-Weaver"]
date = 2023-02-07T15:59:00-08:00
lastmod = 2023-08-02T10:32:52-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "9ce77447-dc1d-4623-b469-b4bd636e7453"
+++

> Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
>
> You may assume that each input would have exactly one solution, and you may not use the same element twice.
>
> You can return the answer in any order.
>
> (<a href="#citeproc_bib_item_1">LeetCode n.d.</a>)

[2sum]({{< relref "2sum.md" >}}) is a [Technical interview question]({{< relref "technical_interview_question.md" >}}) and a variant of the [Subset sum problem]({{< relref "subset_sum_problem.md" >}}).


## Quadratic solution (\\(\bigo{n^2}\\)) {#quadratic-solution--bigo-n-2}

```python
from typing import Optional, List

def two_sum(numbers: List[int], target: int) -> Optional[List[int]]:
    """Return the two elements in NUMBERS which sum to TARGET; else None."""

    for first in numbers:
        for second in numbers[1:]:
            if first + second == target:
                return [first, second]

    return None

print(two_sum([2,4,5], 7), 'should be [2, 5]')
print(two_sum([2,4,5], 2), 'should be None')
```


## Linear solution (\\(\bigo{n}\\)) {#linear-solution--bigo-n}

The trick is using a [Hash map]({{< relref "hash_table.md" >}}).

[2sum linear time solution in Python]({{< relref "2sum_linear_time_solution_in_python.md" >}})


## Flashcards {#flashcards}


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 6   | 116.31   | 2023-08-23T21:42:34Z |

[2sum]({{< relref "2sum.md" >}}) can be solved in {{\\(\bigo{n}\\), linear}@0} time.


#### Source {#source}

[2sum]({{< relref "2sum.md" >}})


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.95 | 6   | 155.81   | 2023-10-06T11:03:29Z |

The trick to solving [2sum]({{< relref "2sum.md" >}}) is {{using a [Hash map]({{< relref "hash_table.md" >}})}@0}.


#### Source {#source}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>LeetCode. n.d. “Two Sum.” <i>Leetcode</i>. Accessed February 8, 2023. <a href="https://leetcode.com/problems/two-sum/description">https://leetcode.com/problems/two-sum/description</a>.</div>
</div>


## Backlinks {#backlinks}

-   [2sum linear time solution in Python]({{< relref "2sum_linear_time_solution_in_python.md" >}})
