+++
title = "Vega (finance)"
author = ["Cash Prokop-Weaver"]
date = 2022-11-06T17:40:00-08:00
lastmod = 2023-08-02T13:01:22-07:00
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


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.05 | 8   | 220.76   | 2024-02-08T19:16:53Z |
| 1        | 1.30 | 8   | 20.11    | 2023-08-03T03:40:13Z |

(finance)

{{\\(\mathcal{V}\\)}@0} \\(=\\) {{\\(\frac{\partial V}{\partial\sigma}\\)}@1}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Greeks (Finance)” 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 7   | 195.69   | 2023-11-27T09:54:58Z |
| back     | 2.20 | 7   | 175.97   | 2023-11-15T19:26:52Z |

[Vega (finance)]({{< relref "vega_finance.md" >}})


#### Back {#back}

-   The change in a [Derivative (finance)]({{< relref "derivative_finance.md" >}}) value per 1%-point change in the underlying asset's volatility
-   The [Derivative (math)]({{< relref "derivative.md" >}}) of the [Derivative (finance)]({{< relref "derivative_finance.md" >}}) value with respect to the underlying asset's volatility

\\(\mathcal{V} = \frac{\partial V}{\partial\sigma}\\)


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Greeks (Finance)” 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.20 | 7   | 148.13   | 2023-08-16T20:35:53Z |

[Option (finance)]({{< relref "option.md" >}}) value and volatility are {{positively}{+/-}@0} correlated


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Greeks (Finance)” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Greeks (Finance).” 2022. <i>Wikipedia</i>, October. <a href="https://en.wikipedia.org/w/index.php?title=Greeks_(finance)&oldid=1119146188">https://en.wikipedia.org/w/index.php?title=Greeks_(finance)&#38;oldid=1119146188</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Greeks (finance)]({{< relref "greeks_finance.md" >}})
