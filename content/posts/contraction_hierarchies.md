+++
title = "Contraction hierarchies"
author = ["Cash Prokop-Weaver"]
date = 2023-05-18T11:57:00-07:00
lastmod = 2023-08-02T10:44:34-07:00
tags = ["has-todo", "concept", "has-todo", "concept"]
categories = ["has-todo", "concept"]
draft = false
slug = "8d0bb3d4-18fb-4c38-a89e-11745614c640"
+++

> In computer science, the method of contraction hierarchies is a speed-up technique for finding the shortest-path [[Shortest path problem]({{< relref "shortest_path_algorithm.md" >}})] in a graph [[Graph]({{< relref "graph.md" >}})]. The most intuitive applications are car-navigation systems: a user wants to drive from \\(A\\) to \\(B\\) using the quickest possible route. The metric optimized here is the travel time. Intersections are represented by vertices [[Vertex]({{< relref "vertex.md" >}})], the road sections connecting them by edges. The edge weights represent the time it takes to drive along this segment of the road. A path from \\(A\\) to \\(B\\) is a sequence of edges (road sections); the shortest path is the one with the minimal sum of edge weights among all possible paths. The shortest path in a graph can be computed using Dijkstra's algorithm but, given that road networks consist of tens of millions of vertices, this is impractical. Contraction hierarchies is a speed-up method optimized to exploit properties of graphs representing road networks. The speed-up is achieved by creating shortcuts in a preprocessing phase which are then used during a shortest-path query to skip over "unimportant" vertices. This is based on the observation that road networks are highly hierarchical. Some intersections, for example highway junctions, are "more important" and higher up in the hierarchy than for example a junction leading into a dead end. Shortcuts can be used to save the precomputed distance between two important junctions such that the algorithm doesn't have to consider the full path between these junctions at query time. Contraction hierarchies do not know about which roads humans consider "important" (e.g. highways), but they are provided with the graph as input and are able to assign importance to vertices using heuristics.
>
> [...]
>
> The contraction hierarchies (CH) algorithm is a two-phase approach to the shortest path problem consisting of a preprocessing phase and a query phase. [...]
>
> Consider two large cities connected by a highway. Between these two cities, there is a multitude of junctions leading to small villages and suburbs. Most drivers want to get from one city to the other – maybe as part of a larger route – and not take one of the exits on the way. In the graph representing this road layout, each intersection is represented by a node and edges are created between neighboring intersections. To calculate the distance between these two cities, the algorithm has to traverse all the edges along the way, adding up their length. Precomputing this distance once and storing it in an additional edge created between the two large cities will save calculations each time this highway has to be evaluated in a query. This additional edge is called a "shortcut" and has no counterpart in the real world. The contraction hierarchies algorithm has no knowledge about road types but is able to determine which shortcuts have to be created using the graph alone as input.
>
> (<a href="#citeproc_bib_item_1">“Contraction Hierarchies” 2023</a>)


## Algorithm {#algorithm}


### Preprocessing phase {#preprocessing-phase}

> {{< figure src="/ox-hugo/Shortcut_in_a_shortest_path.svg" >}}
>
> (<a href="#citeproc_bib_item_1">“Contraction Hierarchies” 2023</a>)


#### Node contraction {#node-contraction}

> [Contraction hierarchies'] basic ingredient is the contraction of a node \\(v\\): The node \\(v\\) is removed from the graph, but for any pair of arcs \\((u,v)\\), \\((v,w)\\) such that \\((u,v,w)\\) is a shortest path, a shortcut arc \\((u,w)\\) with the cost of \\((u,v,w)\\) is inserted. The contracted node \\(v\\) is called the midpoint of the shortcut. The remaining graph has one less node, a changed set of arcs (some dropped, some added), and the same shortest paths between any two remaining nodes.
>
> (<a href="#citeproc_bib_item_1">“Contraction Hierarchies” 2023</a>)

<!--quoteend-->

> When contracting a vertex \\(v\\) it is temporarily removed from the graph \\(G\\), and a shortcut is created between each pair \\(\\{\u,w\\}\\) of neighboring vertices if the shortest path from \\(u\\) to \\(w\\) contains \\(v\\).
>
> (<a href="#citeproc_bib_item_1">“Contraction Hierarchies” 2023</a>)

<!--quoteend-->

> {{< figure src="/ox-hugo/2023-06-15_07-59-45_contract-intro-1.png" >}}
>
> {{< figure src="/ox-hugo/2023-06-15_07-59-55_contract-intro-2.png" >}}
>
> {{< figure src="/ox-hugo/2023-06-15_08-00-06_contract-intro-3.png" >}}
>
> [...]
>
> Consider a node \\(v\\) and the following `contract` process:
>
> We denote the set of all vertices with edges incoming to \\(v\\) as \\(U\\), and the set of all vertices with incoming edges from \\(v\\) as \\(W\\).
>
> Then for each pair of vertices \\((u, w)\\), for \\(u\\) in \\(U\\) and \\(w\\) in \\(W\\):
>
> <div class="quote2">
>
> If the path &lt;\\(u,v,w\\)&gt; is the unique shortest path from \\(u\\) to \\(w\\), we add a shortcut edge \\(u,w\\) to the graph with weight \\(w(u, v) + w(v, w)\\).
>
> </div>
>
> Then, we remove \\(v\\) and all of its adjacent edges from the graph.
>
> We're now done contracting \\(v\\).
>
> (<a href="#citeproc_bib_item_6">Lazarsfeld n.d.-b</a>)

<!--list-separator-->

-  When to add shortcuts

    > But in general, we need a method for efficiently determining when to add a shortcut edge.
    >
    > [...]
    >
    > {{< figure src="/ox-hugo/2023-06-15_08-32-52_example-1.png" >}}
    >
    > So we can do the following:
    >
    > -   \\(\forall\\; u \in U\\):
    >     -   \\(\forall\\; w \in W\\):
    >         -   Compute \\(P\_{w} = \operatorname{weight}(u, v) + \operatorname{weight}(v, w)\\)
    >     -   \\(P\_{max} = \operatorname{max}(P\_w)\\)
    >     -   \\(\forall\\; w \in W\\):
    >         -   Perform a standard Dijkstra's shortest-path [[Single-pair shortest path problem]({{< relref "single_pair_shortest_path_problem.md" >}})] search from \\(u\\) [to \\(w\\)] on the subgraph excluding \\(v\\). Halt when we settle (1) a vertex with a shortest-path score \\(> P\_{max}\\) or (2) \\(w\\).
    >     -   Add a shortcut if \\(P\_w < \operatorname{distance}(u, w)\\)
    >
    > [paraphrased, formatting mine]
    >
    > (<a href="#citeproc_bib_item_6">Lazarsfeld n.d.-b</a>)

    <!--quoteend-->

    > How to decide if a shortcut is strictly necessary?
    >
    > -   Naive: add all possible shortcuts.
    > -   Strict: invoke Dijkstra and perform a "witness search" proof.
    > -   Pragmatic: invoke Dijkstra with cutoffs (max cost, max hops).
    >
    > (<a href="#citeproc_bib_item_4">Harabor, n.d.</a>)

<!--list-separator-->

-  Example 1

    > {{< figure src="/ox-hugo/2023-06-15_08-50-04_contract-full-2.png" >}}
    >
    > (<a href="#citeproc_bib_item_6">Lazarsfeld n.d.-b</a>)

    Let:

    -   \\(v\\) be \\(B\\)
    -   \\(U\\) be \\((A, C, D)\\)
    -   \\(W\\) be \\((A, C, D)\\)

    Steps to contract \\(v (B)\\):

    1.  For each \\(u \in U\\):
        1.  With \\(u = A\\):
            1.  For each \\(w \in W\\):
                1.  Skip \\(w = A\\)
                2.  With \\(w = C\\):
                    1.  \\(P\_{w} = \operatorname{weight}(u, v) + \operatorname{weight}(v, w)\\)

                        \\(P\_{C} = weight(A, B) + weight(B, C) = 3 + 3 = 6\\)
                3.  With \\(w = D\\):
                    1.  \\(P\_{w} = \operatorname{weight}(u, v) + \operatorname{weight}(v, w)\\)

                        \\(P\_{D} = weight(A, B) + weight(B, D) = 3 + 5 = 8\\)
                4.  \\(P\_{max} = \operatorname{max}(P\_{C}, P\_{D}) = \operatorname{max}(6, 8) = 8\\)
            2.  For each \\(w \in W\\):
                1.  Skip \\(w = A\\)
                2.  With \\(w = C\\):
                    1.  Perform a standard Dijkstra's shortest-path search from \\(u (A)\\) to \\(w ( C)\\) on the subgraph excluding \\(v (B)\\). Halt when we settle (1) a vertex with a shortest-path score \\(> P\_{max}\\) or (2) \\(w ( C)\\).
                        1.  Settle \\(K\\) at a cost of \\(3\\) (\\((A, K)\\))
                        2.  Settle \\(B\\) at a cost of \\(3\\) (\\((A, B)\\))
                        3.  Settle \\(C\\) at a cost of \\(5\\) (\\((A, C)\\))
                        4.  Done!
                    2.  Don't add a shortcut. \\(P\_{C} > \operatorname{distance}(A, C)\\) (\\(6 > 5\\))
                3.  With \\(w = D\\):
                    1.  Perform a standard Dijkstra's shortest-path search from \\(u (A)\\) to \\(w (D)\\) on the subgraph excluding \\(v (B)\\). Halt when we settle (1) a vertex with a shortest-path score \\(> P\_{max}\\) or (2) \\(w (D)\\).
                        1.  Settle \\(K\\) at a cost of \\(3\\) (\\((A, K)\\))
                        2.  Settle \\(B\\) at a cost of \\(3\\) (\\((A, B)\\))
                        3.  Settle \\(C\\) at a cost of \\(5\\) (\\((A, C)\\))
                        4.  Settle \\(J\\) at a cost of \\(6\\) (\\((A, K) + (K, J)\\))
                        5.  Settle \\(D\\) at a cost of \\(7\\) (\\((A, C) + (C, D)\\))
                    2.  Don't add a shortcut. \\(P\_{D} > \operatorname{distance}(A, D)\\) (\\(8 > 7\\))
        2.  With \\(u = C\\):
            1.  Left as an exercise. No shortcuts added.
        3.  With \\(u = D\\):
            1.  Left as an exercise. No shortcuts added.

<!--list-separator-->

-  Example 2

    > {{< figure src="/ox-hugo/2023-06-15_10-19-12_contract-full-5.png" >}}
    >
    > (<a href="#citeproc_bib_item_6">Lazarsfeld n.d.-b</a>)

    Let:

    -   \\(v\\) be \\(K\\)
    -   \\(U\\) be \\((A, J)\\)
    -   \\(W\\) be \\((A, J)\\)

    Steps to contract \\(v (K)\\):

    1.  For each \\(u \in U\\):
        1.  With \\(u = A\\):
            1.  For each \\(w \in W\\):
                1.  Skip \\(w = A\\)
                2.  With \\(w = J\\):
                    1.  \\(P\_{w} = \operatorname{weight}(u, v) + \operatorname{weight}(v, w)\\)

                        \\(P\_{J} = weight(A, K) + weight(K, J) = 3 + 3 = 6\\)
                3.  \\(P\_{max} = \operatorname{max}(P\_{J}) = \operatorname{max}(6) = 6\\)
            2.  For each \\(w \in W\\):
                1.  Skip \\(w = A\\)
                2.  With \\(w = J\\):
                    1.  Perform a standard Dijkstra's shortest-path search from \\(u (A)\\) to \\(w (J)\\) on the subgraph excluding \\(v (K)\\). Halt when we settle (1) a vertex with a shortest-path score \\(> P\_{max}\\) or (2) \\(w (J)\\).
                        1.  Settle \\(K\\) at a cost of \\(3\\) (\\((A, K)\\))
                        2.  Settle \\(C\\) at a cost of \\(5\\) (\\((A, C)\\))
                        3.  Settle \\(J\\) at a cost of \\(7\\) (\\((A, K) + (K, J)\\))
                        4.  Done!
                    2.  Add a shortcut! \\(P\_{C} < \operatorname{distance}(A, J)\\) (\\(6 < 7\\))
        2.  With \\(u = J\\):
            1.  Left as an exercise. Adds a shortcut to make the shortcut connecting \\((A, J)\\) bidirectional.


### Query phase {#query-phase}

> In the query phase, a bidirectional search is performed starting from the starting node \\(s\\) and the target node \\(t\\) on the original graph augmented by the shortcuts created in the preprocessing phase.
>
> (<a href="#citeproc_bib_item_1">“Contraction Hierarchies” 2023</a>)

<!--quoteend-->

> How to search the contraction hierarchy?
>
> -   Bi-directional search (two directions simultaneously)
> -   Bi-directional search (one direction at a time)
> -   Hybrid search (bi-directional first, then something else)
> -   Contraction hierarchies can also be combined with your favourite uni-directional search scheme (<a href="#citeproc_bib_item_3">Harabor and Stuckey 2021</a>)
>
> [paraphrased]
>
> (<a href="#citeproc_bib_item_4">Harabor, n.d.</a>)


#### FIX; up/down is backward here. Check against (<a href="#citeproc_bib_item_2">Geisberger et al. 2008</a>) {#fix-up-down-is-backward-here-dot-check-against}

> -   The upward graph only contains edges from \\(v\\) to \\(w\\) where we contracted \\(v\\) **after** \\(w\\).
> -   The downward graph only contains edges from \\(v\\) to \\(w\\) where we contracted \\(v\\) **before** \\(w\\).
>
> [...]
>
> For our [contraction hierarchies] query from \\(s\\) to \\(t\\), we run a forward search from \\(s\\) on [the upward] graph, and a backward search from \\(t\\) on the [downward] graph.
>
> [paraphrased]
>
> (<a href="#citeproc_bib_item_7">Lazarsfeld n.d.-c</a>)


#### Example {#example}

> {{< figure src="/ox-hugo/2023-06-15_16-54-53_g-star-graph.png" >}}
>
> [...]
>
> [...] for symmetric graphs like the ones we are considering, a backward search (reversing edge directions) on \\(G\_{down}\\) is the same as an upward search on \\(G\_{up}\\). So from both our source and target nodes, we can perform a standard Dijkstra search on the \\(G\_{up}\\) graph.
>
> From our example above, let's say our source node is \\(B\\) and our target node is \\(G\\). Then the two respective search spaces on \\(G\_{up}\\) will look as follows:
>
> {{< figure src="/ox-hugo/2023-06-15_16-54-11_upward-source.png" >}}
>
> {{< figure src="/ox-hugo/2023-06-15_16-57-46_upward-target.png" >}}
>
> Although we said that _every_ edge in \\(G\*\\) is either in the \\(G\_{up}\\) or the \\(G\_{down}\\) graph, not all edges [...] will be relevant in the search space from a given node.
>
> In our example above, for example, the edge \\(E,D\\) does exist in \\(G\_{up}\\) since \\(E\\) was contracted before \\(D\\). But, because there is no path to \\(E\\) in either of the two searches from \\(B\\) or \\(G\\), we would never need to consider the edge \\(E,D\\).
>
> Then on both of these upward graphs, we run a **_complete_** Dijkstra search, meaning that all nodes in _both_ subgraphs must be settled. And it should be evident that in both searches, the number of settled nodes and relaxed edges is significantly reduced than if we were searching on the entire \\(G\*\\) graph.
>
> Moreover, because we have a complete ordering of nodes, the two search spaces can both be conceptualized as _DAGs_ (directed acyclic graphs [[Directed acyclic graph]({{< relref "directed_acyclic_graph.md" >}})]) and are inherently topologically sorted [[Topological order]({{< relref "topological_order.md" >}})]. Consider the redrawing of the two searches that emphasizes this hierarchical nature of the contraction order:
>
> {{< figure src="/ox-hugo/2023-06-15_17-07-38_dag-source.png" >}}
>
> {{< figure src="/ox-hugo/2023-06-15_17-07-44_dag-target.png" >}}
>
> [...]
>
> In any case, after running two complete Dijkstra searches on \\(G\_{up}\\) from both the source and target, we have a set of nodes that are settled in both searches. We denote this set as \\(L\\).
>
> Continuing with our example from above, we see the nodes in \\(L\\) shaded in red with their corresponding shortest path scores:
>
> {{< figure src="/ox-hugo/2023-06-15_17-07-19_query-scores.png" >}}
>
> This means the shortest path from \\(B\\) to \\(G\\) is 10 and goes through node \\(H\\).
>
> [formatting mine]
>
> (<a href="#citeproc_bib_item_7">Lazarsfeld n.d.-c</a>)


#### Unpacking the shortest path from a shortcut {#unpacking-the-shortest-path-from-a-shortcut}

> We're able to compute the _length_ of the shortest path, but we still need to unpack the actual arcs used on that path. We can handle this during the stage of contraction when shortcut edges are added. When we add a shortcut edge from \\(u\\) to \\(w\\) during the contraction of \\(v\\), we store a shortcut pointer to \\(v\\).
>
> We then begin unpacking the shortest path on the G\*<sub>U</sub> graph from the highest order node, in both directions. We back-trace parent edge pointers as in a regular Dijkstra algorithm, and if the parent edge has a shortcut pointer, we replace the parent edge with the shortcut edge, and continue to recursively unpack the full path.
>
> Our example query above didn't end up using any shortcut edges in \\(G\*\\), but consider if we had queried the shortest path from node \\(A\\) to \\(G\\). Then, we would certainly use the shortcut edge \\(A,H\\). And since \\(A\\) is the highest-ordered node in terms of contraction time, we can visualize the 'unpacking' of shortcut edges as:
>
> {{< figure src="/ox-hugo/2023-06-15_17-15-41_g-star-graph.png" >}}
>
> {{< figure src="/ox-hugo/2023-06-15_17-14-21_shortcut-unpack.png" >}}
>
> [Paraphrased, Spelling corrected]
>
> (<a href="#citeproc_bib_item_7">Lazarsfeld n.d.-c</a>)


### Choosing a node order {#choosing-a-node-order}

> Our query is correct no matter the order in which nodes were contracted, but a good node ordering has major implications for the performance of the queries. The order in which nodes are contracted affects the shortcut edges that do or don't get added in G\*. And as it's been mentioned before, too many shortcut edges means too dense a G\* graph and slower queries as a result.
>
> (<a href="#citeproc_bib_item_5">Lazarsfeld n.d.-a</a>)


#### Cost functions {#cost-functions}

<!--list-separator-->

-  Edge difference

    > It turns out that the main function used to determine this cost involves simulating the contraction of each node. Given that all edges incident to a node are removed during contraction, we're interested in the edge difference of a node, which is the difference between the number of original edges removed and the number of shortcut edges added.
    >
    > [...]
    >
    > Using our original, arbitrary node ordering, we only added 3 shortcut edges. In the example, B was the first node we contracted, and it didn't require any shortcuts to be added. In other words, the edge difference of B is -3.
    >
    > But what if we had first contracted J first? Compare what choosing J over B looks like:
    >
    > {{< figure src="/ox-hugo/2023-06-16_16-14-51_order-example-1.png" >}}
    >
    > {{< figure src="/ox-hugo/2023-06-16_16-15-04_order-example-3.png" >}}
    >
    > So clearly J has a much greater edge difference than B, and so J is less attractive to contract early on.
    >
    > [...]
    >
    > But consider that after we begin contracting nodes, the edge difference for other nodes can be affected. If we wanted to strictly adhere to an ordering based on edge difference, we would need to recompute the edge difference for every remaining node in the graph after each contraction. Of course, this would end up taking quadratic time, so it isn't feasible. Instead, we can use the lazy update heuristic [...]
    >
    > [...]
    >
    > Before contracting the next minimum node, we recompute its edge difference. If it's still the smallest in the priority queue [[Priority queue]({{< relref "priority_queue.md" >}})], we can go ahead and actually contract it. If its edge difference is no longer the min, then we update its cost and rebalance our [priority queue]. We then check the next minimum node and continue this process.
    >
    > (<a href="#citeproc_bib_item_5">Lazarsfeld n.d.-a</a>)

<!--list-separator-->

-  Contracted neighbors

    > [...] we might consider the idea of uniformity to be important when contracting nodes. This means varying the location of nodes in terms of their contraction order.
    >
    > Conceptually, we wouldn't want to contract all nodes in a small region of the graph consecutively because we could risk adding too many wasteful shortcuts. In our original example, we had a pretty good ordering partly because nodes in different parts of the graph were contracted each round.
    >
    > So an additional term to consider is the number of contracted neighbors each node has. This just involves counting the number of neighbors in the original graph that have already been contracted. When dealing with multiple terms like contracted neighbors and edge difference to determine cost, we would use a linear combination of terms.
    >
    > (<a href="#citeproc_bib_item_5">Lazarsfeld n.d.-a</a>)


## Flashcards {#flashcards}


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 5   | 41.24    | 2023-07-29T09:53:25Z |

[Contraction hierarchies]({{< relref "contraction_hierarchies.md" >}}) speed up {{finding the shortest-path in a graph}@0}.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Contraction Hierarchies” 2023</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 5   | 36.62    | 2023-07-22T04:17:01Z |
| back     | 2.65 | 4   | 15.61    | 2023-06-26T06:42:13Z |

[Contraction hierarchies]({{< relref "contraction_hierarchies.md" >}})


#### Back {#back}

A speed up method for calculating the shortest path between nodes in a graph based on the assumption that some vertices are more important than others.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Contraction Hierarchies” 2023</a>)


### Algorithm {#algorithm}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 0   | 0.00     | 2023-07-30T23:31:34Z |
| back     | 2.5  | -1  | 0        | 2023-06-15T15:20:40Z |

Node contraction in [Contraction hierarchies]({{< relref "contraction_hierarchies.md" >}})


#### Back {#back}

Given:

-   \\(v\\): the vertex to contract
-   \\(U\\): the set of all vertices with edges incoming to \\(v\\)
-   \\(W\\): the set of all vertices with incoming edges from \\(v\\)

Steps:

1.  \\(\forall\\; u \in U\\):
    1.  \\(\forall\\; w \in W\\):
        1.  Compute \\(P\_{w} = \operatorname{weight}(u, v) + \operatorname{weight}(v, w)\\)
    2.  \\(P\_{max} = \operatorname{max}(P\_w)\\)
    3.  \\(\forall\\; w \in W\\):
        1.  Perform a standard Dijkstra's shortest-path [[Single-pair shortest path problem]({{< relref "single_pair_shortest_path_problem.md" >}})] search from \\(u\\) to \\(w\\) on the subgraph excluding \\(v\\). Halt when we settle (1) a vertex with a shortest-path score \\(> P\_{max}\\) or (2) \\(w\\).
    4.  Add a shortcut if \\(P\_w < \operatorname{distance}(u, w)\\)


#### Source {#source}

(<a href="#citeproc_bib_item_6">Lazarsfeld n.d.-b</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.5  | -1  | 0        | 2023-06-15T15:21:11Z |
| 1        | 2.5  | -1  | 0        | 2023-06-15T15:21:11Z |

{{Node contraction}@0} is the process of {{finding shortcuts in a graph in [Contraction hierarchies]({{< relref "contraction_hierarchies.md" >}})}@1}.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Contraction Hierarchies” 2023</a>)


### Describe ([Contraction hierarchies]({{< relref "contraction_hierarchies.md" >}})) {#describe--contraction-hierarchies-contraction-hierarchies-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 0   | 0.00     | 2023-07-30T23:36:59Z |
| back     | 2.5  | -1  | 0        | 2023-06-15T15:30:07Z |

When do we contract a vertex, \\(v\\)?


#### Back {#back}

-   Given a given vertex, \\(v\\)
-   Let \\(U\\) be the set of vertices with edges going to \\(v\\)
-   Let \\(W\\) be the set of vertices with edges coming from \\(v\\)

We contract \\(v\\) when the path \\(u, v, w\\) is the shortest path from \\(u\\) to \\(w\\).


#### Source {#source}

(<a href="#citeproc_bib_item_6">Lazarsfeld n.d.-b</a>)


### Describe ([Contraction hierarchies]({{< relref "contraction_hierarchies.md" >}})) {#describe--contraction-hierarchies-contraction-hierarchies-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 1   | 1.00     | 2023-06-21T14:48:39Z |
| back     | 2.5  | -1  | 0        | 2023-06-15T15:49:21Z |

How do we ensure \\(u, v, w\\) is the shortest path from \\(u\\) to \\(w\\)?


#### Back {#back}

Perform a local [Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}}) and compare the shortest path found excluding \\(v\\) to the shortest path found which includes \\(v\\).


#### Source {#source}

(<a href="#citeproc_bib_item_6">Lazarsfeld n.d.-b</a>)


### Describe ([Contraction hierarchies]({{< relref "contraction_hierarchies.md" >}})) {#describe--contraction-hierarchies-contraction-hierarchies-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 2   | 2.00     | 2023-07-31T14:56:16Z |
| back     | 2.5  | -1  | 0        | 2023-06-16T23:05:25Z |

How to extract the shortest path through an added shortcut?


#### Back {#back}

We store a pointer to the interim vertex, \\(v\\), when we contract \\(u, v, w\\) into \\(u, w\\).


#### Source {#source}

(<a href="#citeproc_bib_item_7">Lazarsfeld n.d.-c</a>)


### Describe ([Contraction hierarchies]({{< relref "contraction_hierarchies.md" >}})) {#describe--contraction-hierarchies-contraction-hierarchies-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 4   | 15.55    | 2023-08-17T04:08:49Z |
| back     | 2.5  | -1  | 0        | 2023-06-16T23:19:16Z |

Heuristics for choosing the order to contract vertices.


#### Back {#back}

-   Edge difference
-   Contacted neighbors


#### Source {#source}

(<a href="#citeproc_bib_item_5">Lazarsfeld n.d.-a</a>)


### Describe ([Contraction hierarchies]({{< relref "contraction_hierarchies.md" >}})) {#describe--contraction-hierarchies-contraction-hierarchies-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 1   | 1.00     | 2023-07-27T02:54:44Z |
| back     | 2.5  | -1  | 0        | 2023-06-16T23:22:44Z |

Edge difference


#### Back {#back}

-   Heuristic for deciding the order to contract vertices in a graph
-   Ranks vertices by the number of edges removed by contraction
-   \\(\text{score} = \text{edges removed} + \text{edges (shortcuts) added}\\)


#### Source {#source}

(<a href="#citeproc_bib_item_5">Lazarsfeld n.d.-a</a>)


### Describe ([Contraction hierarchies]({{< relref "contraction_hierarchies.md" >}})) {#describe--contraction-hierarchies-contraction-hierarchies-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.35 | 4   | 15.24    | 2023-08-12T20:39:46Z |
| back     | 2.5  | -1  | 0        | 2023-06-16T23:23:36Z |

Contracted neighbors


#### Back {#back}

-   Heuristic for deciding the order to contract vertices in a graph
-   Ranks vertices by the proximity of other contracted vertices


#### Source {#source}

(<a href="#citeproc_bib_item_5">Lazarsfeld n.d.-a</a>)


### Cloze ([Contraction hierarchies]({{< relref "contraction_hierarchies.md" >}})) {#cloze--contraction-hierarchies-contraction-hierarchies-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 1   | 1.00     | 2023-06-25T13:17:39Z |

We should contract vertices in {{ascending order}{direction}@0} of edge difference.


#### Source {#source}

(<a href="#citeproc_bib_item_5">Lazarsfeld n.d.-a</a>)


### Cloze ([Contraction hierarchies]({{< relref "contraction_hierarchies.md" >}})) {#cloze--contraction-hierarchies-contraction-hierarchies-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 2   | 2.00     | 2023-07-10T00:11:12Z |

We should contract vertices with {{fewer}{comparison}@0} contracted neighbors first.


#### Source {#source}

(<a href="#citeproc_bib_item_5">Lazarsfeld n.d.-a</a>)


### Describe ([Contraction hierarchies]({{< relref "contraction_hierarchies.md" >}})) {#describe--contraction-hierarchies-contraction-hierarchies-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.35 | 5   | 28.71    | 2023-08-24T07:54:33Z |
| back     | 2.50 | 1   | 1.00     | 2023-07-13T12:55:35Z |

Lazy update in the context of vertex ordering


#### Back {#back}

-   Contracting any vertex may change the optimal contraction ordering of the remaining vertices
-   Re-compute the rank/weight after popping the next vertex off the [Priority queue]({{< relref "priority_queue.md" >}})


#### Source {#source}

(<a href="#citeproc_bib_item_5">Lazarsfeld n.d.-a</a>)


### Describe ([Contraction hierarchies]({{< relref "contraction_hierarchies.md" >}})) {#describe--contraction-hierarchies-contraction-hierarchies-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 1   | 1.00     | 2023-07-16T14:19:06Z |
| back     | 2.5  | -1  | 0        | 2023-06-20T15:35:52Z |

Query phase


#### Back {#back}

-   Performs a bi-directional [Dijkstra]({{< relref "dijkstra_s_algorithm.md" >}}) search for shortest path from \\(s\\) to \\(t\\)
    -   Forward search on upward graph from \\(s\\)
    -   Backward search on downward graph from \\(t\\)


#### Source {#source}

(<a href="#citeproc_bib_item_7">Lazarsfeld n.d.-c</a>)


### Cloze ([Contraction hierarchies]({{< relref "contraction_hierarchies.md" >}})) {#cloze--contraction-hierarchies-contraction-hierarchies-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 1   | 1.00     | 2023-08-02T01:19:52Z |
| 1        | 2.5  | -1  | 0        | 2023-06-20T15:38:35Z |

{{\\(G\_{up}\\)}@0}, a subgraph of \\(G\\), contains only edges from \\(v\\) to \\(w\\) {{where we contracted \\(w\\) **after** \\(v\\)}{condition}@1}


#### Source {#source}

(<a href="#citeproc_bib_item_7">Lazarsfeld n.d.-c</a>)


### Cloze ([Contraction hierarchies]({{< relref "contraction_hierarchies.md" >}})) {#cloze--contraction-hierarchies-contraction-hierarchies-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 1   | 1.00     | 2023-07-29T15:04:20Z |
| 1        | 2.5  | -1  | 0        | 2023-06-20T15:39:08Z |

{{\\(G\_{down}\\)}@0}, a subgraph of \\(G\\), contains only edges from \\(v\\) to \\(w\\) {{where we contracted \\(v\\) **before** \\(w\\)}{condition}@1}


#### Source {#source}

(<a href="#citeproc_bib_item_7">Lazarsfeld n.d.-c</a>)


### Describe ([Contraction hierarchies]({{< relref "contraction_hierarchies.md" >}})) {#describe--contraction-hierarchies-contraction-hierarchies-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 2   | 2.00     | 2023-08-01T23:41:25Z |
| back     | 2.5  | -1  | 0        | 2023-06-20T15:42:14Z |

How to unpack the shortest path from a shortcut


#### Back {#back}

Store a pointer to the contracted node, \\(v\\), whenever we contract \\(u, v, w\\) into \\(u, w\\).


#### Source {#source}

(<a href="#citeproc_bib_item_7">Lazarsfeld n.d.-c</a>)


### Witness path ([Contraction hierarchies]({{< relref "contraction_hierarchies.md" >}})) {#witness-path--contraction-hierarchies-contraction-hierarchies-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 3   | 6.00     | 2023-07-30T03:51:57Z |
| back     | 2.5  | -1  | 0        | 2023-06-20T15:44:41Z |

A path \\(u, \dots, w\\) around \\(v\\) with cost smaller than the cost of \\(u, v, w\\).


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Contraction Hierarchies” 2023</a>)


### Cloze ([Contraction hierarchies]({{< relref "contraction_hierarchies.md" >}})) {#cloze--contraction-hierarchies-contraction-hierarchies-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 3   | 6.00     | 2023-07-20T13:14:16Z |

Contraction is {{iterative}{process}@0}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Contraction Hierarchies” 2023</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Contraction Hierarchies.” 2023. <i>Wikipedia</i>, May. <a href="https://en.wikipedia.org/w/index.php?title=Contraction_hierarchies&oldid=1153438478">https://en.wikipedia.org/w/index.php?title=Contraction_hierarchies&#38;oldid=1153438478</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>Geisberger, Robert, Peter Sanders, Dominik Schultes, and Daniel Delling. 2008. “Contraction Hierarchies: Faster and Simpler Hierarchical Routing in Road Networks.” In <i>Experimental Algorithms</i>, edited by Catherine C. McGeoch, 5038:319–33. Berlin, Heidelberg: Springer Berlin Heidelberg. <a href="https://doi.org/10.1007/978-3-540-68552-4\_24">https://doi.org/10.1007/978-3-540-68552-4\_24</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_3"></a>Harabor, Daniel, and Peter Stuckey. 2021. “Forward Search in Contraction Hierarchies.” <i>Proceedings of the International Symposium on Combinatorial Search</i> 9 (1): 55–62. <a href="https://doi.org/10.1609/socs.v9i1.18454">https://doi.org/10.1609/socs.v9i1.18454</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_4"></a>Harabor, Daniel D. n.d. “An Introduction to Contraction Hierarchies.”</div>
  <div class="csl-entry"><a id="citeproc_bib_item_5"></a>Lazarsfeld, John. n.d.-a. “Core Components of CH: Choosing a Node Order.” <i>Contraction Hierarchies Guide</i>. Accessed June 16, 2023. <a href="https://jlazarsfeld.github.io//ch.150.project/sections/12-node-order/">https://jlazarsfeld.github.io//ch.150.project/sections/12-node-order/</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_6"></a>———. n.d.-b. “Core Components of CH: Node Contraction.” <i>Contraction Hierarchies Guide</i>. Accessed June 15, 2023. <a href="https://jlazarsfeld.github.io//ch.150.project/sections/8-contraction/">https://jlazarsfeld.github.io//ch.150.project/sections/8-contraction/</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_7"></a>———. n.d.-c. “Core Components of CH: The Modified, Bidirectional Query.” <i>Contraction Hierarchies Guide</i>. Accessed June 15, 2023. <a href="https://jlazarsfeld.github.io//ch.150.project/sections/10-ch-query/">https://jlazarsfeld.github.io//ch.150.project/sections/10-ch-query/</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Customizable route planning]({{< relref "customizable_route_planning.md" >}})
