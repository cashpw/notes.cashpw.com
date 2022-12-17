+++
title = "Vega (finance)"
author = ["Cash Prokop-Weaver"]
date = 2022-11-06T17:40:00-08:00
lastmod = 2022-12-17T11:50:01-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "f54153f5-fc44-41ce-b4dd-4274c95fbcec"
+++

> Vega measures sensitivity to [volatility]({{< relref "volatility_finance.md" >}}). Vega is the derivative of the option value with respect to the [volatility]({{< relref "volatility_finance.md" >}}) of the underlying asset.
>
> \\(\mathcal{V} = \frac{\partial V}{\partial\sigma}\\)
>
> [...]
>
> Vega is typically expressed as the amount of money per underlying share that the option's value will gain or lose as volatility rises or falls by 1 [percentage point](https://en.wikipedia.org/wiki/Percentage_point). All options (both calls and puts) will gain value with rising volatility.
>
> Vega can be an important Greek to monitor for an option trader, especially in volatile markets, since the value of some option strategies can be particularly sensitive to changes in volatility.
>
> (<a href="#citeproc_bib_item_1">“Greeks (Finance)” 2022</a>)


## Flashcards {#flashcards}


### {{\\(\mathcal{V}\\)}@0} \\(=\\) {{\\(\frac{\partial V}{\partial\sigma}\\)}@1} {#mathcal-v-0-frac-partial-v-partial-sigma-1}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.05 | 5   | 29.83    | 2023-01-12T14:20:37Z |
| 1        | 2.20 | 1   | 1.00     | 2022-12-04T19:48:31Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Greeks (Finance)” 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.35 | 3   | 6.00     | 2022-12-21T20:33:41Z |
| back     | 2.5  | -1  | 0        | 2022-11-07T02:02:16Z |

[Vega (finance)]({{< relref "vega_finance.md" >}})


#### Back {#back}

-   The change in a [Derivative (finance)]({{< relref "derivative_finance.md" >}}) value per 1%-point change in the underlying asset's volatility
-   The [Derivative (math)]({{< relref "derivative.md" >}}) of the [Derivative (finance)]({{< relref "derivative_finance.md" >}}) value with respect to the underlying asset's volatility

\\(\mathcal{V} = \frac{\partial V}{\partial\sigma}\\)


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Greeks (Finance)” 2022</a>)


### [Option (finance)]({{< relref "option.md" >}}) value and volatility are {{positively}{+/-}@0} correlated {#option--finance----option-dot-md--value-and-volatility-are-positively-plus-0-correlated}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.35 | 5   | 34.81    | 2023-01-10T10:53:15Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Greeks (Finance)” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Greeks (Finance).” 2022. <i>Wikipedia</i>, October. <a href="https://en.wikipedia.org/w/index.php?title=Greeks_(finance)&oldid=1119146188">https://en.wikipedia.org/w/index.php?title=Greeks_(finance)&#38;oldid=1119146188</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Greeks (finance)]({{< relref "greeks_finance.md" >}})
