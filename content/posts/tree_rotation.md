+++
title = "Tree rotation"
author = ["Cash Prokop-Weaver"]
date = 2022-08-04T16:11:00-07:00
lastmod = 2022-12-17T11:47:52-08:00
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
| back     | 2.95 | 6   | 112.40   | 2023-03-14T11:59:50Z |
| front    | 2.80 | 5   | 44.67    | 2022-12-26T18:54:58Z |

[Tree rotation]({{< relref "tree_rotation.md" >}})


#### Back {#back}

An operation on a [Binary tree]({{< relref "binary_tree.md" >}}) that changes the structure without interfering with the order of the elements by moving one [Vertex]({{< relref "vertex.md" >}}) up and one [Vertex]({{< relref "vertex.md" >}}) down.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Tree Rotation” 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.65 | 6   | 83.10    | 2023-01-08T17:26:19Z |
| back     | 2.65 | 6   | 69.92    | 2023-01-10T14:34:02Z |

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
| front    | 2.80 | 8   | 125.41   | 2023-03-16T02:49:33Z |
| back     | 2.65 | 6   | 75.53    | 2023-01-08T03:03:43Z |

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
