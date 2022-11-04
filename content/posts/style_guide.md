+++
title = "Style Guide"
author = ["Cash Weaver"]
date = 2022-02-05T13:12:00-08:00
lastmod = 2022-11-04T15:24:59-07:00
tags = ["meta", "meta"]
categories = ["meta"]
draft = false
slug = "05911fff-a79b-4462-bf6d-a3cec4e1c9f2"
+++

A style guide for my [personal knowledge management]({{< relref "personal_knowledge_management.md" >}}) system (powered by [org-roam]({{< relref "org_roam.md" >}})):


## General {#general}

-   [Use Plain Language]({{< relref "use_plain_language.md" >}})
-   [Use Serial Commas]({{< relref "use_serial_commas.md" >}})
-   [Vary the Length of Sentences]({{< relref "this_sentence_has_five_words.md" >}})
-   [Be Explicit]({{< relref "be_explicit.md" >}})


## Node types {#node-types}

| Type       | Tag          | Description                          | Example                                                                                |
|------------|--------------|--------------------------------------|----------------------------------------------------------------------------------------|
| Concept    | `concept`    | A single idea/concept                | [Plans Within Plans]({{< relref "plans_within_plans.md" >}})                           |
| Reference  | `reference`  | The node-form of a specific citation | [Dune]({{< relref "herbertDune1999.md" >}})                                            |
| Quote      | `quote`      | A single quote                       | [Plans within plans within plans]({{< relref "plans_within_plans_within_plans.md" >}}) |
| Person     | `person`     | About a single person                | [Baron Vladimir Harkonnen]({{< relref "vladimir_harkonnen.md" >}})                     |
| Poem       | `poem`       | A single poem                        | [Litany Against Fear]({{< relref "litany_against_fear.md" >}})                         |
| Recipe     | `recipe`     | A cooking recipe                     | [Cayla's quarantine ramen]({{< relref "cayla_s_quarantine_ramen.md" >}})               |
| Ingredient | `ingredient` | A cooking ingredient                 | [Seitan]({{< relref "seitan.md" >}})                                                   |


## Tags {#tags}

Prefer links to tags. Maintain the validity of the tags associated with [node types](#node-types).


## Quotes {#quotes}


### Attribution {#attribution}

-   Place attributions on the last line of the quote.
-   The attribution may, but doesn't have to, be _italicized_.
-   The form of the attribution should be one of, in order of preference:
    1.  **Ideal**: "&lt;link to person&gt;, &lt;citation&gt;"
    2.  "&lt;citation&gt;"
    3.  "&lt;link to person&gt;"
    4.  "&lt;general link&gt;"


#### Does it need attribution? {#does-it-need-attribution}

Every quote should contain an attribution unless it meets one of the following criteria:

1.  The quote is from a cited source which appears in the node's bibliography and this source is the **only** citation present in the node.


#### Examples {#examples}

> I am increasingly convinced that the difference between effective and ineffective people is their skill at developing a theory of change.
>
> [Aaron Swartz]({{< relref "aaron_swartz.md" >}}), (<a href="#citeproc_bib_item_3">Swartz 2010</a>)

<!--quoteend-->

> Muad'Dib learned rapidly because his first training was in how to learn. And the first lesson of all was the basic trust that he could learn. It's shocking to find how many people do not believe they can learn, and how many more believe learning to be difficult. Muad'Dib knew that every experience carries its lesson.
>
> _Princess Irulan, (<a href="#citeproc_bib_item_1">Herbert 1999</a>)_

<!--quoteend-->

> Org is a mode for keeping notes, maintaining TODO lists, and project planning with a fast and effective plain-text markup language. It also is an authoring system with unique support for literate programming and reproducible research.
>
> _[org-mode Manual: Summary](https://orgmode.org/manual/Summary.html)_


### Large quotes are okay {#large-quotes-are-okay}

There isn't a hard rule on how much quoting is too much. Large quotes [have their benefits]({{< relref "griffes.md" >}}) and are simple to capture using (<a href="#citeproc_bib_item_2">Porter 2022</a>) bookmarklets.


### Nodes can just be a quote {#nodes-can-just-be-a-quote}

Quotes can live in stand-alone single nodes (eg: [The First Lesson]({{< relref "the_first_lesson.md" >}})). This is multi-purpose:

1.  When in doubt, make the node smaller.
2.  Easier to link to specific quotes: Suppose a reader clicks on a link and arrives on a page with five quotes visible. This may confuse the reader. Which of the visible quotes is the one to which the link pointed?
3.  Works in a transclusion model better than larger nodes


## Links {#links}


### Show favicons alongside links {#show-favicons-alongside-links}

Favicons are nice additions to links. They provide visual context to where the reader expects the link to take them. Include them alongside external links. I've written a [script to make the process easier](https://github.com/cashweaver/basic-favicon-links).


### Every node must include backlinks {#every-node-must-include-backlinks}

Backlinks are the backbone of a powerful [zettelkasten]({{< relref "Zettelkasten2021.md" >}}) system. The published form of these notes **must** include backlinks.

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Herbert, Frank. 1999. <i>Dune</i>. London: Victor Gollancz.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>Porter, Adam. 2022. “Org-Protocol-Capture-Html.” <a href="https://github.com/alphapapa/org-protocol-capture-html">https://github.com/alphapapa/org-protocol-capture-html</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_3"></a>Swartz, Aaron. 2010. “Theory of Change.” <a href="http://www.aaronsw.com/weblog/theoryofchange">http://www.aaronsw.com/weblog/theoryofchange</a>.</div>
</div>
