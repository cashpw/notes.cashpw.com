+++
title = "Knapsack problem"
author = ["Cash Prokop-Weaver"]
date = 2023-01-31T09:25:00-08:00
lastmod = 2023-09-24T10:23:52-07:00
tags = ["hastodo", "concept", "hastodo", "concept"]
categories = ["hastodo", "concept"]
draft = false
slug = "24b10601-c88f-46fc-bbf9-3f7687c2d2ba"
+++

> The knapsack problem is the following problem in combinatorial optimization:
>
> Given a set of items, each with a weight and a value, determine which items to include in the collection so that the total weight is less than or equal to a given limit and the total value is as large as possible.
>
> It derives its name from the problem faced by someone who is constrained by a fixed-size knapsack and must fill it with the most valuable items. The problem often arises in resource allocation where the decision-makers have to choose from a set of non-divisible projects or tasks under a fixed budget or time constraint, respectively.
>
> (<a href="#citeproc_bib_item_1">“Knapsack Problem” 2023</a>)


## Definition {#definition}


### 0-1 knapsack problem {#0-1-knapsack-problem}

> The most common problem being solved is the 0-1 knapsack problem, which restricts the number \\(x\_{i}\\) of copies of each kind of item to zero or one. Given a set of \\(n\\) items numbered from 1 up to \\(n\\), each with a weight \\(w\_{i}\\) and a value \\(v\_{i}\\), along with a maximum weight capacity \\(W\\),
>
> maximize \\(\sum \_{i=1}^{n}v\_{i}x\_{i}\\)
>
> subject to \\(\sum \_{i=1}^{n}w\_{i}x\_{i}\leq W\\) and \\(x\_{i}\in \\{0,1\\}\\)
>
> Here \\(x\_i\\) represents the number of instances of item \\(i\\) to include in the knapsack. Informally, the problem is to maximize the sum of the values of the items in the knapsack so that the sum of the weights is less than or equal to the knapsack's capacity.
>
> (<a href="#citeproc_bib_item_1">“Knapsack Problem” 2023</a>)


### Bounded knapsack problem {#bounded-knapsack-problem}

> The bounded knapsack problem (BKP) removes the restriction that there is only one of each item, but restricts the number \\(x\_{i}\\) of copies of each kind of item to a maximum non-negative integer value \\(c\\)


### Unbounded knapsack problem {#unbounded-knapsack-problem}

> The unbounded knapsack problem (UKP) places no upper bound on the number of copies of each kind of item and can be formulated as above except that the only restriction on \\(x\_{i}\\) is that it is a non-negative integer.


## Variations {#variations}

> The subset sum problem [[Subset sum problem]({{< relref "subset_sum_problem.md" >}})] is a special case of the decision and 0-1 problems where each kind of item, the weight equals the value: \\(w\_{i}=v\_{i}\\).
>
> (<a href="#citeproc_bib_item_1">“Knapsack Problem” 2023</a>)


##  {#d41d8c}


## Flashcards {#flashcards}


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.80 | 6   | 151.49   | 2023-10-08T04:21:44Z |
| back     | 2.20 | 7   | 179.70   | 2024-01-23T07:07:14Z |

[Knapsack problem]({{< relref "knapsack_problem.md" >}})


#### Back {#back}

Given a set of items, each with a weight and a value, determine which items to include in the collection so that the total weight is less than or equal to a given limit and the total value is as large as possible.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Knapsack Problem” 2023</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Knapsack Problem.” 2023. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Knapsack_problem&oldid=1136320436">https://en.wikipedia.org/w/index.php?title=Knapsack_problem&#38;oldid=1136320436</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Subset sum problem]({{< relref "subset_sum_problem.md" >}})
