+++
title = "Customizable route planning"
author = ["Cash Prokop-Weaver"]
date = 2023-06-23T08:39:00-07:00
lastmod = 2023-12-23T11:12:12-08:00
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
> Our first improvement over HiTi (NO_ITEM_DATA:jungEfficientPathComputationModelHierarchicallyStructuredTopographicalRoadMaps2002) and similar algorithms is to use [Partitioning Using Natural Cut Heuristics] PUNCH (NO_ITEM_DATA:dellingGraphPartitioningNaturalCuts2011) to partition the graph. Recently developed to deal with road networks, it routinely finds solutions with half as many boundary edges (or fewer), compared to the general-purpose partitioners (such as METIS [20]) commonly used by previous algorithms.
>
> (<a href="#citeproc_bib_item_1">Delling et al. 2011</a>)

An example, with \\(U=3\\):

{{< figure src="/ox-hugo/crp-algorithm-1-pre-processed.png" >}}


### Metric customization {#metric-customization}

> The metric customization stage builds a graph \\(H\\) containing all boundary vertices (those with at least one neighbor in another cell) and boundary arcs of \\(G\\). It also contains a clique for each cell \\(C\\): for every pair \\((v, w)\\) of boundary vertices in \\(C\\), we create an arc \\((v, w)\\) whose cost is the same as the shortest path (restricted to \\(C\\)) between \\(v\\) and \\(w\\) (or infinite if \\(w\\) is not reachable from \\(v\\)). We do so by running Dijkstra [[Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}})] from each boundary vertex. Note that \\(H\\) is an overlay [24]: the distance between any two vertices in \\(H\\) is the same as in \\(G\\).
>
> (<a href="#citeproc_bib_item_1">Delling et al. 2011</a>)

Nodes in \\(H\\) are **bold** and clique edges are red.

{{< figure src="/ox-hugo/crp-algorithm-2-metric-customization.png" >}}


#### Sparsification {#sparsification}

> Using full cliques in the overlay graph may seem wasteful, particularly for well-behaved metrics. At the cost of making its topology metric-dependent, we consider various techniques to reduce the overlay graph.
>
> The first approach is edge reduction [24], which eliminates clique arcs that are not shortest paths. After computing all cliques, we run Dijkstra from each vertex \\(v\\) in \\(H\\), stopping as soon as all neighbors of \\(v\\) (in \\(H\\)) are scanned. Note that these searches are usually quick, since they only visit the overlay.
>
> (<a href="#citeproc_bib_item_1">Delling et al. 2011</a>)


### Query {#query}

> [...] to perform a query between \\(s\\) and \\(t\\), we run a bidirectional version of Dijkstra's algorithm [[Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}})] on the graph consisting of the union of \\(H\\), \\(C\_s\\) , and \\(C\_t\\) . (Here \\(C\_v\\) denotes the subgraph of \\(G\\) induced by the vertices in the cell containing \\(v\\).)
>
> (<a href="#citeproc_bib_item_1">Delling et al. 2011</a>)


#### Reduce query latency {#reduce-query-latency}

<!--list-separator-->

-  Nested partitions

    > To accelerate queries, we can use multiple levels of overlay graphs, a common technique for partition-based approaches, including HiTi (NO_ITEM_DATA:jungEfficientPathComputationModelHierarchicallyStructuredTopographicalRoadMaps2002). We need nested partitions of \\(G\\), in which every boundary edge at level \\(i\\) is also a boundary edge at level \\(i − 1\\), for \\(i > 1\\). The level-0 partition is the original graph, with each vertex as a cell. For the \\(i\text{-th}\\) level partition, we create a graph \\(H\_i\\) as before: it includes all boundary arcs, plus an overlay linking the boundary vertices within a cell. Note that \\(H\_i\\) can be computed using only \\(H\_{i−1}\\). We use PUNCH [ (NO_ITEM_DATA:dellingGraphPartitioningNaturalCuts2011) ] to create multilevel partitions, in top-down fashion. An \\(s \arrow t\\) query runs bidirectional Dijkstra on a restricted graph \\(G\_{st}\\). An arc \\((v, w)\\) from \\(H\_i\\) will be in \\(G\_{st}\\) if both \\(v\\) and \\(w\\) are in the same cell as \\(s\\) or \\(t\\) at level \\(i + 1\\). Goal-direction can still be used on the top level.
    >
    > (<a href="#citeproc_bib_item_1">Delling et al. 2011</a>)


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Delling, Daniel, Andrew V. Goldberg, Thomas Pajor, and Renato F. Werneck. 2011. “Customizable Route Planning.” In <i>Experimental Algorithms</i>, edited by Panos M. Pardalos and Steffen Rebennack, 6630:376–87. Berlin, Heidelberg: Springer Berlin Heidelberg. <a href="https://doi.org/10.1007/978-3-642-20662-7_32">https://doi.org/10.1007/978-3-642-20662-7_32</a>.</div>
  <div class="csl-entry">NO_ITEM_DATA:jungEfficientPathComputationModelHierarchicallyStructuredTopographicalRoadMaps2002</div>
  <div class="csl-entry">NO_ITEM_DATA:dellingGraphPartitioningNaturalCuts2011</div>
</div>



## Backlinks {#backlinks}

-   [Daniel Delling, Andrew V. Goldberg, Thomas Pajor, Renato F. Werneck | Customizable Route Planning]({{< relref "daniel_delling_andrew_v_goldberg_thomas_pajor_renato_f_werneck_customizable_route_planning.md" >}})
-   [Metric (Customizable route planning)]({{< relref "metric_customizable_route_planning.md" >}})
