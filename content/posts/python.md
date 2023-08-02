+++
title = "Python"
author = ["Cash Prokop-Weaver"]
date = 2022-07-01T11:47:00-07:00
lastmod = 2023-08-02T12:06:30-07:00
tags = ["has-todo", "concept", "has-todo", "concept"]
categories = ["has-todo", "concept"]
draft = false
slug = "27b0e33a-6754-40b8-99d8-46650e8626aa"
+++

The programming language


##  {#d41d8c}


## Flashcards {#flashcards}


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 1        | 2.20 | 7   | 159.95   | 2023-08-11T14:04:41Z |
| 0        | 2.50 | 7   | 228.92   | 2023-09-24T16:29:06Z |

```python
>>> a = ["A", "B", "C", "D"]
>>> a[{{:2}@0}]
{{["A", "B"]}@1}
```


#### Extra {#extra}


#### Source {#source}


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 1        | 2.80 | 7   | 240.61   | 2023-09-14T16:34:34Z |
| 0        | 2.65 | 8   | 300.40   | 2023-12-31T03:00:51Z |

```python
>>> a = ["A", "B", "C", "D"]
>>> a[{{1:2}{n:n}@0}]
{{["B"]}@1}
```


#### Extra {#extra}


#### Source {#source}


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 7   | 212.88   | 2023-10-03T12:18:52Z |
| 1        | 2.50 | 7   | 235.30   | 2023-11-04T22:12:57Z |

```python
>>> a = ["A", "B", "C", "D"]
>>> a[{{1:3}{n:n}@0}]
{{["B", "C"]}@1}
```


#### Extra {#extra}


#### Source {#source}


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 1        | 2.65 | 8   | 505.16   | 2024-11-26T19:23:57Z |
| 0        | 2.50 | 7   | 238.89   | 2023-09-23T11:10:48Z |

```python
>>> a = ["A", "B", "C", "D"]
>>> a[{{1:}@0}]
{{["B", "C", "D"]}@1}
```


#### Extra {#extra}


#### Source {#source}


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.20 | 8   | 289.55   | 2024-04-29T02:30:59Z |
| 1        | 2.80 | 7   | 262.61   | 2023-11-01T06:19:39Z |

```python
>>> a = ["A", "B", "C", "D"]
>>> a[{{1:4:2}@0}]
{{["B", "D"]}@1}
```


#### Extra {#extra}


#### Source {#source}


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 1        | 2.65 | 7   | 297.64   | 2024-01-29T04:46:31Z |
| 0        | 2.65 | 8   | 284.90   | 2024-01-21T13:46:26Z |

```python
>>> a = ["A", "B", "C", "D"]
>>> a[{{:​:-1}@1}]
{{["D", "C", "B", "A"]}@0}
```


#### Extra {#extra}


#### Source {#source}


### `{{Optional[X]}{type}@1}` is equal to `{{Union[X, None]}{type}@0}` {#optional-x-type-1-is-equal-to-union-x-none-type-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 7   | 216.98   | 2023-10-30T16:39:21Z |
| 1        | 2.50 | 7   | 207.90   | 2023-12-06T13:48:19Z |


#### Extra {#extra}


#### Source {#source}


### `all` {#all}


### `any` {#any}


### `enumerate` {#enumerate}


### `filter` {#filter}


### `input` {#input}


### `map` {#map}


### `open` {#open}


### `reversed` {#reversed}


### `round` {#round}


### `slice` {#slice}


### `zip` {#zip}


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 1        | 2.65 | 7   | 324.65   | 2024-06-16T05:21:25Z |
| 2        | 2.35 | 7   | 252.19   | 2024-03-01T06:09:52Z |
| 0        | 1.30 | 7   | 24.19    | 2023-08-01T19:45:30Z |

```python
{{from itertools import count}@1}
{{from dataclasses import dataclass, field}@2}

@dataclass
class Foo:
    id: int = {{field(default_factory=count().__next__)}@0}
```


#### Source {#source}


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 7   | 316.43   | 2024-05-22T23:20:41Z |
| 1        | 2.95 | 6   | 160.27   | 2023-08-27T22:51:05Z |

```python
>>> values = ["A", "B", "C", "D"]
>>> {{",".join(values)}@0}
{{"A,B,C,D"}@1}
```


#### Source {#source}

(<a href="#citeproc_bib_item_4">“Python 3.11.1 Documentation” n.d.</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.95 | 6   | 147.59   | 2023-08-12T04:16:55Z |
| 1        | 2.80 | 7   | 289.39   | 2024-04-02T23:45:46Z |

```python
>>> s = "CATS"
>>> {{s.lower()}@0}
{{"cats"}@1}
```


#### Source {#source}

(<a href="#citeproc_bib_item_4">“Python 3.11.1 Documentation” n.d.</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.20 | 7   | 127.54   | 2023-08-19T02:16:43Z |
| 1        | 2.95 | 6   | 141.45   | 2023-08-06T00:49:39Z |

```python
>>> s = 'A,B,C,D'
>>> {{s.split(',')}@0}
{{['A', 'B', 'C', 'D']}@1}
```


#### Source {#source}

(<a href="#citeproc_bib_item_4">“Python 3.11.1 Documentation” n.d.</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.05 | 7   | 134.73   | 2023-11-17T21:43:02Z |
| 1        | 2.95 | 7   | 413.54   | 2024-09-16T13:01:55Z |

```python
>>> s = 'foo\nbar'
>>> {{s.splitlines()}@0}
{{['foo', 'bar']}@1}
```


#### Source {#source}

(<a href="#citeproc_bib_item_4">“Python 3.11.1 Documentation” n.d.</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 7   | 285.38   | 2024-04-02T00:52:43Z |

In [Python]({{< relref "python.md" >}}), `a is b` indicates {{reference equality}@0}.


#### Source {#source}

(<a href="#citeproc_bib_item_1">Besbes 2021</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 7   | 287.21   | 2024-03-28T05:47:22Z |

In [Python]({{< relref "python.md" >}}), `a == b` indicates {{value equality}@0}.


#### Source {#source}

(<a href="#citeproc_bib_item_1">Besbes 2021</a>)


### Denotes {#denotes}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.65 | 7   | 297.57   | 2024-04-09T05:17:29Z |
| back     | 2.50 | 7   | 235.14   | 2024-02-08T07:21:52Z |

Infinity in [Python]({{< relref "python.md" >}})


#### Back {#back}

`math.inf` and `-math.inf`


#### Source {#source}

(<a href="#citeproc_bib_item_4">“Python 3.11.1 Documentation” n.d.</a>)


### Denotes (Python) {#denotes--python}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 10  | 535.06   | 2024-10-26T17:11:47Z |
| 1        | 2.50 | 8   | 434.07   | 2024-06-16T17:21:55Z |

-   {{\\(\texttt{@}\\)}@0}

{{Matrix multiplication and outer product}@1}


#### Source {#source}

(<a href="#citeproc_bib_item_2">“PEP 465 A Dedicated Infix Operator for Matrix Multiplication | Peps.Python.Org” n.d.</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 7   | 270.99   | 2024-04-03T23:54:56Z |
| 1        | 2.65 | 7   | 276.14   | 2024-04-02T17:44:51Z |

```python
>>> list({{range(10)}{range}@0})
{{[0,1,2,3,4,5,6,7,8,9]}@1}
```


#### Source {#source}

(<a href="#citeproc_bib_item_4">“Python 3.11.1 Documentation” n.d.</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 7   | 357.04   | 2024-07-17T03:58:05Z |
| 1        | 2.20 | 7   | 163.68   | 2023-11-11T07:50:39Z |

```python
>>> list({{range(1, 5)}{range}@0})
{{[1,2,3,4]}@1}
```


#### Source {#source}

(<a href="#citeproc_bib_item_4">“Python 3.11.1 Documentation” n.d.</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 7   | 207.14   | 2023-12-08T19:09:46Z |
| 1        | 2.50 | 7   | 285.15   | 2024-04-26T17:38:18Z |

```python
>>> list({{range(0,10,3)}{range}@0})
{{[0,3,6,9]}@1}
```


#### Source {#source}

(<a href="#citeproc_bib_item_4">“Python 3.11.1 Documentation” n.d.</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.20 | 7   | 127.42   | 2023-09-06T09:50:19Z |

([Python]({{< relref "python.md" >}})) `range(x, y)` produces a list from {{\\([x, y-1]\\)}@0}.


#### Source {#source}

(<a href="#citeproc_bib_item_4">“Python 3.11.1 Documentation” n.d.</a>)


### Definition {#definition}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.95 | 6   | 151.46   | 2023-08-22T03:03:42Z |
| back     | 2.50 | 7   | 239.83   | 2024-02-18T10:04:12Z |

([Python]({{< relref "python.md" >}})) Dunder


#### Back {#back}

Names with two leading and two trailing underscores (e.g. `__init__`).


#### Source {#source}

(<a href="#citeproc_bib_item_3">“PEP 8 Style Guide for Python Code | Peps.Python.Org” n.d.</a>)


### Dunder (i.e double underscore) methods (e.g. `__init__`) {#dunder--i-dot-e-double-underscore--methods--e-dot-g-dot-init}


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.35 | 7   | 181.16   | 2023-12-13T17:35:10Z |
| 1        | 2.35 | 4   | 13.35    | 2023-08-09T22:46:05Z |

{{`random.randint(a, b)`}{[Python]({{< relref "python.md" >}})}@0} returns a random integer in the range {{\\([a, b]\\)}@1}


#### Source {#source}

(<a href="#citeproc_bib_item_4">“Python 3.11.1 Documentation” n.d.</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 7   | 165.75   | 2023-11-12T10:03:24Z |
| 1        | 2.20 | 5   | 28.84    | 2023-08-16T10:02:33Z |

{{`random.randint(a, b)`}@0} is an alias for {{`random.randrange(a, b+1)`}@1}.


#### Source {#source}

(<a href="#citeproc_bib_item_4">“Python 3.11.1 Documentation” n.d.</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.20 | 7   | 165.91   | 2023-12-09T13:52:37Z |
| 1        | 2.80 | 6   | 140.71   | 2023-09-24T10:43:44Z |
| 2        | 2.50 | 6   | 96.25    | 2023-08-17T22:25:44Z |

{{`random.randrange(start, stop, step)`}@0} returns a random {{integer}@1} in {{`range(start, stop, step)`}@2}.


#### Source {#source}

(<a href="#citeproc_bib_item_4">“Python 3.11.1 Documentation” n.d.</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.95 | 6   | 153.48   | 2023-09-30T02:10:30Z |
| 1        | 2.35 | 7   | 221.96   | 2024-02-22T13:17:24Z |

{{`random.random()`}{[Python]({{< relref "python.md" >}})}@0} returns a random number in {{\\([0.0, 1.0)\\)}@1}.


#### Source {#source}

(<a href="#citeproc_bib_item_4">“Python 3.11.1 Documentation” n.d.</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Besbes, Ahmed. 2021. “What’s the Difference between ``Is’’ and ``==’’ in Python.” <i>Medium</i>. <a href="https://towardsdatascience.com/whats-the-difference-between-is-and-in-python-dc26406c85ad">https://towardsdatascience.com/whats-the-difference-between-is-and-in-python-dc26406c85ad</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>“PEP 465 A Dedicated Infix Operator for Matrix Multiplication | Peps.Python.Org.” n.d. Accessed January 2, 2023. <a href="https://peps.python.org/pep-0465/">https://peps.python.org/pep-0465/</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_3"></a>“PEP 8 Style Guide for Python Code | Peps.Python.Org.” n.d. Accessed January 2, 2023. <a href="https://peps.python.org/pep-0008/">https://peps.python.org/pep-0008/</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_4"></a>“Python 3.11.1 Documentation.” n.d. Accessed December 21, 2022. <a href="https://docs.python.org/3/index.html">https://docs.python.org/3/index.html</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Merge sort]({{< relref "merge_sort.md" >}})
-   [Quickselect]({{< relref "quickselect.md" >}})
-   [Merge sort implementation in Python]({{< relref "merge_sort_implementation_in_python.md" >}})
-   [Python library: queue]({{< relref "python_library_queue.md" >}})
-   [Quicksort]({{< relref "quicksort.md" >}})
-   [Breadth-first search]({{< relref "breadth_first_search.md" >}})
-   [Bubble sort implementation in Python]({{< relref "bubble_sort_implementation_in_python.md" >}})
-   [Heapsort implementation in python]({{< relref "heapsort_in_python.md" >}})
-   [Asterisk in Python function arguments]({{< relref "asterisk_in_python_function_arguments.md" >}})
-   [Iterative deepening depth-first-search implementation in Python]({{< relref "iterative_deepening_depth_first_search_implementation_in_python.md" >}})
-   [Bellman-Ford implementation in Python]({{< relref "bellman_ford_implementation_in_python.md" >}})
-   [Quicksort implementation in Python]({{< relref "quicksort_implementation_in_python.md" >}})
-   [Pseudo-polynomial time subset sum problem implementation in Python]({{< relref "pseudo_polynomial_time_sumbset_sum_problem_implementation_in_python.md" >}})
-   [Python typing]({{< relref "python_typing.md" >}})
-   [Single-source shortest path with topological sort in Python]({{< relref "single_source_shortest_path_with_topological_sort_in_python.md" >}})
-   [Topological order by Depth-first search in Python]({{< relref "topological_order_by_depth_first_search_in_python.md" >}})
-   [Jessica Leung, Dmytro Matsypura | Python Language Companion to Introduction to Applied Linear Algebra: Vectors, Matrices, and Least Squares]({{< relref "jessica_leung_dmytro_matsypura_python_language_companion_to_introduction_to_applied_linear_algebra_vectors_matrices_and_least_squares.md" >}})
-   [Quickselect implementation in Python]({{< relref "quickselect_implementation_in_python.md" >}})
-   [Dijkstra's algorithm implementation in Python]({{< relref "dijkstra_s_algorithm_implementation_in_python.md" >}})
-   [Binary heap implementation in python]({{< relref "binary_heap_implementation_in_python.md" >}})
-   [Jarnik's algorithm implementation in Python]({{< relref "jarnik_s_algorithm_implementation_in_python.md" >}})
