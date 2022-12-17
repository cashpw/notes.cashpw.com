+++
title = "Option (finance)"
author = ["Cash Prokop-Weaver"]
date = 2022-11-06T17:29:00-08:00
lastmod = 2022-12-17T13:59:54-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "1263eb22-a819-43e6-9ab4-d45f790b095f"
+++

> In finance, an option is a contract which conveys to its owner, the holder, the right, but not the obligation, to buy or sell a specific quantity of an underlying asset or instrument at a specified strike price on or before a specified date, depending on the style of the option.
>
> (<a href="#citeproc_bib_item_2">“Option (Finance)” 2022</a>)


## Types {#types}

-   [Put option]({{< relref "put_option.md" >}})
-   [Call option]({{< relref "call_option.md" >}})


## Value {#value}

> In [Black--Scholes](https://en.wikipedia.org/wiki/Black%E2%80%93Scholes) pricing of options, omitting interest rates and the first derivative, the Black--Scholes equation reduces to \\(\Theta = - \Gamma\\), "(infinitesimally) the time value is the convexity". That is, the value of an option is due to the convexity of the ultimate payout: one has the _option_ to buy an asset or not (in a call; for a put it is an option to sell), and the ultimate payout function (a [hockey stick](https://en.wikipedia.org/wiki/Hockey_stick) shape) is convex -- "optionality" corresponds to convexity in the payout. Thus, if one purchases a call option, the expected value of the option is _higher_ than simply taking the expected future value of the underlying and inputting it into the option payout function: the expected value of a convex function is higher than the function of the expected value (Jensen inequality). The price of the option -- the value of the optionality -- thus reflects the convexity of the payoff function.
>
> (<a href="#citeproc_bib_item_1">“Convexity (Finance)” 2022</a>)


## Styles {#styles}


### American options {#american-options}

> An American option [...] may be exercised at any time before the expiration date.
>
> (<a href="#citeproc_bib_item_3">“Option Style” 2022</a>)


### European options {#european-options}

> A European option may be exercised only at the expiration date of the option, i.e. at a single pre-defined point in time.
>
> (<a href="#citeproc_bib_item_3">“Option Style” 2022</a>)


## Flashcards {#flashcards}


### The value of an [option]({{< relref "option.md" >}}) comes from {{the convexity of the ultimate payout.}@0} {#the-value-of-an-option--option-dot-md--comes-from-the-convexity-of-the-ultimate-payout-dot-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.35 | 3   | 6.00     | 2022-12-17T19:14:17Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Convexity (Finance)” 2022</a>)


### Compare and contrast {#compare-and-contrast}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.65 | 5   | 36.86    | 2023-01-16T12:52:41Z |

[American options](#american-options) and [European options](#european-options)


#### Back {#back}

-   American options may be exercised at any time before the expiration date
-   European options may **only** be exercised at the expiration date


#### Source {#source}

(<a href="#citeproc_bib_item_3">“Option Style” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Convexity (Finance).” 2022. <i>Wikipedia</i>, July. <a href="https://en.wikipedia.org/w/index.php?title=Convexity_(finance)&oldid=1101317587">https://en.wikipedia.org/w/index.php?title=Convexity_(finance)&#38;oldid=1101317587</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>“Option (Finance).” 2022. <i>Wikipedia</i>, September. <a href="https://en.wikipedia.org/w/index.php?title=Option_(finance)&oldid=1110213428">https://en.wikipedia.org/w/index.php?title=Option_(finance)&#38;oldid=1110213428</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_3"></a>“Option Style.” 2022. <i>Wikipedia</i>, November. <a href="https://en.wikipedia.org/w/index.php?title=Option_style&oldid=1119699571#American_and_European_options">https://en.wikipedia.org/w/index.php?title=Option_style&#38;oldid=1119699571#American_and_European_options</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Strike price]({{< relref "strike_price.md" >}})
-   [Gamma (finance)]({{< relref "gamma.md" >}})
-   [Option time value]({{< relref "time_value_finance.md" >}})
-   [Describe]({{< relref "time_value_finance.md#describe" >}})
-   [Option (finance) value and volatility are {{positively}{+/-}@0} correlated]({{< relref "vega_finance.md#id-1263eb22-a819-43e6-9ab4-d45f790b095f-option--finance--value-and-volatility-are-positively-plus-0-correlated" >}})
-   [Intrinsic value (finance)]({{< relref "intrinsic_value.md" >}})
-   [Delta (finance)]({{< relref "delta.md" >}})
