+++
title = "Bubble sort"
author = ["Cash Prokop-Weaver"]
date = 2022-06-30T10:47:00-07:00
lastmod = 2023-08-02T10:38:39-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "c6bc266e-1090-492f-bdba-f044e04db3ff"
+++

> Bubble sort, sometimes referred to as sinking sort, is a simple [Sorting algorithm]({{< relref "sorting_algorithm.md" >}}) that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.
>
> [links added]
>
> (<a href="#citeproc_bib_item_1">“Bubble Sort” 2022</a>)

Bubble sort is [stable]({{< relref "stable_sorting_algorithm.md" >}}).


## Algorithm {#algorithm}

```nil
while list is not sorted do
  for i in range(len(list) - 1) do
    if list[i] > list[i+1] do
      swap(i, i+1)
```


## Implementation {#implementation}

-   [Bubble sort implementation in Python]({{< relref "bubble_sort_implementation_in_python.md" >}})


## Complexity {#complexity}

|       | Worst-case   | Best-case  |
|-------|--------------|------------|
| Time  | \\(O(n^2)\\) | \\(O(n)\\) |
| Space | \\(O(n)\\)   | \\(O(n)\\) |


## Flashcards {#flashcards}


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 7   | 232.85   | 2023-09-22T13:10:22Z |
| back     | 2.65 | 8   | 414.12   | 2024-06-25T20:13:34Z |

[Bubble sort]({{< relref "bubble_sort.md" >}}) algorithm


#### Back {#back}

A [Sorting algorithm]({{< relref "sorting_algorithm.md" >}}) which repeatedly loops over the full list and conditionally swaps adjacent elements.

|       | Worst-case   | Best-case  |
|-------|--------------|------------|
| Time  | \\(O(n^2)\\) | \\(O(n)\\) |
| Space | \\(O(n)\\)   | \\(O(n)\\) |

(<a href="#citeproc_bib_item_1">“Bubble Sort” 2022</a>)


### [Bubble sort]({{< relref "bubble_sort.md" >}}) time complexity: {{\\(O(n^2)\\)}@0} {#bubble-sort--bubble-sort-dot-md--time-complexity-o--n-2--0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 3.10 | 7   | 522.20   | 2024-12-11T05:03:16Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Bubble Sort” 2022</a>)


### [Bubble sort]({{< relref "bubble_sort.md" >}}) space complexity: {{\\(O(n)\\)}@0} {#bubble-sort--bubble-sort-dot-md--space-complexity-o--n--0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 7   | 406.63   | 2024-07-11T06:47:34Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Bubble Sort” 2022</a>)


### Algorithm {#algorithm}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.65 | 8   | 511.87   | 2024-12-17T00:47:53Z |
| back     | 2.80 | 7   | 378.93   | 2024-04-13T14:10:05Z |

[Bubble sort]({{< relref "bubble_sort.md" >}})


#### Back {#back}

1.  While the list isn't sorted
    1.  Walk the list and swap elements based on the `comparator`


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Bubble Sort” 2022</a>)


### [Bubble sort]({{< relref "bubble_sort.md" >}}) is a {{stable}{stability}@0} sort {#bubble-sort--bubble-sort-dot-md--is-a-stable-stability-0-sort}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 1.70 | 9   | 109.02   | 2023-09-10T20:56:25Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Bubble Sort” 2022</a>)


### Implement [Bubble sort]({{< relref "bubble_sort.md" >}}) in Python {#implement-bubble-sort--bubble-sort-dot-md--in-python}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.95 | 7   | 339.92   | 2024-04-15T13:12:53Z |

[Bubble sort implementation in Python]({{< relref "bubble_sort_implementation_in_python.md" >}})


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Bubble Sort” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Bubble Sort.” 2022. <i>Wikipedia</i>, June. <a href="https://en.wikipedia.org/w/index.php?title=Bubble_sort&oldid=1093592571">https://en.wikipedia.org/w/index.php?title=Bubble_sort&#38;oldid=1093592571</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Bubble sort implementation in Python]({{< relref "bubble_sort_implementation_in_python.md" >}})
-   [Stable sorting algorithm]({{< relref "stable_sorting_algorithm.md" >}})