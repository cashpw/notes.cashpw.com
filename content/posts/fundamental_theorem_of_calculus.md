+++
title = "Fundamental theorem of calculus"
author = ["Cash Prokop-Weaver"]
date = 2023-01-18T07:59:00-08:00
lastmod = 2023-08-02T10:59:03-07:00
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
> (<a href="#citeproc_bib_item_4">Khan Academy n.d.</a>)


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


## Flashcards {#flashcards}


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.95 | 6   | 140.72   | 2023-08-28T08:48:30Z |
| 1        | 2.95 | 6   | 134.23   | 2023-09-21T21:20:05Z |
| 2        | 2.65 | 6   | 128.84   | 2023-09-20T10:56:01Z |

{{[Differentiation]({{< relref "differential_calculus.md" >}})}@0} is the {{inverse}@1} of {{[Integration]({{< relref "integral.md" >}})}@2}.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Fundamental Theorem of Calculus” 2022</a>)


### Definition {#definition}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 6   | 93.68    | 2023-08-15T08:45:26Z |
| back     | 2.80 | 6   | 133.06   | 2023-09-16T19:09:48Z |

[First fundamental theorem of calculus](#first-part)


#### Back {#back}

Given \\(f\\) is [continuous]({{< relref "continuous_function.md" >}}) over a [Closed interval]({{< relref "interval.md" >}}) \\([a,b]\\):

\\(F(x) = \int\_a^x f(t)dt\\), where \\(x\\) is in \\([a,b]\\)

$$

\begin{align}
\frac{dF}{dx} &= \frac{d}{dx}\int\_a^xf(t)dt = f(x)
\frac{dF}{dx} &= f(x) \\\\
F'(x) &= f(x)
\end{align}

$$


#### Source {#source}

[First fundamental theorem of calculus](#first-part)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 7   | 271.65   | 2024-04-25T06:34:50Z |
| 1        | 2.50 | 6   | 115.17   | 2023-08-22T18:39:47Z |

{{[Fundamental theorem of calculus]({{< relref "fundamental_theorem_of_calculus.md" >}})}@0} relates {{[Derivative (math)]({{< relref "derivative.md" >}}) and [Integral]({{< relref "integral.md" >}})}@1}.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Fundamental Theorem of Calculus” 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 6   | 141.30   | 2023-09-17T05:45:50Z |
| 1        | 2.65 | 6   | 98.65    | 2023-08-19T07:35:07Z |

{{The [Fundamental theorem of calculus]({{< relref "fundamental_theorem_of_calculus.md" >}})}@0} relates {{[Definite integral]({{< relref "integral.md" >}}) and [Differentiation]({{< relref "differential_calculus.md" >}})}@1}.


#### Source {#source}

(<a href="#citeproc_bib_item_2">“Integral” 2023</a>)


### Definition {#definition}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.05 | 6   | 48.76    | 2023-08-07T14:54:22Z |
| back     | 2.65 | 6   | 114.27   | 2023-09-06T23:49:44Z |

[Second fundamental theorem of calculus](#second-part)


#### Back {#back}

> Given:
>
> -   \\(f\\) is [continuous]({{< relref "continuous_function.md" >}}) over a [Closed interval]({{< relref "interval.md" >}}) \\([c,d]\\)
> -   \\(F(x) = \int\_c^x f(t)dt\\)
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


#### Source {#source}

-   (<a href="#citeproc_bib_item_1">“Fundamental Theorem of Calculus” 2022</a>), (<a href="#citeproc_bib_item_3">Khan Academy 2013</a>)
-   [Second fundamental theorem of calculus](#second-part)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Fundamental Theorem of Calculus.” 2022. <i>Wikipedia</i>, December. <a href="https://en.wikipedia.org/w/index.php?title=Fundamental_theorem_of_calculus&oldid=1126224108">https://en.wikipedia.org/w/index.php?title=Fundamental_theorem_of_calculus&#38;oldid=1126224108</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>“Integral.” 2023. <i>Wikipedia</i>, January. <a href="https://en.wikipedia.org/w/index.php?title=Integral&oldid=1132922175">https://en.wikipedia.org/w/index.php?title=Integral&#38;oldid=1132922175</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_3"></a>Khan Academy. 2013. “Fundamental Theorem of Calculus (Part 2) | AP Calculus AB | Khan Academy.” <a href="https://www.youtube.com/watch?v=JbfVrwxuPxM">https://www.youtube.com/watch?v=JbfVrwxuPxM</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_4"></a>———. n.d. “The Fundamental Theorem of Calculus and Accumulation Functions.” Accessed January 27, 2023. <a href="https://www.khanacademy.org/math/ap-calculus-ab/ab-integration-new/ab-6-4/v/fundamental-theorem-of-calculus">https://www.khanacademy.org/math/ap-calculus-ab/ab-integration-new/ab-6-4/v/fundamental-theorem-of-calculus</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Integral calculus]({{< relref "integral.md" >}})
-   [Calculus]({{< relref "calculus.md" >}})
-   [Derivative (math)]({{< relref "derivative.md" >}})
