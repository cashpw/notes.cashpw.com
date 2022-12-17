+++
title = "Merge sort"
author = ["Cash Prokop-Weaver"]
date = 2022-07-01T11:23:00-07:00
lastmod = 2022-12-17T11:20:57-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "4ad76968-7e82-4d68-b8fa-ff6059f3c843"
+++

> Conceptually, a merge sort works as follows:
>
> 1.  Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).
> 2.  Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.
>
> (<a href="#citeproc_bib_item_1">“Merge Sort” 2022</a>)

Merge sort is:

-   [Stable sorting algorithm]({{< relref "stable_sorting_algorithm.md" >}})
-   [External memory algorithm]({{< relref "external_memory_algorithm.md" >}})


## Algorithm {#algorithm}

```nil
procedure MergeSort(list) is
  if length of list <= 1 then
    return list

  left, right = split(list)
  MergeSort(left)
  MergeSort(right)

  return Merge(left, right)
```


## Implementation {#implementation}

-   [Merge sort implementation in Python]({{< relref "merge_sort_implementation_in_python.md" >}})


## Complexity {#complexity}

|       | Worst-case                       | Best-case                        |
|-------|----------------------------------|----------------------------------|
| Time  | \\(O(n \operatorname{log}(n))\\) | \\(O(n \operatorname{log}(n))\\) |
| Space | \\(O(n)\\)                       | \\(O(n)\\)                       |


## Flashcards {#flashcards}


### [Merge sort]({{< relref "merge_sort.md" >}}) space complexity: {{\\(O(n)\\)}@0} {#merge-sort--merge-sort-dot-md--space-complexity-o--n--0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 5   | 45.87    | 2023-01-14T15:03:16Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Merge Sort” 2022</a>)


### [Merge sort]({{< relref "merge_sort.md" >}}) time complexity: {{\\(O(n \log(n))\\)}@0} {#merge-sort--merge-sort-dot-md--time-complexity-o--n-logn---0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 7   | 73.12    | 2022-12-22T18:31:46Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Merge Sort” 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.80 | 5   | 43.67    | 2023-01-03T09:11:12Z |
| back     | 2.80 | 4   | 17.75    | 2022-12-19T11:30:27Z |

[Merge sort]({{< relref "merge_sort.md" >}})


#### Back {#back}

A recursive [Sorting algorithm]({{< relref "sorting_algorithm.md" >}}) which sorts by separating a list into smaller parts and sorting the sub-lists.

-   [External memory algorithm]({{< relref "external_memory_algorithm.md" >}})
-   [Stable sorting algorithm]({{< relref "stable_sorting_algorithm.md" >}})

|       | Worst-case                           | Best-case                            |
|-------|--------------------------------------|--------------------------------------|
| Time  | \\(\bigo{n \operatorname{log}(n)}\\) | \\(\bigo{n \operatorname{log}(n)}\\) |
| Space | \\(\bigo{n}\\)                       | \\(\bigo{n}\\)                       |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Merge Sort” 2022</a>)


### [Merge sort]({{< relref "merge_sort.md" >}}) is {{[External memory algorithm]({{< relref "external_memory_algorithm.md" >}})}{memory}@0} {#merge-sort--merge-sort-dot-md--is-external-memory-algorithm--external-memory-algorithm-dot-md--memory-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 6   | 110.69   | 2023-02-23T16:31:23Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Merge Sort” 2022</a>)


### [Merge sort]({{< relref "merge_sort.md" >}}) is {{[stable]({{< relref "stable_sorting_algorithm.md" >}})}{stability}@0} {#merge-sort--merge-sort-dot-md--is-stable--stable-sorting-algorithm-dot-md--stability-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 6   | 165.89   | 2023-04-21T14:13:36Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Merge Sort” 2022</a>)


### Algorithm {#algorithm}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 6   | 83.42    | 2023-03-01T01:47:18Z |
| 1        | 2.20 | 6   | 70.34    | 2023-02-24T04:46:34Z |
| 2        | 2.65 | 5   | 27.56    | 2022-12-17T05:55:08Z |
| 3        | 2.80 | 5   | 33.81    | 2023-01-19T13:17:03Z |

{{[Merge sort]({{< relref "merge_sort.md" >}})}@0}

1.  {{Split the given list in half}@1}
2.  {{Apply [...] to both halves}@2}
3.  {{`Merge` both halves}@3}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Merge Sort” 2022</a>)


### Basic with Source {#basic-with-source}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 4   | 14.78    | 2022-12-27T20:50:54Z |

Implement [Merge sort]({{< relref "merge_sort.md" >}}) in [Python]({{< relref "python.md" >}})


#### Back {#back}

[Merge sort implementation in Python]({{< relref "merge_sort_implementation_in_python.md" >}})


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Merge Sort” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Merge Sort.” 2022. <i>Wikipedia</i>, June. <a href="https://en.wikipedia.org/w/index.php?title=Merge_sort&oldid=1095865966">https://en.wikipedia.org/w/index.php?title=Merge_sort&#38;oldid=1095865966</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Merge sort implementation in Python]({{< relref "merge_sort_implementation_in_python.md" >}})
-   [Example(s) (Memory)]({{< relref "external_memory_algorithm.md#example--s----memory" >}})
-   [Example(s) (Stability)]({{< relref "stable_sorting_algorithm.md#example--s----stability" >}})
