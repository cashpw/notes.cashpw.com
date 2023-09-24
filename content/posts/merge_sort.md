+++
title = "Merge sort"
author = ["Cash Prokop-Weaver"]
date = 2022-07-01T11:23:00-07:00
lastmod = 2023-09-24T10:30:53-07:00
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
| 0        | 2.80 | 7   | 370.27   | 2024-06-03T22:45:34Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Merge Sort” 2022</a>)


### [Merge sort]({{< relref "merge_sort.md" >}}) time complexity: {{\\(O(n \log(n))\\)}@0} {#merge-sort--merge-sort-dot-md--time-complexity-o--n-logn---0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 9   | 404.77   | 2024-07-30T10:15:47Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Merge Sort” 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.95 | 7   | 389.67   | 2024-06-14T05:00:56Z |
| back     | 3.10 | 7   | 526.87   | 2024-12-31T00:38:26Z |

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
| 0        | 2.95 | 7   | 316.09   | 2024-01-06T05:54:35Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Merge Sort” 2022</a>)


### [Merge sort]({{< relref "merge_sort.md" >}}) is {{[stable]({{< relref "stable_sorting_algorithm.md" >}})}{stability}@0} {#merge-sort--merge-sort-dot-md--is-stable--stable-sorting-algorithm-dot-md--stability-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 7   | 432.54   | 2024-07-04T11:30:16Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Merge Sort” 2022</a>)


### Algorithm {#algorithm}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 7   | 209.06   | 2023-09-27T15:55:46Z |
| 1        | 2.35 | 8   | 377.51   | 2024-09-04T04:57:18Z |
| 2        | 2.65 | 8   | 410.99   | 2024-09-25T22:52:36Z |
| 3        | 3.10 | 7   | 307.70   | 2024-03-12T09:43:40Z |

{{[Merge sort]({{< relref "merge_sort.md" >}})}@0}

1.  {{Split the given list in half}@1}
2.  {{Apply [...] to both halves}@2}
3.  {{`Merge` both halves}@3}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Merge Sort” 2022</a>)


### Basic with Source {#basic-with-source}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 5   | 31.85    | 2023-10-12T10:03:27Z |

Implement [Merge sort]({{< relref "merge_sort.md" >}}) in [Python]({{< relref "python.md" >}})


#### Back {#back}

[Merge sort implementation in Python]({{< relref "merge_sort_implementation_in_python.md" >}})


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Merge Sort” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Merge Sort.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Merge_sort&oldid=1095865966">https://en.wikipedia.org/w/index.php?title=Merge_sort&#38;oldid=1095865966</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Merge sort implementation in Python]({{< relref "merge_sort_implementation_in_python.md" >}})
-   [Stable sorting algorithm]({{< relref "stable_sorting_algorithm.md" >}})
-   [External memory algorithm]({{< relref "external_memory_algorithm.md" >}})
