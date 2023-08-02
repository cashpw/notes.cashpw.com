+++
title = "A-star search algorithm"
author = ["Cash Prokop-Weaver"]
date = 2022-12-21T13:50:00-08:00
lastmod = 2023-08-02T10:33:28-07:00
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
> (<a href="#citeproc_bib_item_3">francoisr 2016</a>)


## Flashcards {#flashcards}


### Example(s) {#example--s}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 7   | 204.76   | 2023-11-30T11:03:44Z |

Heuristics for [A-star search algorithm]({{< relref "a_star_algorithm.md" >}})


#### Back {#back}

-   [Manhattan distance]({{< relref "l_one_norm.md" >}})
-   [Euclidian distance]({{< relref "l_two_norm.md" >}})


#### Source {#source}

(<a href="#citeproc_bib_item_1">“A* Search Algorithm” 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 7   | 171.77   | 2023-10-31T10:39:06Z |

The time complexity of [A\*]({{< relref "a_star_algorithm.md" >}}) {{depends on the heuristic}@0}.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“A* Search Algorithm” 2022</a>)


### Denotes {#denotes}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.95 | 6   | 161.79   | 2023-09-01T11:01:05Z |
| 1        | 2.95 | 6   | 159.38   | 2023-09-01T22:32:15Z |

{{The `*`, for example in [A\*]({{< relref "a_star_algorithm.md" >}}),}@0} denotes {{optimal solutions}@1}


#### Source {#source}

(<a href="#citeproc_bib_item_3">francoisr 2016</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.35 | 7   | 214.24   | 2024-01-06T20:19:07Z |
| 1        | 2.35 | 7   | 167.65   | 2023-11-10T06:04:18Z |

[A\*]({{< relref "a_star_algorithm.md" >}}) is {{optimal}{property}@0} if {{it uses an [Admissible heuristic]({{< relref "admissible_heuristic.md" >}})}@1}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“A* Search Algorithm” 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.65 | 7   | 261.66   | 2024-03-10T17:14:01Z |
| back     | 2.80 | 7   | 360.27   | 2024-07-23T21:29:29Z |

\\(f(n) = g(n) + h(n)\\) ([A\*]({{< relref "a_star_algorithm.md" >}}))


#### Back {#back}

[A\*]({{< relref "a_star_algorithm.md" >}}) selects the path which minimizes the sum of:

1.  The cost of the path from the start node to \\(n\\)
2.  The value of the heuristic function at \\(n\\)


#### Source {#source}

(<a href="#citeproc_bib_item_1">“A* Search Algorithm” 2022</a>)


### Denotes {#denotes}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 7   | 277.23   | 2024-04-05T06:37:30Z |
| 1        | 2.50 | 7   | 296.99   | 2024-04-30T00:08:07Z |

-   {{\\(f(n)\\)}@0}

{{The cost of the path from the start node to the target node}@1} ([A\*]({{< relref "a_star_algorithm.md" >}}))


#### Source {#source}

(<a href="#citeproc_bib_item_1">“A* Search Algorithm” 2022</a>)


### Denotes ([A\*]({{< relref "a_star_algorithm.md" >}})) {#denotes--a-a-star-algorithm-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 7   | 261.35   | 2024-03-11T21:43:15Z |
| 1        | 2.20 | 7   | 118.96   | 2023-09-06T15:15:25Z |

-   {{\\(g(n)\\)}@0}

{{The cost of the path from the start node to \\(n\\)}@1}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“A* Search Algorithm” 2022</a>)


### Denotes {#denotes}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 6   | 141.86   | 2023-08-13T14:23:05Z |
| 1        | 2.95 | 6   | 159.95   | 2023-09-03T16:01:09Z |

-   {{\\(h(n)\\)}@0}

{{The heuristic function which estimates the cost of the path from \\(n\\) to the target node}@1} ([A\*]({{< relref "a_star_algorithm.md" >}}))


#### Source {#source}

(<a href="#citeproc_bib_item_1">“A* Search Algorithm” 2022</a>)


### Compare and contrast {#compare-and-contrast}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.65 | 6   | 137.54   | 2023-08-06T06:16:48Z |

[Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}}) and [A\*]({{< relref "a_star_algorithm.md" >}})


#### Back {#back}

-   [Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}}) can solve both the [Single-pair]({{< relref "single_pair_shortest_path_problem.md" >}}) and [Single-source shortest path problem]({{< relref "single_source_shortest_path_problem.md" >}}) whereas [A\*]({{< relref "a_star_algorithm.md" >}}) can only solve the [Single-pair shortest path problem]({{< relref "single_pair_shortest_path_problem.md" >}})
-   [A\*]({{< relref "a_star_algorithm.md" >}}) is [Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}}) plus a heuristic function


#### Source {#source}

-   (<a href="#citeproc_bib_item_2">“Dijkstra’s Algorithm” 2022</a>)
-   (<a href="#citeproc_bib_item_1">“A* Search Algorithm” 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 7   | 324.37   | 2024-06-06T22:28:43Z |

[A\*]({{< relref "a_star_algorithm.md" >}}) is {{faster}{speed}@0} than [Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}})


#### Source {#source}

(<a href="#citeproc_bib_item_1">“A* Search Algorithm” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“A* Search Algorithm.” 2022. <i>Wikipedia</i>, December. <a href="https://en.wikipedia.org/w/index.php?title=A*_search_algorithm&oldid=1127312005">https://en.wikipedia.org/w/index.php?title=A*_search_algorithm&#38;oldid=1127312005</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>“Dijkstra’s Algorithm.” 2022. <i>Wikipedia</i>, December. <a href="https://en.wikipedia.org/w/index.php?title=Dijkstra%27s_algorithm&oldid=1127202995">https://en.wikipedia.org/w/index.php?title=Dijkstra%27s_algorithm&#38;oldid=1127202995</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_3"></a>francoisr. 2016. “Answer to ‘What Does the Star in the A* Algorithm Mean?’.” <i>Stack Overflow</i>. <a href="https://stackoverflow.com/a/35848019">https://stackoverflow.com/a/35848019</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Single-pair shortest path problem]({{< relref "single_pair_shortest_path_problem.md" >}})
-   [Single-source shortest path problem]({{< relref "single_source_shortest_path_problem.md" >}})
-   [Dynamic programming]({{< relref "dynamic_programming.md" >}})
-   [Dijkstra's algorithm]({{< relref "dijkstra_s_algorithm.md" >}})
-   [Shortest path algorithm]({{< relref "shortest_path_algorithm.md" >}})
-   [Branch and bound]({{< relref "branch_and_bound.md" >}})
-   [Topological order]({{< relref "topological_order.md" >}})
