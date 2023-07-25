+++
title = "Least frequently used"
author = ["Cash Prokop-Weaver"]
date = 2023-03-22T09:25:00-07:00
lastmod = 2023-07-25T10:59:02-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "2c7820cc-7523-447e-924b-3f9340c3c29b"
+++

A [Cache replacement policy]({{< relref "cache_replacement_policy.md" >}}) which:

> Counts how often an item is needed. Those that are used least often are discarded first. This works very similar to LRU [[LRU]({{< relref "least_recently_used.md" >}})] except that instead of storing the value of how recently a block was accessed, we store the value of how many times it was accessed. So of course while running an access sequence we will replace a block which was used fewest times from our cache. E.g., if A was used (accessed) 5 times and B was used 3 times and others C and D were used 10 times each, we will replace B.
>
> (<a href="#citeproc_bib_item_1">“Cache Replacement Policies” 2023</a>)


## Problems {#problems}

> While the LFU method may seem like an intuitive approach to memory management it is not without faults. Consider an item in memory which is referenced repeatedly for a short period of time and is not accessed again for an extended period of time. Due to how rapidly it was just accessed its counter has increased drastically even though it will not be used again for a decent amount of time. [...]
>
> Moreover, new items that just entered the cache are subject to being removed very soon again, because they start with a low counter, even though they might be used very frequently after that. Due to major issues like these, an explicit LFU system is fairly uncommon; instead, there are hybrids that utilize LFU concepts.
>
> (<a href="#citeproc_bib_item_2">“Least Frequently Used” 2022</a>)


## Flashcards {#flashcards}


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 6   | 75.55    | 2023-08-27T13:29:07Z |
| back     | 2.35 | 6   | 75.95    | 2023-09-24T14:33:25Z |

[Least frequently used]({{< relref "least_frequently_used.md" >}})


#### Back {#back}

A [Cache replacement policy]({{< relref "cache_replacement_policy.md" >}}) which discards items in the [Cache]({{< relref "cache.md" >}}) in ascending order of how many times they've been accessed.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Cache Replacement Policies” 2023</a>)


### AKA {#aka}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 6   | 100.62   | 2023-09-20T08:02:51Z |
| 1        | 2.80 | 6   | 102.02   | 2023-10-21T13:33:18Z |

-   {{[Least frequently used]({{< relref "least_frequently_used.md" >}})}@0}
-   {{[LFU]({{< relref "least_frequently_used.md" >}})}@1}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Cache Replacement Policies” 2023</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 6   | 91.00    | 2023-09-26T15:12:14Z |
| back     | 2.65 | 6   | 99.32    | 2023-10-19T20:38:48Z |

Problems with [Least frequently used]({{< relref "least_frequently_used.md" >}})


#### Back {#back}

-   Items may be accessed many times over a short period of time, then not again for a long time. These items may not fall out of the cache as soon as we'd like.
-   New items entering the cache, even though they may be accessed frequently, are subject to removal as they initially have a low access count


#### Source {#source}

(<a href="#citeproc_bib_item_2">“Least Frequently Used” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Cache Replacement Policies.” 2023. <i>Wikipedia</i>, February. <a href="https://en.wikipedia.org/w/index.php?title=Cache_replacement_policies&oldid=1141486190">https://en.wikipedia.org/w/index.php?title=Cache_replacement_policies&#38;oldid=1141486190</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>“Least Frequently Used.” 2022. <i>Wikipedia</i>, November. <a href="https://en.wikipedia.org/w/index.php?title=Least_frequently_used&oldid=1122344427">https://en.wikipedia.org/w/index.php?title=Least_frequently_used&#38;oldid=1122344427</a>.</div>
</div>
