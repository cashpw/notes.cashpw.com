+++
title = "Pre-order tree traversal"
author = ["Cash Prokop-Weaver"]
date = 2022-06-29T16:24:00-07:00
lastmod = 2023-08-02T12:00:56-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "2f8c14b5-b44a-4fb9-b2c5-56ca8a48fdd9"
+++

> 1.  Visit the current node (in the figure: position red)
> 2.  Recursively traverse the current node's left subtree
> 3.  Recursively traverse the current node's right subtree
>
> (<a href="#citeproc_bib_item_1">“Tree Traversal” 2022</a>)

<!--quoteend-->

> Pre-order traversal (red node): F, B, A, D, C, E, G, I, H
>
> {{< figure src="/ox-hugo/Sorted_binary_tree_ALL_RGB.svg.png" >}}
>
> (<a href="#citeproc_bib_item_1">“Tree Traversal” 2022</a>)


## Flashcards {#flashcards}


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.80 | 7   | 225.68   | 2023-09-01T07:37:27Z |
| back     | 2.80 | 7   | 234.60   | 2023-09-26T06:57:14Z |

[Pre-order tree traversal]({{< relref "pre_order_tree_traversal.md" >}})


#### Back {#back}

Priority order for traversing the list:

1.  Node: Visit the current node
2.  Left: Recursively traverse the current node's left subtree, if possible
3.  Right: Recursively traverse the current node's right subtree, if possible


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Tree Traversal” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Tree Traversal.” 2022. <i>Wikipedia</i>, April. <a href="https://en.wikipedia.org/w/index.php?title=Tree_traversal&oldid=1083604462">https://en.wikipedia.org/w/index.php?title=Tree_traversal&#38;oldid=1083604462</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Depth-first search]({{< relref "depth_first_search.md" >}})
-   [Tree]({{< relref "tree.md" >}})
-   [Topological order]({{< relref "topological_order.md" >}})