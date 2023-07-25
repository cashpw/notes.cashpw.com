+++
title = "Derivative (math)"
author = ["Cash Prokop-Weaver"]
date = 2022-11-06T18:20:00-08:00
lastmod = 2023-07-25T10:28:13-07:00
tags = ["has-todo", "concept", "has-todo", "concept"]
categories = ["has-todo", "concept"]
draft = false
slug = "555a96ec-560f-4087-939f-5985f0ad0cb6"
+++

> In mathematics, the derivative of a function of a real variable measures the sensitivity to change of the function value (output value) with respect to a change in its argument (input value). Derivatives are a fundamental tool of calculus. For example, the derivative of the position of a moving object with respect to time is the object's velocity: this measures how quickly the position of the object changes when time advances.
>
> The derivative of a function of a single variable at a chosen input value, when it exists, is the slope of the tangent line to the graph of the function at that point. The tangent line is the best linear approximation of the function near that input value. For this reason, the derivative is often described as the "instantaneous rate of change", the ratio of the instantaneous change in the dependent variable to that of the independent variable.
>
> [...]
>
> The process of finding a derivative is called differentiation [[Differentiation]({{< relref "differential_calculus.md" >}})]. The reverse process is called antidifferentiation [[Antiderivative]({{< relref "antiderivative.md" >}})]. The fundamental theorem of calculus [[Fundamental theorem of calculus]({{< relref "fundamental_theorem_of_calculus.md" >}})] relates antidifferentiation with integration [[Integration]({{< relref "integral.md" >}})]. Differentiation and integration constitute the two fundamental operations in single-variable calculus.
>
> (<a href="#citeproc_bib_item_1">“Derivative” 2022</a>)


## Geometric interpretation of derivatives {#geometric-interpretation-of-derivatives}

\\(f'(x)\\) is the slope of the tangent line of \\(f(x)\\).


## Finding [Maxima and minima]({{< relref "maxima_and_minima.md" >}}) with differentiation {#finding-maxima-and-minima--maxima-and-minima-dot-md--with-differentiation}

The [Global minima]({{< relref "maxima_and_minima.md#global-minima" >}}) of \\(y = x^2 + 4x - 5\\) is at \\(y=-2\\). To solve:

1.  Find the [Extrema]({{< relref "maxima_and_minima.md" >}})

    $$

    \begin{align}
    y &= x^2 + 4x - 5 \\\\
    \frac{dy}{dx} &= 2x + 4 \\\\
    \end{align}

    $$

    Now equate to zero...

    $$

    \begin{align}
    0 &= 2x + 4 \\\\
    x &= \frac{-4}{2} \\\\
    x &= -2
    \end{align}

    $$

2.  Determine maxima or minima

    $$

    \begin{align}
    y &= x^2 + 4x - 5 \\\\
    \frac{d^2y}{(dx)^2} &= 2
    \end{align}

    $$

    The slope of the slope is positive (\\(2 > 0\\)), so the [Extrema]({{< relref "maxima_and_minima.md" >}}) is a [Global minima]({{< relref "maxima_and_minima.md#global-minima" >}}).

Another example with a higher [Degree]({{< relref "polynomial.md#degree" >}}): \\(f(x) = x^3 - 2x^2 + 8x + 1\\)

$$

\begin{align}
f(x) &= \frac{4}{3}x^3 + x^2 - 5x + 1 \\\\
f'(x) &= 4x^2 + 2x - 5
\end{align}

$$

This has two solutions by the [Quadratic formula]({{< relref "quadratic_formula.md" >}}):

\\(x = -\frac{1}{4} \pm \frac{\sqrt{21}}{4}\\)

You can perform the second step from above to determine whether these are maxima or minima.


## Expand {#expand}

Related: [Differential calculus]({{< relref "differential_calculus.md" >}})
(<a href="#citeproc_bib_item_1">“Derivative” 2022</a>)


## Flashcards {#flashcards}


### Definition {#definition}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 1.60 | 6   | 31.54    | 2023-08-24T17:01:16Z |
| back     | 2.80 | 6   | 116.59   | 2023-08-31T07:56:39Z |

[Derivative (math)]({{< relref "derivative.md" >}})


#### Back {#back}

The sensitivity of a function's output value to changes in the function's input value(s).


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Derivative” 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.65 | 7   | 244.20   | 2024-03-23T08:24:35Z |
| back     | 2.50 | 6   | 118.97   | 2023-09-05T16:10:52Z |

Geometric interpretation of [Derivative (math)]({{< relref "derivative.md" >}})


#### Back {#back}

The slope of the tangent line to the graph of the function at a particular point.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Derivative” 2022</a>)


### AKA {#aka}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.95 | 6   | 129.25   | 2023-08-20T18:50:58Z |
| 1        | 2.05 | 5   | 26.48    | 2023-07-28T01:55:40Z |

-   {{[Derivative (math)]({{< relref "derivative.md" >}})}@0}
-   {{[Instantaneous rate of change]({{< relref "derivative.md" >}})}@1}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Derivative” 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 6   | 108.60   | 2023-08-04T06:26:08Z |
| 1        | 2.50 | 6   | 100.10   | 2023-08-18T18:31:29Z |

For \\(f(x)\\), {{the [Derivative (math)]({{< relref "derivative.md" >}})}@0} is {{a function whose output is the slope of the tangent line at \\(x\\)}{[Geometry]({{< relref "geometry.md" >}})}@1}.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Derivative” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Derivative.” 2022. <i>Wikipedia</i>, October. <a href="https://en.wikipedia.org/w/index.php?title=Derivative&oldid=1115036985">https://en.wikipedia.org/w/index.php?title=Derivative&#38;oldid=1115036985</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Leibniz's notation]({{< relref "leibniz_s_notation.md" >}})
-   [Vega (finance)]({{< relref "vega_finance.md" >}})
-   [Fundamental theorem of calculus]({{< relref "fundamental_theorem_of_calculus.md" >}})
-   [Instantaneous velocity]({{< relref "velocity.md#instantaneous-velocity" >}})
-   [Quotient rule]({{< relref "quotient_rule.md" >}})
-   [Chain rule]({{< relref "chain_rule.md" >}})
-   [Acceleration]({{< relref "acceleration.md" >}})
-   [Silvanus Thompson | Calculus Made Easy]({{< relref "silvanus_thompson_calculus_made_easy.md" >}})
-   [Tangent (Trigonometry)]({{< relref "tangent.md" >}})
