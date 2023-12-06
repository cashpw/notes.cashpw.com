+++
title = "Theta (finance)"
author = ["Cash Prokop-Weaver"]
date = 2022-11-06T17:40:00-08:00
lastmod = 2023-12-05T21:13:40-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "52a7a44e-dbca-4eae-974a-b7185c2c97b7"
+++

> [Theta](https://en.wikipedia.org/wiki/Theta_(letter)), \\(\Theta\\), measures the sensitivity of the value of the derivative to the passage of time (see [[Time value (finance)]({{< relref "time_value_finance.md" >}})]): the "time decay."
>
> \\(\Theta = - \frac{\partial V}{\partial\tau}\\)
>
> [...]
>
> The value of an option can be analysed into two parts: the [Intrinsic value (finance)]({{< relref "intrinsic_value.md" >}}) and the [Time value (finance)]({{< relref "time_value_finance.md" >}}). The intrinsic value is the amount of money you would gain if you exercised the option immediately, so a call with strike $50 on a stock with price $60 would have intrinsic value of $10, whereas the corresponding put would have zero intrinsic value. The time value is the value of having the option of waiting longer before deciding to exercise. Even a deeply [out of the money](https://en.wikipedia.org/wiki/Out_of_the_money) put will be worth something, as there is some chance the stock price will fall below the strike before the expiry date. However, as time approaches maturity, there is less chance of this happening, so the time value of an option is decreasing with time. Thus if you are long an option you are short theta: your portfolio will lose value with the passage of time (all other factors held constant).
>
> (<a href="#citeproc_bib_item_1">“Greeks (Finance)” 2022</a>)


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Greeks (Finance).” 2022. <i>Wikipedia</i>, October. <a href="https://en.wikipedia.org/w/index.php?title=Greeks_(finance)&oldid=1119146188">https://en.wikipedia.org/w/index.php?title=Greeks_(finance)&#38;oldid=1119146188</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Greeks (finance)]({{< relref "greeks_finance.md" >}})
