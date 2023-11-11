+++
title = "Row echelon form"
author = ["Cash Prokop-Weaver"]
date = 2022-12-24T11:02:00-08:00
lastmod = 2023-11-10T11:14:28-08:00
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
> (“Row Echelon Form” 2022)


## Reduced row echelon form {#reduced-row-echelon-form}

> A matrix is in reduced row echelon form (also called row canonical form) if it satisfies the following conditions:
>
> -   It is in row echelon form.
> -   The leading entry in each nonzero row is a 1 (called a leading 1).
> -   Each column containing a leading 1 has zeros in all its other entries.
>
> (“Row Echelon Form” 2022)


## Backlinks {#backlinks}

-   [Gaussian elimination]({{< relref "gaussian_elimination.md" >}})
