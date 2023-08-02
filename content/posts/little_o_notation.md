+++
title = "Little-o notation"
author = ["Cash Prokop-Weaver"]
date = 2022-08-19T19:06:00-07:00
lastmod = 2023-08-02T11:31:12-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "96e6cece-bfe4-4f80-b526-9578d2431364"
+++

Little-o notation, written as \\(\littleo{g(n)}\\), is a stronger statement than [Big O notation]({{< relref "asymptotic_notation.md" >}}). It implies that \\(g(x)\\) grows much faster than \\(f(x)\\). It's defined as:

\\[f(x) = \littleo{g(x)} \overset{\Delta}{=} \lim\_{x \to \infty} \frac{f(x)}{g(x)} = 0\\]


## Relationship with [Big-O notation]({{< relref "big_o_notation.md" >}}) {#relationship-with-big-o-notation--big-o-notation-dot-md}

\\[\begin{align}3n^3 &= \bigo{n^3} \\\ 3n^3 &\ne \littleo{n^3} \\\ 3n^3 &= \littleo{n^4}\end{align}\\]

To use an analogy:

\\[\begin{align}f(n) &\in \bigo{g(n)} &\implies f(n) &\le g(n) \\\ f(n) &\in \littleo{g(n)} &\implies f(n) &< g(n)\end{align}\\]


## Flashcards {#flashcards}


### Definition (Computer science) {#definition--computer-science}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.20 | 9   | 284.19   | 2024-02-24T19:20:03Z |
| front    | 2.05 | 7   | 142.71   | 2023-08-15T12:31:30Z |

[Little-o notation]({{< relref "little_o_notation.md" >}})


#### Back {#back}

\\[\operatorname{fn}(g(x)) \overset{\Delta}{=} \lim\_{x \to \infty} \frac{f(x)}{g(x)} = 0\\]


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Big O Notation” 2022</a>)


### Denotes (Computer science) {#denotes--computer-science}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 3.10 | 7   | 432.25   | 2024-09-16T18:56:26Z |
| 1        | 2.80 | 7   | 257.74   | 2024-01-16T15:32:14Z |

-   {{\\(o(n)\\)}@0}

{{[Little-o notation]({{< relref "little_o_notation.md" >}})}@1}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Big O Notation” 2022</a>)


### [Little-o notation]({{< relref "little_o_notation.md" >}}) is a {{stronger}{relative strength}@0} statement than [Big-O notation]({{< relref "big_o_notation.md" >}}) {#little-o-notation--little-o-notation-dot-md--is-a-stronger-relative-strength-0-statement-than-big-o-notation--big-o-notation-dot-md}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.95 | 7   | 424.32   | 2024-09-06T23:30:17Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Big O Notation” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Big O Notation.” 2022. <i>Wikipedia</i>, June. <a href="https://en.wikipedia.org/w/index.php?title=Big_O_notation&oldid=1093535234">https://en.wikipedia.org/w/index.php?title=Big_O_notation&#38;oldid=1093535234</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Asymptotic Notation]({{< relref "asymptotic_notation.md" >}})
-   [Data structures]({{< relref "data_structures.md" >}})
