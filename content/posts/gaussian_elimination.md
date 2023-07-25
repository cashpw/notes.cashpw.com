+++
title = "Gaussian elimination"
author = ["Cash Prokop-Weaver"]
date = 2022-12-24T11:06:00-08:00
lastmod = 2023-07-25T10:42:16-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "b59377a2-c3af-4647-b74b-2c38bd4f8c7a"
+++

> In mathematics, Gaussian elimination, also known as row reduction, is an algorithm for solving systems of linear equations. It consists of a sequence of operations performed on the corresponding matrix of coefficients. This method can also be used to compute the rank of a matrix, the determinant of a square matrix, and the inverse of an invertible matrix. [...]
>
> To perform row reduction on a matrix, one uses a sequence of elementary row operations to modify the matrix until the lower left-hand corner of the matrix is filled with zeros, as much as possible. There are three types of elementary row operations:
>
> -   Swapping two rows,
> -   Multiplying a row by a nonzero number,
> -   Adding a multiple of one row to another row. (subtraction can be achieved by multiplying one row with -1 and adding the result to another row)
>
> (<a href="#citeproc_bib_item_1">“Gaussian Elimination” 2022</a>)


## Flashcards {#flashcards}


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.80 | 8   | 235.54   | 2023-08-13T05:39:57Z |
| back     | 2.50 | 8   | 240.92   | 2023-09-03T13:16:02Z |

[Gaussian elimination]({{< relref "gaussian_elimination.md" >}})


#### Back {#back}

An algorithm for solving a system of linear equations consisting of three operations:

1.  swapping rows
2.  multiplying a row by a nonzero scalar
3.  adding a scalar multiple of one row to another row.

It reduces a given matrix to [Row echelon form]({{< relref "row_echelon_form.md" >}}) (upper triangular), and can further reduce it to [Reduced row echelon form]({{< relref "row_echelon_form.md#reduced-row-echelon-form" >}}).


### Definition {#definition}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.35 | 8   | 191.52   | 2023-06-10T05:46:59Z |
| front    | 2.65 | 8   | 196.84   | 2023-06-01T09:58:05Z |

Reduced row echelon form


#### Back {#back}

The state of a matrix when:

-   it is in row echelon form
-   all leading coefficients are 1
-   each column which contains a leading coefficient has only one nonzero value


#### Source {#source}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Gaussian Elimination.” 2022. <i>Wikipedia</i>, July. <a href="https://en.wikipedia.org/w/index.php?title=Gaussian_elimination&oldid=1100872918">https://en.wikipedia.org/w/index.php?title=Gaussian_elimination&#38;oldid=1100872918</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Row echelon form]({{< relref "row_echelon_form.md" >}})
