+++
title = "Post-order tree traversal"
author = ["Cash Prokop-Weaver"]
date = 2022-06-29T16:33:00-07:00
lastmod = 2023-07-25T11:28:15-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "81611da6-3ea4-45d9-b2db-b96ed95d946d"
+++

> 1.  Recursively traverse the current node's left subtree
> 2.  Recursively traverse the current node's right subtree
> 3.  Visit the current node (in the figure: position blue)
>
> (<a href="#citeproc_bib_item_1">“Tree Traversal” 2022</a>)

<!--quoteend-->

> Post-order traversal (blue node): A, C, E, D, B, H, I, G, F
>
> {{< figure src="/ox-hugo/Sorted_binary_tree_ALL_RGB.svg.png" >}}
>
> (<a href="#citeproc_bib_item_1">“Tree Traversal” 2022</a>)


## Flashcards {#flashcards}


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.95 | 7   | 453.84   | 2024-08-09T12:46:43Z |
| back     | 2.95 | 7   | 486.17   | 2024-10-18T00:53:58Z |

[Post-order tree traversal]({{< relref "post_order_tree_traversal.md" >}})


#### Back {#back}

Priority order for traversing the list:

1.  Left: Recursively traverse the current node's left subtree, if possible
2.  Right: Recursively traverse the current node's right subtree, if possible
3.  Node: Visit the current node


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Tree Traversal” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Tree Traversal.” 2022. <i>Wikipedia</i>, April. <a href="https://en.wikipedia.org/w/index.php?title=Tree_traversal&oldid=1083604462">https://en.wikipedia.org/w/index.php?title=Tree_traversal&#38;oldid=1083604462</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Tree]({{< relref "tree.md" >}})
