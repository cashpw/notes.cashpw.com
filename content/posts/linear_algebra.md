+++
title = "Linear algebra"
author = ["Cash Prokop-Weaver"]
date = 2022-12-24T11:12:00-08:00
lastmod = 2023-09-24T10:26:49-07:00
tags = ["hastodo", "concept", "hastodo", "concept"]
categories = ["hastodo", "concept"]
draft = false
slug = "e945552a-47b5-4b23-b7ee-615e99cc8f6e"
+++

## Flashcards {#flashcards}


### AKA {#aka}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.20 | 13  | 326.88   | 2024-02-27T17:43:07Z |
| 1        | 1.30 | 1   | 1.00     | 2023-08-09T15:21:21Z |

-   {{Expansion of \\(\vec{v}\\) in the basis \\(\beta\\)}@0}
-   {{\\(\vec{v} = \alpha\_1\beta\_1 + \cdots + \alpha\_n\beta\_n\\)}@1}


#### Source {#source}

(<a href="#citeproc_bib_item_2">Boyd and Vandenberghe 2018</a>)


### {{\\(\\|\mathbf{C}\vec{v}\\|^2\\)}{norm}@0} \\(=\\) {{\\(n\operatorname{stddev}(\vec{v})^2\\)}{function}@1} {#mathbf-c-vec-v-2-norm-0-n-operatorname-stddev--vec-v--2-function-1}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 1.55 | 0   | 0.00     | 2023-09-07T14:21:06Z |
| 1        | 2.80 | 7   | 194.07   | 2023-07-03T16:02:00Z |


#### Source {#source}

(<a href="#citeproc_bib_item_2">Boyd and Vandenberghe 2018</a>)


### AKA {#aka}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 10  | 551.16   | 2024-12-27T21:00:43Z |
| 1        | 2.35 | 8   | 339.78   | 2024-02-12T22:06:34Z |

-   {{Constant polynomial}@0}
-   {{Polynomial of degree zero}@1}


#### Extra {#extra}

eg: \\(5\\)


#### Source {#source}

(<a href="#citeproc_bib_item_4">“Degree of a Polynomial” 2022</a>)


### AKA {#aka}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 11  | 656.38   | 2025-07-07T08:52:26Z |
| 1        | 2.80 | 8   | 292.63   | 2023-12-16T07:12:10Z |

-   {{Cubic polynomial}@0}
-   {{Polynomial of degree three}@1}


#### Extra {#extra}

eg: \\(x+y^3\\), \\(x+xy^2\\)


#### Source {#source}

(<a href="#citeproc_bib_item_4">“Degree of a Polynomial” 2022</a>)


### AKA {#aka}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 8   | 329.47   | 2024-01-03T10:13:19Z |
| 1        | 2.20 | 7   | 168.02   | 2023-10-27T16:25:24Z |

-   {{Linear polynomial}@0}
-   {{Polynomial of degree one}@1}


#### Extra {#extra}

eg: \\(x+y\\), \\(y\\)


#### Source {#source}

(<a href="#citeproc_bib_item_4">“Degree of a Polynomial” 2022</a>)


### AKA {#aka}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 9   | 412.50   | 2024-05-25T02:58:08Z |
| 1        | 2.65 | 8   | 359.43   | 2024-03-21T03:25:57Z |

-   {{Linear subspace}@0}
-   {{Vector subspace}@1}


#### Source {#source}

(<a href="#citeproc_bib_item_18">“Linear Subspace” 2022</a>)


### AKA {#aka}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 10  | 408.39   | 2024-04-27T00:29:39Z |
| 1        | 2.80 | 8   | 303.41   | 2023-12-17T13:10:54Z |

-   {{Quadratic polynomial}@0}
-   {{Polynomial of degree two}@1}


#### Extra {#extra}

eg: \\(x+y^2\\), \\(x+xy\\)


#### Source {#source}

(<a href="#citeproc_bib_item_4">“Degree of a Polynomial” 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.80 | 15  | 315.91   | 2023-11-27T14:09:30Z |

Describe the properties required for \\(U\\) to be a subspace of a vector space \\(V\\) over a field \\(F\\), given \\(U \subset V\\).


#### Back {#back}

1.  Additive identify

    \\(\vec{0} \in U\\)
2.  Closed under addition

    \\(\vec{a} + \vec{b} \in U \\; | \\; \vec{a}, \vec{b} \in U\\)
3.  Closed under scalar multiplication

    \\(a\vec{b} \in U \\; | \\; a \in F; \\; \vec{b} \in U\\)

All other properties of a vector space are inherited from \\(V\\).


#### Source {#source}

(<a href="#citeproc_bib_item_30">“Vector Space” 2022</a>)


### Definition (Vector spaces; Linear algebra) {#definition--vector-spaces-linear-algebra}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.80 | 8   | 275.94   | 2023-10-09T13:03:57Z |
| front    | 2.20 | 8   | 220.44   | 2023-09-03T03:21:05Z |

Linear dependence


#### Back {#back}

A property of a set of vectors which indicates at least one can be defined as a linear combination of the others.


#### Extra {#extra}

\\((0, 1), (1, 0), \text{and } (1, 1)\\) are linearly dependent


#### Source {#source}

(<a href="#citeproc_bib_item_16">“Linear Independence” 2022</a>)


### Definition {#definition}


#### Back {#back}

A property of a set of vectors which indicates none of the vectors can be defined as a linear combination of the others.


#### Extra {#extra}

\\((0, 1), (1, 0)\\) are linearly independent


#### Source {#source}

(<a href="#citeproc_bib_item_16">“Linear Independence” 2022</a>)


### Definition (Linear algebra) {#definition--linear-algebra}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.80 | 9   | 462.09   | 2024-07-03T17:01:58Z |
| front    | 2.50 | 7   | 206.96   | 2023-10-29T15:22:47Z |

Norm


#### Back {#back}

A function that assigns a strictly positive length or size to each vector in a vector space — except for the zero vector, which is assigned a length of zero.


### Definition (Linear algebra) {#definition--linear-algebra}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.20 | 7   | 170.46   | 2023-11-03T01:50:39Z |
| front    | 2.50 | 8   | 233.09   | 2023-08-24T18:33:45Z |

Cauchy-Schwarz Inequality


#### Back {#back}

\\(\lvert\vec{x}\cdot\vec{y}\rvert \leq \lVert\vec{x}\rVert\lVert\vec{y}\rVert\\)


#### Source {#source}

(<a href="#citeproc_bib_item_3">“Cauchy–Schwarz Inequality” 2022</a>)


### Definition (Linear algebra) {#definition--linear-algebra}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.50 | 8   | 362.38   | 2024-02-23T02:31:51Z |
| front    | 2.80 | 12  | 606.19   | 2025-04-25T17:28:15Z |

Row equivalent matrices


#### Back {#back}

Matrices which are interreducible by elementary row operations.


#### Source {#source}

(<a href="#citeproc_bib_item_24">“Row Equivalence” 2022</a>)


### Definition (Linear algebra) {#definition--linear-algebra}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.35 | 8   | 236.15   | 2023-09-24T18:06:25Z |
| front    | 2.65 | 8   | 389.53   | 2024-06-30T03:15:34Z |

System of linear equations


#### Back {#back}

A collection of linear equations which share the same set of variables.


#### Source {#source}

(<a href="#citeproc_bib_item_15">“Linear Equation” 2022</a>)


### Definition {#definition}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.65 | 9   | 370.96   | 2024-07-31T01:58:03Z |
| front    | 2.35 | 8   | 208.39   | 2023-07-13T03:06:07Z |

Additive inverse


#### Back {#back}

A number which, when added to \\(x\\), yields the additive identity: \\(0\\).


#### Extra {#extra}

Denoted \\(-x\\).


#### Source {#source}

(<a href="#citeproc_bib_item_12">“Inverse Element” 2022</a>)


### Definition (Linear algebra) {#definition--linear-algebra}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.20 | 10  | 406.70   | 2024-08-12T17:36:12Z |
| front    | 2.50 | 8   | 228.39   | 2023-08-15T23:31:52Z |

Column space of a matrix


#### Back {#back}

The span of the column vectors of the matrix.


#### Source {#source}

(<a href="#citeproc_bib_item_23">“Row and Column Spaces” 2022</a>)


### Definition (Math) {#definition--math}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.50 | 9   | 671.49   | 2025-07-15T00:13:06Z |
| front    | 2.65 | 9   | 424.29   | 2024-05-17T00:30:20Z |

Elementary matrices


#### Back {#back}

Matrices which differ from the [Identity matrix]({{< relref "identity_matrix.md" >}}) by one elementary row operation.


### Definition (Linear algebra) {#definition--linear-algebra}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 1.45 | 11  | 100.82   | 2023-12-21T08:23:03Z |
| front    | 2.65 | 8   | 408.81   | 2024-06-26T10:19:26Z |

Gauss–Jordan elimination


#### Back {#back}

Using elementary row operations to convert a matrix into reduced row echelon form.


#### Source {#source}

(<a href="#citeproc_bib_item_9">“Gaussian Elimination” 2022</a>)


### Definition (Linear algebra) {#definition--linear-algebra}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.35 | 10  | 578.53   | 2025-03-02T03:42:13Z |
| front    | 2.35 | 9   | 520.29   | 2025-01-11T21:32:41Z |

Interreducible Matrices


#### Back {#back}

Matrices which are equal given appropriate elementary row and column operations.


#### Source {#source}

(<a href="#citeproc_bib_item_11">Hefferon 2020</a>)


### Definition (Linear algebra) {#definition--linear-algebra}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.20 | 13  | 459.23   | 2024-09-21T01:51:19Z |
| front    | 1.75 | 6   | 37.78    | 2023-09-18T17:15:12Z |

Linear combination


#### Back {#back}

An expression constructed from a set of terms by multiplying each term by a constant and adding the results.


#### Extra {#extra}

\\((2, 2)\\) is a linear combination of \\((1, 0)\\) and \\((0, 1)\\): \\[2 \* (1, 0) + 2 \* (0, 1)\\]


#### Source {#source}

(<a href="#citeproc_bib_item_14">“Linear Combination” 2022</a>)


### Definition {#definition}

Linear equation


#### Back {#back}

An equation that can be written as \\(a\_1{x\_1}+ \cdots +a\_n{x\_n}=0\\).


#### Source {#source}

(<a href="#citeproc_bib_item_15">“Linear Equation” 2022</a>)


### Definition (Linear algebra) {#definition--linear-algebra}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.65 | 9   | 530.29   | 2024-12-10T00:05:27Z |
| front    | 2.80 | 8   | 251.53   | 2023-09-11T03:43:37Z |

Linear span


#### Back {#back}

The set of all linear combinations of a set of vectors.


#### Source {#source}

(<a href="#citeproc_bib_item_17">“Linear Span” 2022</a>)


### Definition (Linear algebra) {#definition--linear-algebra}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.35 | 11  | 501.38   | 2024-11-18T23:42:51Z |
| front    | 2.65 | 8   | 353.87   | 2024-02-25T14:17:26Z |

Linear subspace


#### Back {#back}

A vector space that is a subset of some larger vector space.


#### Source {#source}

(<a href="#citeproc_bib_item_18">“Linear Subspace” 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.65 | 8   | 556.24   | 2025-02-27T18:57:45Z |
| back     | 2.35 | 7   | 216.03   | 2023-09-28T04:50:22Z |

Space conversions underlying \\(A\_{3 \times 4} B\_{4 \times 2} \vec{x}\\)


#### Back {#back}

1.  \\(x\\) is converted from 2-D space \\(\xrightarrow{B}\\) 4-D space
2.  \\(x\\) is converted from 4-D space \\(\xrightarrow{A}\\) 3-D space


### Basic (and reversed card) {#basic--and-reversed-card}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 1.60 | 4   | 9.76     | 2023-09-27T17:12:11Z |
| back     | 2.65 | 11  | 322.66   | 2024-02-08T05:49:33Z |

Describe how to solve \\(\\{f: V \to W \\; | \\; V \in \mathbb{R}^n; \\; W \in \mathbb{R}^k; \\;\\) \\(\beta\_V \neq \varepsilon\_n; \\; \beta\_W \neq \varepsilon\_k\\}\\) for an arbitrary \\(\vec{v}\\).


#### Back {#back}

1.  \\(f(\vec{v}) = \begin{bmatrix}f\end{bmatrix}\_{\beta\_V}^{\beta\_W}\\)
2.  \\(\begin{bmatrix}f\end{bmatrix}\_{\beta\_V}^{\beta\_W} =\\) \\(\begin{bmatrix}\begin{bmatrix}f(\beta\_{V\_1})\end{bmatrix}\_{\beta\_W} \cdots \\; \begin{bmatrix}f(\beta\_{V\_n})\end{bmatrix}\_{\beta\_W}\end{bmatrix}\\) \\(=\\) \\(\begin{bmatrix}\beta\_W^{-1} f(\beta\_{V\_1}) \cdots \beta\_W^{-1} f(\beta\_{V\_n})\end{bmatrix}\\)
3.  \\(\beta\_W^{-1} = \begin{bmatrix}\beta\_{W\_1} \cdots \\; \beta\_{W\_k}\end{bmatrix}^{-1}\\).
4.  \\(f(\beta\_{V\_1}) \cdots \\; f(\beta\_{V\_n})\\) must be given or calculated from a known formula.


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 1.90 | 8   | 187.86   | 2024-01-01T11:48:54Z |
| back     | 2.65 | 8   | 390.50   | 2024-06-09T05:15:18Z |

The quantities which must be known to find an equation that represents the effect of a linear map on an arbitrary vector.


#### Back {#back}

\\(f: V \to W\\)

1.  Basis of \\(V\\), \\(\beta\_V\\).
2.  Basis of \\(W\\), \\(\beta\_W\\).
3.  \\(f(\beta\_{V\_i}) \\; \forall \\; \beta\_{V\_i} \in \beta\_V\\)


### {{\\(\begin{bmatrix}f\end{bmatrix}\_{\beta\_1}^{\beta\_2}\\)}{Coordinate}@0} \\(=\\) {{\\(\begin{bmatrix}\begin{bmatrix}f(\beta\_{1\_1})\end{bmatrix}\_{\beta\_2} \cdots \\; \begin{bmatrix}f(\beta\_{1\_n})\end{bmatrix}\_{\beta\_2}\end{bmatrix}\\)}{Block matrix}@1} {#begin-bmatrix-f-end-bmatrix-beta-1-beta-2-coordinate-0-begin-bmatrix-begin-bmatrix-f--beta-1-1--end-bmatrix-beta-2-cdots-begin-bmatrix-f--beta-1-n--end-bmatrix-beta-2-end-bmatrix-block-matrix-1}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.35 | 6   | 104.42   | 2023-11-08T23:51:38Z |
| 1        | 2.35 | 6   | 76.20    | 2023-10-15T04:43:02Z |


### {{\\(\begin{bmatrix}f\end{bmatrix}\_{\beta\_1}^{\beta\_2}\\)}{Coordinate}@0} \\(=\\) {{\\(\begin{bmatrix}\beta\_2^{-1} f(\beta\_{1\_1}) \cdots \beta\_2^{-1} f(\beta\_{1\_n})\end{bmatrix}\\)}{Inverse}@1} {#begin-bmatrix-f-end-bmatrix-beta-1-beta-2-coordinate-0-begin-bmatrix-beta-2-1-f--beta-1-1--cdots-beta-2-1-f--beta-1-n--end-bmatrix-inverse-1}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.35 | 6   | 56.04    | 2023-09-23T15:29:28Z |
| 1        | 2.50 | 6   | 84.52    | 2023-10-25T03:41:28Z |


### Denotes {#denotes}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 9   | 515.30   | 2024-11-08T00:21:21Z |
| 1        | 2.80 | 8   | 309.79   | 2023-12-13T23:06:46Z |

-   {{\\(\displaystyle O\\), or \\(0\_{n \times m}\\)}@0}

{{The zero matrix.}@1}


#### Source {#source}


### Denotes {#denotes}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 9   | 647.74   | 2025-06-03T08:45:23Z |
| 1        | 2.65 | 8   | 337.31   | 2024-02-14T22:43:13Z |

-   {{\\(\operatorname{dim}(V)\\)}@0}

{{The dimension of the vector space \\(V\\).}@1}


#### Source {#source}

(<a href="#citeproc_bib_item_5">“Dimension (Vector Space)” 2022</a>)


### Definition {#definition}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.80 | 8   | 411.16   | 2024-04-11T07:50:52Z |
| front    | 2.65 | 8   | 368.71   | 2024-03-16T08:02:38Z |

Dense vector/matrix


#### Back {#back}

A vector/matrix in which most of the values are non-zero.


#### Source {#source}

(<a href="#citeproc_bib_item_25">“Sparse Matrix” 2022</a>)


### Definition {#definition}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 1.45 | 7   | 38.68    | 2023-10-17T08:34:22Z |
| front    | 2.65 | 8   | 287.85   | 2023-12-27T11:30:22Z |

Eigenbasis


#### Back {#back}

A set of eigenvectors of a vector space, \\(V\\), which span \\(V\\).


#### Source {#source}

(<a href="#citeproc_bib_item_7">“Eigenvalues and Eigenvectors” 2022</a>)


### Definition {#definition}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.80 | 9   | 323.31   | 2023-12-10T21:56:21Z |
| front    | 2.80 | 8   | 288.63   | 2023-10-24T06:40:23Z |

Eigenvalue


#### Back {#back}

The factor by which an associated eigenvector is scaled.


#### Source {#source}

(<a href="#citeproc_bib_item_7">“Eigenvalues and Eigenvectors” 2022</a>)


### Definition {#definition}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.80 | 9   | 330.29   | 2024-01-22T23:11:27Z |
| front    | 2.65 | 8   | 363.91   | 2024-03-15T11:57:57Z |

Eigenvector


#### Back {#back}

A vector in a vector space, \\(\vec{v} \in V\\), with respect to some linear transformation, \\(f\\), such that \\(f(\vec{v}) = c\vec{v}\\).


#### Extra {#extra}

A vector that, for a particular linear transformation of the vector space, remains on its span.

Formally: \\(T(\vec{v}) = {\lambda}\vec{v}\\) \\(V\\) is a vector space, \\(T: V \to V\\), \\(\vec{v} \in V\\)


#### Source {#source}

(<a href="#citeproc_bib_item_7">“Eigenvalues and Eigenvectors” 2022</a>)


### Definition (Linear algebra) {#definition--linear-algebra}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.80 | 8   | 264.82   | 2023-09-22T17:30:03Z |
| front    | 2.65 | 8   | 205.27   | 2023-06-18T22:08:27Z |

Full column rank


#### Back {#back}

A property of a matrix whose rank equals the number of columns.


#### Source {#source}

(<a href="#citeproc_bib_item_21">“Rank (Linear Algebra)” 2022</a>)


### Definition (Linear algebra) {#definition--linear-algebra}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.50 | 9   | 262.01   | 2023-11-04T05:09:24Z |
| front    | 2.80 | 8   | 312.93   | 2024-01-05T14:07:53Z |

Full rank


#### Back {#back}

A matrix whose rank equals the largest possible for a matrix of its dimensions; the lesser of the number of rows and columns.


#### Source {#source}

(<a href="#citeproc_bib_item_21">“Rank (Linear Algebra)” 2022</a>)


### Definition (Linear algebra) {#definition--linear-algebra}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.65 | 10  | 288.80   | 2023-12-27T09:35:45Z |
| front    | 2.65 | 8   | 304.65   | 2023-11-20T07:36:45Z |

Full row rank


#### Back {#back}

A property of a matrix whose rank equals the number of rows.


#### Source {#source}

(<a href="#citeproc_bib_item_21">“Rank (Linear Algebra)” 2022</a>)


### Definition {#definition}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.50 | 12  | 264.05   | 2023-10-17T16:02:17Z |
| front    | 2.65 | 8   | 349.44   | 2024-02-26T01:06:57Z |

Gram-Schmidt Process


#### Back {#back}

A method for orthonormalizing a linearly independent set of vectors.


#### Source {#source}

(<a href="#citeproc_bib_item_10">“Gram–Schmidt Process” 2022</a>)


### Definition {#definition}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.65 | 9   | 382.94   | 2024-04-20T13:49:07Z |
| front    | 2.80 | 7   | 275.32   | 2024-04-14T20:49:13Z |

Normalized vector


#### Back {#back}

A vector, \\(\mathbf{\hat{v}}\\), for which \\(\\| \mathbf{\hat{v}} \\| = 1\\)


#### Source {#source}

(<a href="#citeproc_bib_item_27">“Unit Vector” 2022</a>)


### Definition {#definition}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.65 | 9   | 593.35   | 2025-02-20T08:35:36Z |
| front    | 2.50 | 9   | 512.43   | 2024-12-04T02:00:26Z |

Normalizing a vector


#### Back {#back}

Converting a given vector, \\(\vec{v}\\), to a unit vector in the direction of \\(\vec{v}\\): \\(\mathbf{\hat{v}} = \frac{\vec{v}}{\\| \vec{v} \\|}\\)


#### Source {#source}

(<a href="#citeproc_bib_item_27">“Unit Vector” 2022</a>)


### Definition {#definition}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.50 | 7   | 218.31   | 2024-02-29T22:24:01Z |
| front    | 2.65 | 9   | 438.65   | 2024-06-13T13:06:14Z |

Orthonormal Basis


#### Back {#back}

A basis whose vectors are orthogonal unit vectors.


#### Source {#source}

(<a href="#citeproc_bib_item_19">“Orthonormal Basis” 2022</a>)


### Definition {#definition}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.80 | 8   | 313.60   | 2023-12-29T07:28:14Z |
| front    | 2.65 | 8   | 371.20   | 2024-03-22T19:00:31Z |

Outer product


#### Back {#back}

An operation on two vectors which produces a matrix.


#### Extra {#extra}

\\(\vec{a} \otimes \vec{b}\\) \\(=\\) \\(\begin{bmatrix} \vec{a}\_1 \vec{b}\_1 & \vec{a}\_1 \vec{b}\_2 & \cdots & \vec{a}\_1 \vec{b}\_m \\\ \vec{a}\_2 \vec{b}\_1 & \vec{a}\_2 \vec{b}\_2 & \cdots & \vec{a}\_2 \vec{b}\_m \\\ \vdots & \vdots & \ddots & \vdots \\\ \vec{a}\_n \vec{b}\_1 & \vec{a}\_n \vec{b}\_2 & \cdots & \vec{a}\_n \vec{b}\_m\end{bmatrix}\\)


#### Source {#source}

(<a href="#citeproc_bib_item_20">“Outer Product” 2022</a>)


### Definition (Linear algebra) {#definition--linear-algebra}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.20 | 3   | 6.00     | 2023-09-20T15:02:46Z |
| front    | 2.65 | 8   | 376.45   | 2024-03-20T13:47:30Z |

Rank deficient


#### Back {#back}

A matrix that does not have full rank; whose rank is less than the lesser of the number of its rows and columns.


#### Source {#source}

(<a href="#citeproc_bib_item_21">“Rank (Linear Algebra)” 2022</a>)


### Definition (Linear algebra) {#definition--linear-algebra}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.80 | 9   | 341.90   | 2023-12-29T12:06:46Z |
| front    | 2.35 | 9   | 494.27   | 2024-11-04T23:24:51Z |

Row space of a matrix


#### Back {#back}

The span of the row vectors of a matrix.


#### Source {#source}

(<a href="#citeproc_bib_item_23">“Row and Column Spaces” 2022</a>)


### Definition (Math) {#definition--math}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.35 | 9   | 316.36   | 2024-01-13T00:34:27Z |
| front    | 2.80 | 8   | 339.98   | 2024-02-03T14:27:33Z |

Block matrices


#### Back {#back}

A matrix that is interpreted as having been broken into sections or submatrices.


#### Extra {#extra}

\\(\begin{aligned} \mathbf{A} & = \begin{bmatrix} 1 \\\ 4 \end{bmatrix} \\\ \mathbf{B} & = \begin{bmatrix} 2 & 3 \\\ 5 & 6 \end{bmatrix} \\\ \mathbf{C} & = \begin{bmatrix} 7 & 8 \\\ 10 & 11 \end{bmatrix} \\\ \mathbf{D} & = \begin{bmatrix} 9 \\\ 12 \end{bmatrix} \\\ \mathbf{E} & = \begin{bmatrix} \mathbf{A} & \mathbf{B} \\\ \mathbf{C} & \mathbf{D} \end{bmatrix} \\\ & = \begin{bmatrix} 1 & 2 & 3 \\\ 4 & 5 & 6 \\\ 7 & 8 & 9 \\\ 10 & 11 & 12 \end{bmatrix} \end{aligned}\\)


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Block Matrix” 2022</a>)


### AKA {#aka}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 8   | 310.51   | 2024-01-04T17:07:17Z |
| 1        | 2.45 | 17  | 219.19   | 2023-09-15T23:27:30Z |
| 2        | 2.65 | 7   | 166.89   | 2023-04-02T12:17:10Z |

-   {{Column space of a matrix}@0}
-   {{Range of a matrix}@1}
-   {{Image of a matrix}@2}


#### Source {#source}

(<a href="#citeproc_bib_item_23">“Row and Column Spaces” 2022</a>)


### AKA {#aka}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 1.45 | 7   | 30.33    | 2023-10-21T20:48:47Z |
| 1        | 2.80 | 11  | 331.63   | 2023-12-10T06:06:10Z |

-   {{Eigenvector}@0}
-   {{Characteristic vector}@1}


#### Source {#source}


### AKA {#aka}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 11  | 303.07   | 2023-12-25T05:15:21Z |
| 1        | 2.35 | 3   | 6.00     | 2023-07-20T13:16:05Z |

-   {{Unit vector}@0}
-   {{Normalized vector}@1}


#### Source {#source}

(<a href="#citeproc_bib_item_27">“Unit Vector” 2022</a>)


### Definition {#definition}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 2.65 | 8   | 396.50   | 2024-04-19T05:54:34Z |
| front    | 2.50 | 8   | 337.37   | 2024-01-30T01:07:53Z |

Trace


#### Back {#back}

The sum of elements along the main diagonal of a matrix.


#### Extra {#extra}

\\(\operatorname{tr}(A)\\)


#### Source {#source}

(<a href="#citeproc_bib_item_26">“Trace (Linear Algebra)” 2022</a>)


### Denotes {#denotes}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 8   | 391.59   | 2024-03-19T06:49:51Z |
| 1        | 2.65 | 8   | 331.63   | 2024-02-06T15:40:59Z |

-   {{\\(\mathbf{\hat{v}}\\)}@0}

{{The unit vector in the direction of \\(\vec{v}\\)}@1}


#### Source {#source}

(<a href="#citeproc_bib_item_27">“Unit Vector” 2022</a>)


### Denotes {#denotes}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.35 | 9   | 481.93   | 2024-11-08T12:39:08Z |
| 1        | 2.80 | 8   | 295.35   | 2023-10-30T23:49:53Z |

-   {{\\(\operatorname{proj}\_{\vec{w}}(\vec{v})\\)}@0}

{{The projection of \\(\vec{v}\\) onto \\(\vec{w}\\)}@1}


#### Source {#source}

(<a href="#citeproc_bib_item_29">“Vector Projection” 2022</a>)


### Denotes {#denotes}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 8   | 296.13   | 2023-10-24T00:52:03Z |
| 1        | 2.35 | 8   | 188.84   | 2023-06-20T14:33:32Z |

-   {{\\(\operatorname{trace}(A)\\)}@0}

{{The trace of a matrix, \\(A\\)}@1}


#### Source {#source}

(<a href="#citeproc_bib_item_26">“Trace (Linear Algebra)” 2022</a>)


### Denotes {#denotes}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 8   | 337.13   | 2024-02-04T18:26:29Z |
| 1        | 2.50 | 8   | 247.14   | 2023-09-10T17:57:10Z |

-   {{\\(\vec{1}\\)}@0}

{{A vector of ones}@1}


#### Source {#source}


### Denotes {#denotes}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 9   | 482.49   | 2024-09-19T01:51:05Z |
| 1        | 2.65 | 9   | 443.41   | 2024-08-06T22:42:50Z |
| 2        | 2.35 | 7   | 236.17   | 2024-01-13T17:49:47Z |

-   {{\\(\vec{a}\\)}@0}
-   {{\\(\mathbf{a}\\)}@1}

{{A vector}@2}


#### Source {#source}

(<a href="#citeproc_bib_item_28">“Vector Notation” 2022</a>)


### Denotes {#denotes}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 9   | 293.20   | 2023-11-02T21:42:22Z |
| 1        | 2.65 | 8   | 209.59   | 2023-06-24T04:36:17Z |

-   {{\\(\vec{a} \otimes \vec{b}\\)}@0}

{{Outer product}@1}


#### Source {#source}

(<a href="#citeproc_bib_item_20">“Outer Product” 2022</a>)


### Algorithm {#algorithm}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 1.60 | 3   | 6.00     | 2023-09-24T15:42:48Z |
| back     | 2.65 | 7   | 287.89   | 2023-12-14T01:15:10Z |

Gram-Schmidt process


#### Back {#back}

Given:

1.  \\(S\\): a set of linearly independent vectors

**Step1**

\\(\vec{k\_1} := \vec{s\_1}\\)

\\(\vec{k\_2} := \vec{s\_2} - \operatorname{proj}\_{\vec{k\_1}}(\vec{s\_2})\\)

\\(\vec{k\_3} := \vec{s\_3} - \operatorname{proj}\_{\vec{k\_1}}(\vec{s\_3}) - \operatorname{proj}\_{\vec{k\_2}}(\vec{s\_3})\\)

\\(\vdots\\)

\\(\vec{k\_i} := \vec{s\_i} - \sum\_{j = i}^{i-1}{\operatorname{proj}\_{\vec{k\_j}}(\vec{s\_i})}\\)

**Step2**

\\(\vec{k} =  \frac{\vec{k}}{\lVert\vec{k}\rVert} \\; \forall \\; k \in K\\)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.65 | 8   | 498.75   | 2024-09-11T17:36:48Z |
| back     | 2.50 | 8   | 271.40   | 2023-11-07T03:57:42Z |

How to find the inverse of a matrix, \\(M\_{n \times n}\\), using Gauss-Jordan elimination.


#### Back {#back}

1.  Rewrite the matrix as an augmented matrix: \\(\left[\begin{array}{l|l}M\_{n \times n} & I\_{n \times n}\end{array}\right]\\)
2.  Perform Gauss-Jordan elimination


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.80 | 8   | 416.23   | 2024-05-01T05:57:21Z |
| back     | 2.80 | 8   | 309.45   | 2023-12-09T02:38:36Z |

How to find the row space of a matrix


#### Back {#back}

1.  Perform gaussian elimination or Gauss-Jordan elimination
2.  Take the non-zero rows of the (reduced) row echelon matrix


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.35 | 6   | 79.08    | 2023-10-19T03:11:48Z |
| back     | 2.80 | 11  | 237.47   | 2023-10-12T13:18:33Z |

How to parameterize the solution set for a system of linear equations


#### Back {#back}

1.  Convert to reduced row echelon form so the basic and free variables are clear to see
2.  Write the solution vector (\\(\vec{s}\\)): An \\(n \times 1\\) vector where \\(n\\) is the number of variables and the \\(i\text{-th}\\) entry in the row is equal to the expression that equals the \\(i\text{-th}\\) variable, in terms of the free variables
3.  Break the solution vector, \\(\vec{s}\\), into a linear combination of the free variables


#### Extra {#extra}

eg:

\\(x - y + z = 0\\) \\(\to\\) \\(\left[\begin{array}{ccc|c}1 & -1 & 1 & 0\end{array}\right]\\)

\\(\vec{s} = \begin{bmatrix}0 + y - z \\\ 0 + y \\\ 0 + z\end{bmatrix}\\)

\\(S = \left \\{ \begin{bmatrix}1 \\\ 1 \\\ 0\end{bmatrix}y + \begin{bmatrix}-1 \\\ 0 \\\ 1\end{bmatrix}z \\;|\\; y, z \in \mathbb{R} \right \\}\\)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.65 | 8   | 348.29   | 2024-02-13T11:09:25Z |
| back     | 2.30 | 11  | 278.66   | 2024-02-13T07:46:48Z |

How to transform a matrix into row echelon form


#### Back {#back}

For rows \\(1...n-1\\), \\({row}\_i\\), if \\({row}\_i\\) is nonzero:

1.  Add a scaled multiple of \\({row}\_i\\) to \\({row}\_{i+1}\\), such that the leading coefficient of \\(c \cdot {row}\_i + {row}\_{i+1}\\) is \\(0\\).


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 8   | 278.83   | 2023-10-14T11:18:59Z |
| back     | 2.80 | 8   | 382.27   | 2024-03-05T09:57:32Z |

Permutation matrix


#### Back {#back}

-   A square binary matrix
-   Has exactly one entry of 1 in each row and column, with 0s elsewhere
-   Is used to swap rows/columns of another matrix
-   Can be constructed by swapping rows/columns of the Identity Matrix


### {{\\(\vec{a} \cdot \vec{b}\\)}@0} \\(=\\) {{\\(\\|\vec{a}\\| \\|\vec{b}\\| \href{/posts/cosine}{\cos}(\angle \vec{a}, \vec{b})\\)}{norm}@1} {#vec-a-cdot-vec-b-0-vec-a-vec-b-cos--angle-vec-a-vec-b--norm-1}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 7   | 248.19   | 2023-10-05T20:55:56Z |
| 1        | 2.30 | 10  | 234.29   | 2023-10-05T00:27:53Z |


#### Source {#source}

(<a href="#citeproc_bib_item_6">“Dot Product” 2022</a>)


### {{\\(\operatorname{ms}(\vec{x})\\)}{function}@0} \\(=\\) {{\\(\frac{1}{n} \sum \vec{x}\_i^2\\)}{summation}@1} {#operatorname-ms--vec-x--function-0-frac-1-n-sum-vec-x-i-2-summation-1}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 8   | 510.41   | 2025-02-01T23:25:32Z |
| 1        | 2.80 | 7   | 241.99   | 2023-10-15T15:58:08Z |


#### Source {#source}

(<a href="#citeproc_bib_item_2">Boyd and Vandenberghe 2018</a>)


### {{\\(\operatorname{ms}(\vec{x})\\)}{function}@0} \\(=\\) {{\\(\frac{1}{n} (\vec{x} \cdot \vec{x})\\)}{vector}@1} {#operatorname-ms--vec-x--function-0-frac-1-n--vec-x-cdot-vec-x--vector-1}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.35 | 8   | 333.32   | 2024-05-13T08:16:20Z |
| 1        | 2.05 | 8   | 227.40   | 2024-04-15T04:07:23Z |


#### Source {#source}

(<a href="#citeproc_bib_item_2">Boyd and Vandenberghe 2018</a>)


### {{\\(\operatorname{stddev}(\vec{x})\\)}{function}@0} \\(=\\) {{\\(\sqrt{\frac{1}{n} \sum (\vec{x}\_i - \mu)^2}\\)}{summation}@1} {#operatorname-stddev--vec-x--function-0-sqrt-frac-1-n-sum--vec-x-i-mu--2-summation-1}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 1.90 | 8   | 179.53   | 2024-02-23T02:14:25Z |
| 1        | 2.20 | 7   | 183.14   | 2023-08-01T19:46:12Z |


### {{\\(\operatorname{stddev}(\vec{x})\\)}{function}@0} \\(=\\) {{\\(\frac{1}{\sqrt{n}} \\| \mathbf{C}\vec{x} \\|\\)}{norm}@1} {#operatorname-stddev--vec-x--function-0-frac-1-sqrt-n-mathbf-c-vec-x-norm-1}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.20 | 6   | 68.43    | 2023-02-04T04:38:40Z |
| 1        | 2.35 | 7   | 46.77    | 2022-12-11T08:54:54Z |


### Basic {#basic}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 8   | 324.72   | 2023-12-16T09:48:49Z |

\\(A\_{m \times n} \* \operatorname{diag}(\vec{x}) = B\_{m \times n}\\). Describe \\(B\_{m \times n}\\).


#### Back {#back}

\\(B\_{i,j} = A\_{i,j} \* \vec{x}\_j\\);\\(B\_{m \times n}\\) is a column-scaled \\(A\_{m \times n}\\) by the values of \\(\vec{x}\\).


### Basic {#basic}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 11  | 447.09   | 2024-08-10T15:08:18Z |

\\(A\_{m \times n}P\_{n \times n} = B\_{m \times n}\\) \\(|\\) \\(P\_{n \times n}\\) is a permutation matrix. Describe \\(B\_{m \times n}\\).


#### Back {#back}

\\(B\_{m \times n}\\) is a column-swapped \\(A\_{m \times n}\\) based on \\(P\_{n \times n}\\).


### Basic {#basic}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.35 | 9   | 422.46   | 2024-07-02T04:40:44Z |

\\(\operatorname{diag}(\vec{x}) \* A\_{n \times m} = B\_{n \times m}\\). Describe \\(B\_{n \times m}\\).


#### Back {#back}

\\(B\_{i,j} = A\_{i,j} \* \vec{x}\_i\\);\\(B\_{n \times m}\\) is a row-scaled \\(A\_{n \times m}\\) by the values of \\(\vec{x}\\).


### Basic {#basic}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.80 | 8   | 393.37   | 2024-03-27T13:43:59Z |

\\(P\_{n \times n}A\_{n \times m} = B\_{n \times m}\\) \\(|\\) \\(P\_{n \times n}\\) is a permutation matrix. Describe \\(B\_{n \times m}\\).


#### Back {#back}

\\(B\_{n \times m}\\) is a row-swapped \\(A\_{n \times m}\\) based on \\(P\_{n \times n}\\).


### Definition (Math) {#definition--math}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| back     | 1.75 | 5   | 17.26    | 2023-09-15T21:13:40Z |
| front    | 2.65 | 8   | 386.50   | 2024-04-18T15:07:38Z |

Endomorphism


#### Back {#back}

A morphism from a mathematical object to itself.


#### Source {#source}

(<a href="#citeproc_bib_item_8">“Endomorphism” 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 1.30 | 9   | 31.83    | 2023-10-07T11:15:08Z |
| back     | 2.35 | 4   | 14.75    | 2023-11-06T09:41:57Z |

Axioms of a vector space, \\(V\\), over a field, \\(F\\)


#### Back {#back}

1.  \\(V\\) is closed under vector addition

    \\(\vec{v}\_1 + \vec{v}\_2 \in V \\; \forall \\; \vec{v}\_1, \vec{v}\_2 \in V\\)

2.  \\(V\\) is closed under scalar multiplication

    \\(a\vec{v} \in V \\; \forall \\; \vec{v} \in V \\; \text{and} \\; a \in F\\)

3.  Vector addition is associative

    \\(\vec{v}\_1+(\vec{v}\_2+\vec{v}\_3)=(\vec{v}\_1+\vec{v}\_2)+\vec{v}\_3\\)
4.  Vector addition is commutative

    \\(\vec{v}\_1+\vec{v}\_1=\vec{v}\_2+\vec{v}\_1\\)

5.  Scalar multiplication is distributitive w.r.t. vector addition

    \\(a(\vec{v}\_1+\vec{v}\_2) = a\vec{v}\_1+a\vec{v}\_2\\)

6.  Scalar multiplication is distributitive w.r.t. field addition

    \\((a + b)\vec{v} = a\vec{v} + b\vec{v}\\)
7.  There is an additive inverse: \\(-\vec{v} \in V\\)

    \\(\vec{v} + (-\vec{v}) = \vec{0} \\; \forall \\; \vec{v} \in V\\)

8.  There is a zero vector: \\(\vec{0}\in V\\)

    \\(\vec{v}+\vec{0}=\vec{v} \\; \forall \\; \vec{v} \in V\\)

9.  There is a multiplicative identity element of \\(F\\)

    \\(I\vec{v} = \vec{v} \\; | \\: \vec{v} \in V; \\; I\\)


#### Source {#source}

-   (<a href="#citeproc_bib_item_13">“Linear Algebra/Definition and Examples of Vector Spaces - Wikibooks, Open Books for an Open World” n.d.</a>)
-   (<a href="#citeproc_bib_item_11">Hefferon 2020</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 8   | 304.31   | 2023-12-27T23:46:27Z |
| back     | 2.65 | 8   | 360.74   | 2024-02-24T21:48:27Z |

General = Particular + Homogeneous


#### Back {#back}

\\(S\_g = \\{S\_p + S\_h\\}\\) where \\(S\_p\\) is any particular solution and \\(S\_h\\) is the set set of the homogeneous system.


#### Source {#source}

(<a href="#citeproc_bib_item_11">Hefferon 2020</a>)


### {{rotation matrix in \\(\mathbb{R}^2\\)}@0} \\(=\\) {{\\(\begin{bmatrix} \href{/posts/cosine}{\cos}\theta & -\href{/posts/sine}{\sin}\theta \\\ \href{/posts/sine}{\sin}\theta & \href{/posts/cosine}{\cos}\theta \end{bmatrix}\\)}@1} {#rotation-matrix-in-mathbb-r-2-0-begin-bmatrix-cos-theta-and-sin-theta-sin-theta-and-cos-theta-end-bmatrix-1}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 7   | 149.92   | 2023-05-13T16:33:14Z |
| 1        | 2.50 | 6   | 60.11    | 2022-12-20T18:01:38Z |


#### Source {#source}

(<a href="#citeproc_bib_item_22">“Rotation Matrix” 2022</a>)


### Example(s) {#example--s}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.80 | 9   | 312.58   | 2023-11-22T06:40:51Z |
| back     | 2.65 | 11  | 443.14   | 2024-06-26T18:14:30Z |

Isomorphism of two vector spaces


#### Back {#back}

-   \\(f\_1: \begin{bmatrix}a\_0 \\\ a\_1 \end{bmatrix} \to \begin{bmatrix}a\_0 & a\_1\end{bmatrix}\\)
-   \\(f\_2: \begin{bmatrix}a\_0 & a\_1 \\\ a\_2 & a\_3\end{bmatrix} \to a\_0 + {a\_1}x + {a\_2}x^2 + {a\_3}x^3\\)


### Example(s) {#example--s}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.35 | 9   | 484.63   | 2024-11-04T06:01:15Z |
| back     | 2.20 | 3   | 6.00     | 2023-06-14T16:03:19Z |

Automorphism of a vector space


#### Back {#back}

-   Scale: \\(s(\begin{bmatrix}x\_0 \\\ x\_1 \end{bmatrix}) = \begin{bmatrix}2{x\_0} \\\ x\_1 \end{bmatrix}\\)
-   Rotate: \\(r(\begin{bmatrix}x\_0 \\\ x\_1 \end{bmatrix}) = \begin{bmatrix}cos \\, \theta & -sin \\, \theta \\\ sin \\, \theta & cos \\, \theta \end{bmatrix} \begin{bmatrix}x\_0 \\\ x\_1 \end{bmatrix}\\)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 8   | 224.94   | 2023-08-15T02:32:56Z |

Types of morphisms


#### Back {#back}

-   Morphism: A structure-preserving map from one mathematical structure to another of the same type
-   Homomorphism: A morphism between algebraic structures
-   Isomorphism: A morphism that can be reversed by an inverse mapping
-   Endomorphism: A morphism from a structure to itself
-   Automorphism: An isomorphic endomorphism

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Block Matrix.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Block_matrix&oldid=1127398651">https://en.wikipedia.org/w/index.php?title=Block_matrix&#38;oldid=1127398651</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>Boyd, Stephen P., and Lieven Vandenberghe. 2018. <i>Introduction to Applied Linear Algebra: Vectors, Matrices, and Least Squares</i>. Cambridge, UK ; New York, NY: Cambridge University Press.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_3"></a>“Cauchy–Schwarz Inequality.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Cauchy%E2%80%93Schwarz_inequality&oldid=1127899279">https://en.wikipedia.org/w/index.php?title=Cauchy%E2%80%93Schwarz_inequality&#38;oldid=1127899279</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_4"></a>“Degree of a Polynomial.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Degree_of_a_polynomial&oldid=1095664596">https://en.wikipedia.org/w/index.php?title=Degree_of_a_polynomial&#38;oldid=1095664596</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_5"></a>“Dimension (Vector Space).” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Dimension_(vector_space)&oldid=1107784209">https://en.wikipedia.org/w/index.php?title=Dimension_(vector_space)&#38;oldid=1107784209</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_6"></a>“Dot Product.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Dot_product&oldid=1096253368">https://en.wikipedia.org/w/index.php?title=Dot_product&#38;oldid=1096253368</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_7"></a>“Eigenvalues and Eigenvectors.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Eigenvalues_and_eigenvectors&oldid=1128514137">https://en.wikipedia.org/w/index.php?title=Eigenvalues_and_eigenvectors&#38;oldid=1128514137</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_8"></a>“Endomorphism.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Endomorphism&oldid=1125958805">https://en.wikipedia.org/w/index.php?title=Endomorphism&#38;oldid=1125958805</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_9"></a>“Gaussian Elimination.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Gaussian_elimination&oldid=1100872918">https://en.wikipedia.org/w/index.php?title=Gaussian_elimination&#38;oldid=1100872918</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_10"></a>“Gram–Schmidt Process.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Gram%E2%80%93Schmidt_process&oldid=1122448200">https://en.wikipedia.org/w/index.php?title=Gram%E2%80%93Schmidt_process&#38;oldid=1122448200</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_11"></a>Hefferon, Jim. 2020. <i>Linear Algebra</i>. S.l.: ORTHOGONAL PUBLISHING L3C. <a href="https://gitlab.com/jim.hefferon/linear-algebra">https://gitlab.com/jim.hefferon/linear-algebra</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_12"></a>“Inverse Element.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Inverse_element&oldid=1124406106">https://en.wikipedia.org/w/index.php?title=Inverse_element&#38;oldid=1124406106</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_13"></a>“Linear Algebra/Definition and Examples of Vector Spaces - Wikibooks, Open Books for an Open World.” n.d. Accessed January 2, 2023. <a href="https://en.wikibooks.org/wiki/Linear_Algebra/Definition_and_Examples_of_Vector_Spaces">https://en.wikibooks.org/wiki/Linear_Algebra/Definition_and_Examples_of_Vector_Spaces</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_14"></a>“Linear Combination.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Linear_combination&oldid=1068914093">https://en.wikipedia.org/w/index.php?title=Linear_combination&#38;oldid=1068914093</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_15"></a>“Linear Equation.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Linear_equation&oldid=1097099852">https://en.wikipedia.org/w/index.php?title=Linear_equation&#38;oldid=1097099852</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_16"></a>“Linear Independence.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Linear_independence&oldid=1125881893">https://en.wikipedia.org/w/index.php?title=Linear_independence&#38;oldid=1125881893</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_17"></a>“Linear Span.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Linear_span&oldid=1090990394">https://en.wikipedia.org/w/index.php?title=Linear_span&#38;oldid=1090990394</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_18"></a>“Linear Subspace.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Linear_subspace&oldid=1110049597">https://en.wikipedia.org/w/index.php?title=Linear_subspace&#38;oldid=1110049597</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_19"></a>“Orthonormal Basis.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Orthonormal_basis&oldid=1119698453">https://en.wikipedia.org/w/index.php?title=Orthonormal_basis&#38;oldid=1119698453</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_20"></a>“Outer Product.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Outer_product&oldid=1123707614">https://en.wikipedia.org/w/index.php?title=Outer_product&#38;oldid=1123707614</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_21"></a>“Rank (Linear Algebra).” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Rank_(linear_algebra)&oldid=1126228665">https://en.wikipedia.org/w/index.php?title=Rank_(linear_algebra)&#38;oldid=1126228665</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_22"></a>“Rotation Matrix.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Rotation_matrix&oldid=1130370942">https://en.wikipedia.org/w/index.php?title=Rotation_matrix&#38;oldid=1130370942</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_23"></a>“Row and Column Spaces.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Row_and_column_spaces&oldid=1084198129">https://en.wikipedia.org/w/index.php?title=Row_and_column_spaces&#38;oldid=1084198129</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_24"></a>“Row Equivalence.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Row_equivalence&oldid=1124360784">https://en.wikipedia.org/w/index.php?title=Row_equivalence&#38;oldid=1124360784</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_25"></a>“Sparse Matrix.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Sparse_matrix&oldid=1091166610">https://en.wikipedia.org/w/index.php?title=Sparse_matrix&#38;oldid=1091166610</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_26"></a>“Trace (Linear Algebra).” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Trace_(linear_algebra)&oldid=1121214869">https://en.wikipedia.org/w/index.php?title=Trace_(linear_algebra)&#38;oldid=1121214869</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_27"></a>“Unit Vector.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Unit_vector&oldid=1123600565">https://en.wikipedia.org/w/index.php?title=Unit_vector&#38;oldid=1123600565</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_28"></a>“Vector Notation.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Vector_notation&oldid=1111185098">https://en.wikipedia.org/w/index.php?title=Vector_notation&#38;oldid=1111185098</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_29"></a>“Vector Projection.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Vector_projection&oldid=1127295943">https://en.wikipedia.org/w/index.php?title=Vector_projection&#38;oldid=1127295943</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_30"></a>“Vector Space.” 2022. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Vector_space&oldid=1123043369#Subspaces_and_quotient_spaces">https://en.wikipedia.org/w/index.php?title=Vector_space&#38;oldid=1123043369#Subspaces_and_quotient_spaces</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Matrix multiplication]({{< relref "matrix_multiplication.md" >}})
