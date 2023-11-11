+++
title = "Daniel Delling, Andrew V. Goldberg, Thomas Pajor, Renato F. Werneck | Customizable Route Planning"
author = ["Cash Weaver"]
date = 2023-06-21T09:44:00-07:00
lastmod = 2023-11-10T10:38:09-08:00
tags = ["reference", "reference"]
categories = ["reference"]
draft = false
slug = "db28ce80-0ee2-48eb-abc9-8cc98e0c3936"
+++

[Daniel Delling]({{< relref "daniel_delling.md" >}}), [Andrew Goldberg]({{< relref "andrew_goldberg.md" >}}), [Thomas Pajor]({{< relref "thomas_pajor.md" >}}), [Renato Werneck]({{< relref "renato_werneck.md" >}}), (Delling et al. 2011)


## Summary {#summary}

See [Customizable route planning]({{< relref "customizable_route_planning.md" >}})


## Thoughts {#thoughts}


## Notes {#notes}

> Abstract. We present an algorithm to compute shortest paths on continental road networks with arbitrary metrics (cost functions). The approach supports turn costs, enables real-time queries, and can incorporate a new metric in a few seconds—fast enough to support real-time traffic updates and personalized optimization functions. The amount of metric-specific data is a small fraction of the graph itself, which allows us to maintain several metrics in memory simultaneously.


### Introduction {#introduction}

> Most previous research focused on the most natural metric, driving times. Real-world systems, however, often support other natural metrics as well, such as shortest distance, walking, biking, avoid U-turns, avoid/prefer freeways, or avoid left turns.

-   [Topology (Road networks)]({{< relref "topology_road_networks.md" >}})
-   [Metric (Customizable route planning)]({{< relref "metric_customizable_route_planning.md" >}})

> The first [stage], _metric-independent preprocessing_, may be relatively slow, since it is run infrequently. It takes only the graph topology as input, and may produce a fair amount of auxiliary data (comparable to the input size). The second stage, _metric customization_, is run once for each metric, and must be much quicker (a few seconds) and produce little data—a small fraction of the original graph. Finally, the _query stage_ uses the outputs of the first two stages and must be fast enough for real-time applications.


### Previous techniques {#previous-techniques}


### Our approach {#our-approach}


#### Basic algorithm {#basic-algorithm}

See [Customizable route planning]({{< relref "customizable_route_planning.md" >}}) for write-up.


#### Sparsification {#sparsification}

See [Customizable route planning]({{< relref "customizable_route_planning.md" >}}) for write-up.


### Turns {#turns}


### Conclusion {#conclusion}
