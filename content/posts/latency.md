+++
title = "Latency"
author = ["Cash Prokop-Weaver"]
date = 2023-03-17T08:41:00-07:00
lastmod = 2023-09-24T10:24:45-07:00
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
| front    | 2.20 | 7   | 171.24   | 2024-02-08T19:12:22Z |
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


### Definition ([Latency]({{< relref "latency.md" >}})) {#definition--latency-latency-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.20 | 6   | 65.08    | 2023-10-14T02:33:40Z |
| back     | 2.05 | 6   | 55.95    | 2023-11-09T13:55:19Z |

Propagation delay


#### Back {#back}

Amount of time required for a message to travel from the sender to receiver, which is a function of distance over speed with which the signal travels.


#### Source {#source}

(<a href="#citeproc_bib_item_1">Grigorik n.d.</a>)


### Definition ([Latency]({{< relref "latency.md" >}})) {#definition--latency-latency-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.05 | 6   | 50.23    | 2023-10-15T20:20:12Z |
| back     | 2.20 | 1   | 1.00     | 2023-09-21T00:00:09Z |

Transmission delay


#### Back {#back}

Amount of time required to push all the packet's bits into the link, which is a function of the packet's length and data rate of the link.


#### Source {#source}

(<a href="#citeproc_bib_item_1">Grigorik n.d.</a>)


### Definition ([Latency]({{< relref "latency.md" >}})) {#definition--latency-latency-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 6   | 87.73    | 2023-09-22T09:51:40Z |
| back     | 2.35 | 6   | 75.86    | 2023-11-11T10:18:30Z |

Processing delay


#### Back {#back}

Amount of time required to:

-   read the packet header
-   check for bit-level errors
-   determine the packet's destination


#### Source {#source}

(<a href="#citeproc_bib_item_1">Grigorik n.d.</a>)


### Definition ([Latency]({{< relref "latency.md" >}})) {#definition--latency-latency-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.35 | 7   | 226.55   | 2024-04-26T01:48:32Z |
| back     | 2.50 | 6   | 94.88    | 2023-11-03T22:36:24Z |

Queuing delay


#### Back {#back}

Amount of time the packet is waiting in the queue until it can be processed.


#### Source {#source}

(<a href="#citeproc_bib_item_1">Grigorik n.d.</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Grigorik, Ilya. n.d. “Networking 101: Primer on Latency and Bandwidth - High Performance Browser Networking.” High Performance Browser Networking. Accessed March 17, 2023. <a href="https://hpbn.co/primer-on-latency-and-bandwidth/">https://hpbn.co/primer-on-latency-and-bandwidth/</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Ilya Grigorik | High-Performance Browser Networking]({{< relref "ilya_grigorik_high_performance_browser_networking.md" >}})
