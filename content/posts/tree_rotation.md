+++
title = "Tree rotation"
author = ["Cash Prokop-Weaver"]
date = 2022-08-04T16:11:00-07:00
lastmod = 2023-08-02T12:56:18-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "f0deaa3b-c3bc-491d-adc3-6e6595cb558e"
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


## Flashcards {#flashcards}


### Definition ([Graph theory]({{< relref "graph_theory.md" >}})) {#definition--graph-theory-graph-theory-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.95 | 7   | 353.90   | 2024-03-02T12:36:02Z |
| front    | 2.65 | 7   | 264.83   | 2024-01-30T11:56:44Z |

[Tree rotation]({{< relref "tree_rotation.md" >}})


#### Back {#back}

An operation on a [Binary tree]({{< relref "binary_tree.md" >}}) that changes the structure without interfering with the order of the elements by moving one [Vertex]({{< relref "vertex.md" >}}) up and one [Vertex]({{< relref "vertex.md" >}}) down.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Tree Rotation” 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.80 | 7   | 211.12   | 2023-08-08T17:03:29Z |
| back     | 2.35 | 8   | 405.65   | 2024-08-15T06:16:07Z |

How to perform a [Left tree rotation](#left-tree-rotation)


#### Back {#back}

For a given [Binary tree]({{< relref "binary_tree.md" >}}):

{{< figure src="/ox-hugo/tree-rotation-pre-left-rotate.png" >}}

1.  \\(\text{x}\texttt{[right]} := \text{y}\texttt{[left]} \\; (\beta)\\)
2.  \\(\text{y}\texttt{[left]} := \text{x}\\)
3.  \\(\text{x}\texttt{[parent][?]} := \text{y}\\)


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Tree Rotation” 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.80 | 9   | 320.41   | 2024-02-01T00:04:28Z |
| back     | 2.35 | 8   | 418.75   | 2024-08-27T22:10:03Z |

How to perform a [Right tree rotation](#right-tree-rotation)


#### Back {#back}

For a given [Binary tree]({{< relref "binary_tree.md" >}}):

{{< figure src="/ox-hugo/tree-rotation-pre-right-rotate.png" >}}

1.  \\(\text{y}\texttt{[left]} := \text{x}\texttt{[right]} \\; (\beta)\\)
2.  \\(\text{x}\texttt{[right]} := \text{y}\\)
3.  \\(\text{y}\texttt{[parent][?]} := \text{x}\\)


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Tree Rotation” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Tree Rotation.” 2022. <i>Wikipedia</i>, July. <a href="https://en.wikipedia.org/w/index.php?title=Tree_rotation&oldid=1099813959">https://en.wikipedia.org/w/index.php?title=Tree_rotation&#38;oldid=1099813959</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Red-black tree]({{< relref "red_black_tree.md" >}})
