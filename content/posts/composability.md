+++
title = "Composability"
author = ["Cash Prokop-Weaver"]
date = 2022-11-10T18:47:00-08:00
lastmod = 2022-12-17T11:08:09-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "5d0c9c41-219f-4330-b2e6-0ae5daaa5355"
+++

> Composability is a system design principle that deals with the inter-relationships of components. A highly composable system provides components that can be selected and assembled in various combinations to satisfy specific user requirements. In information systems, the essential features that make a component composable are that it be:
>
> -   self-contained (modular): it can be deployed independently – note that it may cooperate with other components, but dependent components are replaceable
> -   stateless: it treats each request as an independent transaction, unrelated to any previous request. Stateless is just one technique; managed state and transactional systems can also be composable, but with greater difficulty.
>
> (<a href="#citeproc_bib_item_1">“Composability” 2021</a>)


## Flashcards {#flashcards}


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.20 | 0   | 0.00     | 2022-12-13T17:25:27Z |
| back     | 2.5  | -1  | 0        | 2022-11-11T02:51:36Z |

[Composability]({{< relref "composability.md" >}})


#### Back {#back}

A design principle relating to distinct, independent, units which can be assembled in various combinations. The essential features are usually:

-   self-contained / modular
-   stateless


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Composability” 2021</a>)


### Composable objects are usually {{stateless}@0} and {{self-contained / modular}@1} {#composable-objects-are-usually-stateless-0-and-self-contained-modular-1}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 1   | 1.00     | 2022-12-14T18:22:59Z |
| 1        | 2.5  | -1  | 0        | 2022-12-02T19:31:53Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Composability” 2021</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Composability.” 2021. <i>Wikipedia</i>, June. <a href="https://en.wikipedia.org/w/index.php?title=Composability&oldid=1030547806">https://en.wikipedia.org/w/index.php?title=Composability&#38;oldid=1030547806</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Describe]({{< relref "unix_philosophy.md#describe" >}})
-   [Zach Tellman | Two Concepts of Legibility]({{< relref "zach_tellman_two_concepts_of_legibility.md" >}})
