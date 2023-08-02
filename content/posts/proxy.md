+++
title = "Proxy"
author = ["Cash Prokop-Weaver"]
date = 2023-03-22T08:18:00-07:00
lastmod = 2023-08-02T12:03:53-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "8ec2ef2a-42f0-42eb-89a0-3f3ea7d7aafa"
+++

> A forward proxy, often called a proxy, proxy server, or web proxy, is a server that sits in front of a group of client machines. When those computers make requests to sites and services on the Internet, the proxy server intercepts those requests and then communicates with web servers on behalf of those clients, like a middleman.
>
> [...]
>
> {{< figure src="/ox-hugo/2023-03-22_08-20-09_forward_proxy_flow.png" >}}
>
> In a standard Internet communication, computer A would reach out directly to computer C, with the client sending requests to the origin server and the origin server responding to the client. When a forward proxy is in place, A will instead send requests to B, which will then forward the request to C. C will then send a response to B, which will forward the response back to A.
>
> (<a href="#citeproc_bib_item_1">“What Is a Reverse Proxy?” n.d.</a>)


## Reverse proxy {#reverse-proxy}

> A reverse proxy is a server that sits in front of web servers and forwards client (e.g. web browser) requests to those web servers. Reverse proxies are typically implemented to help increase security, performance, and reliability.
>
> [...]
>
> {{< figure src="/ox-hugo/2023-03-22_08-26-50_reverse_proxy_flow.png" >}}
>
> (<a href="#citeproc_bib_item_1">“What Is a Reverse Proxy?” n.d.</a>)


## Flashcards {#flashcards}


### AKA {#aka}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.95 | 6   | 125.01   | 2023-10-13T16:12:47Z |
| 1        | 2.50 | 6   | 90.97    | 2023-10-09T15:08:53Z |

-   {{[Proxy]({{< relref "proxy.md" >}})}@0}
-   {{[Forward proxy]({{< relref "proxy.md" >}})}@1}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“What Is a Reverse Proxy?” n.d.</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.35 | 6   | 68.15    | 2023-08-07T19:12:08Z |
| back     | 2.50 | 6   | 81.58    | 2023-09-12T15:48:55Z |

[Forward proxy]({{< relref "proxy.md" >}})


#### Back {#back}

A server which acts as a middleman between client machines and origin servers.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“What Is a Reverse Proxy?” n.d.</a>)


### Compare and contrast {#compare-and-contrast}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 6   | 98.43    | 2023-10-03T02:45:48Z |

[Forward proxy]({{< relref "proxy.md" >}}) and [Reverse proxy](#reverse-proxy)


#### Back {#back}

-   [Forward proxy]({{< relref "proxy.md" >}}): Sits in front of a set of **client machines** and intercepts, and forwards, **outgoing** internet requests
-   [Reverse proxy](#reverse-proxy): Sits in front of a set of **origin severs** and intercepts, and forwards, **incoming** internet requests


#### Source {#source}

(<a href="#citeproc_bib_item_1">“What Is a Reverse Proxy?” n.d.</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“What Is a Reverse Proxy?” n.d. <i>Cloudflare</i>. Accessed March 22, 2023. <a href="https://www.cloudflare.com/learning/cdn/glossary/reverse-proxy/">https://www.cloudflare.com/learning/cdn/glossary/reverse-proxy/</a>.</div>
</div>
