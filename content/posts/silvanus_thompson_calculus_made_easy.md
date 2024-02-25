+++
title = "Silvanus Thompson | Calculus Made Easy"
author = ["Cash Weaver"]
date = 2023-01-18T06:55:00-08:00
lastmod = 2024-02-24T18:19:57-08:00
tags = ["hastodo", "reference", "hastodo", "reference"]
categories = ["hastodo", "reference"]
draft = false
slug = "9486d469-bfc8-46d9-9096-cb9c00a2628c"
+++

[Silvanus Thompson]({{< relref "silvanus_thompson.md" >}}), (<a href="#citeproc_bib_item_1">Thompson 1914</a>)


## Summary {#summary}

An introductory book on [Calculus]({{< relref "calculus.md" >}}) which focuses on easing the reader into the material and establishing their intuition.


## Thoughts {#thoughts}


## Notes {#notes}


### Skeleton {#skeleton}


#### Front Matter {#front-matter}

<!--list-separator-->

-  Boilerplate

<!--list-separator-->

-  Transcriber's Note

    > What one fool can do, another can.

<!--list-separator-->

-  Preface

<!--list-separator-->

-  Prologue


#### Main Matter {#main-matter}

<!--list-separator-->

-  Chapter I

    [Leibniz's notation]({{< relref "leibniz_s_notation.md" >}})

<!--list-separator-->

-  Chapter II

    Dealing with degrees of smallness. That is, \\(\frac{1}{100}\\) as the first degree , \\({\frac{1}{100}}^2 = \frac{1}{10,000}\\) as the second degree, \\({\frac{1}{100}}^3 = \frac{1}{1,000,000}\\) as the third degree, and so on. The size of the nth-degree may be negligible such that we can safely ignore it.

    > An ox might worry about a flea of ordinary size—a small creature of the first order of smallness. But he would probably not trouble himself about a flea's flea; being of the second order of smallness, it would be negligible. Even a gross of fleas' fleas would not be of much account to the ox.

<!--list-separator-->

-  Chapter III

    <!--list-separator-->

    -  How to read Differentials.

        [Lagrange's notation]({{< relref "lagrange_s_notation.md" >}})

        :NOTER_PAGE: (27 . 0.162729)

<!--list-separator-->

-  Chapter IV

    <!--list-separator-->

    -  Case 1

        > Let us begin with the simple expression \\(y = x^2\\) . Now remember that the fundamental notion about the calculus is the idea of growing. Mathematicians call it varying. Now as \\(y\\) and \\(x^2\\) are equal to one another, it is clear that if \\(x\\) grows, \\(x^2\\) will also grow. And if \\(x^2\\) grows, then \\(y\\) will also grow. What we have got to find out is the proportion between the growing of y and the growing of \\(x\\). In other words our task is to find out the ratio between \\(dy\\) and \\(dx\\), or, in brief, to find the value \\(\frac{dy}{dx}\\).

        $$

        \begin{align}
        y &= x^2 \\\\
        y + dy &= (x + dx)^2 \\\\
        y + dy &= x^2 + 2x(dx) + (dx)^2 \\\\
        y + dy &= x^2 + 2x(dx) \\\\
        x^2 + dy &= x^2 + 2x(dx) \\\\
        dy &= 2x(dx) \\\\
        \frac{dy}{dx} &= 2x
        \end{align}

        $$

        -   4: "What does (dx)2 mean? Remember that dx meant a bit—a little bit—of x. Then (dx)2 will mean a little bit of a little bit of x; that is, as explained above (p. 4), it is a small quantity of the second order of smallness. It may therefore be discarded as quite inconsiderable in comparison with the other terms."
        -   5: \\(y = x^2\\)

        Note that I could write the \\(y = x^2\\) as \\(f(x) = x^2\\) and use [Lagrange's notation]({{< relref "lagrange_s_notation.md" >}}): \\(f'(x) = 2x\\).

        See [Power rule]({{< relref "power_rule.md" >}})

    <!--list-separator-->

    -  Case 2

        $$

        \begin{align}
        y &= x^3 \\\\
        y + dy &= (x + dx)^3 \\\\
        y + dy &= x^3 +3x^2(dx) + 3x(dx)^2 + (dx)^3 \\\\
        y + dy &= x^3 +3x^2(dx) \\\\
        x^3 + dy &= x^3 +3x^2(dx) \\\\
        dy &= 3x^2(dx) \\\\
        \frac{dy}{dx} &= 3x^2
        \end{align}

        $$

    <!--list-separator-->

    -  Case of a negative power

        $$

        \begin{align}
        y &= x^{-2} \\\\
        y + dy &= (x + dx)^{-2} \\\\
        y + dy &= x^{-2}(1 - \frac{2dx}{x} + \frac{2(2+1)}{1 \times 2}{(\frac{dx}{x})}^2 - \text{etc.}) \\\\
        y + dy &= x^{-2} - 2x^{-3}(dx) + 3x^{-4}{(dx)}^2 - 4x^{-5}{(dx)}^3 + \text{etc.} \\\\
        y + dy &= x^{-2} - 2x^{-3}(dx) \\\\
        dy &= -2x^{-3}(dx) \\\\
        \frac{dy}{dx} &= -2x^{-3}
        \end{align}

        $$

        -   3: Expand by the [Binomial theorem]({{< relref "binomial_theorem.md" >}})
        -   5: Remove small quantities of higher orders of smallness (e.g. \\({(dx)}^2\\))
        -   6: Subtract \\(y\\) from both sides, remembering that \\(y = x^{-2}\\) from 1.

    <!--list-separator-->

    -  Case of a fractional power

        $$

        \begin{align}
        y &= x^{\frac{1}{2}} \\\\
        \dots \\\\
        \frac{dy}{dx} &= \frac{1}{2}x^{-{\frac{1}{2}}}
        \end{align}

        $$

    <!--list-separator-->

    -  Exercises I

<!--list-separator-->

-  Chapter V

    <!--list-separator-->

    -  Added constants

        $$

        \begin{align}
        y &= x^3 + 5 \\\\
        y + dy &= {(x + dx)}^3 + 5 \\\\
        &= x^3 + 3x^2dx + 3x{(dx)}^2 + (dx)^3 + 5 \\\\
        &= x^3 + 3x^2dx + 5 \\\\
        &= 3x^2dx\\\\
        \frac{dy}{dx} &= 3x^2
        \end{align}

        $$

        Constants disappear during [Differentiation]({{< relref "differential_calculus.md" >}}).

    <!--list-separator-->

    -  Multiplied constants

        $$

        \begin{align}
        y &= ax^2 \\\\
        \dots \\\\
        \frac{dy}{dx} &= 2ax
        \end{align}

        $$

        Constants disappear during [Differentiation]({{< relref "differential_calculus.md" >}}).

    <!--list-separator-->

    -  Exercises II

<!--list-separator-->

-  Chapter VI

    <!--list-separator-->

    -  Sum

        $$

        \begin{align}
        y &= x^2 + c + ax^4 + b \\\\
        &\dots \\\\
        \frac{dy}{dx} &= 2x + 4ax^3
        \end{align}

        $$

        See [Sum rule]({{< relref "differential_calculus.md#linearity-of-differentiation" >}}).

    <!--list-separator-->

    -  Product

        By [First principles]({{< relref "first_principles.md" >}}) (i.e. replace with \\(y + dy\\) and \\(x + dx\\)):

        $$

        \begin{align}
        y &= (x^2 + c) \times (ax^4 + b) \\\\
        y &= ax^6 + acx^4 + bx^2 + bc
        &\dots \\\\
        \frac{dy}{dx} &= 6ax^5 + 4acx^3 + 2bx
        \end{align}

        $$

        [Product rule]({{< relref "product_rule.md" >}})

        $$

        \begin{align}
        y &= z \times w \\\\
        &\dots \\\\
        \frac{dy}{dx} &= z\frac{dw}{dx} + w\frac{dz}{dx}
        \end{align}

        $$

        Using [Product rule]({{< relref "product_rule.md" >}}):

        $$

        \begin{align}
        y &= (x^2 + c) \times (ax^4 + b) \\\\
        \frac{dy}{dx} &= (x^2 + c)\frac{d(ax^4 + b)}{dx} \times (ax^4 + b)\frac{d(x^2 + c)}{dx} \\\\
        &= (x^2 + c)4ax^3 \times (ax^4 + b)2x \\\\
        &= 4ax^5 + 4acx^3 + 2ax^5 + 2bx \\\\
        &= 6ax^5 + 4acx^3 + 2bx
        \end{align}

        $$

    <!--list-separator-->

    -  Quotient

        [Quotient rule]({{< relref "quotient_rule.md" >}})

    <!--list-separator-->

    -  Exercises III

<!--list-separator-->

-  Chapter VII

    <!--list-separator-->

    -  Exercises IV

<!--list-separator-->

-  Chapter VIII

    -   [Acceleration]({{< relref "acceleration.md" >}})
    -   [Velocity]({{< relref "velocity.md" >}})
    -   See [Leibniz's notation]({{< relref "leibniz_s_notation.md" >}}) and [Lagrange's notation]({{< relref "lagrange_s_notation.md" >}})

    <!--list-separator-->

    -  Exercises V

<!--list-separator-->

-  Chapter IX

    See [Chain rule]({{< relref "chain_rule.md" >}})

    <!--list-separator-->

    -  Exercises VI

    <!--list-separator-->

    -  Exercises VII

<!--list-separator-->

-  Chapter X

    -   [Tangent (Trigonometry)]({{< relref "tangent.md" >}})
    -   [Instantaneous rate of change]({{< relref "derivative.md" >}})

    <!--list-separator-->

    -  Exercises VIII

<!--list-separator-->

-  Chapter XI

    -   [Maxima and minima]({{< relref "maxima_and_minima.md" >}})

    <!--list-separator-->

    -  Exercises IX

<!--list-separator-->

-  Chapter XII

    <!--list-separator-->

    -  Exercises X

<!--list-separator-->

-  Chapter XIII

    <!--list-separator-->

    -  Partial Fractions.

    <!--list-separator-->

    -  Exercises XI

    <!--list-separator-->

    -  Differential of an Inverse Function.

<!--list-separator-->

-  Chapter XIV

    <!--list-separator-->

    -  Exercises XII

    <!--list-separator-->

    -  The Logarithmic Curve.

    <!--list-separator-->

    -  The Die-away Curve.

    <!--list-separator-->

    -  Exercises XIII

<!--list-separator-->

-  Chapter XV

    <!--list-separator-->

    -  Second Differential Coefficient of Sine or Cosine.

    <!--list-separator-->

    -  Exercises XIV

<!--list-separator-->

-  Chapter XVI

    <!--list-separator-->

    -  Maxima and Minima of Functions of two Independent Variables.

    <!--list-separator-->

    -  Exercises XV

<!--list-separator-->

-  Chapter XVII

    <!--list-separator-->

    -  Slopes of Curves, and the Curves themselves.

    <!--list-separator-->

    -  Exercises XVI

<!--list-separator-->

-  Chapter XVIII

    <!--list-separator-->

    -  Integration of the Sum or Difference of two Functions.

    <!--list-separator-->

    -  How to deal with Constant Terms.

    <!--list-separator-->

    -  Some other Integrals.

    <!--list-separator-->

    -  On Double and Triple Integrals.

    <!--list-separator-->

    -  Exercises XVII

<!--list-separator-->

-  Chapter XIX

    <!--list-separator-->

    -  Areas in Polar Coordinates.

    <!--list-separator-->

    -  Volumes by Integration.

    <!--list-separator-->

    -  On Quadratic Means.

    <!--list-separator-->

    -  Exercises XVIII

<!--list-separator-->

-  Chapter XX

    <!--list-separator-->

    -  Exercises XIX

<!--list-separator-->

-  Chapter XXI


#### Back Matter {#back-matter}

<!--list-separator-->

-  Epilogue and Apologue

<!--list-separator-->

-  Table of Standard Forms

<!--list-separator-->

-  Answers

<!--list-separator-->

-  Catalogue

<!--list-separator-->

-  Transcriber's Note

<!--list-separator-->

-  License


## Bibliography {#bibliography}

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Thompson, Silvanus. 1914. <i>Calculus Made Easy</i>.</div>
</div>
