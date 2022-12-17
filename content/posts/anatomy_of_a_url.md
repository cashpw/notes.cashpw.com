+++
title = "Anatomy of a URL"
author = ["Cash Prokop-Weaver"]
date = 2022-07-20T10:48:00-07:00
lastmod = 2022-12-17T11:04:51-08:00
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
| front    | 2.20 | 4   | 14.17    | 2022-12-21T19:59:06Z |
| back     | 2.80 | 6   | 62.56    | 2023-02-17T07:12:30Z |

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
| 1        | 2.95 | 5   | 54.92    | 2023-01-10T12:10:22Z |
| 0        | 2.95 | 5   | 40.41    | 2022-12-22T23:51:34Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_2">MDN n.d.-b</a>)


### The {{authority}@1} in `http://www.a.com:8080/b/c?d=e&f=g#h` is {{`www.a.com:8080`}@0} {#the-authority-1-in-http-www-dot-a-dot-com-8080-b-c-d-e-and-f-g-h-is-www-dot-a-dot-com-8080-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 5   | 33.82    | 2022-12-23T12:12:05Z |
| 1        | 2.65 | 5   | 47.33    | 2023-01-25T00:40:03Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_2">MDN n.d.-b</a>)


### The {{host}@1} in `http://www.a.com:8080/b/c?d=e&f=g#h` is {{`www.a.com`}@0} {#the-host-1-in-http-www-dot-a-dot-com-8080-b-c-d-e-and-f-g-h-is-www-dot-a-dot-com-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.05 | 5   | 26.17    | 2023-01-08T06:28:52Z |
| 1        | 2.65 | 6   | 104.62   | 2023-03-01T04:53:58Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_2">MDN n.d.-b</a>)


### The {{port}@1} in `http://www.a.com:8080/b/c?d=e&f=g#h` is {{`8080`}@0} {#the-port-1-in-http-www-dot-a-dot-com-8080-b-c-d-e-and-f-g-h-is-8080-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.95 | 5   | 50.41    | 2023-01-22T07:52:19Z |
| 1        | 2.50 | 4   | 15.65    | 2022-12-28T17:32:55Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_2">MDN n.d.-b</a>)


### The {{path}@1} in `http://www.a.com:8080/b/c?d=e&f=g#h` is {{`/b/c`}@0} {#the-path-1-in-http-www-dot-a-dot-com-8080-b-c-d-e-and-f-g-h-is-b-c-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 6   | 70.96    | 2023-01-05T14:21:36Z |
| 1        | 2.80 | 6   | 83.34    | 2023-02-05T23:44:43Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_2">MDN n.d.-b</a>)


### The {{parameters}@1} in `http://www.a.com:8080/b/c?d=e&f=g#h` are {{`?d=e&f=g`}@0} {#the-parameters-1-in-http-www-dot-a-dot-com-8080-b-c-d-e-and-f-g-h-are-d-e-and-f-g-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.35 | 5   | 33.35    | 2022-12-28T23:50:38Z |
| 1        | 2.50 | 4   | 15.60    | 2022-12-16T07:16:07Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_2">MDN n.d.-b</a>)


### The {{anchor}@1} in `http://www.a.com:8080/b/c?d=e&f=g#h` is {{`#h`}@0} {#the-anchor-1-in-http-www-dot-a-dot-com-8080-b-c-d-e-and-f-g-h-is-h-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 1        | 2.95 | 5   | 49.07    | 2022-12-22T18:27:45Z |
| 0        | 2.80 | 5   | 37.79    | 2023-01-04T13:15:52Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_2">MDN n.d.-b</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>MDN. n.d.-a. “Using HTTP Cookies.” Accessed July 20, 2022. <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies">https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>———. n.d.-b. “What Is a URL?” Accessed July 20, 2022. <a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL">https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL</a>.</div>
</div>
