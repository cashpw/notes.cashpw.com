+++
title = "Latency"
author = ["Cash Prokop-Weaver"]
date = 2023-03-17T08:41:00-07:00
lastmod = 2023-07-25T10:57:51-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "53999225-665e-4d16-9a0d-60c49293ccab"
+++

> The time from the source sending a packet to the destination receiving it.
>
> [...]
>
> (<a href="#citeproc_bib_item_1">Grigorik n.d.</a>)


## Components {#components}

> Latency is the time it takes for a message, or a packet, to travel from its point of origin to the point of destination. That is a simple and useful definition, but it often hides a lot of useful information — every system contains multiple sources, or components, contributing to the overall time it takes for a message to be delivered, and it is important to understand what these components are and what dictates their performance.
>
> (<a href="#citeproc_bib_item_1">Grigorik n.d.</a>)


### Propagation delay {#propagation-delay}

> Amount of time required for a message to travel from the sender to receiver, which is a function of distance over speed with which the signal propagates.
>
> (<a href="#citeproc_bib_item_1">Grigorik n.d.</a>)


### Transmission delay {#transmission-delay}

> Amount of time required to push all the packet's bits into the link, which is a function of the packet's length and data rate of the link.
>
> (<a href="#citeproc_bib_item_1">Grigorik n.d.</a>)


### Processing delay {#processing-delay}

> Amount of time required to process the packet header, check for bit-level errors, and determine the packet's destination.
>
> (<a href="#citeproc_bib_item_1">Grigorik n.d.</a>)


### Queuing delay {#queuing-delay}

> Amount of time the packet is waiting in the queue until it can be processed.
>
> (<a href="#citeproc_bib_item_1">Grigorik n.d.</a>)


## Flashcards {#flashcards}


### Definition (Networking) {#definition--networking}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.35 | 6   | 78.23    | 2023-08-21T09:53:30Z |
| back     | 2.35 | 6   | 81.48    | 2023-09-22T12:52:39Z |

[Latency]({{< relref "latency.md" >}})


#### Back {#back}

The time from the source sending a packet to the destination receiving it.


#### Source {#source}

(<a href="#citeproc_bib_item_1">Grigorik n.d.</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 0   | 0.00     | 2023-05-03T15:42:52Z |
| back     | 2.5  | -1  | 0        | 2023-03-17T15:51:50Z |

Components of [Latency]({{< relref "latency.md" >}})


#### Back {#back}

-   Propagation delay
-   Transmission delay
-   Processing delay
-   Queuing delay


#### Source {#source}

(<a href="#citeproc_bib_item_1">Grigorik n.d.</a>)


### Definition {#definition}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.20 | 5   | 30.13    | 2023-08-09T18:39:23Z |
| back     | 2.20 | 4   | 12.90    | 2023-07-25T10:25:57Z |

([Latency]({{< relref "latency.md" >}})) Propagation delay


#### Back {#back}

Amount of time required for a message to travel from the sender to receiver, which is a function of distance over speed with which the signal travels.


#### Source {#source}

(<a href="#citeproc_bib_item_1">Grigorik n.d.</a>)


### Definition {#definition}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.20 | 4   | 12.90    | 2023-07-28T11:49:24Z |
| back     | 2.50 | 1   | 1.00     | 2023-06-03T01:23:42Z |

([Latency]({{< relref "latency.md" >}})) Transmission delay


#### Back {#back}

Amount of time required to push all the packet's bits into the link, which is a function of the packet's length and data rate of the link.


#### Source {#source}

(<a href="#citeproc_bib_item_1">Grigorik n.d.</a>)


### Definition {#definition}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 6   | 87.73    | 2023-09-22T09:51:40Z |
| back     | 2.35 | 5   | 35.70    | 2023-08-11T07:20:49Z |

([Latency]({{< relref "latency.md" >}})) Processing delay


#### Back {#back}

Amount of time required to:

-   read the packet header
-   check for bit-level errors
-   determine the packet's destination


#### Source {#source}

(<a href="#citeproc_bib_item_1">Grigorik n.d.</a>)


### Definition {#definition}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.35 | 6   | 90.37    | 2023-09-11T08:55:13Z |
| back     | 2.50 | 5   | 39.86    | 2023-07-31T12:22:03Z |

([Latency]({{< relref "latency.md" >}})) Queuing delay


#### Back {#back}

Amount of time the packet is waiting in the queue until it can be processed.


#### Source {#source}

(<a href="#citeproc_bib_item_1">Grigorik n.d.</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Grigorik, Ilya. n.d. “Networking 101: Primer on Latency and Bandwidth - High Performance Browser Networking.” <i>High Performance Browser Networking</i>. Accessed March 17, 2023. <a href="https://hpbn.co/primer-on-latency-and-bandwidth/">https://hpbn.co/primer-on-latency-and-bandwidth/</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Ilya Grigorik | High-Performance Browser Networking]({{< relref "ilya_grigorik_high_performance_browser_networking.md" >}})
