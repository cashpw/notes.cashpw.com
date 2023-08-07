+++
title = "In-order tree traversal"
author = ["Cash Prokop-Weaver"]
date = 2022-06-29T16:32:00-07:00
lastmod = 2023-08-02T11:12:25-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "5069eb5e-f5c6-49de-8329-ba07dafe320e"
+++

> 1.  Recursively traverse the current node's left subtree
> 2.  Visit the current node (in the figure: position green)
> 3.  Recursively traverse the current node's right subtree
>
> (<a href="#citeproc_bib_item_1">“Tree Traversal” 2022</a>)

<!--quoteend-->

> In-order traversal (green node): A, B, C, D, E, F, G, H, I
>
> {{< figure src="/ox-hugo/Sorted_binary_tree_ALL_RGB.svg.png" >}}
>
> (<a href="#citeproc_bib_item_1">“Tree Traversal” 2022</a>)


## Flashcards {#flashcards}


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 8   | 336.29   | 2024-03-30T21:39:53Z |
| back     | 2.80 | 8   | 534.21   | 2025-01-08T09:11:54Z |

[In-order tree traversal]({{< relref "in_order_tree_traversal.md" >}})


#### Back {#back}

Priority order for traversing the list:

1.  Left: Recursively traverse the current node's left subtree, if possible
2.  Node: Visit the current node
3.  Right: Recursively traverse the current node's right subtree, if possible


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Tree Traversal” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Tree Traversal.” 2022. <i>Wikipedia</i>, April. <a href="https://en.wikipedia.org/w/index.php?title=Tree_traversal&oldid=1083604462">https://en.wikipedia.org/w/index.php?title=Tree_traversal&#38;oldid=1083604462</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Tree]({{< relref "tree.md" >}})