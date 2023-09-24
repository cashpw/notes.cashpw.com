+++
title = "Anatomy of a URL"
author = ["Cash Prokop-Weaver"]
date = 2022-07-20T10:48:00-07:00
lastmod = 2023-09-24T09:53:14-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "56aebaa3-d4d6-4a06-98a2-186ed655d11e"
+++

Using `http://www.example.com:8080/foo/bar?baz=boo&color=blue#cats` as an example (<a href="#citeproc_bib_item_2">MDN n.d.-b</a>):

| Name       | From the example       |
|------------|------------------------|
| Scheme     | `http`                 |
| Authority  | `www.example.com:8080` |
| Host       | `www.example.com`      |
| Port       | `8080`                 |
| Path       | `/foo/bar`             |
| Parameters | `?baz=boo&color=blue`  |
| Anchor     | `#cats`                |


## Flashcards {#flashcards}


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 1.30 | 9   | 36.69    | 2023-09-29T09:13:29Z |
| back     | 2.80 | 8   | 497.92   | 2025-01-05T13:03:34Z |

[Anatomy of a URL]({{< relref "anatomy_of_a_url.md" >}})


#### Back {#back}

Using `http://www.a.com:8080/b/c?d=e&f=g#h` as an example:

1.  Scheme (e.g. `http`)
2.  Authority (e.g. `www.a.com:8080`)
    1.  Host (e.g. `www.a.com`)
    2.  Port (e.g. `8080`)
3.  Path (e.g. `/b/c`)
4.  Parameters (e.g. `?d=e&f=g`)
5.  Anchor (e.g. `#h`)


#### Source {#source}

(<a href="#citeproc_bib_item_1">MDN n.d.-a</a>)


### The {{scheme}@1} in `http://www.a.com:8080/b/c?d=e&f=g#h` is {{`http`}@0} {#the-scheme-1-in-http-www-dot-a-dot-com-8080-b-c-d-e-and-f-g-h-is-http-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 1        | 3.25 | 7   | 485.13   | 2024-10-24T18:35:40Z |
| 0        | 2.95 | 7   | 341.75   | 2024-04-09T15:52:28Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_2">MDN n.d.-b</a>)


### The {{authority}@1} in `http://www.a.com:8080/b/c?d=e&f=g#h` is {{`www.a.com:8080`}@0} {#the-authority-1-in-http-www-dot-a-dot-com-8080-b-c-d-e-and-f-g-h-is-www-dot-a-dot-com-8080-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 7   | 207.81   | 2023-10-18T13:33:30Z |
| 1        | 2.50 | 7   | 341.29   | 2024-05-10T11:36:23Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_2">MDN n.d.-b</a>)


### The {{host}@1} in `http://www.a.com:8080/b/c?d=e&f=g#h` is {{`www.a.com`}@0} {#the-host-1-in-http-www-dot-a-dot-com-8080-b-c-d-e-and-f-g-h-is-www-dot-a-dot-com-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.20 | 8   | 244.69   | 2024-02-26T08:45:55Z |
| 1        | 2.65 | 7   | 264.35   | 2023-11-21T22:58:53Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_2">MDN n.d.-b</a>)


### The {{port}@1} in `http://www.a.com:8080/b/c?d=e&f=g#h` is {{`8080`}@0} {#the-port-1-in-http-www-dot-a-dot-com-8080-b-c-d-e-and-f-g-h-is-8080-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 3.25 | 7   | 428.05   | 2024-08-16T01:55:49Z |
| 1        | 2.50 | 7   | 280.48   | 2024-02-26T00:38:55Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_2">MDN n.d.-b</a>)


### The {{path}@1} in `http://www.a.com:8080/b/c?d=e&f=g#h` is {{`/b/c`}@0} {#the-path-1-in-http-www-dot-a-dot-com-8080-b-c-d-e-and-f-g-h-is-b-c-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 8   | 459.28   | 2024-10-16T20:54:59Z |
| 1        | 2.65 | 8   | 538.71   | 2025-03-06T08:14:24Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_2">MDN n.d.-b</a>)


### The {{parameters}@1} in `http://www.a.com:8080/b/c?d=e&f=g#h` are {{`?d=e&f=g`}@0} {#the-parameters-1-in-http-www-dot-a-dot-com-8080-b-c-d-e-and-f-g-h-are-d-e-and-f-g-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.20 | 8   | 370.81   | 2024-09-04T08:05:27Z |
| 1        | 2.35 | 7   | 234.25   | 2023-12-31T21:00:26Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_2">MDN n.d.-b</a>)


### The {{anchor}@1} in `http://www.a.com:8080/b/c?d=e&f=g#h` is {{`#h`}@0} {#the-anchor-1-in-http-www-dot-a-dot-com-8080-b-c-d-e-and-f-g-h-is-h-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 1        | 2.80 | 7   | 337.53   | 2024-04-15T05:05:36Z |
| 0        | 2.80 | 7   | 369.50   | 2024-05-18T02:57:01Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_2">MDN n.d.-b</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>MDN. n.d.-a. “Using HTTP Cookies.” Accessed July 20, 2022. <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies">https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>———. n.d.-b. “What Is a URL?” Accessed July 20, 2022. <a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL">https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL</a>.</div>
</div>
