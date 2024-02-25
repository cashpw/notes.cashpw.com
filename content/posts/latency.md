+++
title = "Latency"
author = ["Cash Prokop-Weaver"]
date = 2023-03-17T08:41:00-07:00
lastmod = 2024-02-24T17:50:23-08:00
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


## Bibliography {#bibliography}

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Grigorik, Ilya. n.d. “Networking 101: Primer on Latency and Bandwidth - High Performance Browser Networking.” <i>High Performance Browser Networking</i>. Accessed March 17, 2023. <a href="https://hpbn.co/primer-on-latency-and-bandwidth/">https://hpbn.co/primer-on-latency-and-bandwidth/</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Ilya Grigorik | High-Performance Browser Networking]({{< relref "ilya_grigorik_high_performance_browser_networking.md" >}})
