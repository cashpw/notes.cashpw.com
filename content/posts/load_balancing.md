+++
title = "Load balancing"
author = ["Cash Prokop-Weaver"]
date = 2023-03-22T08:31:00-07:00
lastmod = 2023-12-23T14:09:55-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "44890929-fa24-4a69-b261-04107a005903"
+++

> In computing, load balancing is the process of distributing a set of tasks over a set of resources (computing units), with the aim of making their overall processing more efficient. Load balancing can optimize the response time and avoid unevenly overloading some compute nodes while other compute nodes are left idle.
>
> (<a href="#citeproc_bib_item_1">“Load Balancing (Computing)” 2023</a>)


## Persistence ([Load balancing]({{< relref "load_balancing.md" >}})) {#persistence--load-balancing-load-balancing-dot-md}

> An important issue when operating a load-balanced service is how to handle information that must be kept across the multiple requests in a user's session. If this information is stored locally on one backend server, then subsequent requests going to different backend servers would not be able to find it. This might be cached information that can be recomputed, in which case load-balancing a request to a different backend server just introduces a performance issue.
>
> Ideally, the cluster of servers behind the load balancer should not be session-aware, so that if a client connects to any backend server at any time the user experience is unaffected. This is usually achieved with a shared database or an in-memory session database like Memcached.
>
> One basic solution to the session data issue is to send all requests in a user session consistently to the same backend server. This is known as "persistence" or "stickiness". A significant downside to this technique is its lack of automatic failover: if a backend server goes down, its per-session information becomes inaccessible, and any sessions depending on it are lost. The same problem is usually relevant to central database servers; even if web servers are "stateless" and not "sticky", the central database is (see below).
>
> (<a href="#citeproc_bib_item_1">“Load Balancing (Computing)” 2023</a>)


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Load Balancing (Computing).” 2023. <i>Wikipedia</i>, March. <a href="https://en.wikipedia.org/w/index.php?title=Load_balancing_(computing)&oldid=1143711216">https://en.wikipedia.org/w/index.php?title=Load_balancing_(computing)&#38;oldid=1143711216</a>.</div>
</div>



## Backlinks {#backlinks}

-   [Global service load balancer]({{< relref "global_service_load_balancer.md" >}})
