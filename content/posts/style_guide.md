+++
title = "Style Guide"
author = ["Cash Prokop-Weaver"]
date = 2022-02-05T13:12:00-08:00
lastmod = 2023-08-02T12:37:28-07:00
tags = ["meta", "meta"]
categories = ["meta"]
draft = false
slug = "05911fff-a79b-4462-bf6d-a3cec4e1c9f2"
+++

A style guide for my [personal knowledge management]({{< relref "personal_knowledge_management.md" >}}) system (powered by [org-roam]({{< relref "org_roam.md" >}})):


## Prose {#prose}

I try to write with an emphasis on clear communication.

-   [Use plain language]({{< relref "use_plain_language.md" >}})
-   [Use serial commas]({{< relref "use_serial_commas.md" >}})
-   [Vary the length of sentences]({{< relref "this_sentence_has_five_words.md" >}})
-   [Be useful]({{< relref "HowWriteUsefully.md" >}})
-   [Avoid qualifying language]({{< relref "avoid_qualifying_language.md" >}})
-   [Be explicit]({{< relref "be_explicit.md" >}})


### Use sentence case in headings and titles {#use-sentence-case-in-headings-and-titles}

Use "Sentence case", rather than "Title Case" in headings and titles.


## Node types {#node-types}

| Type       | Tag          | Description                          | Example                                                                                |
|------------|--------------|--------------------------------------|----------------------------------------------------------------------------------------|
| Concept    | `concept`    | A single idea/concept/term           | [Plans Within Plans]({{< relref "plans_within_plans.md" >}})                           |
| Reference  | `reference`  | The node-form of a specific citation | [Dune]({{< relref "herbertDune1999.md" >}})                                            |
| Quote      | `quote`      | A single quote                       | [Plans within plans within plans]({{< relref "plans_within_plans_within_plans.md" >}}) |
| Person     | `person`     | About a single person                | [Baron Vladimir Harkonnen]({{< relref "vladimir_harkonnen.md" >}})                     |
| Poem       | `poem`       | A single poem                        | [Litany Against Fear]({{< relref "litany_against_fear.md" >}})                         |
| Recipe     | `recipe`     | A cooking recipe                     | [Cayla's quarantine ramen]({{< relref "cayla_s_quarantine_ramen.md" >}})               |
| Ingredient | `ingredient` | A cooking ingredient                 | [Seitan]({{< relref "seitan.md" >}})                                                   |


## Prefer links to tags {#prefer-links-to-tags}

See [Andy Matuschak | Prefer Associative Ontologies to Hierarchical Taxonomies]({{< relref "andy_matuschak_prefer_associative_ontologies_to_hierarchical_taxonomies.md" >}}).

Tags identify the [Node type](#node-types) -- not its content.


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

There isn't a hard rule on how much quoting is too much. Large quotes [have their benefits]({{< relref "griffes.md" >}}) and are simple to capture using bookmarklets (<a href="#citeproc_bib_item_2">Porter 2022</a>).


### Nodes can just be a quote {#nodes-can-just-be-a-quote}

Quotes can live in stand-alone single nodes (eg: [The First Lesson]({{< relref "the_first_lesson.md" >}})). This is multi-purpose:

1.  When in doubt, make the node smaller.
2.  Easier to link to specific quotes: Suppose a reader clicks on a link and arrives on a page with five quotes visible. This may confuse the reader. Which of the visible quotes is the one to which the link pointed?
3.  Works in a transclusion model better than larger nodes


### Links {#links}

1.  Preserve links in the original quote to point to the original location or to a node representing the same idea.
2.  Wrap added links with square brackets just as you would with additional text.


## Links {#links}


### Show favicons alongside links {#show-favicons-alongside-links}

Favicons are nice additions to links. They provide visual context to where the reader expects the link to take them. Include them alongside external links. I've written a [script to make the process easier](https://github.com/cashweaver/basic-favicon-links).


### Every node must include backlinks {#every-node-must-include-backlinks}

Backlinks are the backbone of a powerful [zettelkasten]({{< relref "Zettelkasten2021.md" >}}) system. The published form of these notes **must** include backlinks.


## Flashcards {#flashcards}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Herbert, Frank. 1999. <i>Dune</i>. London: Victor Gollancz.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>Porter, Adam. 2022. “Org-Protocol-Capture-Html.” <a href="https://github.com/alphapapa/org-protocol-capture-html">https://github.com/alphapapa/org-protocol-capture-html</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_3"></a>Swartz, Aaron. 2010. “Theory of Change.” <a href="http://www.aaronsw.com/weblog/theoryofchange">http://www.aaronsw.com/weblog/theoryofchange</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Julian Shapiro | Writing Well Handbook]({{< relref "julian_shapiro_writing_well_handbook.md" >}})
-   [Lint your prose]({{< relref "lint_your_prose.md" >}})
-   [How I write notes]({{< relref "how_i_write_notes.md" >}})