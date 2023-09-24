+++
title = "HTTP Cookies"
author = ["Cash Prokop-Weaver"]
date = 2022-07-20T09:52:00-07:00
lastmod = 2023-09-24T10:17:14-07:00
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
| front    | 2.05 | 7   | 149.66   | 2023-09-28T15:26:29Z |
| back     | 2.35 | 8   | 440.23   | 2024-11-03T18:26:27Z |

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
| front    | 2.65 | 8   | 650.25   | 2025-06-29T05:10:00Z |
| back     | 2.50 | 8   | 459.83   | 2024-11-06T11:09:26Z |

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
| 0        | 2.35 | 8   | 403.59   | 2024-10-05T03:00:55Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">MDN n.d.</a>)


### The `Domain` attribute of an [HTTP Cookies]({{< relref "http_cookies.md" >}}) defaults to {{the host which sent the cookie, excluding subdomains}@0}. {#the-domain-attribute-of-an-http-cookies--http-cookies-dot-md--defaults-to-the-host-which-sent-the-cookie-excluding-subdomains-0-dot}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 1.85 | 8   | 154.54   | 2023-12-01T09:51:26Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">MDN n.d.</a>)


### Requests to `foo.example.com` {{will}{y/n}@0} include [HTTP Cookies]({{< relref "http_cookies.md" >}}) from `example.com` with `Domain=example.com`. {#requests-to-foo-dot-example-dot-com-will-y-n-0-include-http-cookies--http-cookies-dot-md--from-example-dot-com-with-domain-example-dot-com-dot}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 7   | 301.48   | 2023-12-09T11:13:26Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">MDN n.d.</a>)


### Requests to `foo.example.com` {{won't}{y/n}@0} include [HTTP Cookies]({{< relref "http_cookies.md" >}}) from `example.com` with an unset `Domain`. {#requests-to-foo-dot-example-dot-com-won-t-y-n-0-include-http-cookies--http-cookies-dot-md--from-example-dot-com-with-an-unset-domain-dot}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.15 | 10  | 362.18   | 2024-06-19T05:50:35Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">MDN n.d.</a>)


### Servers send cookies to a user's web browser via {{the `Set-Cookie` HTTP response header}@0}. {#servers-send-cookies-to-a-user-s-web-browser-via-the-set-cookie-http-response-header-0-dot}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.35 | 9   | 507.68   | 2025-01-20T10:49:48Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">MDN n.d.</a>)


### Example(s) {#example--s}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.65 | 10  | 539.52   | 2025-01-21T13:53:31Z |
| back     | 2.35 | 7   | 197.04   | 2023-10-06T16:50:41Z |

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
-   [First-party cookies]({{< relref "first_party_cookies.md" >}})
