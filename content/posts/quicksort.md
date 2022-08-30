+++
title = "Quicksort"
author = ["Cash Weaver"]
date = 2022-06-30T13:45:00-07:00
lastmod = 2022-08-26T22:05:29-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
+++

> Quicksort is an in-place [Sorting algorithm]({{< relref "sorting_algorithm.md" >}}). [...] It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.
>
> (<a href="#citeproc_bib_item_1">“Quicksort” 2022</a>)

Quicksort is:

-   [Unstable sorting algorithm]({{< relref "unstable_sorting_algorithm.md" >}})
-   [Internal memory algorithm]({{< relref "internal_memory_algorithm.md" >}})


## Algorithm {#algorithm}

This partition algorithm always uses the rightmost element as the pivot. There are other possible pivot selection strategies.

```nil
procedure f(lowIndex, highIndex, list) is
  if lowIndex >= highIndex || lowIndex < 0 then
    return

  pivotIndex = partition(0, len(list))

  f(0, pivotIndex-1, list)
  f(pivotIndex+1, len(list), list)

procedure partition(lowIndex, highIndex, list) is
  pivotIndex = highIndex

  i = lowIndex - 1
  for j from lowIndex to highIndex - 1 do
    if list[j] <= list[pivotIndex] then
      i += 1
      swap list[i] and list[j]
  i += 1
  swap list[i] and list[pivotIndex]
  return i
```


## Implementation {#implementation}

-   [Quicksort implementation in Python]({{< relref "quicksort_implementation_in_python.md" >}})


## Complexity {#complexity}

|       | Worst-case   | Best-case                        |
|-------|--------------|----------------------------------|
| Time  | \\(O(n^2)\\) | \\(O(n \operatorname{log}(n))\\) |
| Space | \\(O(n)\\)   | \\(O(n)\\)                       |

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Quicksort.” 2022. <i>Wikipedia</i>, June. <a href="https://en.wikipedia.org/w/index.php?title=Quicksort&oldid=1093780310">https://en.wikipedia.org/w/index.php?title=Quicksort&#38;oldid=1093780310</a>.</div>
</div>
