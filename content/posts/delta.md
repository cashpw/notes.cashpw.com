+++
title = "Delta (finance)"
author = ["Cash Prokop-Weaver"]
date = 2022-11-06T17:18:00-08:00
lastmod = 2023-09-24T10:05:40-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "ef21ad22-553d-432e-a4e2-bdc404009c87"
+++

> Delta (Δ) is a risk metric that estimates the change in price of a derivative, such as an [options]({{< relref "option.md" >}}) contract, given a $1 change in its underlying security.
>
> (<a href="#citeproc_bib_item_2">“What Is Delta in Derivatives Trading, and How Does It Work?” n.d.</a>)

<!--quoteend-->

> Delta, \\(\Delta\\), measures the rate of change of the theoretical option value with respect to changes in the underlying asset's price. Delta is the first derivative of the value \\(V\\) of the option with respect to the underlying instrument's price \\(S\\).
>
> \\(\Delta = \frac{\partial V}{\partial S}\\)
>
> (<a href="#citeproc_bib_item_1">“Greeks (Finance)” 2022</a>)

Delta is the sensitivity of the derivative's spot price to the underlying value.

-   Delta for [Call options]({{< relref "call_option.md" >}}) range from [0, 1]
-   Delta for [Put options]({{< relref "put_option.md" >}}) range from [-1, 0]


## Flashcards {#flashcards}


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.35 | 7   | 250.95   | 2024-01-06T17:32:30Z |
| back     | 2.65 | 7   | 209.60   | 2023-11-27T13:50:05Z |

[Delta (options)]({{< relref "delta.md" >}})


#### Back {#back}

-   Estimates the change in price for a derivative given a 1-point change in its underlying security.
-   The first derivative of a derivative's value, \\(V\\), with respect to the underlying instrument's price, \\(S\\)

\\(\dots = \frac{\partial V}{\partial S}\\)


#### Source {#source}

(<a href="#citeproc_bib_item_2">“What Is Delta in Derivatives Trading, and How Does It Work?” n.d.</a>)


### The range of [Delta (options)]({{< relref "delta.md" >}}) for a {{[Call option]({{< relref "call_option.md" >}})}@1} is {{[0, 1]}@0} {#the-range-of-delta--options----delta-dot-md--for-a-call-option--call-option-dot-md--1-is-0-1-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 1        | 2.80 | 7   | 402.58   | 2024-08-16T05:30:11Z |
| 0        | 2.20 | 6   | 74.96    | 2023-10-15T00:29:58Z |


#### Source {#source}

(<a href="#citeproc_bib_item_2">“What Is Delta in Derivatives Trading, and How Does It Work?” n.d.</a>)


### The range of [Delta (options)]({{< relref "delta.md" >}}) for a {{[Put option]({{< relref "put_option.md" >}})}@1} is {{[-1, 0]}@0} {#the-range-of-delta--options----delta-dot-md--for-a-put-option--put-option-dot-md--1-is-1-0-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 1        | 2.80 | 7   | 379.00   | 2024-06-29T14:02:39Z |
| 0        | 1.75 | 8   | 140.28   | 2023-10-23T06:48:56Z |


#### Source {#source}

(<a href="#citeproc_bib_item_2">“What Is Delta in Derivatives Trading, and How Does It Work?” n.d.</a>)


### A [Delta (options)]({{< relref "delta.md" >}}) of +0.30 for a [option]({{< relref "call_option.md" >}}) implies {{the value of the option will rise 0.30-points for every 1-point rise in the underlying security}@0} {#a-delta--options----delta-dot-md--of-plus-0-dot-30-for-a-option--call-option-dot-md--implies-the-value-of-the-option-will-rise-0-dot-30-points-for-every-1-point-rise-in-the-underlying-security-0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.35 | 7   | 178.44   | 2023-09-24T01:28:11Z |


#### Source {#source}

(<a href="#citeproc_bib_item_2">“What Is Delta in Derivatives Trading, and How Does It Work?” n.d.</a>)


### (Finance) {{\\(\Delta\\)}@0} \\(=\\) {{\\(\frac{\partial V}{\partial S}\\)}@1} {#finance--delta-0-frac-partial-v-partial-s-1}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.95 | 7   | 374.06   | 2024-06-21T01:33:00Z |
| 1        | 2.35 | 7   | 149.58   | 2023-10-07T05:48:44Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Greeks (Finance)” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Greeks (Finance).” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Greeks_(finance)&oldid=1119146188">https://en.wikipedia.org/w/index.php?title=Greeks_(finance)&#38;oldid=1119146188</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>“What Is Delta in Derivatives Trading, and How Does It Work?” n.d. Investopedia. Accessed November 7, 2022. <a href="https://www.investopedia.com/terms/d/delta.asp">https://www.investopedia.com/terms/d/delta.asp</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Greeks (finance)]({{< relref "greeks_finance.md" >}})
-   [Gamma (finance)]({{< relref "gamma.md" >}})
