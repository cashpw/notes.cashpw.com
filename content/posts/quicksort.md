+++
title = "Quicksort"
author = ["Cash Prokop-Weaver"]
date = 2022-06-30T13:45:00-07:00
lastmod = 2023-07-25T11:35:48-07:00
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
| 0        | 2.95 | 7   | 282.75   | 2023-11-16T15:42:56Z |
| 1        | 2.20 | 8   | 267.63   | 2024-02-01T07:40:35Z |
| 2        | 2.65 | 7   | 304.12   | 2024-02-03T19:17:46Z |
| 3        | 2.80 | 7   | 337.72   | 2024-05-03T09:02:13Z |

{{[Quicksort]({{< relref "quicksort.md" >}})}@0}

1.  {{Pick a pivot point}@1}
2.  {{Partition around the point}@2}
3.  {{Recursively invoke ... on both sides of the pivot}@3}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Quicksort” 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.20 | 8   | 273.53   | 2024-02-28T05:02:27Z |

[Quicksort]({{< relref "quicksort.md" >}})'s `partition` function initializes `i` to `{{low_index - 1}@0}`


#### Extra {#extra}


#### Source {#source}


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 7   | 353.03   | 2024-05-01T15:38:16Z |

[Quicksort]({{< relref "quicksort.md" >}})'s `partition` function iterates `j` from `{{range(low_index, high_index)}@0}`


#### Extra {#extra}


#### Source {#source}

[Quicksort implementation in Python]({{< relref "quicksort_implementation_in_python.md" >}})


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.20 | 7   | 150.53   | 2023-08-21T04:51:39Z |

[Quicksort]({{< relref "quicksort.md" >}})'s `partition` conditionally swaps elements at `{{i and j}@0}`


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Quicksort” 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 7   | 164.28   | 2023-09-02T20:38:26Z |

[Quicksort]({{< relref "quicksort.md" >}})'s `partition` compares elements at `{{j and pivot_index}@0}`


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Quicksort” 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.35 | 7   | 290.06   | 2024-02-29T18:38:56Z |
| back     | 2.50 | 7   | 271.01   | 2024-01-29T21:51:57Z |

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
| front    | 1.90 | 6   | 51.02    | 2023-09-01T13:10:32Z |

Implementation of [Quicksort]({{< relref "quicksort.md" >}})'s `partition` function in [Python]({{< relref "python.md" >}})


#### Back {#back}

```python
def partition(items: List[T], comparator: Callable[[id:T, T], int], low_index: int, high_index: int) -> int:
    """Sorts sublist into [{<= pivot}, pivot, {> than pivot}]"""
    pivot_index = high_index
    i = low_index - 1

    for j in range(low_index, high_index):
        if comparator(items[j], items[pivot_index]) > 0:
            i += 1
            swap(items, i, j)
    i += 1
    swap(items, i, pivot_index)

    return i
```


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Quicksort” 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 3        | 2.80 | 7   | 269.84   | 2023-11-04T18:57:16Z |
| 2        | 2.65 | 7   | 262.00   | 2023-10-23T16:34:45Z |
| 1        | 2.50 | 7   | 229.61   | 2023-09-29T05:54:53Z |
| 0        | 2.50 | 7   | 234.06   | 2023-10-09T16:28:07Z |

{{[Quicksort]({{< relref "quicksort.md" >}})}@0}'s implementation is composed of: {{partition}{function}@1}, {{inner}{function}@2}, and {{swap}{function}@3}


#### Extra {#extra}


#### Source {#source}


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 1        | 2.20 | 8   | 394.99   | 2024-08-22T03:44:44Z |
| 0        | 2.65 | 8   | 451.10   | 2024-08-04T17:38:21Z |

{{[Quicksort]({{< relref "quicksort.md" >}})}@0}'s implementation is composed of: {{partition, inner, and swap}{functions}@1}


#### Extra {#extra}


#### Source {#source}


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.35 | 7   | 167.67   | 2023-09-28T05:22:39Z |

[Quicksort]({{< relref "quicksort.md" >}}) average time complexity is {{\\(O(n \log n)\\)}@0}


#### Extra {#extra}


#### Source {#source}


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.35 | 8   | 335.96   | 2024-04-25T13:12:04Z |

[Quicksort]({{< relref "quicksort.md" >}}) space complexity is {{\\(O(n)\\)}@0}


#### Extra {#extra}


#### Source {#source}


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 3.10 | 9   | 290.38   | 2023-12-20T00:16:05Z |

[Quicksort]({{< relref "quicksort.md" >}}) is {{[Unstable]({{< relref "unstable_sorting_algorithm.md" >}})}{stability}@0}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Quicksort” 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.05 | 8   | 277.25   | 2024-02-07T23:33:21Z |

[Quicksort]({{< relref "quicksort.md" >}}) is {{[Internal memory algorithm]({{< relref "internal_memory_algorithm.md" >}})}{memory}@0}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Quicksort” 2022</a>)

:CREATED: <span class="timestamp-wrapper"><span class="timestamp">[2022-11-05 Sat 09:51]</span></span>

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Quicksort.” 2022. <i>Wikipedia</i>, June. <a href="https://en.wikipedia.org/w/index.php?title=Quicksort&oldid=1093780310">https://en.wikipedia.org/w/index.php?title=Quicksort&#38;oldid=1093780310</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Quickselect]({{< relref "quickselect.md" >}})
-   [Quicksort implementation in Python]({{< relref "quicksort_implementation_in_python.md" >}})
-   [Internal memory algorithm]({{< relref "internal_memory_algorithm.md" >}})
-   [Unstable sorting algorithm]({{< relref "unstable_sorting_algorithm.md" >}})
