+++
title = "Brandon Smith | Write Libraries, Not Frameworks"
author = ["Cash Weaver"]
date = 2023-12-04T08:22:00-08:00
lastmod = 2023-12-23T10:44:12-08:00
tags = ["reference", "reference"]
categories = ["reference"]
draft = false
slug = "a436ac99-5134-4c86-94ca-9c91be32324c"
+++

[Brandon Smith]({{< relref "brandon_smith.md" >}}), (<a href="#citeproc_bib_item_1">Smith n.d.</a>)


## Summary {#summary}


## Thoughts {#thoughts}

Agreed.


## Notes {#notes}

> When a programmer thinks to herself "I've got some code or an idea for some code here that I think will make others' lives easier", there are generally two broad-strokes forms that code can take: a library, or a framework.
>
> A library is a set of building blocks that may share a common theme or work well together, but are largely independent.
>
> A framework is a context in which someone writes their own code. This could take the form of inversion-of-control, a domain-specific language, or just a very opinionated and internally-coupled library. It's a spectrum; there's no hard line between the two. One way to tell if something is a framework is to ask yourself, "Could I use this in combination with something else like it? Or has it established ways of doing things that are mutually-exclusive with other ways those things might be done?"
>
> Frameworks' key trait is that they impose limitations on the programmer. Rather than providing a set of new things the programmer can do, they establish a boundary on the things the programmer can do. In exchange for flexibility they often eliminate boilerplate, establish a touchstone for new libraries to be built on top of them, and allow a programmer's skills to become more transferable between projects. In fact, sometimes the limitations themselves are desirable! After all, type systems are nothing but a way of imposing limitations on code. Limitations are not intrinsically bad.
>
> However. When you write a framework that you expect others to build real projects with (i.e. it isn't just a toy), you are taking on a much greater responsibility than you would with a library.
>
> A framework, usually, must predict ahead of time every kind of thing a user of it might need to do within its walls. For each piece of the puzzle that it assimilates into its own vocabulary, it must take over responsibility for that set of tasks. It must not only take care that every task that needs to be done in it can be done, it ideally needs to offer a better way of doing those things than the way they would be done normally. Otherwise, why use it?
>
> [...]
>
> [...] With a library, the good bits can be used piecemeal without having to throw the whole thing away because of one problem that nobody's ever going to fix in the trunk.
>
> So here's my point: frameworks aren't always bad, but they are a much bigger risk - for both the creators and the users - than libraries are. If your framework can be a library without losing much, it probably should be. If you don't work at a major tech company, you probably don't have the time or energy to give a framework all of the attention it requires. Libraries aren't everything, but they should be preferred.


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Smith, Brandon. n.d. “Write Libraries, Not Frameworks.” Accessed December 4, 2023. <a href="https://www.brandons.me/blog/libraries-not-frameworks">https://www.brandons.me/blog/libraries-not-frameworks</a>.</div>
</div>


## Backlinks {#backlinks}

-   [The last 10%]({{< relref "after_the_finish_line.md" >}})
