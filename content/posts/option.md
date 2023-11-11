+++
title = "Option (finance)"
author = ["Cash Prokop-Weaver"]
date = 2022-11-06T17:29:00-08:00
lastmod = 2023-11-10T11:08:30-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "1263eb22-a819-43e6-9ab4-d45f790b095f"
+++

> In finance, an option is a contract which conveys to its owner, the holder, the right, but not the obligation, to buy or sell a specific quantity of an underlying asset or instrument at a specified strike price on or before a specified date, depending on the style of the option.
>
> (“Option (Finance)” 2022)


## Types {#types}

-   [Put option]({{< relref "put_option.md" >}})
-   [Call option]({{< relref "call_option.md" >}})


## Value {#value}

> In [Black--Scholes](https://en.wikipedia.org/wiki/Black%E2%80%93Scholes) pricing of options, omitting interest rates and the first derivative, the Black--Scholes equation reduces to \\(\Theta = - \Gamma\\), "(infinitesimally) the time value is the convexity". That is, the value of an option is due to the convexity of the ultimate payout: one has the _option_ to buy an asset or not (in a call; for a put it is an option to sell), and the ultimate payout function (a [hockey stick](https://en.wikipedia.org/wiki/Hockey_stick) shape) is convex -- "optionality" corresponds to convexity in the payout. Thus, if one purchases a call option, the expected value of the option is _higher_ than simply taking the expected future value of the underlying and inputting it into the option payout function: the expected value of a convex function is higher than the function of the expected value (Jensen inequality). The price of the option -- the value of the optionality -- thus reflects the convexity of the payoff function.
>
> (“Convexity (Finance)” 2022)


## Styles {#styles}


### American options {#american-options}

> An American option [...] may be exercised at any time before the expiration date.
>
> (“Option Style” 2022)


### European options {#european-options}

> A European option may be exercised only at the expiration date of the option, i.e. at a single pre-defined point in time.
>
> (“Option Style” 2022)


## Backlinks {#backlinks}

-   [Vega (finance)]({{< relref "vega_finance.md" >}})
-   [Option time value]({{< relref "time_value_finance.md" >}})
-   [Intrinsic value (finance)]({{< relref "intrinsic_value.md" >}})
-   [Strike price]({{< relref "strike_price.md" >}})
-   [Delta (finance)]({{< relref "delta.md" >}})
-   [Gamma (finance)]({{< relref "gamma.md" >}})
