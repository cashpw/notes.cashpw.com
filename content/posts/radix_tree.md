+++
title = "Radix tree"
author = ["Cash Prokop-Weaver"]
date = 2022-11-25T10:07:00-08:00
lastmod = 2022-12-17T14:05:44-08:00
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
| front    | 2.50 | 2   | 2.00     | 2022-12-18T17:59:19Z |
| back     | 2.5  | -1  | 0        | 2022-11-25T18:15:25Z |

[Radix tree]({{< relref "radix_tree.md" >}})


#### Back {#back}

A space-optimized [Prefix tree]({{< relref "trie.md" >}}) who's edges can be labeled with sequences of elements -- not just single elements.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Radix Tree” 2022</a>)


### [Radix tree]({{< relref "radix_tree.md" >}}) nodes have {{\\(x\\) children where \\(x \mod 2 = 0\\)}{number of children}@0} {#radix-tree--radix-tree-dot-md--nodes-have-x-children-where-x-mod-2-0-number-of-children-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.20 | 4   | 12.68    | 2022-12-25T18:43:23Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Radix Tree” 2022</a>)


### {{Only-children}@2} are {{merged with their parents}@0} in {{[Radix trees]({{< relref "radix_tree.md" >}})}@1} {#only-children-2-are-merged-with-their-parents-0-in-radix-trees--radix-tree-dot-md--1}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 2        | 2.50 | 2   | 2.00     | 2022-12-16T18:41:23Z |
| 0        | 2.50 | 1   | 1.00     | 2022-12-12T19:23:10Z |
| 1        | 2.5  | -1  | 0        | 2022-11-25T18:18:59Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Radix Tree” 2022</a>)


### [Radix tree]({{< relref "radix_tree.md" >}}) edges are {{multiple characters}{length}@0} long. {#radix-tree--radix-tree-dot-md--edges-are-multiple-characters-length-0-long-dot}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.35 | 3   | 6.00     | 2022-12-12T13:48:48Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Radix Tree” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Radix Tree.” 2022. <i>Wikipedia</i>, August. <a href="https://en.wikipedia.org/w/index.php?title=Radix_tree&oldid=1105756012">https://en.wikipedia.org/w/index.php?title=Radix_tree&#38;oldid=1105756012</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Generalized suffix tree]({{< relref "generalized_suffix_tree.md" >}})
