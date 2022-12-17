+++
title = "IEEE 754"
author = ["Cash Prokop-Weaver"]
date = 2022-07-24T10:52:00-07:00
lastmod = 2022-12-17T13:48:16-08:00
tags = ["has-todo", "concept", "has-todo", "concept"]
categories = ["has-todo", "concept"]
draft = false
slug = "23e97230-9b73-4232-a76e-a1223b9bb70e"
+++

[Institute of electrical and electronics engineers]({{< relref "institute_of_electrical_and_electronics_engineers.md" >}})'s standard for floating-point arithmetic defines, among other things:

-   single (32 bit) and double (64 bit) precision floating point number representations


## Single-precision floating-point number {#single-precision-floating-point-number}


## Double-precision floating-point number {#double-precision-floating-point-number}


## Flashcards {#flashcards}


### [IEEE 754]({{< relref "ieee_754.md" >}}) divides the bits composing a floating-point number into groups: {{sign}@0}, {{exponent}@1}, and {{mantissa}@2}. {#ieee-754--ieee-754-dot-md--divides-the-bits-composing-a-floating-point-number-into-groups-sign-0-exponent-1-and-mantissa-2-dot}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 5   | 40.27    | 2023-01-11T00:08:07Z |
| 1        | 2.65 | 7   | 131.97   | 2023-03-20T15:22:54Z |
| 2        | 2.65 | 7   | 162.36   | 2023-04-22T01:59:24Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_2">“IEEE 754” 2022</a>)


### IEEE 754 divides the bits composing a floating-point number into groups: {{sign, exponent, and mantissa}@0}. {#ieee-754-divides-the-bits-composing-a-floating-point-number-into-groups-sign-exponent-and-mantissa-0-dot}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 8   | 227.34   | 2023-07-24T04:20:25Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_2">“IEEE 754” 2022</a>)


### {{[IEEE 754]({{< relref "ieee_754.md" >}}) [Double-precision floating-point number](#double-precision-floating-point-number)}@0} are composed of {#ieee-754--ieee-754-dot-md--double-precision-floating-point-number--org3eff986--0-are-composed-of}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 3        | 2.65 | 9   | 126.04   | 2023-02-17T02:18:55Z |
| 2        | 2.35 | 7   | 125.37   | 2023-03-09T01:36:49Z |
| 1        | 2.65 | 8   | 118.85   | 2023-03-05T13:09:22Z |
| 0        | 2.50 | 4   | 15.12    | 2022-12-15T19:29:12Z |

-   {{1 sign bit}@1}
-   {{11 exponent bits}@2}
-   {{52 singnificand bits}@3}


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_2">“IEEE 754” 2022</a>)


### {{[IEEE 754]({{< relref "ieee_754.md" >}}) [Single-precision floating-point numbers](#single-precision-floating-point-number)}@0} are composed of {#ieee-754--ieee-754-dot-md--single-precision-floating-point-numbers--orgcba2f1d--0-are-composed-of}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 6   | 112.72   | 2023-03-01T09:23:26Z |
| 1        | 2.65 | 8   | 164.27   | 2023-04-14T22:48:17Z |
| 2        | 2.65 | 12  | 125.84   | 2023-03-01T11:31:18Z |
| 3        | 2.65 | 8   | 197.41   | 2023-06-11T01:19:24Z |

-   {{1 sign bit}@1}
-   {{8 exponent bits}@2}
-   {{23 singnificand bits}@3}


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_2">“IEEE 754” 2022</a>)


### Denotes {#denotes}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.45 | 10  | 92.96    | 2023-02-04T15:31:09Z |
| 1        | 2.65 | 7   | 136.72   | 2023-03-21T17:41:08Z |

-   {{[IEEE 754]({{< relref "ieee_754.md" >}})}@0}

{{[IEEE standard for floating-point arithmetic]({{< relref "ieee_754.md" >}})}@1}


#### Source {#source}

(<a href="#citeproc_bib_item_2">“IEEE 754” 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.65 | 8   | 144.17   | 2023-03-11T19:18:13Z |
| back     | 2.35 | 7   | 129.87   | 2023-03-18T13:09:04Z |

Fixed-point number representation


#### Back {#back}

Represents a fractional number by scaling a stored integer by an implicit specific factor.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Fixed-Point Arithmetic” 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.65 | 7   | 147.32   | 2023-03-07T00:07:48Z |
| back     | 2.35 | 9   | 196.20   | 2023-06-20T18:50:31Z |

Floating-point number representation


#### Back {#back}

Represents a number using a significand and an exponent: \\(\text{significand} \times \text{base}^{\text{exponent}}\\)


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Fixed-Point Arithmetic” 2022</a>)


### AKA {#aka}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 9   | 161.61   | 2023-04-12T07:02:04Z |
| 1        | 2.65 | 9   | 197.59   | 2023-05-31T06:30:39Z |

-   {{[IEEE 754]({{< relref "ieee_754.md" >}}) [Double-precision floating-point number](#double-precision-floating-point-number)}@0}
-   {{\\(\texttt{binary64}\\)}@1}


#### Source {#source}

(<a href="#citeproc_bib_item_2">“IEEE 754” 2022</a>)


### AKA {#aka}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.95 | 5   | 49.07    | 2023-01-19T19:22:08Z |
| 1        | 2.65 | 3   | 6.00     | 2022-12-14T17:59:09Z |

-   {{[IEEE 754]({{< relref "ieee_754.md" >}}) [Single-precision floating-point number](#single-precision-floating-point-number)}@0}
-   {{\\(\texttt{binary32}\\)}@1}


#### Source {#source}

(<a href="#citeproc_bib_item_2">“IEEE 754” 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.65 | 5   | 42.31    | 2023-01-01T00:01:31Z |
| back     | 2.65 | 5   | 40.33    | 2023-01-20T00:06:52Z |

[Single-precision floating-point number](#single-precision-floating-point-number)


#### Back {#back}

32 bits divided into three groups:

1.  1 sign bit
2.  8 exponent bits
3.  23 significand bits


#### Source {#source}

(<a href="#citeproc_bib_item_2">“IEEE 754” 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.80 | 6   | 89.24    | 2023-01-26T21:37:50Z |
| back     | 2.80 | 6   | 112.42   | 2023-04-02T04:28:11Z |

[Double-precision floating-point number](#double-precision-floating-point-number)


#### Back {#back}

64 bits divided into three groups:

1.  1 sign bit
2.  11 exponent bits
3.  52 significand bits


#### Source {#source}

(<a href="#citeproc_bib_item_2">“IEEE 754” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Fixed-Point Arithmetic.” 2022. <i>Wikipedia</i>, July. <a href="https://en.wikipedia.org/w/index.php?title=Fixed-point_arithmetic&oldid=1098963796">https://en.wikipedia.org/w/index.php?title=Fixed-point_arithmetic&#38;oldid=1098963796</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>“IEEE 754.” 2022. <i>Wikipedia</i>, July. <a href="https://en.wikipedia.org/w/index.php?title=IEEE_754&oldid=1096894205">https://en.wikipedia.org/w/index.php?title=IEEE_754&#38;oldid=1096894205</a>.</div>
</div>
