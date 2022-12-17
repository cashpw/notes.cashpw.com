+++
title = "HTTP Cookies"
author = ["Cash Prokop-Weaver"]
date = 2022-07-20T09:52:00-07:00
lastmod = 2022-12-17T13:47:48-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "023c4857-9ecc-48a8-81b6-4738bab59a4c"
+++

> An HTTP cookie (web cookie, browser cookie) is a small piece of data that a server sends to a user's web browser. The browser may store the cookie and send it back to the same server with later requests. Typically, an HTTP cookie is used to tell if two requests come from the same browser—keeping a user logged in, for example. It remembers stateful information for the stateless HTTP protocol.
>
> (<a href="#citeproc_bib_item_1">MDN n.d.</a>)


## Types {#types}

-   [First-party cookies]({{< relref "first_party_cookies.md" >}})
-   [Third-party cookies]({{< relref "third_party_cookies.md" >}})


## Flashcards {#flashcards}


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.05 | 0   | 0.00     | 2022-12-16T17:43:01Z |
| back     | 2.35 | 6   | 87.80    | 2023-01-18T10:21:34Z |

Purposes of [HTTP Cookies]({{< relref "http_cookies.md" >}})


#### Back {#back}

1.  Session management
2.  Personalization
3.  Tracking


#### Source {#source}

(<a href="#citeproc_bib_item_1">MDN n.d.</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.80 | 6   | 86.52    | 2023-01-29T04:53:24Z |
| back     | 2.80 | 6   | 72.97    | 2023-01-17T16:11:30Z |

[HTTP Cookies]({{< relref "http_cookies.md" >}})


#### Back {#back}

A small piece of data sent by a server to a user's web browser. The browser may store and include it in subsequent requests to the server.

Servers use them for:

1.  Session management
2.  Personalization
3.  Tracking


#### Source {#source}

(<a href="#citeproc_bib_item_1">MDN n.d.</a>)


### The web browser includes [HTTP Cookies]({{< relref "http_cookies.md" >}}) in requests which match {{the `Path` and `Domain` attributes}@0}. {#the-web-browser-includes-http-cookies--http-cookies-dot-md--in-requests-which-match-the-path-and-domain-attributes-0-dot}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.35 | 5   | 29.92    | 2023-01-04T16:05:03Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">MDN n.d.</a>)


### The `Domain` attribute of an [HTTP Cookies]({{< relref "http_cookies.md" >}}) defaults to {{the host which sent the cookie, excluding subdomains}@0}. {#the-domain-attribute-of-an-http-cookies--http-cookies-dot-md--defaults-to-the-host-which-sent-the-cookie-excluding-subdomains-0-dot}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.30 | 10  | 51.02    | 2022-12-18T15:56:31Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">MDN n.d.</a>)


### Requests to `foo.example.com` {{will}{y/n}@0} include [HTTP Cookies]({{< relref "http_cookies.md" >}}) from `example.com` with `Domain=example.com`. {#requests-to-foo-dot-example-dot-com-will-y-n-0-include-http-cookies--http-cookies-dot-md--from-example-dot-com-with-domain-example-dot-com-dot}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 6   | 114.31   | 2023-02-08T22:45:22Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">MDN n.d.</a>)


### Requests to `foo.example.com` {{won't}{y/n}@0} include [HTTP Cookies]({{< relref "http_cookies.md" >}}) from `example.com` with an unset `Domain`. {#requests-to-foo-dot-example-dot-com-won-t-y-n-0-include-http-cookies--http-cookies-dot-md--from-example-dot-com-with-an-unset-domain-dot}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.15 | 8   | 78.32    | 2023-01-07T23:13:02Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">MDN n.d.</a>)


### Servers send cookies to a user's web browser via {{the `Set-Cookie` HTTP response header}@0}. {#servers-send-cookies-to-a-user-s-web-browser-via-the-set-cookie-http-response-header-0-dot}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 7   | 86.14    | 2023-02-06T17:49:28Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">MDN n.d.</a>)


### Example(s) {#example--s}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 8   | 71.58    | 2023-01-14T06:05:59Z |
| back     | 2.50 | 5   | 38.36    | 2022-12-29T01:44:26Z |

`Set-Cookie` HTTP response headers


#### Back {#back}

-   `Set-Cookie: best_cat=Myth`
-   `Set-Cookie: best_cat=Jynx`


#### Source {#source}

(<a href="#citeproc_bib_item_1">MDN n.d.</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>MDN. n.d. “Using HTTP Cookies.” Accessed July 20, 2022. <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies">https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Third-party cookies]({{< relref "third_party_cookies.md" >}})
-   [Definition]({{< relref "third_party_cookies.md#definition" >}})
-   [First-party cookies]({{< relref "first_party_cookies.md" >}})
-   [Definition]({{< relref "first_party_cookies.md#definition" >}})
