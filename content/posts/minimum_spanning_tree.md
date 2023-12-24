+++
title = "Minimum spanning tree"
author = ["Cash Prokop-Weaver"]
date = 2023-01-17T08:20:00-08:00
lastmod = 2023-12-23T14:42:17-08:00
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


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Minimum Spanning Tree.” 2022. <i>Wikipedia</i>, December. <a href="https://en.wikipedia.org/w/index.php?title=Minimum_spanning_tree&oldid=1128869717">https://en.wikipedia.org/w/index.php?title=Minimum_spanning_tree&#38;oldid=1128869717</a>.</div>
</div>

foo1


## Backlinks {#backlinks}

-   [Jarnik's algorithm]({{< relref "jarkik_s_algorithm.md" >}})
