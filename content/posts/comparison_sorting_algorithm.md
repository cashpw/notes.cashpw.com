+++
title = "Comparison sorting algorithm"
author = ["Cash Prokop-Weaver"]
date = 2022-11-18T14:47:00-08:00
lastmod = 2023-12-05T13:56:02-08:00
tags = ["hastodo", "concept", "hastodo", "concept"]
categories = ["hastodo", "concept"]
draft = false
slug = "cedb0b84-030c-4de7-b4ae-0ce16f09fa19"
+++

> A comparison sort is a type of [Sorting algorithm]({{< relref "sorting_algorithm.md" >}}) that only reads the list elements through a single abstract comparison operation (often a "less than or equal to" operator or a three-way comparison) that determines which of two elements should occur first in the final sorted list. The only requirement is that the operator forms a total preorder over the data, with:
>
> -   if a ≤ b and b ≤ c then a ≤ c (transitivity) [[Transitive relation]({{< relref "transitive.md" >}})]
> -   for all a and b, a ≤ b or b ≤ a (connexity) [[Connected relationship]({{< relref "strongly_connected.md" >}})].
>
> It is possible that both a ≤ b and b ≤ a; in this case either may come first in the sorted list. In a [Stable sorting algorithm]({{< relref "stable_sorting_algorithm.md" >}}), the input order determines the sorted order in this case.


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
</div>


## Backlinks {#backlinks}

-   [Selection sort]({{< relref "selection_sort.md" >}})
