+++
title = "Directed acyclic graph"
author = ["Cash Prokop-Weaver"]
date = 2022-11-25T10:25:00-08:00
lastmod = 2023-12-05T20:08:11-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "ee7fcae8-6322-4b71-91b0-704b7c21ae3a"
+++

> In mathematics, particularly graph theory, and computer science, a directed acyclic graph (DAG) is a Directed graph [[Directed graph]({{< relref "directed_graph.md" >}})] with no directed cycles. That is, it consists of vertices [[Vertices]({{< relref "vertex.md" >}})] and edges [[Edges]({{< relref "edge.md" >}})] (also called arcs), with each edge directed from one vertex to another, such that following those directions will never form a closed loop. A directed graph is a DAG if and only if it can be topologically ordered [[Topological order]({{< relref "topological_order.md" >}})], by arranging the vertices as a linear ordering that is consistent with all edge directions. DAGs have numerous scientific and computational applications, ranging from biology (evolution, family trees, epidemiology) to information science (citation networks) to computation (scheduling).
>
> (<a href="#citeproc_bib_item_1">“Directed Acyclic Graph” 2022</a>)


## [Shortest path algorithm]({{< relref "shortest_path_algorithm.md" >}}) {#shortest-path-algorithm--shortest-path-algorithm-dot-md}

> Some algorithms become simpler when used on DAGs instead of general graphs, based on the principle of topological ordering. For example, it is possible to find [shortest paths](https://en.wikipedia.org/wiki/Shortest_path) and [longest paths](https://en.wikipedia.org/wiki/Longest_path_problem) from a given starting vertex in DAGs in linear time by [processing the vertices in a topological order](https://en.wikipedia.org/wiki/Topological_sorting#Application_to_shortest_path_finding), and calculating the path length for each vertex to be the minimum or maximum length obtained via any of its incoming edges. In contrast, for arbitrary graphs the shortest path may require slower algorithms such as Dijkstra's algorithm [[Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}})] or the [Bellman--Ford algorithm](https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm), and longest paths in arbitrary graphs are [NP-hard](https://en.wikipedia.org/wiki/NP-hard) to find.
>
> (<a href="#citeproc_bib_item_1">“Directed Acyclic Graph” 2022</a>)


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Directed Acyclic Graph.” 2022. <i>Wikipedia</i>, October. <a href="https://en.wikipedia.org/w/index.php?title=Directed_acyclic_graph&oldid=1114643590">https://en.wikipedia.org/w/index.php?title=Directed_acyclic_graph&#38;oldid=1114643590</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Topological order by Depth-first search in Python]({{< relref "topological_order_by_depth_first_search_in_python.md" >}})
-   [Topological order]({{< relref "topological_order.md" >}})
-   [Contraction hierarchies]({{< relref "contraction_hierarchies.md" >}})
