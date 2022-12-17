+++
title = "Quicksort"
author = ["Cash Prokop-Weaver"]
date = 2022-06-30T13:45:00-07:00
lastmod = 2022-12-17T11:26:17-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "d7bcd831-6a3f-4885-a654-15f0b11c9966"
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

|       | Worst-case       | Average-case          | Best-case                            |
|-------|------------------|-----------------------|--------------------------------------|
| Time  | \\(\bigo{n^2}\\) | \\(\bigo{n \log n}\\) | \\(\bigo{n \operatorname{log}(n)}\\) |
| Space | \\(\bigo{n}\\)   |                       | \\(\bigo{n}\\)                       |


## Flashcards {#flashcards}


### Algorithm {#algorithm}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 6   | 87.96    | 2023-02-06T15:45:22Z |
| 1        | 2.20 | 6   | 54.00    | 2023-01-06T15:01:32Z |
| 2        | 2.80 | 5   | 36.63    | 2022-12-20T06:37:01Z |
| 3        | 2.65 | 5   | 47.27    | 2023-01-29T08:22:24Z |

{{[Quicksort]({{< relref "quicksort.md" >}})}@0}

1.  {{Pick a pivot point}@1}
2.  {{Partition around the point}@2}
3.  {{Recursively invoke ... on both sides of the pivot}@3}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Quicksort” 2022</a>)


### [Quicksort]({{< relref "quicksort.md" >}})'s `partition` function initializes `i` to `{{low_index - 1}@0}` {#quicksort--quicksort-dot-md--s-partition-function-initializes-i-to-low-index-1-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.35 | 6   | 60.30    | 2023-01-12T22:29:00Z |


#### Extra {#extra}


#### Source {#source}


### [Quicksort]({{< relref "quicksort.md" >}})'s `partition` function iterates `j` from `{{range(low_index, high_index)}@0}` {#quicksort--quicksort-dot-md--s-partition-function-iterates-j-from-range--low-index-high-index--0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 5   | 43.79    | 2023-01-15T13:42:33Z |


#### Extra {#extra}


#### Source {#source}

[Quicksort implementation in Python]({{< relref "quicksort_implementation_in_python.md" >}})


### [Quicksort]({{< relref "quicksort.md" >}})'s `partition` conditionally swaps elements at `{{i and j}@0}` {#quicksort--quicksort-dot-md--s-partition-conditionally-swaps-elements-at-i-and-j-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.35 | 5   | 34.58    | 2023-01-09T07:55:06Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Quicksort” 2022</a>)


### [Quicksort]({{< relref "quicksort.md" >}})'s `partition` compares elements at `{{j and pivot_index}@0}` {#quicksort--quicksort-dot-md--s-partition-compares-elements-at-j-and-pivot-index-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.35 | 5   | 30.93    | 2023-01-07T14:05:20Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Quicksort” 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.65 | 5   | 49.86    | 2023-01-20T14:17:55Z |
| back     | 2.65 | 5   | 42.80    | 2023-01-14T17:19:12Z |

[Quicksort]({{< relref "quicksort.md" >}})


#### Back {#back}

A divide-and-conquer sorting algorithm which recursively sorts a list by selecting a pivot element and arranging the (sub)list such that all elements in front of the pivot are less than or equal to the pivot.

-   [Internal memory algorithm]({{< relref "internal_memory_algorithm.md" >}})
-   [Unstable sorting algorithm]({{< relref "unstable_sorting_algorithm.md" >}})

|       | Worst-case       | Average-case          | Best-case                            |
|-------|------------------|-----------------------|--------------------------------------|
| Time  | \\(\bigo{n^2}\\) | \\(\bigo{n \log n}\\) | \\(\bigo{n \operatorname{log}(n)}\\) |
| Space | \\(\bigo{n}\\)   |                       | \\(\bigo{n}\\)                       |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Quicksort” 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.35 | 4   | 15.29    | 2022-12-25T23:44:30Z |

Implementation of [Quicksort]({{< relref "quicksort.md" >}})'s `partition` function in [Python]({{< relref "python.md" >}})


#### Back {#back}

```python
def partition(ints: List[T], comparator: Callable[[id:T, T], int], low_index: int, high_index: int) -> int:
    """Sorts sublist into [{<= pivot}, pivot, {> than pivot}]"""
    pivot_index = high_index
    i = low_index - 1

    for j in range(low_index, high_index):
        if comparator(ints[j], ints[pivot_index]) > 0:
            i += 1
            swap(ints, i, j)
    i += 1
    swap(i, pivot_index)

    return i
```


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Quicksort” 2022</a>)


### {{[Quicksort]({{< relref "quicksort.md" >}})}@0}'s implementation is composed of: {{partition}{function}@1}, {{inner}{function}@2}, and {{swap}{function}@3} {#quicksort--quicksort-dot-md--0-s-implementation-is-composed-of-partition-function-1-inner-function-2-and-swap-function-3}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 3        | 2.65 | 6   | 101.38   | 2023-02-03T23:31:55Z |
| 2        | 2.65 | 6   | 95.89    | 2023-02-02T14:04:01Z |
| 1        | 2.35 | 6   | 91.49    | 2023-02-10T04:42:29Z |
| 0        | 2.50 | 6   | 92.94    | 2023-02-13T13:03:04Z |


#### Extra {#extra}


#### Source {#source}


### {{[Quicksort]({{< relref "quicksort.md" >}})}@0}'s implementation is composed of: {{partition, inner, and swap}{functions}@1} {#quicksort--quicksort-dot-md--0-s-implementation-is-composed-of-partition-inner-and-swap-functions-1}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 1        | 2.35 | 6   | 76.86    | 2023-01-23T11:41:42Z |
| 0        | 2.65 | 7   | 164.18   | 2023-04-30T20:29:30Z |


#### Extra {#extra}


#### Source {#source}


### [Quicksort]({{< relref "quicksort.md" >}}) average time complexity is {{\\(O(n \log n)\\)}@0} {#quicksort--quicksort-dot-md--average-time-complexity-is-o--n-log-n--0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.35 | 4   | 14.90    | 2022-12-28T15:57:16Z |


#### Extra {#extra}


#### Source {#source}


### [Quicksort]({{< relref "quicksort.md" >}}) space complexity is {{\\(O(n)\\)}@0} {#quicksort--quicksort-dot-md--space-complexity-is-o--n--0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 6   | 57.27    | 2022-12-28T22:32:05Z |


#### Extra {#extra}


#### Source {#source}


### [Quicksort]({{< relref "quicksort.md" >}}) is {{[Unstable]({{< relref "unstable_sorting_algorithm.md" >}})}{stability}@0} {#quicksort--quicksort-dot-md--is-unstable--unstable-sorting-algorithm-dot-md--stability-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.95 | 8   | 96.73    | 2023-03-04T11:43:24Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Quicksort” 2022</a>)


### Implement [Quicksort]({{< relref "quicksort.md" >}}) in Python {#implement-quicksort--quicksort-dot-md--in-python}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.20 | 3   | 6.00     | 2022-12-22T17:35:20Z |

[Quicksort implementation in Python]({{< relref "quicksort_implementation_in_python.md" >}})


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Quicksort” 2022</a>)


### [Quicksort]({{< relref "quicksort.md" >}}) is {{[Internal memory algorithm]({{< relref "internal_memory_algorithm.md" >}})}{memory}@0} {#quicksort--quicksort-dot-md--is-internal-memory-algorithm--internal-memory-algorithm-dot-md--memory-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.20 | 6   | 66.58    | 2022-12-27T05:31:09Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Quicksort” 2022</a>)

:CREATED: <span class="timestamp-wrapper"><span class="timestamp">[2022-11-05 Sat 09:51]</span></span>


### [Quicksort]({{< relref "quicksort.md" >}})'s `partition` conditionally swaps elements at `{{i and j}}` {#quicksort--quicksort-dot-md--s-partition-conditionally-swaps-elements-at-i-and-j}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Quicksort” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Quicksort.” 2022. <i>Wikipedia</i>, June. <a href="https://en.wikipedia.org/w/index.php?title=Quicksort&oldid=1093780310">https://en.wikipedia.org/w/index.php?title=Quicksort&#38;oldid=1093780310</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Quicksort implementation in Python]({{< relref "quicksort_implementation_in_python.md" >}})
-   [Example(s) (stability)]({{< relref "unstable_sorting_algorithm.md#example--s----stability" >}})
-   [Quickselect]({{< relref "quickselect.md" >}})
-   [Example(s)]({{< relref "internal_memory_algorithm.md#example--s" >}})
