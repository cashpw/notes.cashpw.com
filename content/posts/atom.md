+++
title = "Atom"
author = ["Cash Prokop-Weaver"]
date = 2022-06-29T08:31:00-07:00
lastmod = 2023-11-10T10:26:50-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "b37a4585-be03-43ea-a55c-6a5f84e59c77"
+++

An atom, in [Lisp]({{< relref "lisp.md" >}}), is an indivisible thing. Examples include:

-   Numbers (e.g. `12`)
-   Strings (e.g. `foo`)
-   Symbols (e.g. `+` or `'pi`)

> This term comes from the historical meaning of the word atom, which means "indivisible". As far as Lisp is concerned, the words we have been using in the lists cannot be divided into any smaller parts and still mean the same thing as part of a program; likewise with numbers and single character symbols like '+'. On the other hand, unlike an ancient atom, a list can be split into parts.
>
> [...]
>
> Technically speaking, a list in Lisp consists of parentheses surrounding atoms separated by whitespace or surrounding other lists or surrounding both atoms and other lists. A list can have just one atom in it or have nothing in it at all. A list with nothing in it looks like this: (), and is called the empty list. Unlike anything else, an empty list is considered both an atom and a list at the same time.
>
> (“Lisp Atoms” n.d.)


## Backlinks {#backlinks}

-   [Symbolic expression]({{< relref "symbolic_expression.md" >}})
