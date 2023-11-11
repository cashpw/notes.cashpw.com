+++
title = "Determinant"
author = ["Cash Prokop-Weaver"]
date = 2022-07-29T07:35:00-07:00
lastmod = 2023-11-10T10:40:31-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "dd4f5aad-c5ac-4cc3-a1c4-38607969f3c2"
+++

> In mathematics, the determinant is a scalar value that is a function of the entries of a [Square matrix]({{< relref "square_matrix.md" >}}). It allows characterizing some properties of the [Matrix]({{< relref "matrix.md" >}}) and the linear map represented by the matrix. In particular, the determinant is nonzero if and only if the matrix is [an [Invertible matrix]({{< relref "non_singular_matrix.md" >}})] and the linear map represented by the matrix is an isomorphism. The determinant of a product of matrices is the product of their determinants (the preceding property is a corollary of this one). The determinant of a matrix A is denoted \\(\determinant{A}\\), \\(\operatorname{det} A\\), or \\(|A|\\).
>
> (“Determinant” 2022)


## \\(\determinant{A\_{2 \times 2}}\\) {#determinant-a-2-times-2}

\\[\determinant{\begin{bmatrix}a & b \\\ c & d\end{bmatrix}} = ad - bc\\]


## \\(\determinant{A\_{3 \times 3}}\\) {#determinant-a-3-times-3}

\\[\determinant{\begin{bmatrix}a & b &c \\\ d & e & f \\\ g & h & i\end{bmatrix}} = a \determinant{\begin{bmatrix}e & f \\\ h & i\end{bmatrix}} - b \determinant{\begin{bmatrix}d & f \\\ g & i\end{bmatrix}} + c \determinant{\begin{bmatrix}d & e \\\ g & h\end{bmatrix}}\\]

> Each determinant of a \\(2 \times 2\\) matrix in this equation is called a minor of the matrix \\(A\\). This procedure can be extended to give a recursive definition for the determinant of an \\(n \times n\\) matrix, known as Laplace expansion.
>
> (“Determinant” 2022)


## Geometric meaning {#geometric-meaning}

The absolute value of \\(\determinant{A}\\) represents the factor by which \\(A\\) scales areas.


## Properties {#properties}

-   The determinant of a matrix composed of linearly dependent row-vectors or column vectors is 0
-   \\(\operatorname{det}(I) = 1\\)
-   \\(\operatorname{det}(\begin{bmatrix}a & . & .\\\ b & . & . \\\ c & . & . \end{bmatrix}) = x\\), \\(\operatorname{det}(\begin{bmatrix}ra & . & .\\\ rb & . & . \\\ rc & . & . \end{bmatrix}) = rx\\)
