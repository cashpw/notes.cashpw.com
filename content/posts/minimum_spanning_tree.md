+++
title = "Minimum spanning tree"
author = ["Cash Prokop-Weaver"]
date = 2023-01-17T08:20:00-08:00
lastmod = 2023-09-24T10:31:53-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "eb6b18c0-f0ff-45e9-a747-2b7516ddef52"
+++

> A minimum spanning tree (MST) or minimum weight spanning tree is a subset of the edges of a connected, edge-weighted undirected graph that connects all the vertices together, without any cycles and with the minimum possible total edge weight. That is, it is a spanning tree [[Spanning tree]({{< relref "spanning_tree.md" >}})] whose sum of edge weights is as small as possible.
>
> [...]
>
> {{< figure src="/ox-hugo/2023-01-28_13-01-17_300px-Minimum_spanning_tree.svg.png" >}}
>
> (<a href="#citeproc_bib_item_1">“Minimum Spanning Tree” 2022</a>)


## Cycle property {#cycle-property}

> For any cycle \\(C\\) in the graph, if the weight of an edge \\(e\\) of \\(C\\) is larger than any of the individual weights of all other edges of \\(C\\), then this edge cannot belong to an [minimum spanning tree].
>
> (<a href="#citeproc_bib_item_1">“Minimum Spanning Tree” 2022</a>)


## Cut property {#cut-property}

> For any cut [[Cut (Graph theory)]({{< relref "cut_graph_theory.md" >}})] \\(C\\) of the graph, if the weight of an edge \\(e\\) in the cut-set of \\(C\\) is strictly smaller than the weights of all other edges of the cut-set of \\(C\\), then this edge belongs to all [minimum spanning tree] of the graph.
>
> (<a href="#citeproc_bib_item_1">“Minimum Spanning Tree” 2022</a>)


## Minimum-cost edge {#minimum-cost-edge}

> If the minimum cost edge e of a graph is unique, then this edge is included in any MST.
>
> (<a href="#citeproc_bib_item_1">“Minimum Spanning Tree” 2022</a>)


## Flashcards {#flashcards}


### Definition {#definition}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.80 | 6   | 143.71   | 2023-09-24T08:35:59Z |
| back     | 2.80 | 6   | 138.73   | 2023-09-22T11:17:27Z |

[Minimum spanning tree]({{< relref "minimum_spanning_tree.md" >}})


#### Back {#back}

A [Spanning tree]({{< relref "spanning_tree.md" >}}) whose sum of edge weights is the smallest possible for the graph.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Minimum Spanning Tree” 2022</a>)


### Image {#image}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.80 | 7   | 393.41   | 2024-10-17T09:44:32Z |
| back     | 2.80 | 6   | 125.58   | 2023-09-14T05:11:23Z |

[Minimum spanning tree]({{< relref "minimum_spanning_tree.md" >}})


#### Back {#back}

{{< figure src="/ox-hugo/2023-01-28_13-01-17_300px-Minimum_spanning_tree.svg.png" >}}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Minimum Spanning Tree” 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 7   | 405.31   | 2024-09-29T20:06:55Z |
| 1        | 2.65 | 7   | 339.88   | 2024-08-22T20:12:42Z |

A graph has {{a single}{count}@0} [Minimum spanning tree]({{< relref "minimum_spanning_tree.md" >}}) when {{each edge has a distinct weight}@1}.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Minimum Spanning Tree” 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 7   | 301.75   | 2024-05-20T21:48:20Z |
| 1        | 2.80 | 6   | 137.57   | 2023-09-16T13:04:52Z |

A graph has {{more than one}{count}@0} [Minimum spanning tree]({{< relref "minimum_spanning_tree.md" >}}) when {{some edges have the same weight}@1}.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Minimum Spanning Tree” 2022</a>)


### Definition {#definition}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 1.90 | 7   | 95.26    | 2023-09-23T02:27:45Z |
| back     | 2.65 | 7   | 300.76   | 2024-07-06T17:29:38Z |

[Cycle property](#cycle-property) of a [Minimum spanning tree]({{< relref "minimum_spanning_tree.md" >}})


#### Back {#back}

> For any cycle \\(C\\) in the graph, if the weight of an edge \\(e\\) of \\(C\\) is larger than any of the individual weights of all other edges of \\(C\\), then this edge cannot belong to an [minimum spanning tree].


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Minimum Spanning Tree” 2022</a>)


### Definition {#definition}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.65 | 7   | 366.38   | 2024-09-08T00:07:46Z |
| back     | 2.35 | 3   | 6.00     | 2023-09-14T16:24:34Z |

[Cut property](#cut-property) of a [Minimum spanning tree]({{< relref "minimum_spanning_tree.md" >}})


#### Back {#back}

> For any cut [[Cut (Graph theory)]({{< relref "cut_graph_theory.md" >}})] \\(C\\) of the graph, if the weight of an edge \\(e\\) in the cut-set of \\(C\\) is strictly smaller than the weights of all other edges of the cut-set of \\(C\\), then this edge belongs to all [[Minimum spanning tree]({{< relref "minimum_spanning_tree.md" >}})] of the graph.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Minimum Spanning Tree” 2022</a>)


### Definition {#definition}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.65 | 6   | 145.97   | 2023-09-24T22:55:49Z |
| back     | 2.80 | 6   | 148.59   | 2023-10-06T06:13:50Z |

[Minimum-cost edge](#minimum-cost-edge) property of a [Minimum spanning tree]({{< relref "minimum_spanning_tree.md" >}})


#### Back {#back}

> If the minimum cost edge e of a graph is unique, then this edge is included in any MST.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Minimum Spanning Tree” 2022</a>)


### Example(s) {#example--s}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.35 | 3   | 6.00     | 2023-09-27T14:16:16Z |
| back     | 1.45 | 7   | 43.61    | 2023-10-10T04:24:45Z |

Algorithms which generate a [Minimum spanning tree]({{< relref "minimum_spanning_tree.md" >}})


#### Back {#back}

-   [Jarnik's algorithm]({{< relref "jarkik_s_algorithm.md" >}})


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Minimum Spanning Tree” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Minimum Spanning Tree.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Minimum_spanning_tree&oldid=1128869717">https://en.wikipedia.org/w/index.php?title=Minimum_spanning_tree&#38;oldid=1128869717</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Jarnik's algorithm]({{< relref "jarkik_s_algorithm.md" >}})
