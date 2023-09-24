+++
title = "Hash table"
author = ["Cash Prokop-Weaver"]
date = 2022-06-29T16:06:00-07:00
lastmod = 2023-09-24T10:15:27-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "b8f1337e-8231-4ace-b003-bb988b4c39ee"
+++

> In computing, a hash table, also known as hash map or dictionary, is a [Data structure]({{< relref "data_structures.md" >}}) that implements a [[Associative array]({{< relref "associative_array.md" >}})], a structure that can map keys to values. A hash table uses a [Hash function]({{< relref "hash_function.md" >}}) to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found. During lookup, the key is hashed and the resulting hash indicates where the corresponding value is stored.
>
> Ideally, the hash function will assign each key to a unique bucket, but most hash table designs employ an imperfect hash function, which might cause hash collisions where the hash function generates the same index for more than one key. Such collisions are typically accommodated in some way.
>
> (<a href="#citeproc_bib_item_1">“Hash Table” 2022</a>)


## Collision resolution {#collision-resolution}

> A search algorithm that uses hashing consists of two parts. The first part is computing a hash function which transforms the search key into an array index. The ideal case is such that no two search keys hashes to the same array index. However, this is not always the case and is impossible to guarantee for unseen given data. Hence the second part of the algorithm is collision resolution. The two common methods for collision resolution are [Separate chaining](#separate-chaining) and [Open addressing](#open-addressing).
>
> (<a href="#citeproc_bib_item_1">“Hash Table” 2022</a>)


### Separate chaining {#separate-chaining}

> [...] the process involves building a linked list with key–value pair for each search array index. The collided items are chained together through a single linked list, which can be traversed to access the item with a unique search key.
>
> (<a href="#citeproc_bib_item_1">“Hash Table” 2022</a>)

{{< figure src="/ox-hugo/2022-10-01_14-23-28_900px-Hash_table_5_0_1_1_1_1_1_LL.svg.png" >}}


### Open addressing {#open-addressing}

> [...] is another collision resolution technique in which every entry records are stored in the bucket array itself, and the hash resolution is performed through probing. When a new entry has to be inserted, the buckets are examined, starting with the hashed-to slot and proceeding in some probe sequence, until an unoccupied slot is found. When searching for an entry, the buckets are scanned in the same sequence, until either the target record is found, or an unused array slot is found, which indicates an unsuccessful search.
>
> (<a href="#citeproc_bib_item_1">“Hash Table” 2022</a>)

{{< figure src="/ox-hugo/2022-10-01_14-24-28_760px-Hash_table_5_0_1_1_1_1_0_SP.svg.png" >}}

> Well-known probe sequences include:
>
> 1.  Linear probing, in which the interval between probes is fixed (usually 1).
> 2.  Quadratic probing, in which the interval between probes is increased by adding the successive outputs of a quadratic polynomial to the value given by the original hash computation.
> 3.  Double hashing, in which the interval between probes is computed by a secondary hash function.
>
> (<a href="#citeproc_bib_item_1">“Hash Table” 2022</a>)


## Flashcards {#flashcards}


### Definition (Computer science) {#definition--computer-science}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.95 | 8   | 290.62   | 2023-12-04T18:26:24Z |
| front    | 2.65 | 8   | 629.58   | 2025-05-26T06:36:16Z |

[Hash table]({{< relref "hash_table.md" >}})


#### Back {#back}

An implementation of an [Associative array]({{< relref "associative_array.md" >}}) which uses a function to relate the `key` to a specific location in an array of buckets or slots.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Hash Table” 2022</a>)


### A {{hash collision}@0} is when {{two pieces of data in a [Hash table]({{< relref "hash_table.md" >}}) share the same hash value}@1}. {#a-hash-collision-0-is-when-two-pieces-of-data-in-a-hash-table--hash-table-dot-md--share-the-same-hash-value-1-dot}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 1        | 2.80 | 7   | 253.36   | 2023-09-26T00:58:17Z |
| 0        | 2.80 | 8   | 479.43   | 2024-11-14T14:15:13Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Hash Table” 2022</a>)


### {{[Hash tables]({{< relref "hash_table.md" >}})}@1} are, on average, {{more}@0} efficient than search trees. {#hash-tables--hash-table-dot-md--1-are-on-average-more-0-efficient-than-search-trees-dot}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 1        | 2.50 | 6   | 115.91   | 2023-12-19T12:59:23Z |
| 0        | 3.25 | 7   | 609.92   | 2025-03-13T11:02:13Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Hash Table” 2022</a>)


### A {{[Hash map]({{< relref "hash_table.md" >}})}@0} is composed of {{a [Hash function]({{< relref "hash_function.md" >}}) and a [Collision resolution](#collision-resolution) strategy}@1}. {#a-hash-map--hash-table-dot-md--0-is-composed-of-a-hash-function--hash-function-dot-md--and-a-collision-resolution--org4952312--strategy-1-dot}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 7   | 369.55   | 2024-06-10T03:49:08Z |
| 1        | 2.05 | 8   | 277.66   | 2024-05-14T06:22:24Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Hash Table” 2022</a>)


### Definition ([Hash table]({{< relref "hash_table.md" >}})) {#definition--hash-table-hash-table-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 3.10 | 7   | 440.57   | 2024-08-30T03:48:02Z |
| back     | 1.90 | 4   | 10.41    | 2023-09-22T22:30:24Z |

[Separate chaining](#separate-chaining)


#### Back {#back}

A collision resolution algorithm in which each bucket in the [Hash table]({{< relref "hash_table.md" >}}) is a linked list. The list is extended upon every collision and is traversed in order to find the target key.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Hash Table” 2022</a>)


### Definition ([Hash table]({{< relref "hash_table.md" >}})) {#definition--hash-table-hash-table-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 3.10 | 7   | 425.15   | 2024-08-16T07:41:38Z |
| back     | 2.20 | 7   | 181.05   | 2024-02-05T16:27:08Z |

[Open addressing](#open-addressing)


#### Back {#back}

A collision resolution algorithm which uses a probing sequence (i.e. linear, quadratic, another [Hash function]({{< relref "hash_function.md" >}})) to move along the array in search of the target key.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Hash Table” 2022</a>)


### Compare/Contrast ([Hash table]({{< relref "hash_table.md" >}})) {#compare-contrast--hash-table-hash-table-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 3.10 | 7   | 447.40   | 2024-09-20T11:10:57Z |

[Separate chaining](#separate-chaining) and [Open addressing](#open-addressing)


#### Back {#back}

-   [Open addressing](#open-addressing) stores collision values within the original array while [Separate chaining](#separate-chaining) stores collision values in a linked list.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Hash Table” 2022</a>)


### Common [Open addressing](#open-addressing) probing schedules include {{linear, quadratic, and double hashing}@0}. {#common-open-addressing--org3f7c193--probing-schedules-include-linear-quadratic-and-double-hashing-0-dot}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.05 | 6   | 56.56    | 2023-10-23T03:10:05Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Hash Table” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Hash Table.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Hash_table&oldid=1095560468">https://en.wikipedia.org/w/index.php?title=Hash_table&#38;oldid=1095560468</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Hash function]({{< relref "hash_function.md" >}})
-   [2sum]({{< relref "2sum.md" >}})
-   [Associative array]({{< relref "associative_array.md" >}})
-   [Linked hash map]({{< relref "linked_hash_map.md" >}})
