+++
title = "Matrix multiplication"
author = ["Cash Prokop-Weaver"]
date = 2023-02-03T08:57:00-08:00
lastmod = 2023-12-05T20:34:47-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "a1fcb7aa-11d1-4a2c-ae57-ac2d4f33868a"
+++

> In mathematics, particularly in linear algebra [[Linear algebra]({{< relref "linear_algebra.md" >}})], matrix multiplication is a binary operation that produces a matrix [[Matrix]({{< relref "matrix.md" >}})] from two matrices. For matrix multiplication, the number of columns in the first matrix must be equal to the number of rows in the second matrix. The resulting matrix, known as the matrix product, has the number of rows of the first and the number of columns of the second matrix. The product of matrices \\(A\\) and \\(B\\) is denoted as \\(AB\\).
>
> [...]
>
> If \\(A\\) is an \\(m \times n\\) matrix and \\(B\\) is an \\(n \times p\\) matrix,
>
> \\[
> \mathbf{A} = \begin{pmatrix}
> a\_{11} & a\_{12} & \cdots & a\_{1n} \\\\
> a\_{21} & a\_{22} & \cdots & a\_{2n} \\\\
>  \vdots & \vdots & \ddots & \vdots \\\\
> a\_{m1} & a\_{m2} & \cdots & a\_{mn} \\\\
> \end{pmatrix},\quad\mathbf{B} = \begin{pmatrix}
> b\_{11} & b\_{12} & \cdots & b\_{1p} \\\\
> b\_{21} & b\_{22} & \cdots & b\_{2p} \\\\
>  \vdots & \vdots & \ddots & \vdots \\\\
> b\_{n1} & b\_{n2} & \cdots & b\_{np} \\\\
> \end{pmatrix}
> \\]
>
> the _matrix product_ \\(C = AB\\) (denoted without multiplication signs or dots) is defined to be the \\(m \times p\\) matrix
>
> \\[
> \mathbf{C} = \begin{pmatrix}
> c\_{11} & c\_{12} & \cdots & c\_{1p} \\\\
> c\_{21} & c\_{22} & \cdots & c\_{2p} \\\\
>  \vdots & \vdots & \ddots & \vdots \\\\
> c\_{m1} & c\_{m2} & \cdots & c\_{mp} \\\\
> \end{pmatrix}
> \\]
>
> such that
>
> \\[
> c\_{ij} = a\_{i1}b\_{1j} + a\_{i2}b\_{2j} + \cdots + a\_{in}b\_{nj} = \sum\limits\_{k = 1}^{n}a\_{ik}b\_{kj}
> \\]
>
> for \\(i = 1, \dots, m\\) and \\(j = 1, \dots, p\\).
>
> (<a href="#citeproc_bib_item_1">“Matrix Multiplication” 2023</a>)


## Matrix multiplication as a linear combination {#matrix-multiplication-as-a-linear-combination}


### Right-multiplication: combination of columns {#right-multiplication-combination-of-columns}

>
>
> Let's begin by looking at the right-multiplication of matrix \\(X\\) by a column vector:
>
> $$
>
> \begin{pmatrix}
> x\_1 & x\_2 & x\_3 \\\\
> y\_1 & y\_2 & y\_3 \\\\
> z\_1 & z\_2 & z\_3 \\\\
> \end{pmatrix}\begin{pmatrix}
> a \\\\
> b \\\\
> c \\\\
> \end{pmatrix} = \begin{pmatrix}
> ax\_1 & bx\_2 & cx\_3 \\\\
> ay\_1 & by\_2 & cy\_3 \\\\
> az\_1 & bz\_2 & cz\_3 \\\\
> \end{pmatrix}
>
> $$
>
> Representing the columns of X by colorful boxes will help visualize this:
>
> {{< figure src="/ox-hugo/2023-02-03_09-20-40_veccomb.png" >}}
>
> Sticking the white box with a in it to a vector just means: multiply this vector by the scalar a. The result is another column vector - a linear combination of X's columns, with a, b, c as the coefficients.
>
> Right-multiplying X by a matrix is more of the same. Each resulting column is a different linear combination of X's columns:
>
> $$
>
> \begin{pmatrix}
> x\_1 & x\_2 & x\_3 \\\\
> y\_1 & y\_2 & y\_3 \\\\
> z\_1 & z\_2 & z\_3 \\\\
> \end{pmatrix}\begin{pmatrix}
> a & d & g \\\\
> b & e & h \\\\
> c & f & i \\\\
> \end{pmatrix} = \begin{pmatrix}
> ax\_1 + by\_1 + cz\_1 & dx\_1 + ey\_1 + fz\_1 & gx\_1 + hy\_1 + iz\_1 \\\\
> ax\_2 + by\_2 + cz\_2 & dx\_2 + ey\_2 + fz\_2 & gx\_2 + hy\_2 + iz\_2 \\\\
> ax\_3 + by\_3 + cz\_3 & dx\_3 + ey\_3 + fz\_3 & gx\_3 + hy\_3 + iz\_3 \\\\
> \end{pmatrix}
>
> $$
>
> Graphically:
>
> {{< figure src="/ox-hugo/2023-02-03_09-54-16_matcomb.png" >}}
>
> If you look hard at the equation above and squint a bit, you can recognize this column-combination property by examining each column of the result matrix.
>
> (NO_ITEM_DATA:benderskyVisualizingMatrixMultiplicationLinearCombinationEliBenderskyWebsite)


### Left-multiplication: combination of rows {#left-multiplication-combination-of-rows}

> Now let's examine left-multiplication. Left-multiplying a matrix X by a row vector is a linear combination of X's _rows_:
>
> $$
>
> \begin{pmatrix}
> a & b & c \\\\
> \end{pmatrix} \begin{pmatrix}
> x\_1 & y\_1 & z\_1 \\\\
> x\_2 & y\_2 & z\_2 \\\\
> x\_3 & y\_3 & z\_3 \\\\
> \end{pmatrix} = \begin{pmatrix}
> ax\_1 + bx\_2 + cx\_3 & ay\_1 + by\_2 + cy\_3 & az\_1 + bz\_2 + cz\_3 \\\\
> \end{pmatrix}
>
> $$
>
> Is represented graphically thus:
>
> {{< figure src="/ox-hugo/2023-02-03_09-54-31_vecrowcomb.png" >}}
>
> And left-multiplying by a matrix is the same thing repeated for every result row: it becomes the linear combination of the rows of X, with the coefficients taken from the rows of the matrix on the left. Here's the equation form:
>
> $$
>
> \begin{pmatrix}
> a & b & c \\\\
> d & e & f \\\\
> g & h & i \\\\
> \end{pmatrix} \begin{pmatrix}
> x\_1 & y\_1 & z\_1 \\\\
> x\_2 & y\_2 & z\_2 \\\\
> x\_3 & y\_3 & z\_3 \\\\
> \end{pmatrix} = \begin{pmatrix}
> ax\_1 + bx\_2 + cx\_3 & ay\_1 + by\_2 + cy\_3 & az\_1 + bz\_2 + cz\_3 \\\\
> dx\_1 + ex\_2 + fx\_3 & dy\_1 + ey\_2 + fy\_3 & dz\_1 + ez\_2 + fz\_3 \\\\
> gx\_1 + hx\_2 + ix\_3 & gy\_1 + hy\_2 + iy\_3 & gz\_1 + hz\_2 + iz\_3 \\\\
> \end{pmatrix}
>
> $$
>
> And the graphical form:
>
> {{< figure src="/ox-hugo/2023-02-03_09-54-42_matrowcomb.png" >}}
>
> (NO_ITEM_DATA:benderskyVisualizingMatrixMultiplicationLinearCombinationEliBenderskyWebsite)


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Matrix Multiplication.” 2023. <i>Wikipedia</i>, January. <a href="https://en.wikipedia.org/w/index.php?title=Matrix_multiplication&oldid=1134502867">https://en.wikipedia.org/w/index.php?title=Matrix_multiplication&#38;oldid=1134502867</a>.</div>
  <div class="csl-entry">NO_ITEM_DATA:benderskyVisualizingMatrixMultiplicationLinearCombinationEliBenderskyWebsite</div>
</div>
