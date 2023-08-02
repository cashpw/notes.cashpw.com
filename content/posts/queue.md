+++
title = "Queue"
author = ["Cash Prokop-Weaver"]
date = 2022-06-28T17:37:00-07:00
lastmod = 2023-08-02T12:07:59-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "f7ca3e99-0356-4651-996e-542a11d67f50"
+++

A queue is an [Abstract data type]({{< relref "abstract_data_type.md" >}}).

> In computer science, a queue is a collection of entities that are maintained in a sequence and can be modified by the addition of entities at one end of the sequence and the removal of entities from the other end of the sequence.
>
> [...]
>
> The operation of adding an element to the rear of the queue is known as enqueue, and the operation of removing an element from the front is known as dequeue. Other operations may also be allowed, often including a peek or front operation that returns the value of the next element to be dequeued without dequeuing it.
>
> [...]
>
> The operations of a queue make it a [[First in, first out]({{< relref "first_in_first_out.md" >}})] ([FIFO]({{< relref "first_in_first_out.md" >}})) data structure. In a [FIFO]({{< relref "first_in_first_out.md" >}}) data structure, the first element added to the queue will be the first one to be removed. [...] Common implementations are circular buffers and linked lists.
>
> (<a href="#citeproc_bib_item_1">“Queue (Abstract Data Type)” 2022</a>)


## Types {#types}

-   [Priority queue]({{< relref "priority_queue.md" >}})


## Flashcards {#flashcards}


### Definition (Computer science) {#definition--computer-science}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.35 | 8   | 476.34   | 2024-11-01T08:56:50Z |
| front    | 2.20 | 8   | 351.95   | 2024-05-17T14:29:48Z |

[Queue]({{< relref "queue.md" >}})


#### Back {#back}

An [Abstract data type]({{< relref "abstract_data_type.md" >}}) which defines a collection of entities, maintained in sequence.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Queue (Abstract Data Type)” 2022</a>)


### A [Queue]({{< relref "queue.md" >}}) follows {{[First in, first out]({{< relref "first_in_first_out.md" >}})}{ordering}@1} {#a-queue--queue-dot-md--follows-first-in-first-out--first-in-first-out-dot-md--ordering-1}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 1        | 2.95 | 7   | 368.17   | 2024-03-13T09:29:52Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Queue (Abstract Data Type)” 2022</a>)


### Compare/Contrast {#compare-contrast}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.80 | 7   | 395.72   | 2024-07-14T18:02:12Z |

[Queue]({{< relref "queue.md" >}}) and [Stack]({{< relref "stack.md" >}})


#### Back {#back}

-   [Queue]({{< relref "queue.md" >}}): [First in, first out]({{< relref "first_in_first_out.md" >}})
-   [Stack]({{< relref "stack.md" >}}): [First in, last out]({{< relref "first_in_last_out.md" >}})


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Queue (Abstract Data Type)” 2022</a>)


### A {{[Queue]({{< relref "queue.md" >}})}@0} is the opposite of a {{[Stack]({{< relref "stack.md" >}})}@1} {#a-queue--queue-dot-md--0-is-the-opposite-of-a-stack--stack-dot-md--1}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 1        | 2.80 | 7   | 301.91   | 2023-12-16T01:07:54Z |
| 0        | 2.50 | 7   | 269.40   | 2023-10-22T02:33:35Z |


#### Extra {#extra}

A [Queue]({{< relref "queue.md" >}}) is [First in, first out]({{< relref "first_in_first_out.md" >}}) while a [Stack]({{< relref "stack.md" >}}) is [First in, last out]({{< relref "first_in_last_out.md" >}}).


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Queue (Abstract Data Type)” 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.95 | 7   | 360.55   | 2024-03-16T06:43:46Z |
| back     | 2.80 | 7   | 260.63   | 2023-10-16T07:38:20Z |

Common API of a [Queue]({{< relref "queue.md" >}})


#### Back {#back}

-   `enqueue`
-   `dequeue`
-   `peek`


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Queue (Abstract Data Type)” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Queue (Abstract Data Type).” 2022. <i>Wikipedia</i>, May. <a href="https://en.wikipedia.org/w/index.php?title=Queue_(abstract_data_type)&oldid=1090013688">https://en.wikipedia.org/w/index.php?title=Queue_(abstract_data_type)&#38;oldid=1090013688</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Python library: queue]({{< relref "python_library_queue.md" >}})
-   [Breadth-first search]({{< relref "breadth_first_search.md" >}})
-   [Priority queue]({{< relref "priority_queue.md" >}})
