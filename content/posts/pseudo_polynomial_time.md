+++
title = "Pseudo-polynomial time"
author = ["Cash Prokop-Weaver"]
date = 2023-02-07T17:46:00-08:00
lastmod = 2023-09-24T10:39:16-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "890be1a5-820c-484e-acfa-16a6115c64c0"
+++

> In computational complexity theory, a numeric algorithm runs in pseudo-polynomial time if its running time is a polynomial in the numeric value of the input (the largest integer present in the input)—but not necessarily in the length of the input (the number of bits required to represent it), which is the case for polynomial time algorithms.[1]
>
> (<a href="#citeproc_bib_item_2">“Pseudo-Polynomial Time” 2022</a>)

<!--quoteend-->

> In general, the numeric value of the input is exponential in the input length, which is why a pseudo-polynomial time algorithm does not necessarily run in polynomial time with respect to the input length.
>
> (<a href="#citeproc_bib_item_2">“Pseudo-Polynomial Time” 2022</a>)

For example, the number of integers you can represent with \\(n\\) bits grows exponentially with \\(n\\). You can represent 8 integers using three bits (\\(000 = 0\\), \\(001 = 1\\), \\(010\\) = 2, \\(\dots\\), \\(111 = 7\\)), 16 integers with four bits, 32 integers with five bits, etc.


## Flashcards {#flashcards}


### Definition {#definition}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.65 | 7   | 345.95   | 2024-08-09T13:51:56Z |
| back     | 2.35 | 3   | 6.00     | 2023-09-25T23:57:04Z |

[Pseudo-polynomial time]({{< relref "pseudo_polynomial_time.md" >}})


#### Back {#back}

A running time which is polynomial in terms of the numeric value of the input. That is, the \\(n\\) in \\(\bigo{n^k}\\) is the value of the input rather than, as is more common, the length of the input.


#### Source {#source}

(<a href="#citeproc_bib_item_2">“Pseudo-Polynomial Time” 2022</a>)


### Compare and contrast {#compare-and-contrast}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.35 | 7   | 248.46   | 2024-04-26T00:19:21Z |

[Polynomial time]({{< relref "polynomial_time.md" >}}) and [Pseudo-polynomial time]({{< relref "pseudo_polynomial_time.md" >}})


#### Back {#back}

For \\(\bigo{n^k}\\), the \\(n\\) refers to:

-   [Polynomial time]({{< relref "polynomial_time.md" >}}): The length of the input
-   [Pseudo-polynomial time]({{< relref "pseudo_polynomial_time.md" >}}): The numeric value of the input


#### Source {#source}

-   (<a href="#citeproc_bib_item_2">“Pseudo-Polynomial Time” 2022</a>)
-   (<a href="#citeproc_bib_item_1">“P (Complexity)” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“P (Complexity).” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=P_(complexity)&oldid=1113888801">https://en.wikipedia.org/w/index.php?title=P_(complexity)&#38;oldid=1113888801</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>“Pseudo-Polynomial Time.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Pseudo-polynomial_time&oldid=1090337054">https://en.wikipedia.org/w/index.php?title=Pseudo-polynomial_time&#38;oldid=1090337054</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Pseudo-polynomial time subset sum problem implementation in Python]({{< relref "pseudo_polynomial_time_sumbset_sum_problem_implementation_in_python.md" >}})
-   [Subset sum problem]({{< relref "subset_sum_problem.md" >}})
