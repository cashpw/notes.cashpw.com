+++
title = "Merge sort"
author = ["Cash Prokop-Weaver"]
date = 2022-07-01T11:23:00-07:00
lastmod = 2024-02-24T17:54:59-08:00
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


## Bibliography {#bibliography}

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Merge Sort.” 2022. <i>Wikipedia</i>, June. <a href="https://en.wikipedia.org/w/index.php?title=Merge_sort&oldid=1095865966">https://en.wikipedia.org/w/index.php?title=Merge_sort&#38;oldid=1095865966</a>.</div>
</div>


## Backlinks {#backlinks}

-   [External memory algorithm]({{< relref "external_memory_algorithm.md" >}})
-   [Merge sort implementation in Python]({{< relref "merge_sort_implementation_in_python.md" >}})
-   [Stable sorting algorithm]({{< relref "stable_sorting_algorithm.md" >}})
