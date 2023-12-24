+++
title = "A-star search algorithm"
author = ["Cash Prokop-Weaver"]
date = 2022-12-21T13:50:00-08:00
lastmod = 2023-12-23T10:32:56-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "4d3cbeb6-ea82-4e4f-96bb-3e950ebc2087"
+++

> A\* (pronounced "A-star") is a graph traversal and path search algorithm, which is used in many fields of computer science due to its completeness, optimality, and optimal efficiency.
>
> [...]
>
> A\* is an informed search algorithm, or a best-first search [[Best-first search]({{< relref "best_first_search.md" >}})], meaning that it is formulated in terms of weighted graphs: starting from a specific starting node of a graph, it aims to find a path to the given goal node having the smallest cost (least distance travelled, shortest time, etc.). It does this by maintaining a tree of paths originating at the start node and extending those paths one edge at a time until its termination criterion is satisfied.
>
> At each iteration of its main loop, A\* needs to determine which of its paths to extend. It does so based on the cost of the path and an estimate of the cost required to extend the path all the way to the goal. Specifically, A\* selects the path that minimizes
>
> \\(f(n) = g(n) + h(n)\\)
>
> where n is the next node on the path, g(n) is the cost of the path from the start node to n, and h(n) is a heuristic function that estimates the cost of the cheapest path from n to the goal. A\* terminates when the path it chooses to extend is a path from start to goal or if there are no paths eligible to be extended. The heuristic function is problem-specific.
>
> (<a href="#citeproc_bib_item_1">“A* Search Algorithm” 2022</a>)

<!--quoteend-->

> Dijkstra's algorithm [[Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}})], as another example of a uniform-cost search algorithm, can be viewed as a special case of A\* where \\(h(x) = 0\\) for all \\(x\\).
>
> (<a href="#citeproc_bib_item_1">“A* Search Algorithm” 2022</a>)

Like [Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}}), A\*'s implementation uses [Dynamic programming]({{< relref "dynamic_programming.md" >}}).


## What does the "\*" mean? {#what-does-the-mean}

> The reason is that scientists first came up with an improved version of the Dijkstra algorithm they called A1. Later on, the inventors of A\* discovered an improvement of A1 that they called A2. These people then managed to prove that A2 was actually optimal under some assumptions on the heuristic in use. Because A2 was optimal, it was renamed A\*. In science, and in optimisation in particular, a " \* " symbol is often used to denote optimal solutions. Some also interpret the " \* " as meaning "any version number" since it was proven impossible to build an "A3" algorithm that would outperform A2/A\*.
>
> By the way, in this context, "optimal" doesn't mean that it reaches the optimal solution, but that it does so while exploring the minimum number of nodes. Of course, A\* is also complete, which means it reaches the optimal solution (if we use an admissible heuristic).
>
> (NO_ITEM_DATA:francoisrAnswerWhatDoesStarAlgorithmMean2016)


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“A* Search Algorithm.” 2022. <i>Wikipedia</i>, December. <a href="https://en.wikipedia.org/w/index.php?title=A*_search_algorithm&oldid=1127312005">https://en.wikipedia.org/w/index.php?title=A*_search_algorithm&#38;oldid=1127312005</a>.</div>
  <div class="csl-entry">NO_ITEM_DATA:francoisrAnswerWhatDoesStarAlgorithmMean2016</div>
</div>

foo1


## Backlinks {#backlinks}

-   [Branch and bound]({{< relref "branch_and_bound.md" >}})
-   [Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}})
-   [Dynamic programming]({{< relref "dynamic_programming.md" >}})
-   [Shortest path algorithm]({{< relref "shortest_path_algorithm.md" >}})
-   [Single-pair shortest path problem]({{< relref "single_pair_shortest_path_problem.md" >}})
-   [Single-source shortest path problem]({{< relref "single_source_shortest_path_problem.md" >}})
-   [Topological order]({{< relref "topological_order.md" >}})
