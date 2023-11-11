+++
title = "Pseudo-polynomial time"
author = ["Cash Prokop-Weaver"]
date = 2023-02-07T17:46:00-08:00
lastmod = 2023-11-10T11:11:32-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "890be1a5-820c-484e-acfa-16a6115c64c0"
+++

> In computational complexity theory, a numeric algorithm runs in pseudo-polynomial time if its running time is a polynomial in the numeric value of the input (the largest integer present in the input)—but not necessarily in the length of the input (the number of bits required to represent it), which is the case for polynomial time algorithms.[1]
>
> (“Pseudo-Polynomial Time” 2022)

<!--quoteend-->

> In general, the numeric value of the input is exponential in the input length, which is why a pseudo-polynomial time algorithm does not necessarily run in polynomial time with respect to the input length.
>
> (“Pseudo-Polynomial Time” 2022)

For example, the number of integers you can represent with \\(n\\) bits grows exponentially with \\(n\\). You can represent 8 integers using three bits (\\(000 = 0\\), \\(001 = 1\\), \\(010\\) = 2, \\(\dots\\), \\(111 = 7\\)), 16 integers with four bits, 32 integers with five bits, etc.


## Backlinks {#backlinks}

-   [Pseudo-polynomial time subset sum problem implementation in Python]({{< relref "pseudo_polynomial_time_sumbset_sum_problem_implementation_in_python.md" >}})
-   [Subset sum problem]({{< relref "subset_sum_problem.md" >}})
