+++
title = "Style Guide"
author = ["Cash Weaver"]
date = 2022-02-05T13:12:00-08:00
lastmod = 2022-02-08T10:46:50-08:00
tags = ["meta", "meta"]
categories = ["meta"]
draft = false
+++

A style guide for my [personal knowledge management]({{< relref "personal_knowledge_management.md" >}}) system (powered by [org-roam]({{< relref "org_roam.md" >}})):


## <span class="section-num">1</span> General {#general}


### <span class="section-num">1.1</span> [Use Plain Language]({{< relref "use_plain_language.md" >}}) {#use-plain-language--use-plain-language-dot-md}


### <span class="section-num">1.2</span> Use Serial Commas {#use-serial-commas}

> [...] a serial comma (also called a series comma, Oxford comma, or Harvard comma) is a comma placed immediately after the penultimate term (i.e., before the coordinating conjunction, such as and or or) in a series of three or more terms.
>
> (<a href="#citeproc_bib_item_2">“Serial Comma” 2022</a>)

Note that serial commas are not a fix-all for ambigious sentences. They may, in fact, _introduce_ ambiguity (<a href="#citeproc_bib_item_2">“Serial Comma” 2022</a>).


#### <span class="section-num">1.2.1</span> Examples {#examples}

-   Incorrect: "To my parents, Abraham Lincoln and God."
-   **Correct**: "To my parents, Abraham Lincoln, and God."


### <span class="section-num">1.3</span> [Vary the Length of Sentences]({{< relref "this_sentence_has_five_words.md" >}}) {#vary-the-length-of-sentences--this-sentence-has-five-words-dot-md}


## <span class="section-num">2</span> Types of Nodes {#types-of-nodes}

| Type      | Tag         | Description                          | Example                                                                                |
|-----------|-------------|--------------------------------------|----------------------------------------------------------------------------------------|
| Concept   | `concept`   | About an idea/concept                | [Plans Within Plans]({{< relref "plans_within_plans.md" >}})                           |
| Reference | `reference` | The node-form of a specific citation | [Herbert :: Dune]({{< relref "herbertDune1999.md" >}})                                 |
| Quote     | `quote`     | Contain a single quote               | [Plans within plans within plans]({{< relref "plans_within_plans_within_plans.md" >}}) |
| Person    | `person`    | About a single person                | [Baron Vladimir Harkonnen]({{< relref "vladimir_harkonnen.md" >}})                     |


## <span class="section-num">3</span> Tags {#tags}

-   Prefer links to tags
-   Maintain the validity of the tags associated with [Types of Nodes](#types-of-nodes)


## <span class="section-num">4</span> Specifying an Author {#specifying-an-author}

Specify an author by linking to that author's node (eg: [Cash Weaver]({{< relref "cash_weaver.md" >}}))

Formerly, the policy was: Specify an author using a node-level tag prefixed with `@` (eg: `@Cash_Weaver`).


## <span class="section-num">5</span> Quotes {#quotes}


### <span class="section-num">5.1</span> Attribution {#attribution}

-   Place attributions on the last line of the quote.
-   The attribution may, but doesn't have to, be _italicized_.
-   The form of the attribution should be one of, in order of preference:
    1.  **Ideal**: "&lt;link to person&gt;, &lt;citation&gt;"
    2.  "&lt;person&gt;, &lt;citation&gt;"
    3.  "&lt;person&gt;" or "&lt;citation&gt;"
    4.  "&lt;general link&gt;"


#### <span class="section-num">5.1.1</span> Does it Need Attribution? {#does-it-need-attribution}

Every quote should contain an attribution unless it meets one of the following criteria:

1.  The quote is from a cited source which appears in the node's bibliography and this source is the **only** citation present in the node.


#### <span class="section-num">5.1.2</span> Examples {#examples}

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


### <span class="section-num">5.2</span> How Much is Too Much? {#how-much-is-too-much}

There isn't a hard rule on how much quoting is too much. Large quotes [have their benefits]({{< relref "griffes.md" >}}).


### <span class="section-num">5.3</span> Quote Nodes {#quote-nodes}

Quotes can live in stand-alone single nodes (eg: [The First Lesson]({{< relref "the_first_lesson.md" >}})). This is multi-purpose:

1.  When in doubt, make the node smaller.
2.  Easier to link to specific quotes: Suppose a reader clicks on a link and arrives on a page with five quotes visible. This may confuse the reader. Which of the visible quotes is the right one?
3.  Future-proof: We will be able to, eventually, provide hover previews (similar to those used on [gwern.net](https://www.gwern.net/)). Similarly, standalone quote nodes will fit into a transclusion model better than multi-quote nodes.


## <span class="section-num">6</span> Links {#links}


### <span class="section-num">6.1</span> Show Favicons with Links {#show-favicons-with-links}

Favicons are nice additions to links. They provide visual context to where the reader expects the link to take them. Let's include them alongside external links. I've written a [script to make the process easier](https://github.com/cashweaver/basic-favicon-links).


### <span class="section-num">6.2</span> Every Node Must Include Backlinks {#every-node-must-include-backlinks}

Backlinks are the backbone of a powerful [zettelkasten]({{< relref "Zettelkasten2021.md" >}}) system. The published form of these notes **must** include backlinks.

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Herbert, Frank. 1999. <i>Dune</i>. London: Victor Gollancz.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>“Serial Comma.” 2022. <i>Wikipedia</i>, January. <a href="https://en.wikipedia.org/w/index.php?title=Serial_comma&oldid=1067846637">https://en.wikipedia.org/w/index.php?title=Serial_comma&#38;oldid=1067846637</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_3"></a>Swartz, Aaron. 2010. “Theory of Change.” <a href="http://www.aaronsw.com/weblog/theoryofchange">http://www.aaronsw.com/weblog/theoryofchange</a>.</div>
</div>
