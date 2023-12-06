+++
title = "Subset sum problem"
author = ["Cash Prokop-Weaver"]
date = 2023-01-31T07:30:00-08:00
lastmod = 2023-12-05T14:51:56-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "1590ca9a-06cb-4a3a-96c3-e52cbc31a0f3"
+++

> The subset sum problem (SSP) is a decision problem [[Decision problem]({{< relref "decision_problem.md" >}})] in computer science. In its most general formulation, there is a multiset [[Multiset]({{< relref "multiset.md" >}})] \\(S\\) of integers and a target-sum \\(T\\), and the question is to decide whether any subset of the integers sum to precisely \\(T\\). The problem is known to be NP-hard. Moreover, some restricted variants of it are NP-complete too, for example:
>
> -   The variant in which all inputs are positive.
> -   The variant in which inputs may be positive or negative, and \\(T=0\\). For example, given the set \\(\\{-7,-3,-2,9000,5,8\\}\\), the answer is yes because the subset \\(\\{-3,-2,5\\}\\) sums to zero.
> -   The variant in which all inputs are positive, and the target sum is exactly half the sum of all inputs, i.e., \\(T=\frac {1}{2}}(a\_{1}+\dots +a\_{n})\\) . This special case of SSP is known as the partition problem.
>
> SSP can also be regarded as an optimization problem: find a subset whose sum is at most T, and subject to that, as close as possible to T. It is NP-hard, but there are several algorithms that can solve it reasonably quickly in practice.
>
> SSP is a special case of the knapsack problem [[Knapsack problem]({{< relref "knapsack_problem.md" >}})] and of the multiple subset sum problem.
>
> (<a href="#citeproc_bib_item_1">“Subset Sum Problem” 2023</a>)


## [Pseudo-polynomial time]({{< relref "pseudo_polynomial_time.md" >}}) time [Dynamic programming]({{< relref "dynamic_programming.md" >}}) solution {#pseudo-polynomial-time--pseudo-polynomial-time-dot-md--time-dynamic-programming--dynamic-programming-dot-md--solution}


### Algorithm {#algorithm}

> SSP can be solved in pseudo-polynomial time using dynamic programming. Suppose we have the following sequence of elements in an instance:
>
> \\(x\_{1},\ldots ,x\_{N}\\)
>
> We define a state as a pair \\((i, s)\\) of integers. This state represents the fact that
>
> "there is a nonempty subset of \\(x\_{1},\ldots ,x\_{i}\\) which sums to \\(s\\)."
>
> Each state \\((i, s)\\) has two next states:
>
> 1.  \\((i+1, s)\\), implying that \\(x\_{i+1}\\) is not included in the subset
> 2.  \\((i+1, s+ x\_{i+1})\\), implying that \\(x\_{i+1}\\) is included in the subset
>
> Starting from the initial state \\((0, 0)\\), it is possible to use any graph search algorithm (e.g. BFS) to search the state \\((N, T)\\). If the state is found, then by backtracking we can find a subset with a sum of exactly \\(T\\).

[Pseudo-polynomial time subset sum problem implementation in Python]({{< relref "pseudo_polynomial_time_sumbset_sum_problem_implementation_in_python.md" >}}).


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Subset Sum Problem.” 2023. <i>Wikipedia</i>, January. <a href="https://en.wikipedia.org/w/index.php?title=Subset_sum_problem&oldid=1136150450">https://en.wikipedia.org/w/index.php?title=Subset_sum_problem&#38;oldid=1136150450</a>.</div>
</div>


## Backlinks {#backlinks}

-   [2sum linear time solution in Python]({{< relref "2sum_linear_time_solution_in_python.md" >}})
-   [2sum]({{< relref "2sum.md" >}})
-   [Knapsack problem]({{< relref "knapsack_problem.md" >}})
-   [Pseudo-polynomial time subset sum problem implementation in Python]({{< relref "pseudo_polynomial_time_sumbset_sum_problem_implementation_in_python.md" >}})
-   [Three sum]({{< relref "three_sum.md" >}})
