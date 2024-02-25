+++
title = "Hash table"
author = ["Cash Prokop-Weaver"]
date = 2022-06-29T16:06:00-07:00
lastmod = 2024-02-24T14:21:48-08:00
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


## Bibliography {#bibliography}

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Hash Table.” 2022. <i>Wikipedia</i>, June. <a href="https://en.wikipedia.org/w/index.php?title=Hash_table&oldid=1095560468">https://en.wikipedia.org/w/index.php?title=Hash_table&#38;oldid=1095560468</a>.</div>
</div>


## Backlinks {#backlinks}

-   [2sum]({{< relref "2sum.md" >}})
-   [Associative array]({{< relref "associative_array.md" >}})
-   [Hash function]({{< relref "hash_function.md" >}})
-   [Linked hash map]({{< relref "linked_hash_map.md" >}})
