+++
title = "Little-o notation"
author = ["Cash Weaver"]
date = 2022-08-19T19:06:00-07:00
lastmod = 2022-09-05T14:44:45-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
aliases = "/posts/96e6cece-bfe4-4f80-b526-9578d2431364"
+++

Little-o notation, written as \\(\littleo{g(n)}\\), is a stronger statement than [Big O notation]({{< relref "asymptotic_notation.md" >}}). It implies that \\(g(x)\\) grows much faster than \\(f(x)\\). It's defined as:

\\[f(x) = \littleo{g(x)} \overset{\Delta}{=} \lim\_{x \to \infty} \frac{f(x)}{g(x)} = 0\\]


## Relationship with [Big-O notation]({{< relref "big_o_notation.md" >}}) {#relationship-with-big-o-notation--big-o-notation-dot-md}

\\[\begin{align}3n^3 &= \bigo{n^3} \\\ 3n^3 &\ne \littleo{n^3} \\\ 3n^3 &= \littleo{n^4}\end{align}\\]

To use an analogy:

\\[\begin{align}f(n) &\in \bigo{g(n)} &\implies f(n) &\le g(n) \\\ f(n) &\in \littleo{g(n)} &\implies f(n) &< g(n)\end{align}\\]

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
</div>
