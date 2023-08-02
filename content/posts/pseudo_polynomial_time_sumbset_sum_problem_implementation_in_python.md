+++
title = "Pseudo-polynomial time subset sum problem implementation in Python"
author = ["Cash Prokop-Weaver"]
date = 2023-02-03T06:53:00-08:00
lastmod = 2023-08-02T12:04:27-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "2fa891f4-effa-4a66-b0a2-bd587103dc14"
+++

[Implementation]({{< relref "implementation.md" >}}) of a [Pseudo-polynomial time]({{< relref "pseudo_polynomial_time.md" >}}) solution to the [Subset sum problem]({{< relref "subset_sum_problem.md" >}}) in [Python]({{< relref "python.md" >}}).

```python
from typing import List, Optional

def subset_sum(target: int, numbers: List[int]) -> Optional[List[int]]:
    """Return a subset of NUMBERS which sums to TARGET if one exists, else return None."""

    def inner(progression: List[int] = [], i: int = 0) -> Optional[List[int]]:
        """TODO"""
        if sum(progression) == target:
            return progression

        if i >= len(numbers):
            return None

        progression_without = inner(progression.copy(), i + 1)
        if progression_without is not None:
            return progression_without

        progression_with = inner(progression.copy() + [numbers[i]], i + 1)
        if progression_with is not None:
            return progression_with

        return None

    return inner()

print(subset_sum(7, [2,4,5]), 'should be [2,5]')
print(subset_sum(8, [2,4,5]), 'should be None')
print(subset_sum(11, [2,4,5]), 'should be [2,4,5]')
print(subset_sum(0, [2,4,5]), 'should be []')
```


## Flashcards {#flashcards}


### Implement {#implement}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 1   | 1.00     | 2023-06-11T15:56:34Z |

[Pseudo-polynomial time sumbset sum problem implementation in Python]({{< relref "pseudo_polynomial_time_sumbset_sum_problem_implementation_in_python.md" >}})


#### Back {#back}

[Pseudo-polynomial time sumbset sum problem implementation in Python]({{< relref "pseudo_polynomial_time_sumbset_sum_problem_implementation_in_python.md" >}})


#### Source {#source}

[Pseudo-polynomial time sumbset sum problem implementation in Python]({{< relref "pseudo_polynomial_time_sumbset_sum_problem_implementation_in_python.md" >}})


## Backlinks {#backlinks}

-   [Subset sum problem]({{< relref "subset_sum_problem.md" >}})
