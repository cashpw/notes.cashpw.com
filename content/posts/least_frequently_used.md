+++
title = "Least frequently used"
author = ["Cash Prokop-Weaver"]
date = 2023-03-22T09:25:00-07:00
lastmod = 2023-11-10T11:01:30-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "2c7820cc-7523-447e-924b-3f9340c3c29b"
+++

A [Cache replacement policy]({{< relref "cache_replacement_policy.md" >}}) which:

> Counts how often an item is needed. Those that are used least often are discarded first. This works very similar to LRU [[LRU]({{< relref "least_recently_used.md" >}})] except that instead of storing the value of how recently a block was accessed, we store the value of how many times it was accessed. So of course while running an access sequence we will replace a block which was used fewest times from our cache. E.g., if A was used (accessed) 5 times and B was used 3 times and others C and D were used 10 times each, we will replace B.
>
> (“Cache Replacement Policies” 2023)


## Problems {#problems}

> While the LFU method may seem like an intuitive approach to memory management it is not without faults. Consider an item in memory which is referenced repeatedly for a short period of time and is not accessed again for an extended period of time. Due to how rapidly it was just accessed its counter has increased drastically even though it will not be used again for a decent amount of time. [...]
>
> Moreover, new items that just entered the cache are subject to being removed very soon again, because they start with a low counter, even though they might be used very frequently after that. Due to major issues like these, an explicit LFU system is fairly uncommon; instead, there are hybrids that utilize LFU concepts.
>
> (“Least Frequently Used” 2022)
