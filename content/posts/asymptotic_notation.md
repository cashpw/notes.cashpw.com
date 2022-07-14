+++
title = "Asymptotic Notation"
author = ["Cash Weaver"]
date = 2022-06-29T09:52:00-07:00
lastmod = 2022-07-13T20:29:36-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
+++

## Big O notation {#big-o-notation}

Big O notation is denoted with \\(O(g(n))\\) and indicates an worst-case asymptotic upper bound. While \\(2n^2\\) is in \\(O(n^9)\\), it's preferred to be as precise as possible and state the lowest valid case: \\(2n^2 = O(n^2)\\).


## Little-o notation {#little-o-notation}

Little-o notation, written as \\(o(g(n))\\), is a stronger statement than [Big O notation]({{< relref "asymptotic_notation.md" >}}). It implies that \\(g(x)\\) grows much faster than \\(f(x)\\). It's defined as:

\\[f(x) = o(g(x)) \overset{\Delta}{=} \lim\_{x \to \infty} \frac{f(x)}{g(x)} = 0\\]


### Relationship with Big O notation {#relationship-with-big-o-notation}

\\[\begin{align}3n^3 &= O(n^3) \\\ 3n^3 &\ne o(n^3) \\\ 3n^3 &= o(n^4)\end{align}\\]

To use an analogy:

\\[\begin{align}f(n) &= O(g(n)) &\approx a &\le b \\\ f(n) &= o(g(n)) &\approx a &< b\end{align}\\]


## Big Omega notation {#big-omega-notation}

Big Omega notation, written as \\(\Omega(g(n))\\), indicates an worst-case asymptotic lower bound. While \\(2n^2\\) is in \\(\Omega(1)\\), it's preferred to be as precise as possible and state the lowest valid case: \\(2n^2 = \Omega(n^2)\\).


## Big Theta notation {#big-theta-notation}

Big Theta notation, written as \\(\Theta(g(n))\\), indicates \\(f\\) is bound above and below, asymptotically, by \\(g\\) (a tight bound).

\\[\Theta(n) \implies O(n) \\;\text{and}\\; \Omega(n)\\]

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
</div>
