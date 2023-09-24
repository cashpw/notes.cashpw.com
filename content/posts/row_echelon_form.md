+++
title = "Row echelon form"
author = ["Cash Prokop-Weaver"]
date = 2022-12-24T11:02:00-08:00
lastmod = 2023-09-24T10:42:35-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "2b33e0aa-52e7-404b-90f0-34f6468389c0"
+++

> In linear algebra, a matrix is in echelon form if it has the shape resulting from a Gaussian elimination [[Gaussian elimination]({{< relref "gaussian_elimination.md" >}})].
>
> A matrix being in row echelon form means that Gaussian elimination has operated on the rows, and column echelon form means that Gaussian elimination has operated on the columns. In other words, a matrix is in column echelon form if its transpose is in row echelon form. Therefore, only row echelon forms are considered in the remainder of this article. The similar properties of column echelon form are easily deduced by transposing all the matrices. Specifically, a matrix is in row echelon form if
>
> -   All rows consisting of only zeroes are at the bottom.
> -   The leading entry (that is the left-most nonzero entry) of every nonzero row is to the right the leading entry of every row above.
>
> (<a href="#citeproc_bib_item_1">“Row Echelon Form” 2022</a>)


## Reduced row echelon form {#reduced-row-echelon-form}

> A matrix is in reduced row echelon form (also called row canonical form) if it satisfies the following conditions:
>
> -   It is in row echelon form.
> -   The leading entry in each nonzero row is a 1 (called a leading 1).
> -   Each column containing a leading 1 has zeros in all its other entries.
>
> (<a href="#citeproc_bib_item_1">“Row Echelon Form” 2022</a>)


## Flashcards {#flashcards}


### Definition (Linear algebra) {#definition--linear-algebra}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.65 | 9   | 525.28   | 2024-12-16T22:27:22Z |
| front    | 2.65 | 9   | 563.78   | 2024-11-16T20:04:04Z |

[Reduced row echelon form](#reduced-row-echelon-form)


#### Back {#back}

The state of a matrix when:

-   it is in row echelon form
-   all leading coefficients are 1
-   each column which contains a leading coefficient has only one nonzero value


#### Source {#source}


### Properties {#properties}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 7   | 292.89   | 2024-01-20T14:22:09Z |
| 1        | 2.80 | 7   | 242.92   | 2023-11-12T13:23:34Z |
| 2        | 2.50 | 7   | 304.13   | 2024-03-09T19:24:51Z |

-   {{In row echelon form}@0}
-   {{All leading coefficients are 1}@1}
-   {{Each column containing a leading coefficient has only one nonzero value}@2}

[Reduced row echelon form](#reduced-row-echelon-form)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Row Echelon Form.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Row_echelon_form&oldid=1127905349">https://en.wikipedia.org/w/index.php?title=Row_echelon_form&#38;oldid=1127905349</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Gaussian elimination]({{< relref "gaussian_elimination.md" >}})
