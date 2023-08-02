+++
title = "Suffix tree"
author = ["Cash Prokop-Weaver"]
date = 2022-11-25T09:43:00-08:00
lastmod = 2023-08-02T12:38:11-07:00
tags = ["has-todo", "concept", "has-todo", "concept"]
categories = ["has-todo", "concept"]
draft = false
slug = "2a01a221-0aa9-493b-b690-c15c11f16831"
+++

> In computer science, a suffix tree (also called PAT tree or, in an earlier form, position tree) is a compressed trie containing all the suffixes of the given text as their keys and positions in the text as their values. Suffix trees allow particularly fast implementations of many important string operations.
>
> The construction of such a tree for the string \\(S\\) takes time and space linear in the length of \\(S\\).
>
> (<a href="#citeproc_bib_item_2">“Suffix Tree” 2022</a>)

<!--quoteend-->

> {{< figure src="/ox-hugo/2022-11-25_09-54-57_500px-Suffix_tree_BANANA.svg.png" >}}
>
> (<a href="#citeproc_bib_item_2">“Suffix Tree” 2022</a>)


## How to build a [Suffix tree]({{< relref "suffix_trie.md" >}}) {#how-to-build-a-suffix-tree--suffix-trie-dot-md}


## Flashcards {#flashcards}


### Image {#image}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.95 | 6   | 155.84   | 2023-08-12T23:05:36Z |
| back     | 2.05 | 7   | 178.61   | 2023-11-16T03:52:03Z |

[Suffix tree]({{< relref "suffix_trie.md" >}})


#### Back {#back}

{{< figure src="/ox-hugo/2022-11-25_09-54-57_500px-Suffix_tree_BANANA.svg.png" >}}


#### Source {#source}

(<a href="#citeproc_bib_item_2">“Suffix Tree” 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 1.75 | 2   | 2.00     | 2023-08-03T01:23:57Z |
| back     | 2.50 | 7   | 216.29   | 2023-12-15T23:29:58Z |

[Suffix tree]({{< relref "suffix_trie.md" >}})


#### Back {#back}

A compressed [Trie]({{< relref "trie.md" >}}) which contains all of the suffixes of the given text as their keys and positions in the text as their values.


#### Source {#source}

(<a href="#citeproc_bib_item_2">“Suffix Tree” 2022</a>)


### {{[Suffix tree]({{< relref "suffix_trie.md" >}})}@0} allow for particularly fast implementations of important {{string operations}@1} {#suffix-tree--suffix-trie-dot-md--0-allow-for-particularly-fast-implementations-of-important-string-operations-1}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 7   | 145.05   | 2023-09-20T23:55:47Z |
| 1        | 2.65 | 7   | 317.66   | 2024-05-18T20:05:40Z |


#### Source {#source}

(<a href="#citeproc_bib_item_2">“Suffix Tree” 2022</a>)


### [Suffix tree]({{< relref "suffix_trie.md" >}}) space complexity: {{\\(\bigo{n}\\)}@0} {#suffix-tree--suffix-trie-dot-md--space-complexity-bigo-n-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.95 | 7   | 413.65   | 2024-09-08T19:17:40Z |


#### Source {#source}

(<a href="#citeproc_bib_item_2">“Suffix Tree” 2022</a>)


### [Suffix tree]({{< relref "suffix_trie.md" >}}) creation time complexity: {{\\(\bigo{n}\\)}@0} {#suffix-tree--suffix-trie-dot-md--creation-time-complexity-bigo-n-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.20 | 7   | 145.07   | 2023-08-25T18:37:46Z |


#### Source {#source}

(<a href="#citeproc_bib_item_2">“Suffix Tree” 2022</a>)


### [Suffix tree]({{< relref "suffix_trie.md" >}}) edges contain {{suffixes}@0} {#suffix-tree--suffix-trie-dot-md--edges-contain-suffixes-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.20 | 7   | 131.69   | 2023-08-10T08:43:25Z |


#### Source {#source}

(<a href="#citeproc_bib_item_2">“Suffix Tree” 2022</a>)


### [Suffix tree]({{< relref "suffix_trie.md" >}}) nodes contain {{the substring's position.}@0} {#suffix-tree--suffix-trie-dot-md--nodes-contain-the-substring-s-position-dot-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 7   | 248.36   | 2024-01-28T04:53:32Z |


#### Source {#source}

(<a href="#citeproc_bib_item_2">“Suffix Tree” 2022</a>)


### [Suffix tree]({{< relref "suffix_trie.md" >}}) edges are {{multiple characters}{length}@0} long. {#suffix-tree--suffix-trie-dot-md--edges-are-multiple-characters-length-0-long-dot}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 7   | 210.14   | 2023-12-04T20:34:13Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Radix Tree” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Radix Tree.” 2022. <i>Wikipedia</i>, August. <a href="https://en.wikipedia.org/w/index.php?title=Radix_tree&oldid=1105756012">https://en.wikipedia.org/w/index.php?title=Radix_tree&#38;oldid=1105756012</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>“Suffix Tree.” 2022. <i>Wikipedia</i>, November. <a href="https://en.wikipedia.org/w/index.php?title=Suffix_tree&oldid=1121139308">https://en.wikipedia.org/w/index.php?title=Suffix_tree&#38;oldid=1121139308</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Generalized suffix tree]({{< relref "generalized_suffix_tree.md" >}})
