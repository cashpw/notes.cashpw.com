+++
title = "Style Guide"
author = ["Cash Weaver"]
date = 2022-02-05T13:12:00-08:00
lastmod = 2022-02-05T13:30:26-08:00
tags = ["meta", "meta", "@cash-weaver"]
categories = ["Cash-Weaver", "meta", "cash-weaver"]
draft = false
+++

A style guide for my `org-roam` notes files.


## Tags {#tags}

Make liberal use of tags.


## Specifying an Author {#specifying-an-author}

Specify an author using a node-level tag prefixed with `@` (eg: `@Cash_Weaver`).


## Quotes {#quotes}


### Attribution {#attribution}

Attribution lines in quotes should be in _italics_.


#### Does it Need Attribution? {#does-it-need-attribution}

Every quote should contain an attribution unless it meets one of the following criteria:

1.  The quote is from a source referenced in `ROAM_REFS` and this source is the **only** source present in `ROAM_REFS`.


#### Examples {#examples}

> Org is a mode for keeping notes, maintaining TODO lists, and project planning with a fast and effective plain-text markup language. It also is an authoring system with unique support for literate programming and reproducible research.
>
> _[org-mode Manual: Summary](https://orgmode.org/manual/Summary.html)_

<!--quoteend-->

> Muad'Dib learned rapidly because his first training was in how to learn. And the first lesson of all was the basic trust that he could learn. It's shocking to find how many people do not believe they can learn, and how many more believe learning to be difficult. Muad'Dib knew that every experience carries its lesson.
>
> _Princess Irulan, (<a href="#citeproc_bib_item_1">Herbert 1999</a>)_


### Quote Nodes {#quote-nodes}

Quotes should live in stand-alone single nodes (eg: [The First Lesson]({{< relref "the_first_lesson.md" >}})). This is multi-purpose:

1.  When in doubt, make the node smaller.
2.  Simplicity for the reader: Multiple quotes on a single page may confuse a user who has just arrived on that page by following a reference link. Which of the quotes they see is the right one?
3.  Future-proof: We will be able to, eventually, provide hover previews (similar to those used on [gwern.net](https://www.gwern.net/)). Similarly, standalone quote nodes will fit into a transclusion model better than multi-quote nodes.

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Herbert, Frank. 1999. <i>Dune</i>. London: Victor Gollancz.</div>
</div>