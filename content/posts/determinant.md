+++
title = "Determinant"
author = ["Cash Prokop-Weaver"]
date = 2022-07-29T07:35:00-07:00
lastmod = 2022-12-17T11:10:16-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "dd4f5aad-c5ac-4cc3-a1c4-38607969f3c2"
+++

> In mathematics, the determinant is a scalar value that is a function of the entries of a [Square matrix]({{< relref "square_matrix.md" >}}). It allows characterizing some properties of the [Matrix]({{< relref "matrix.md" >}}) and the linear map represented by the matrix. In particular, the determinant is nonzero if and only if the matrix is [an [Invertible matrix]({{< relref "non_singular_matrix.md" >}})] and the linear map represented by the matrix is an isomorphism. The determinant of a product of matrices is the product of their determinants (the preceding property is a corollary of this one). The determinant of a matrix A is denoted \\(\determinant{A}\\), \\(\operatorname{det} A\\), or \\(|A|\\).
>
> (<a href="#citeproc_bib_item_1">“Determinant” 2022</a>)


## \\(\determinant{A\_{2 \times 2}}\\) {#determinant-a-2-times-2}

\\[\determinant{\begin{bmatrix}a & b \\\ c & d\end{bmatrix}} = ad - bc\\]


## \\(\determinant{A\_{3 \times 3}}\\) {#determinant-a-3-times-3}

\\[\determinant{\begin{bmatrix}a & b &c \\\ d & e & f \\\ g & h & i\end{bmatrix}} = a \determinant{\begin{bmatrix}e & f \\\ h & i\end{bmatrix}} - b \determinant{\begin{bmatrix}d & f \\\ g & i\end{bmatrix}} + c \determinant{\begin{bmatrix}d & e \\\ g & h\end{bmatrix}}\\]

> Each determinant of a \\(2 \times 2\\) matrix in this equation is called a minor of the matrix \\(A\\). This procedure can be extended to give a recursive definition for the determinant of an \\(n \times n\\) matrix, known as Laplace expansion.
>
> (<a href="#citeproc_bib_item_1">“Determinant” 2022</a>)


## Geometric meaning {#geometric-meaning}

The absolute value of \\(\determinant{A}\\) represents the factor by which \\(A\\) scales areas.


## Properties {#properties}

-   The determinant of a matrix composed of linearly dependent row-vectors or column vectors is 0
-   \\(\operatorname{det}(I) = 1\\)
-   \\(\operatorname{det}(\begin{bmatrix}a & . & .\\\ b & . & . \\\ c & . & . \end{bmatrix}) = x\\), \\(\operatorname{det}(\begin{bmatrix}ra & . & .\\\ rb & . & . \\\ rc & . & . \end{bmatrix}) = rx\\)


## Flashcards {#flashcards}


### Denotes {#denotes}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 8   | 183.39   | 2023-05-09T07:21:40Z |
| 2        | 2.65 | 5   | 41.48    | 2023-01-23T13:54:28Z |
| 1        | 2.65 | 7   | 128.09   | 2023-03-22T17:50:33Z |

-   {{\\(\determinant{M}\\)}@0}
-   {{\\(|M|\\)}@2}

{{The determinant of the matrix \\(M\\)}@1}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Determinant” 2022</a>)


### Algorithm {#algorithm}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.35 | 5   | 36.89    | 2022-12-28T23:28:59Z |
| back     | 2.35 | 6   | 98.80    | 2023-01-29T10:21:13Z |

Calculate [Determinant]({{< relref "determinant.md" >}}) of a matrix, \\(A\_{n \times m}\\), using Gaussian elimination


#### Back {#back}

1.  Reduce \\(A\\) to row echelon form, \\(B\\), using gaussian elimination. Keep track of the number of row swaps and the scaling factors used.
2.  \\(\begin{aligned} \determinant{A} &= -1 \* \text{number of row swaps} \\\ & \* \text{product of B's main diagonal}\\\ & \* \text{product of scaling factors} \\\ &= -1^r(\prod{\operatorname{diag}(B)})(\prod s) \end{aligned}\\)


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Determinant” 2022</a>)


### Equivalence {#equivalence}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 5   | 47.47    | 2023-01-27T05:04:37Z |

-   \\(\determinant{\begin{bmatrix}a & b \\\ c & d\end{bmatrix}}\\) \\(=\\) {{\\(ad - bc\\)}@0}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Determinant” 2022</a>)


### Equivalence {#equivalence}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 4   | 17.89    | 2022-12-18T13:31:57Z |

\\(\determinant{\begin{bmatrix}a & b &c \\\ d & e & f \\\ g & h & i\end{bmatrix}}\\) \\(=\\) {{\\(a \determinant{\begin{bmatrix}e & f \\\ h & i\end{bmatrix}}\\) \\(-\\) \\(b \determinant{\begin{bmatrix}d & f \\\ g & i\end{bmatrix}}\\) \\(+\\) \\(c \determinant{\begin{bmatrix}d & e \\\ g & h\end{bmatrix}}\\)}@0}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Determinant” 2022</a>)


### Equivalence {#equivalence}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.35 | 5   | 38.01    | 2023-01-02T15:48:56Z |

-   \\(\determinant{I}\\) \\(=\\) {{\\(1\\)}@0}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Determinant” 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.95 | 5   | 50.15    | 2023-01-27T21:30:56Z |
| back     | 2.35 | 3   | 6.00     | 2022-11-28T02:00:13Z |

Geometric meaning of [Determinant]({{< relref "determinant.md" >}}).


#### Back {#back}

The absolute value of \\(\determinant{A}\\) represents the factor by which \\(A\\) scales areas/volumes.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Determinant” 2022</a>)


### \\(\determinant{A}\\) {{\\(\neq\\)}@1} \\(0\\) \\(\iff\\) {{\\(A\\) is an [non-singular]({{< relref "non_singular_matrix.md" >}})}@0} {#determinant-a-neq-1-0-iff-a-is-an-non-singular--non-singular-matrix-dot-md--0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 1        | 2.65 | 5   | 49.53    | 2023-01-28T11:27:30Z |
| 0        | 2.35 | 3   | 6.00     | 2022-12-13T15:41:26Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Determinant” 2022</a>)


### \\(\determinant{A}\\) {{\\(=\\)}@1} \\(0\\) \\(\iff\\) {{\\(A\\) is [singular]({{< relref "singular_matrix.md" >}})}@0} {#determinant-a-1-0-iff-a-is-singular--singular-matrix-dot-md--0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 1        | 2.20 | 4   | 12.22    | 2022-12-22T23:14:37Z |
| 0        | 2.50 | 4   | 15.18    | 2022-12-31T22:20:14Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Determinant” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Determinant.” 2022. <i>Wikipedia</i>, July. <a href="https://en.wikipedia.org/w/index.php?title=Determinant&oldid=1099706940">https://en.wikipedia.org/w/index.php?title=Determinant&#38;oldid=1099706940</a>.</div>
</div>
