+++
title = "Latency"
author = ["Cash Prokop-Weaver"]
date = 2023-03-17T08:41:00-07:00
lastmod = 2023-12-05T20:29:17-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "53999225-665e-4d16-9a0d-60c49293ccab"
+++

> The time from the source sending a packet to the destination receiving it.
>
> [...]
>
> (NO_ITEM_DATA:grigorikNetworking101PrimerLatencyBandwidthHighPerformanceBrowserNetworking)


## Components {#components}

> Latency is the time it takes for a message, or a packet, to travel from its point of origin to the point of destination. That is a simple and useful definition, but it often hides a lot of useful information — every system contains multiple sources, or components, contributing to the overall time it takes for a message to be delivered, and it is important to understand what these components are and what dictates their performance.
>
> (NO_ITEM_DATA:grigorikNetworking101PrimerLatencyBandwidthHighPerformanceBrowserNetworking)


### Propagation delay {#propagation-delay}

> Amount of time required for a message to travel from the sender to receiver, which is a function of distance over speed with which the signal propagates.
>
> (NO_ITEM_DATA:grigorikNetworking101PrimerLatencyBandwidthHighPerformanceBrowserNetworking)


### Transmission delay {#transmission-delay}

> Amount of time required to push all the packet's bits into the link, which is a function of the packet's length and data rate of the link.
>
> (NO_ITEM_DATA:grigorikNetworking101PrimerLatencyBandwidthHighPerformanceBrowserNetworking)


### Processing delay {#processing-delay}

> Amount of time required to process the packet header, check for bit-level errors, and determine the packet's destination.
>
> (NO_ITEM_DATA:grigorikNetworking101PrimerLatencyBandwidthHighPerformanceBrowserNetworking)


### Queuing delay {#queuing-delay}

> Amount of time the packet is waiting in the queue until it can be processed.
>
> (NO_ITEM_DATA:grigorikNetworking101PrimerLatencyBandwidthHighPerformanceBrowserNetworking)


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry">NO_ITEM_DATA:grigorikNetworking101PrimerLatencyBandwidthHighPerformanceBrowserNetworking</div>
</div>


## Backlinks {#backlinks}

-   [Ilya Grigorik | High-Performance Browser Networking]({{< relref "ilya_grigorik_high_performance_browser_networking.md" >}})
