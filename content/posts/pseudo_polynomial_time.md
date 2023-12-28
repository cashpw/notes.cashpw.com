+++
title = "Pseudo-polynomial time"
author = ["Cash Prokop-Weaver"]
date = 2023-02-07T17:46:00-08:00
lastmod = 2023-12-23T16:10:25-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "890be1a5-820c-484e-acfa-16a6115c64c0"
+++

> In computational complexity theory, a numeric algorithm runs in pseudo-polynomial time if its running time is a polynomial in the numeric value of the input (the largest integer present in the input)—but not necessarily in the length of the input (the number of bits required to represent it), which is the case for polynomial time algorithms.[1]
>
> (<a href="#citeproc_bib_item_1">“Pseudo-Polynomial Time” 2022</a>)

<!--quoteend-->

> In general, the numeric value of the input is exponential in the input length, which is why a pseudo-polynomial time algorithm does not necessarily run in polynomial time with respect to the input length.
>
> (<a href="#citeproc_bib_item_1">“Pseudo-Polynomial Time” 2022</a>)

For example, the number of integers you can represent with \\(n\\) bits grows exponentially with \\(n\\). You can represent 8 integers using three bits (\\(000 = 0\\), \\(001 = 1\\), \\(010\\) = 2, \\(\dots\\), \\(111 = 7\\)), 16 integers with four bits, 32 integers with five bits, etc.


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Pseudo-Polynomial Time.” 2022. <i>Wikipedia</i>, May. <a href="https://en.wikipedia.org/w/index.php?title=Pseudo-polynomial_time&oldid=1090337054">https://en.wikipedia.org/w/index.php?title=Pseudo-polynomial_time&#38;oldid=1090337054</a>.</div>
</div>



## Backlinks {#backlinks}

-   [Pseudo-polynomial time subset sum problem implementation in Python]({{< relref "pseudo_polynomial_time_sumbset_sum_problem_implementation_in_python.md" >}})
-   [Subset sum problem]({{< relref "subset_sum_problem.md" >}})
