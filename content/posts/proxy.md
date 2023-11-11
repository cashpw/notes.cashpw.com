+++
title = "Proxy"
author = ["Cash Prokop-Weaver"]
date = 2023-03-22T08:18:00-07:00
lastmod = 2023-11-10T11:11:29-08:00
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
> (“What Is a Reverse Proxy?” n.d.)


## Reverse proxy {#reverse-proxy}

> A reverse proxy is a server that sits in front of web servers and forwards client (e.g. web browser) requests to those web servers. Reverse proxies are typically implemented to help increase security, performance, and reliability.
>
> [...]
>
> {{< figure src="/ox-hugo/2023-03-22_08-26-50_reverse_proxy_flow.png" >}}
>
> (“What Is a Reverse Proxy?” n.d.)
