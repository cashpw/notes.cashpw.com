+++
title = "Widest path problem"
author = ["Cash Prokop-Weaver"]
date = 2022-12-22T09:17:00-08:00
lastmod = 2023-07-25T12:42:27-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "635d6c87-68fe-4fbf-9462-2d86b0ea7f58"
+++

> In graph algorithms, the widest path problem is the problem of finding a path between two designated vertices [[Vertices]({{< relref "vertex.md" >}})] in a weighted graph [[Graph]({{< relref "graph.md" >}})], maximizing the weight of the minimum-weight edge [[Edge]({{< relref "edge.md" >}})] in the path. The widest path problem is also known as the maximum capacity path problem. It is possible to adapt most shortest path algorithms to compute widest paths, by modifying them to use the bottleneck distance instead of path length.[1] However, in many cases even faster algorithms are possible.
>
> For instance, in a graph that represents connections between routers in the Internet, where the weight of an edge represents the bandwidth of a connection between two routers, the widest path problem is the problem of finding an end-to-end path between two Internet nodes that has the maximum possible bandwidth.
>
> {{< figure src="/ox-hugo/2022-12-22_09-19-43_260px-CPT-Graphs-undirected-weighted.svg.png" >}}
>
> In this graph, the widest path from Maldon to Feering has bandwidth 29, and passes through Clacton, Tiptree, Harwich, and Blaxhall [40-29-31-40-46 has a minmimum of 29].


## Flashcards {#flashcards}


### Definition {#definition}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.20 | 7   | 132.26   | 2023-09-08T04:54:09Z |
| back     | 2.35 | 1   | 1.00     | 2023-07-25T03:57:25Z |

[Widest path problem]({{< relref "widest_path_problem.md" >}})


#### Back {#back}

The problem of finding a path between two [Vertices]({{< relref "vertex.md" >}}) in a [Graph]({{< relref "graph.md" >}}) which maximizes the minimum [Edge]({{< relref "edge.md" >}}) weight in the path.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Widest Path Problem” 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 6   | 127.65   | 2023-07-27T09:06:38Z |
| 1        | 2.50 | 7   | 279.84   | 2024-04-12T20:31:20Z |

Most algorithms which solve the {{[Shortest path problem]({{< relref "shortest_path_algorithm.md" >}})}@0} can, with modifications, also solve the {{[Widest path problem]({{< relref "widest_path_problem.md" >}})}@1}.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Widest Path Problem” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Widest Path Problem.” 2022. <i>Wikipedia</i>, October. <a href="https://en.wikipedia.org/w/index.php?title=Widest_path_problem&oldid=1117475622">https://en.wikipedia.org/w/index.php?title=Widest_path_problem&#38;oldid=1117475622</a>.</div>
</div>
