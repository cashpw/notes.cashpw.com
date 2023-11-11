+++
title = "Radix tree"
author = ["Cash Prokop-Weaver"]
date = 2022-11-25T10:07:00-08:00
lastmod = 2023-11-10T11:12:32-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "e00b9c0f-103f-4c55-8938-e777f58d04fb"
+++

> In computer science, a radix tree (also radix trie or compact prefix tree or compressed trie) is a data structure that represents a space-optimized trie ([Prefix tree]({{< relref "trie.md" >}})) in which each node that is the only child is merged with its parent. The result is that the number of children of every internal node is at most the radix \\(r\\) of the radix tree, where \\(r\\) is a positive integer and a power \\(x\\) of 2, having \\(x \geq 1\\). Unlike regular trees, edges can be labeled with sequences of elements as well as single elements. This makes radix trees much more efficient for small sets (especially if the strings are long) and for sets of strings that share long prefixes.
>
> (“Radix Tree” 2022)

<!--quoteend-->

>
>
> {{< figure src="/ox-hugo/2022-11-25_10-11-46_700px-Patricia_trie.svg.png" >}}
>
> (“Radix Tree” 2022)


## Backlinks {#backlinks}

-   [Generalized suffix tree]({{< relref "generalized_suffix_tree.md" >}})
