+++
title = "Tree rotation"
author = ["Cash Prokop-Weaver"]
date = 2022-08-04T16:11:00-07:00
lastmod = 2023-11-10T11:24:50-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "f0deaa3b-c3bc-491d-adc3-6e6595cb558e"
+++

> In discrete mathematics, tree rotation is an operation on a [Binary tree]({{< relref "binary_tree.md" >}}) that changes the structure without interfering with the order of the elements. A tree rotation moves one [[Vertex]({{< relref "vertex.md" >}})] up in the tree and one [[Vertex]({{< relref "vertex.md" >}})] down. It is used to change the shape of the tree, and in particular to decrease its height by moving smaller subtrees down and larger subtrees up, resulting in improved performance of many tree operations.
>
> (“Tree Rotation” 2022)

<!--quoteend-->

> {{< figure src="/ox-hugo/Tree_rotation_animation_250x250.gif" >}}
>
> (“Tree Rotation” 2022)

<!--quoteend-->

> {{< figure src="/ox-hugo/Tree_rotation.png" >}}
>
> (“Tree Rotation” 2022)


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


## Backlinks {#backlinks}

-   [Red-black tree]({{< relref "red_black_tree.md" >}})
