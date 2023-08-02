+++
title = "Customizable route planning"
author = ["Cash Prokop-Weaver"]
date = 2023-06-23T08:39:00-07:00
lastmod = 2023-08-02T10:46:17-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "41a0db19-6156-4242-8078-673cbd1e550e"
+++

Customizable route planning is a shortest-path algorithm designed for use on road networks which is capable of handling:

-   real-world dynamic costs (e.g. increased edge cost due to traffic jam)
-   varied, custom, cost functions (i.e. more than just distance or time) which we **don't** need to prescribe at pre-processing time


## Terms {#terms}

-   [Topology (Road networks)]({{< relref "topology_road_networks.md" >}})
-   [Metric (Customizable route planning)]({{< relref "metric_customizable_route_planning.md" >}})
-   Cell: A group of [Vertices]({{< relref "vertex.md" >}})
-   Boundary vertices: [Vertices]({{< relref "vertex.md" >}}) with at least one incident edge to a different cell (e.g. \\(B\\) and \\(C\\), bold, below)
-   Boundary arcs: Arcs ([Edges]({{< relref "edge.md" >}})) between boundary vertices in different cells (e.g. \\((B, C)\\) and \\((C, B)\\), bold, below)

{{< figure src="/ox-hugo/crp-terms-example.png" >}}


## Algorithm {#algorithm}

{{< figure src="/ox-hugo/crp-algorithm-0-base.png" >}}


### Metric-independent pre-processing {#metric-independent-pre-processing}

> Our metric-independent preprocessing stage partitions the graph into connected cells [[Connected components]({{< relref "component_graph_theory.md" >}})] with at most \\(U\\) (an input parameter) vertices each, with as few boundary arcs (arcs with endpoints in different cells) as possible.
>
> [...]
>
> Our first improvement over HiTi (<a href="#citeproc_bib_item_4">Jung and Pramanik 2002</a>) and similar algorithms is to use [Partitioning Using Natural Cut Heuristics] PUNCH (<a href="#citeproc_bib_item_3">Delling, Goldberg, Razenshteyn, et al. 2011</a>) to partition the graph. Recently developed to deal with road networks, it routinely finds solutions with half as many boundary edges (or fewer), compared to the general-purpose partitioners (such as METIS [20]) commonly used by previous algorithms.
>
> (<a href="#citeproc_bib_item_2">Delling, Goldberg, Pajor, et al. 2011</a>)

An example, with \\(U=3\\):

{{< figure src="/ox-hugo/crp-algorithm-1-pre-processed.png" >}}


### Metric customization {#metric-customization}

> The metric customization stage builds a graph \\(H\\) containing all boundary vertices (those with at least one neighbor in another cell) and boundary arcs of \\(G\\). It also contains a clique for each cell \\(C\\): for every pair \\((v, w)\\) of boundary vertices in \\(C\\), we create an arc \\((v, w)\\) whose cost is the same as the shortest path (restricted to \\(C\\)) between \\(v\\) and \\(w\\) (or infinite if \\(w\\) is not reachable from \\(v\\)). We do so by running Dijkstra [[Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}})] from each boundary vertex. Note that \\(H\\) is an overlay [24]: the distance between any two vertices in \\(H\\) is the same as in \\(G\\).
>
> (<a href="#citeproc_bib_item_2">Delling, Goldberg, Pajor, et al. 2011</a>)

Nodes in \\(H\\) are **bold** and clique edges are red.

{{< figure src="/ox-hugo/crp-algorithm-2-metric-customization.png" >}}


#### Sparsification {#sparsification}

> Using full cliques in the overlay graph may seem wasteful, particularly for well-behaved metrics. At the cost of making its topology metric-dependent, we consider various techniques to reduce the overlay graph.
>
> The first approach is edge reduction [24], which eliminates clique arcs that are not shortest paths. After computing all cliques, we run Dijkstra from each vertex \\(v\\) in \\(H\\), stopping as soon as all neighbors of \\(v\\) (in \\(H\\)) are scanned. Note that these searches are usually quick, since they only visit the overlay.
>
> (<a href="#citeproc_bib_item_2">Delling, Goldberg, Pajor, et al. 2011</a>)


### Query {#query}

> [...] to perform a query between \\(s\\) and \\(t\\), we run a bidirectional version of Dijkstra's algorithm [[Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}})] on the graph consisting of the union of \\(H\\), \\(C\_s\\) , and \\(C\_t\\) . (Here \\(C\_v\\) denotes the subgraph of \\(G\\) induced by the vertices in the cell containing \\(v\\).)
>
> (<a href="#citeproc_bib_item_2">Delling, Goldberg, Pajor, et al. 2011</a>)


#### Reduce query latency {#reduce-query-latency}

<!--list-separator-->

-  Nested partitions

    > To accelerate queries, we can use multiple levels of overlay graphs, a common technique for partition-based approaches, including HiTi (<a href="#citeproc_bib_item_4">Jung and Pramanik 2002</a>). We need nested partitions of \\(G\\), in which every boundary edge at level \\(i\\) is also a boundary edge at level \\(i − 1\\), for \\(i > 1\\). The level-0 partition is the original graph, with each vertex as a cell. For the \\(i\text{-th}\\) level partition, we create a graph \\(H\_i\\) as before: it includes all boundary arcs, plus an overlay linking the boundary vertices within a cell. Note that \\(H\_i\\) can be computed using only \\(H\_{i−1}\\). We use PUNCH [ (<a href="#citeproc_bib_item_3">Delling, Goldberg, Razenshteyn, et al. 2011</a>) ] to create multilevel partitions, in top-down fashion. An \\(s \arrow t\\) query runs bidirectional Dijkstra on a restricted graph \\(G\_{st}\\). An arc \\((v, w)\\) from \\(H\_i\\) will be in \\(G\_{st}\\) if both \\(v\\) and \\(w\\) are in the same cell as \\(s\\) or \\(t\\) at level \\(i + 1\\). Goal-direction can still be used on the top level.
    >
    > (<a href="#citeproc_bib_item_2">Delling, Goldberg, Pajor, et al. 2011</a>)


## Flashcards {#flashcards}


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.35 | 4   | 13.00    | 2023-08-05T03:22:21Z |
| back     | 2.50 | 1   | 1.00     | 2023-07-18T13:53:54Z |

Stages of [Customizable route planning]({{< relref "customizable_route_planning.md" >}})


#### Back {#back}

1.  Metric-independent pre-processing
2.  Metric customization
3.  Query


#### Source {#source}

(<a href="#citeproc_bib_item_2">Delling, Goldberg, Pajor, et al. 2011</a>)


### Describe ([Customizable route planning]({{< relref "customizable_route_planning.md" >}})) {#describe--customizable-route-planning-customizable-route-planning-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.20 | 3   | 6.00     | 2023-07-20T00:47:03Z |
| back     | 2.5  | -1  | 0        | 2023-06-26T14:31:53Z |

Metric-independent pre-processing


#### Back {#back}

Partitions the graph into [Connected components]({{< relref "component_graph_theory.md" >}}) (cells) with at most \\(U\\) vertices, minimizing boundary edges.


#### Source {#source}

(<a href="#citeproc_bib_item_2">Delling, Goldberg, Pajor, et al. 2011</a>)


### Describe ([Customizable route planning]({{< relref "customizable_route_planning.md" >}})) {#describe--customizable-route-planning-customizable-route-planning-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.20 | 3   | 6.00     | 2023-08-07T14:58:30Z |
| back     | 2.5  | -1  | 0        | 2023-06-26T14:33:08Z |

Metric customization


#### Back {#back}

-   Build an "overlay" graph, \\(H\\), containing (1) all boundary vertices and (2) edges between boundary vertices (i.e. shortcuts)
-   Compute length of shortcuts as [Single-pair shortest path]({{< relref "single_pair_shortest_path_problem.md" >}}) between each pair of \\((\text{entry}, \text{exit})\\) nodes


#### Source {#source}

(<a href="#citeproc_bib_item_2">Delling, Goldberg, Pajor, et al. 2011</a>)


### Describe ([Customizable route planning]({{< relref "customizable_route_planning.md" >}})) {#describe--customizable-route-planning-customizable-route-planning-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 3   | 6.00     | 2023-08-07T01:19:46Z |
| back     | 2.5  | -1  | 0        | 2023-06-27T22:05:00Z |

Query


#### Back {#back}

-   Perform a bi-directional [Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}}) on the union of \\(H\\), \\(C\_s\\), and \\(C\_t\\).
    -   Optionally over the hierarchy of \\(H\\) instances if you're using nested partitions


#### Source {#source}

(<a href="#citeproc_bib_item_2">Delling, Goldberg, Pajor, et al. 2011</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.35 | 3   | 6.00     | 2023-08-05T23:50:37Z |

Why does [Customizable route planning]({{< relref "customizable_route_planning.md" >}}) handle changing edge weights (due to traffic, etc) better than [Contraction hierarchies]({{< relref "contraction_hierarchies.md" >}})?


#### Back {#back}

-   [Contraction hierarchies]({{< relref "contraction_hierarchies.md" >}})'s pre-processing depends on both [Topology (Road networks)]({{< relref "topology_road_networks.md" >}}) and [Metric (Customizable route planning)]({{< relref "metric_customizable_route_planning.md" >}}) data; the pre-processing is **metric-dependent**
-   Part of [Customizable route planning]({{< relref "customizable_route_planning.md" >}})'s pre-processing is **metric-independend** and need not be re-computed when metrics change


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Contraction Hierarchies” 2023</a>)


### Describe ([Customizable route planning]({{< relref "customizable_route_planning.md" >}})) {#describe--customizable-route-planning-customizable-route-planning-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 4   | 13.57    | 2023-08-13T13:16:52Z |
| back     | 2.5  | -1  | 0        | 2023-06-27T23:16:26Z |

Nested partitions


#### Back {#back}

A technique for reducing query latency by building a hierarchical view of the graph. The shortest path algorithm can take shortcuts upward and downward through the hierarchy to skip large swaths of intermediate vertices and edges.


#### Source {#source}

(<a href="#citeproc_bib_item_2">Delling, Goldberg, Pajor, et al. 2011</a>)


### Compare and contrast {#compare-and-contrast}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 3   | 6.00     | 2023-07-29T03:40:27Z |

[Contraction hierarchies]({{< relref "contraction_hierarchies.md" >}}) and [Customizable route planning]({{< relref "customizable_route_planning.md" >}}) for road network graphs


#### Back {#back}

-   [Contraction hierarchies]({{< relref "contraction_hierarchies.md" >}})
    -   Lower query latency
-   [Customizable route planning]({{< relref "customizable_route_planning.md" >}})
    -   Greater pre-processing parallelization
    -   Supports dynamic weights (e.g. traffic jams) without re-building the whole graph


#### Source {#source}

-   (<a href="#citeproc_bib_item_1">“Contraction Hierarchies” 2023</a>)
-   (<a href="#citeproc_bib_item_2">Delling, Goldberg, Pajor, et al. 2011</a>)


### Cloze ([Customizable route planning]({{< relref "customizable_route_planning.md" >}})) {#cloze--customizable-route-planning-customizable-route-planning-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 4   | 14.08    | 2023-08-09T16:46:14Z |
| 1        | 2.5  | -1  | 0        | 2023-07-10T01:06:24Z |

A query performs a {{bi-directional [Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}})}@0} on {{the union of \\(H\\), \\(C\_s\\), and \\(C\_t\\)}@1}.


#### Source {#source}

(<a href="#citeproc_bib_item_2">Delling, Goldberg, Pajor, et al. 2011</a>)


### Denotes ([Customizable route planning]({{< relref "customizable_route_planning.md" >}})) {#denotes--customizable-route-planning-customizable-route-planning-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 1   | 1.00     | 2023-08-02T15:05:34Z |
| back     | 2.5  | -1  | 0        | 2023-07-27T15:27:34Z |

\\(C\_s\\) and \\(C\_t\\)


#### Back {#back}

-   Cells containing the starting and target vertices


#### Source {#source}

(<a href="#citeproc_bib_item_2">Delling, Goldberg, Pajor, et al. 2011</a>)


### Denotes ([Customizable route planning]({{< relref "customizable_route_planning.md" >}})) {#denotes--customizable-route-planning-customizable-route-planning-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 1   | 1.00     | 2023-07-27T02:55:06Z |
| back     | 2.5  | -1  | 0        | 2023-07-27T15:28:59Z |

\\(H\\)


#### Back {#back}

An "overlay" graph which contains (1) all boundary vertices and (2) edges between boundary vertices (i.e. shortcuts)


#### Source {#source}

(<a href="#citeproc_bib_item_2">Delling, Goldberg, Pajor, et al. 2011</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Contraction Hierarchies.” 2023. <i>Wikipedia</i>, May. <a href="https://en.wikipedia.org/w/index.php?title=Contraction_hierarchies&oldid=1153438478">https://en.wikipedia.org/w/index.php?title=Contraction_hierarchies&#38;oldid=1153438478</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>Delling, Daniel, Andrew V. Goldberg, Thomas Pajor, and Renato F. Werneck. 2011. “Customizable Route Planning.” In <i>Experimental Algorithms</i>, edited by Panos M. Pardalos and Steffen Rebennack, 6630:376–87. Berlin, Heidelberg: Springer Berlin Heidelberg. <a href="https://doi.org/10.1007/978-3-642-20662-7\_32">https://doi.org/10.1007/978-3-642-20662-7\_32</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_3"></a>Delling, Daniel, Andrew V. Goldberg, Ilya Razenshteyn, and Renato F. Werneck. 2011. “Graph Partitioning with Natural Cuts.” In <i>2011 IEEE International Parallel &#38; Distributed Processing Symposium</i>, 1135–46. Anchorage, AK, USA: IEEE. <a href="https://doi.org/10.1109/IPDPS.2011.108">https://doi.org/10.1109/IPDPS.2011.108</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_4"></a>Jung, Sungwon, and S. Pramanik. 2002. “An Efficient Path Computation Model for Hierarchically Structured Topographical Road Maps.” <i>Ieee Transactions on Knowledge and Data Engineering</i> 14 (5): 1029–46. <a href="https://doi.org/10.1109/TKDE.2002.1033772">https://doi.org/10.1109/TKDE.2002.1033772</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Daniel Delling, Andrew V. Goldberg, Thomas Pajor, Renato F. Werneck | Customizable Route Planning]({{< relref "daniel_delling_andrew_v_goldberg_thomas_pajor_renato_f_werneck_customizable_route_planning.md" >}})
-   [Metric (Customizable route planning)]({{< relref "metric_customizable_route_planning.md" >}})
