+++
title = "Fundamental theorem of calculus"
author = ["Cash Prokop-Weaver"]
date = 2023-01-18T07:59:00-08:00
lastmod = 2023-11-10T10:47:27-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "adda1031-550c-4f65-9384-1ee018532adc"
+++

> The fundamental theorem of calculus [[Calculus]({{< relref "calculus.md" >}})] is a theorem that links the concept of differentiating [[Differential calculus]({{< relref "differential_calculus.md" >}})] a function (calculating its slopes, or rate of change at each time) with the concept of integrating [[Integral calculus]({{< relref "integral.md" >}})] a function (calculating the area under its graph, or the cumulative effect of small contributions). The two operations are inverses of each other apart from a constant value which depends on where one starts to compute area.
>
> The first part of the theorem, the first fundamental theorem of calculus, states that for a function \\(f\\), an antiderivative [[Antiderivative]({{< relref "antiderivative.md" >}})] or indefinite integral \\(F\\) may be obtained as the integral of \\(f\\) over an interval with a variable upper bound. This implies the existence of antiderivatives for continuous functions.
>
> Conversely, the second part of the theorem, the second fundamental theorem of calculus, states that the integral of a function \\(f\\) over a fixed interval is equal to the change of any antiderivative \\(F\\) between the ends of the interval. This greatly simplifies the calculation of a definite integral provided an antiderivative can be found by symbolic integration, thus avoiding numerical integration.
>
> (<a href="#citeproc_bib_item_1">“Fundamental Theorem of Calculus” 2022</a>)


## First part {#first-part}

> Given \\(f\\) is [continuous]({{< relref "continuous_function.md" >}}) over a [Closed interval]({{< relref "interval.md" >}}) \\([a,b]\\):
>
> \\(F(x) = \int\_a^x f(t)dt\\), where \\(x\\) is in \\([a,b]\\)
>
> $$
>
> \begin{align}
> \frac{dF}{dx} &= \frac{d}{dx}\int\_a^xf(t)dt = f(x)
> \frac{dF}{dx} &= f(x) \\\\
> F'(x) &= f(x)
> \end{align}
>
> $$
>
> [paraphrased]
>
> (<a href="#citeproc_bib_item_1">“Fundamental Theorem of Calculus” 2022</a>)


### Example {#example}

> \\(\frac{d}{dx}(\int\_{\pi}^x \frac{\href{/posts/cosine}{\cos}^2t}{\ln(t-\sqrt{t})}dt) = \frac{\href{/posts/cosine}{\cos}^2x}{\ln(x-\sqrt{x})}\\)
>
> (<a href="#citeproc_bib_item_2">Khan Academy n.d.</a>)


## Second part {#second-part}

> Given:
>
> -   \\(f\\) is [continuous]({{< relref "continuous_function.md" >}}) over a [Closed interval]({{< relref "interval.md" >}}) \\([c,d]\\)
> -   \\(F(x) = \int\_c^x f(t)dt\\) by [First fundamental theorem of calculus](#first-part)
> -   \\(c < a < b < d\\)
>
> $$
>
> \begin{align}
> \int\_a^b f(t)dt &= \int\_c^b f(t)dt - \int\_c^a f(t)dt \\\\
> &= F(b) - F(a)
> \end{align}
>
> $$
>
> [paraphrased]
>
> (<a href="#citeproc_bib_item_1">“Fundamental Theorem of Calculus” 2022</a>), (<a href="#citeproc_bib_item_3">Khan Academy 2013</a>)


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Fundamental Theorem of Calculus.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Fundamental_theorem_of_calculus&oldid=1126224108">https://en.wikipedia.org/w/index.php?title=Fundamental_theorem_of_calculus&#38;oldid=1126224108</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>Khan Academy. n.d. “The Fundamental Theorem of Calculus and Accumulation Functions.” Accessed January 27, 2023. <a href="https://www.khanacademy.org/math/ap-calculus-ab/ab-integration-new/ab-6-4/v/fundamental-theorem-of-calculus">https://www.khanacademy.org/math/ap-calculus-ab/ab-integration-new/ab-6-4/v/fundamental-theorem-of-calculus</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_3"></a>———, ed. 2013. <i>Fundamental Theorem of Calculus (Part 2) | AP Calculus AB | Khan Academy</i>. Directed by Khan Academy. <a href="https://www.youtube.com/watch?v=JbfVrwxuPxM">https://www.youtube.com/watch?v=JbfVrwxuPxM</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Integral calculus]({{< relref "integral.md" >}})
-   [Derivative (math)]({{< relref "derivative.md" >}})
-   [Calculus]({{< relref "calculus.md" >}})
