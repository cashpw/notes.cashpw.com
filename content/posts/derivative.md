+++
title = "Derivative (math)"
author = ["Cash Prokop-Weaver"]
date = 2022-11-06T18:20:00-08:00
lastmod = 2023-12-05T14:01:06-08:00
tags = ["hastodo", "concept", "hastodo", "concept"]
categories = ["hastodo", "concept"]
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


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Derivative.” 2022. <i>Wikipedia</i>, October. <a href="https://en.wikipedia.org/w/index.php?title=Derivative&oldid=1115036985">https://en.wikipedia.org/w/index.php?title=Derivative&#38;oldid=1115036985</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Tangent (Trigonometry)]({{< relref "tangent.md" >}})
-   [Instantaneous velocity]({{< relref "velocity.md#instantaneous-velocity" >}})
-   [Quotient rule]({{< relref "quotient_rule.md" >}})
-   [Acceleration]({{< relref "acceleration.md" >}})
-   [Leibniz's notation]({{< relref "leibniz_s_notation.md" >}})
-   [Silvanus Thompson | Calculus Made Easy]({{< relref "silvanus_thompson_calculus_made_easy.md" >}})
-   [Chain rule]({{< relref "chain_rule.md" >}})
-   [Fundamental theorem of calculus]({{< relref "fundamental_theorem_of_calculus.md" >}})
-   [Vega (finance)]({{< relref "vega_finance.md" >}})