+++
title = "Radix tree"
author = ["Cash Prokop-Weaver"]
date = 2022-11-25T10:07:00-08:00
lastmod = 2023-09-24T10:40:33-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "e00b9c0f-103f-4c55-8938-e777f58d04fb"
+++

> In computer science, a radix tree (also radix trie or compact prefix tree or compressed trie) is a data structure that represents a space-optimized trie ([Prefix tree]({{< relref "trie.md" >}})) in which each node that is the only child is merged with its parent. The result is that the number of children of every internal node is at most the radix \\(r\\) of the radix tree, where \\(r\\) is a positive integer and a power \\(x\\) of 2, having \\(x \geq 1\\). Unlike regular trees, edges can be labeled with sequences of elements as well as single elements. This makes radix trees much more efficient for small sets (especially if the strings are long) and for sets of strings that share long prefixes.
>
> (<a href="#citeproc_bib_item_1">“Radix Tree” 2022</a>)

<!--quoteend-->

>
>
> {{< figure src="/ox-hugo/2022-11-25_10-11-46_700px-Patricia_trie.svg.png" >}}
>
> (<a href="#citeproc_bib_item_1">“Radix Tree” 2022</a>)


## Flashcards {#flashcards}


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 1.90 | 6   | 40.32    | 2023-10-09T20:21:48Z |
| back     | 2.20 | 7   | 151.16   | 2023-10-13T21:11:03Z |

[Radix tree]({{< relref "radix_tree.md" >}})


#### Back {#back}

A space-optimized [Prefix tree]({{< relref "trie.md" >}}) who's edges can be labeled with sequences of elements -- not just single elements.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Radix Tree” 2022</a>)


### [Radix tree]({{< relref "radix_tree.md" >}}) nodes have {{\\(x\\) children where \\(x \mod 2 = 0\\)}{number of children}@0} {#radix-tree--radix-tree-dot-md--nodes-have-x-children-where-x-mod-2-0-number-of-children-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.05 | 7   | 113.95   | 2023-10-10T13:04:38Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Radix Tree” 2022</a>)


### {{Only-children}@2} are {{merged with their parents}@0} in {{[Radix trees]({{< relref "radix_tree.md" >}})}@1} {#only-children-2-are-merged-with-their-parents-0-in-radix-trees--radix-tree-dot-md--1}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 2        | 2.80 | 7   | 304.57   | 2024-04-16T03:41:16Z |
| 0        | 2.50 | 7   | 223.23   | 2023-12-23T20:12:40Z |
| 1        | 2.65 | 7   | 311.19   | 2024-05-30T08:27:26Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Radix Tree” 2022</a>)


### [Radix tree]({{< relref "radix_tree.md" >}}) edges are {{multiple characters}{length}@0} long. {#radix-tree--radix-tree-dot-md--edges-are-multiple-characters-length-0-long-dot}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.20 | 7   | 157.47   | 2023-10-04T01:49:58Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Radix Tree” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Radix Tree.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Radix_tree&oldid=1105756012">https://en.wikipedia.org/w/index.php?title=Radix_tree&#38;oldid=1105756012</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Generalized suffix tree]({{< relref "generalized_suffix_tree.md" >}})
