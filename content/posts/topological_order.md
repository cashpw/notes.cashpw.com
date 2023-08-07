+++
title = "Topological order"
author = ["Cash Prokop-Weaver"]
date = 2022-12-21T07:31:00-08:00
lastmod = 2023-08-02T12:53:35-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "518c35ac-35d7-4c12-9522-efb13e5be1e8"
+++

> In computer science, a topological sort or topological ordering of a directed graph [[Directed graph]({{< relref "directed_graph.md" >}})] is a linear ordering of its vertices such that for every directed edge \\(uv\\) from vertex [[Vertex]({{< relref "vertex.md" >}})] \\(u\\) to vertex \\(v\\), \\(u\\) comes before \\(v\\) in the ordering. For instance, the vertices of the graph may represent tasks to be performed, and the edges may represent constraints that one task must be performed before another; in this application, a topological ordering is just a valid sequence for the tasks. Precisely, a topological sort is a graph traversal in which each node \\(v\\) is visited only after all its dependencies are visited. A topological ordering is possible if and only if the graph has no directed cycles, that is, if it is a directed acyclic graph (DAG) [[Directed acyclic graph]({{< relref "directed_acyclic_graph.md" >}})].
>
> (<a href="#citeproc_bib_item_1">“Topological Sorting” 2022</a>)


## Algorithms {#algorithms}

-   Using [Depth-first search]({{< relref "depth_first_search.md" >}}): [Topological order by Depth-first search in Python]({{< relref "topological_order_by_depth_first_search_in_python.md" >}})
    ```nil
      L ← Empty list that will contain the sorted nodes
      while exists nodes without a permanent mark do
        select an unmarked node n
        visit(n)

      function visit(node n)
        if n has a permanent mark then
            return
        if n has a temporary mark then
            stop   (graph has at least one cycle)

        mark n with a temporary mark

        for each node m with an edge from n to m do
            visit(m)

        remove temporary mark from n
        mark n with a permanent mark
        add n to head of L
    ```
    In English:

    1.  Visit each node in the graph
        1.  Using [Pre-order tree traversal]({{< relref "pre_order_tree_traversal.md" >}}), visit its children, then add it to the topological order
        2.  Use a temporary mark to identify cycles


## Improvement to [Single-source shortest path problem]({{< relref "single_source_shortest_path_problem.md" >}}) {#improvement-to-single-source-shortest-path-problem--single-source-shortest-path-problem-dot-md}

One can use a topological ordering to reduce the time complexity of the [Single-source shortest path problem]({{< relref "single_source_shortest_path_problem.md" >}}) from (see [Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}}) and [A\*]({{< relref "a_star_algorithm.md" >}})) to linear time: \\(\bigtheta{|E| + |V|}\\). See [Single-source shortest path with topological sort in Python]({{< relref "single_source_shortest_path_with_topological_sort_in_python.md" >}}).


## Flashcards {#flashcards}


### Definition {#definition}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.65 | 7   | 229.16   | 2024-02-18T05:37:08Z |
| back     | 2.35 | 6   | 85.96    | 2023-10-02T14:06:51Z |

[Topological order]({{< relref "topological_order.md" >}})


#### Back {#back}

-   Graph traversal in which each node is only visited _after_ all of its dependencies are visited
-   Linear ordering of vertices in a [Directed graph]({{< relref "directed_graph.md" >}}) such that for all edges \\(u \to v\\), the [Vertex]({{< relref "vertex.md" >}}) \\(u\\) comes before \\(v\\)
-   Only possible for [Directed acyclic graph]({{< relref "directed_acyclic_graph.md" >}})


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Topological Sorting” 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.20 | 7   | 118.17   | 2023-10-29T05:11:09Z |
| back     | 2.80 | 6   | 147.99   | 2023-10-04T16:35:51Z |

(Pseudocode) Find a [Topological order]({{< relref "topological_order.md" >}}) for a given graph


#### Back {#back}

```nil
  L ← Empty list that will contain the sorted nodes
  while exists nodes without a permanent mark do
    select an unmarked node n
    visit(n)

  function visit(node n)
    if n has a permanent mark then
        return
    if n has a temporary mark then
        stop   (graph has at least one cycle)

    mark n with a temporary mark

    for each node m with an edge from n to m do
        visit(m)

    remove temporary mark from n
    mark n with a permanent mark
    add n to head of L
```


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Topological Sorting” 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 1.30 | 5   | 10.74    | 2023-08-09T08:37:04Z |

Time complexity for constructing a [Topological order]({{< relref "topological_order.md" >}}) using [Depth-first search]({{< relref "depth_first_search.md" >}}) is {{\\(\bigo{|V|+|E|}\\)}@0}.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Topological Sorting” 2022</a>)


### Cloze {#cloze}

Implementing [Topological sorting]({{< relref "topological_order.md" >}}) marks vertices with {{permanent and temporary marks}}.


#### Source {#source}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Topological Sorting.” 2022. <i>Wikipedia</i>, November. <a href="https://en.wikipedia.org/w/index.php?title=Topological_sorting&oldid=1123299686">https://en.wikipedia.org/w/index.php?title=Topological_sorting&#38;oldid=1123299686</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Directed acyclic graph]({{< relref "directed_acyclic_graph.md" >}})
-   [Single-source shortest path with topological sort in Python]({{< relref "single_source_shortest_path_with_topological_sort_in_python.md" >}})
-   [Topological order by Depth-first search in Python]({{< relref "topological_order_by_depth_first_search_in_python.md" >}})
-   [Contraction hierarchies]({{< relref "contraction_hierarchies.md" >}})