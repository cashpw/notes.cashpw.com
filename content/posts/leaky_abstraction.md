+++
title = "Leaky abstraction"
author = ["Cash Prokop-Weaver"]
date = 2023-09-20T17:02:00-07:00
lastmod = 2023-12-05T20:29:47-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "98d4ba4e-4f66-4833-9755-c59865ddced1"
+++

> In software development, a leaky abstraction is an abstraction that leaks details that it is supposed to abstract away.
>
> As coined by Joel Spolsky, the Law of Leaky Abstractions states:
>
> <div class="quote2">
>
> All non-trivial abstractions, to some degree, are leaky.
>
> </div>

In other words, a leaky abstraction is one which is unsuccessful in hiding all the messy detail's it's meant to cover up.


## Example(s) {#example--s}

One real-world example is a printed bus schedule. Usually this is a fine abstraction which answers "how long until the bus arrives?" but it can fall apart in the case of outliers (e.g. bus breakdowns, more traffic than normal, construction). In these cases, the printed schedule is "leaky" and readers need to take extra information into account (e.g. "There's a concert at the stadium tonight. Busses driving past toward the end or beginning are likely to arrive late.").


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
</div>


## Backlinks {#backlinks}

-   [Legible]({{< relref "legible.md" >}})
