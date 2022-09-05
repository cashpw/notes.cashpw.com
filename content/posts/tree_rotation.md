+++
title = "Tree rotation"
author = ["Cash Weaver"]
date = 2022-08-04T16:11:00-07:00
lastmod = 2022-09-05T14:56:21-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
aliases = "/posts/f0deaa3b-c3bc-491d-adc3-6e6595cb558e"
+++

> In discrete mathematics, tree rotation is an operation on a [Binary tree]({{< relref "binary_tree.md" >}}) that changes the structure without interfering with the order of the elements. A tree rotation moves one [[Vertex]({{< relref "vertex.md" >}})] up in the tree and one [[Vertex]({{< relref "vertex.md" >}})] down. It is used to change the shape of the tree, and in particular to decrease its height by moving smaller subtrees down and larger subtrees up, resulting in improved performance of many tree operations.
>
> (<a href="#citeproc_bib_item_1">“Tree Rotation” 2022</a>)

<!--quoteend-->

> {{< figure src="/ox-hugo/Tree_rotation_animation_250x250.gif" >}}
>
> (<a href="#citeproc_bib_item_1">“Tree Rotation” 2022</a>)

<!--quoteend-->

> {{< figure src="/ox-hugo/Tree_rotation.png" >}}
>
> (<a href="#citeproc_bib_item_1">“Tree Rotation” 2022</a>)


## Left tree rotation {#left-tree-rotation}

| Before                                          | After                                            |
|-------------------------------------------------|--------------------------------------------------|
| ![](/ox-hugo/tree-rotation-pre-left-rotate.png) | ![](/ox-hugo/tree-rotation-pre-right-rotate.png) |

1.  \\(\text{x}\texttt{[right]} := \text{y}\texttt{[left]} \\; (\beta)\\)
2.  \\(\text{y}\texttt{[left]} := \text{x}\\)
3.  \\(\text{x}\texttt{[parent][?]} := \text{y}\\)


## Right tree rotation {#right-tree-rotation}

| Before                                           | After                                           |
|--------------------------------------------------|-------------------------------------------------|
| ![](/ox-hugo/tree-rotation-pre-right-rotate.png) | ![](/ox-hugo/tree-rotation-pre-left-rotate.png) |

1.  \\(\text{y}\texttt{[left]} := \text{x}\texttt{[right]} \\; (\beta)\\)
2.  \\(\text{x}\texttt{[right]} := \text{y}\\)
3.  \\(\text{y}\texttt{[parent][?]} := \text{x}\\)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Tree Rotation.” 2022. <i>Wikipedia</i>, July. <a href="https://en.wikipedia.org/w/index.php?title=Tree_rotation&oldid=1099813959">https://en.wikipedia.org/w/index.php?title=Tree_rotation&#38;oldid=1099813959</a>.</div>
</div>
