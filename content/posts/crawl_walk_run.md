+++
title = "Crawl, walk, run"
author = ["Cash Prokop-Weaver"]
date = 2023-06-06T08:22:00-07:00
lastmod = 2023-07-25T08:58:17-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "3f33e96a-915a-4561-be68-4cef17b84792"
+++

Crawl, walk, run emphasizes iterative development as way to progressively build a solution as opposed to building it all-at-once. The phrase originates, as far as I can tell, from child development stages though some directly cite (<a href="#citeproc_bib_item_1">King n.d.</a>).


## Example(s) {#example--s}


### Product metrics {#product-metrics}

Take a hypothetical service built by your team over a year ago. The metrics for this product (latency, resource requirements, etc) were manually calculated and put into some document when the product released. Your team hasn't updated these metrics in over a year.

It's clear that some automated system or dashboard would be better as it would stay up to date over time without manual involvement. However, setting such a system up has up-front and ongoing time/resource costs.

An iterative development approach could start with re-computing the metrics manually (walk). This is likely to take much less time than building an automated monitoring solution and can serve as data for future decisions:

-   Have the metrics changed since they were last run? Did we expect them to change? If we expect them to change again in the future, at what cadence?
-   How much benefit do we gain by having these metrics up-to-date? Do we get all the benefits by updating them once a quarter? Do we need to have them updated in real time?

Answering these follow-up questions ensures you and your team don't burn time solving a problem that doesn't need solving; or one that has a simple solution. Perhaps it's enough to create a recurring reminder to refresh the metrics every quarter. A shared bash script could be all the "automation" necessary in that it simplifies the manual update into a [One-click]({{< relref "one_click.md" >}}) process.


## Flashcards {#flashcards}


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.65 | 5   | 43.09    | 2023-08-16T03:56:00Z |
| back     | 2.35 | 5   | 31.61    | 2023-08-05T10:07:07Z |

[Crawl, walk, run]({{< relref "crawl_walk_run.md" >}})


#### Back {#back}

A phrase for taking an iterative or progressive approach to building something.


#### Source {#source}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>King, Martin Luther. n.d. “If You Can’t Fly Then Run.” Accessed June 6, 2023. <a href="https://www.goodreads.com/quotes/26963-if-you-can-t-fly-then-run-if-you-can-t-run">https://www.goodreads.com/quotes/26963-if-you-can-t-fly-then-run-if-you-can-t-run</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Will Larson | 'Drawing Your Three Maps' Exercise]({{< relref "will_larson_drawing_your_three_maps_exercise.md" >}})
-   [Perfect is the enemy of good]({{< relref "perfect_is_the_enemy_of_good.md" >}})
