+++
title = "Determinant"
author = ["Cash Prokop-Weaver"]
date = 2022-07-29T07:35:00-07:00
lastmod = 2023-08-02T10:49:17-07:00
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
| 0        | 2.65 | 9   | 487.98   | 2024-09-08T16:10:32Z |
| 2        | 2.80 | 7   | 339.42   | 2024-04-24T23:11:40Z |
| 1        | 2.65 | 8   | 352.12   | 2024-03-12T16:24:07Z |

-   {{\\(\determinant{M}\\)}@0}
-   {{\\(|M|\\)}@2}

{{The determinant of the matrix \\(M\\)}@1}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Determinant” 2022</a>)


### Algorithm {#algorithm}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 1.90 | 7   | 98.72    | 2023-10-29T21:08:31Z |
| back     | 2.50 | 7   | 246.00   | 2023-10-03T02:24:48Z |

Calculate [Determinant]({{< relref "determinant.md" >}}) of a matrix, \\(A\_{n \times m}\\), using Gaussian elimination


#### Back {#back}

1.  Reduce \\(A\\) to row echelon form, \\(B\\), using gaussian elimination. Keep track of the number of row swaps and the scaling factors used.
2.  \\(\begin{aligned} \determinant{A} &= -1 \* \text{number of row swaps} \\\ & \* \text{product of B's main diagonal}\\\ & \* \text{product of scaling factors} \\\ &= -1^r(\prod{\operatorname{diag}(B)})(\prod s) \end{aligned}\\)


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Determinant” 2022</a>)


### Equivalence {#equivalence}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 7   | 365.95   | 2024-06-13T13:38:18Z |

-   \\(\determinant{\begin{bmatrix}a & b \\\ c & d\end{bmatrix}}\\) \\(=\\) {{\\(ad - bc\\)}@0}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Determinant” 2022</a>)


### Equivalence {#equivalence}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.20 | 7   | 179.89   | 2023-11-28T22:28:56Z |

\\(\determinant{\begin{bmatrix}a & b &c \\\ d & e & f \\\ g & h & i\end{bmatrix}}\\) \\(=\\) {{\\(a \determinant{\begin{bmatrix}e & f \\\ h & i\end{bmatrix}}\\) \\(-\\) \\(b \determinant{\begin{bmatrix}d & f \\\ g & i\end{bmatrix}}\\) \\(+\\) \\(c \determinant{\begin{bmatrix}d & e \\\ g & h\end{bmatrix}}\\)}@0}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Determinant” 2022</a>)


### Equivalence {#equivalence}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.05 | 7   | 166.58   | 2023-09-16T07:02:12Z |

-   \\(\determinant{I}\\) \\(=\\) {{\\(1\\)}@0}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Determinant” 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 7   | 347.81   | 2024-04-20T12:34:18Z |
| 1        | 1.90 | 8   | 162.88   | 2023-12-05T14:23:22Z |

{{\\(|\operatorname{det}(A)|\\)}@0} represents {{the factor by which \\(A\\) scales areas/volumes}{geometric}@1}.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Determinant” 2022</a>)


### \\(\determinant{A}\\) {{\\(\neq\\)}@1} \\(0\\) \\(\iff\\) {{\\(A\\) is an [non-singular]({{< relref "non_singular_matrix.md" >}})}@0} {#determinant-a-neq-1-0-iff-a-is-an-non-singular--non-singular-matrix-dot-md--0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 1        | 2.65 | 7   | 348.63   | 2024-05-24T07:04:39Z |
| 0        | 1.90 | 8   | 160.83   | 2023-11-26T10:13:32Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Determinant” 2022</a>)


### \\(\determinant{A}\\) {{\\(=\\)}@1} \\(0\\) \\(\iff\\) {{\\(A\\) is [singular]({{< relref "singular_matrix.md" >}})}@0} {#determinant-a-1-0-iff-a-is-singular--singular-matrix-dot-md--0}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 1        | 2.05 | 8   | 260.48   | 2024-04-15T02:21:43Z |
| 0        | 2.65 | 5   | 43.44    | 2023-08-13T12:14:18Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Determinant” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Determinant.” 2022. <i>Wikipedia</i>, July. <a href="https://en.wikipedia.org/w/index.php?title=Determinant&oldid=1099706940">https://en.wikipedia.org/w/index.php?title=Determinant&#38;oldid=1099706940</a>.</div>
</div>
