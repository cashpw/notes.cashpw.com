+++
title = "Bjarne Stroustrup | A Tour of C++"
author = ["Cash Weaver"]
date = 2023-04-25T11:58:00-07:00
lastmod = 2023-09-24T09:56:29-07:00
tags = ["hastodo", "reference", "hastodo", "reference"]
categories = ["hastodo", "reference"]
draft = false
slug = "29c58f6a-4c43-45f2-8cf3-86a53cb36978"
+++

[Bjarne Stroustrup]({{< relref "bjarne_stroustrup.md" >}}), (<a href="#citeproc_bib_item_1">Stroustrup 2022</a>)


## Notes {#notes}


### Skeleton {#skeleton}


#### Cover {#cover}


#### Half Title {#half-title}


#### Title Page {#title-page}


#### Copyright Page {#copyright-page}


#### Contents {#contents}


#### Preface {#preface}


#### 1 The Basics {#1-the-basics}

<!--list-separator-->

-  1.1 Introduction

    [Procedural programming]({{< relref "procedural_programming.md" >}})

<!--list-separator-->

-  1.2 Programs

<!--list-separator-->

-  1.3 Functions

<!--list-separator-->

-  1.4 Types, Variables, and Arithmetic

<!--list-separator-->

-  1.5 Scope and Lifetime

<!--list-separator-->

-  1.6 Constants

<!--list-separator-->

-  1.7 Pointers, Arrays, and References

<!--list-separator-->

-  1.8 Tests

<!--list-separator-->

-  1.9 Mapping to Hardware

<!--list-separator-->

-  1.10 Advice


#### 2 User-Defined Types {#2-user-defined-types}

<!--list-separator-->

-  2.1 Introduction

<!--list-separator-->

-  2.2 Structures

    [C++ struct]({{< relref "c_struct.md" >}})

<!--list-separator-->

-  2.3 Classes

    [C++ class]({{< relref "c_class.md" >}})

<!--list-separator-->

-  2.4 Enumerations

<!--list-separator-->

-  2.5 Unions

    -   [C++ union]({{< relref "c_union.md" >}})
    -   [std::variant]({{< relref "std_variant.md" >}})

<!--list-separator-->

-  2.6 Advice


#### 3 Modularity {#3-modularity}

<!--list-separator-->

-  3.1 Introduction

<!--list-separator-->

-  3.2 Separate Compilation

<!--list-separator-->

-  3.3 Namespaces

<!--list-separator-->

-  3.4 Function Arguments and Return Values

    [Structured binding]({{< relref "operators_in_c.md#structured-binding" >}})

<!--list-separator-->

-  3.5 Advice


#### 4 Error Handling {#4-error-handling}

<!--list-separator-->

-  4.1 Introduction

<!--list-separator-->

-  4.2 Exceptions

<!--list-separator-->

-  4.3 Invariants

<!--list-separator-->

-  4.4 Error-Handling Alternatives

<!--list-separator-->

-  4.5 Assertions

<!--list-separator-->

-  4.6 Advice


#### 5 Classes {#5-classes}

<!--list-separator-->

-  5.1 Introduction

<!--list-separator-->

-  5.2 Concrete Types

    -   [Concrete class]({{< relref "c_class.md#concrete-class" >}})
    -   [std::initializer_list]({{< relref "std_initializer_list.md" >}})

<!--list-separator-->

-  5.3 Abstract Types

    [Abstract class]({{< relref "c_class.md#abstract-class" >}})

<!--list-separator-->

-  5.4 Virtual Functions

    -   [Pure virtual function]({{< relref "pure_virtual_function.md" >}})

<!--list-separator-->

-  5.5 Class Hierarchies

<!--list-separator-->

-  5.6 Advice


#### 6 Essential Operations {#6-essential-operations}

<!--list-separator-->

-  6.1 Introduction

<!--list-separator-->

-  6.2 Copy and Move

    -   [r-value]({{< relref "r_value.md" >}})
    -   [l-value]({{< relref "l_value.md" >}})

<!--list-separator-->

-  6.3 Resource Management

<!--list-separator-->

-  6.4 Operator Overloading

<!--list-separator-->

-  6.5 Conventional Operations

<!--list-separator-->

-  6.6 User-Defined Literals

<!--list-separator-->

-  6.7 Advice


#### 7 Templates {#7-templates}

<!--list-separator-->

-  7.1 Introduction

<!--list-separator-->

-  7.2 Parameterized Types

<!--list-separator-->

-  7.3 Parameterized Operations

<!--list-separator-->

-  7.4 Template Mechanisms

<!--list-separator-->

-  7.5 Advice


#### 8 Concepts and Generic Programming {#8-concepts-and-generic-programming}

<!--list-separator-->

-  8.1 Introduction

<!--list-separator-->

-  8.2 Concepts

<!--list-separator-->

-  8.3 Generic Programming

<!--list-separator-->

-  8.4 Variadic Templates

<!--list-separator-->

-  8.5 Template Compilation Model

<!--list-separator-->

-  8.6 Advice


#### 9 Library Overview {#9-library-overview}

<!--list-separator-->

-  9.1 Introduction

<!--list-separator-->

-  9.2 Standard-Library Components

<!--list-separator-->

-  9.3 Standard-Library Organization

<!--list-separator-->

-  9.4 Advice


#### 10 Strings and Regular Expressions {#10-strings-and-regular-expressions}

<!--list-separator-->

-  10.1 Introduction

<!--list-separator-->

-  10.2 Strings

<!--list-separator-->

-  10.3 String Views

<!--list-separator-->

-  10.4 Regular Expressions

<!--list-separator-->

-  10.5 Advice


#### 11 Input and Output {#11-input-and-output}

<!--list-separator-->

-  11.1 Introduction

<!--list-separator-->

-  11.2 Output

<!--list-separator-->

-  11.3 Input

<!--list-separator-->

-  11.4 I/O State

<!--list-separator-->

-  11.5 I/O of User-Defined Types

<!--list-separator-->

-  11.6 Output Formatting

<!--list-separator-->

-  11.7 Streams

<!--list-separator-->

-  11.8 C-style I/O

<!--list-separator-->

-  11.9 File System

<!--list-separator-->

-  11.10 Advice


#### 12 Containers {#12-containers}

<!--list-separator-->

-  12.1 Introduction

<!--list-separator-->

-  12.2 vector

<!--list-separator-->

-  12.3 list

<!--list-separator-->

-  12.4 forward_list

<!--list-separator-->

-  12.5 map

<!--list-separator-->

-  12.6 unordered_map

<!--list-separator-->

-  12.7 Allocators

<!--list-separator-->

-  12.8 Container Overview

<!--list-separator-->

-  12.9 Advice


#### 13 Algorithms {#13-algorithms}

<!--list-separator-->

-  13.1 Introduction

<!--list-separator-->

-  13.2 Use of Iterators

<!--list-separator-->

-  13.3 Iterator Types

<!--list-separator-->

-  13.4 Use of Predicates

<!--list-separator-->

-  13.5 Algorithm Overview

<!--list-separator-->

-  13.6 Parallel Algorithms

<!--list-separator-->

-  13.7 Advice


#### 14 Ranges {#14-ranges}

<!--list-separator-->

-  14.1 Introduction

<!--list-separator-->

-  14.2 Views

<!--list-separator-->

-  14.3 Generators

<!--list-separator-->

-  14.4 Pipelines

<!--list-separator-->

-  14.5 Concepts Overview

<!--list-separator-->

-  14.6 Advice


#### 15 Pointers and Containers {#15-pointers-and-containers}

<!--list-separator-->

-  15.1 Introduction

<!--list-separator-->

-  15.2 Pointers

    [std::unique_ptr]({{< relref "std_unique_ptr.md" >}})

<!--list-separator-->

-  15.3 Containers

<!--list-separator-->

-  15.4 Alternatives

<!--list-separator-->

-  15.5 Advice


#### 16 Utilities {#16-utilities}

<!--list-separator-->

-  16.1 Introduction

<!--list-separator-->

-  16.2 Time

<!--list-separator-->

-  16.3 Function Adaption

<!--list-separator-->

-  16.4 Type Functions

<!--list-separator-->

-  16.5 source_location

<!--list-separator-->

-  16.6 move() and forward()

<!--list-separator-->

-  16.7 Bit Manipulation

<!--list-separator-->

-  16.8 Exiting a Program

<!--list-separator-->

-  16.9 Advice


#### 17 Numerics {#17-numerics}

<!--list-separator-->

-  17.1 Introduction

<!--list-separator-->

-  17.2 Mathematical Functions

<!--list-separator-->

-  17.3 Numerical Algorithms

<!--list-separator-->

-  17.4 Complex Numbers

<!--list-separator-->

-  17.5 Random Numbers

<!--list-separator-->

-  17.6 Vector Arithmetic

<!--list-separator-->

-  17.7 Numeric Limits

<!--list-separator-->

-  17.8 Type Aliases

<!--list-separator-->

-  17.9 Mathematical Constants

<!--list-separator-->

-  17.10 Advice


#### 18 Concurrency {#18-concurrency}

<!--list-separator-->

-  18.1 Introduction

<!--list-separator-->

-  18.2 Tasks and threads

<!--list-separator-->

-  18.3 Sharing Data

<!--list-separator-->

-  18.4 Waiting for Events

<!--list-separator-->

-  18.5 Communicating Tasks

<!--list-separator-->

-  18.6 Coroutines

<!--list-separator-->

-  18.7 Advice


#### 19 History and Compatibility {#19-history-and-compatibility}

<!--list-separator-->

-  19.1 History

<!--list-separator-->

-  19.2 C++ Feature Evolution

<!--list-separator-->

-  19.3 C/C++ Compatibility

<!--list-separator-->

-  19.4 Bibliography

<!--list-separator-->

-  19.5 Advice


#### Module std {#module-std}

<!--list-separator-->

-  A.1 Introduction

<!--list-separator-->

-  A.2 Use What Your Implementation Offers

<!--list-separator-->

-  A.3 Use Headers

<!--list-separator-->

-  A.4 Make Your Own module std

<!--list-separator-->

-  A.5 Advice


#### Index {#index}

<!--list-separator-->

-  A

<!--list-separator-->

-  B

<!--list-separator-->

-  C

<!--list-separator-->

-  D

<!--list-separator-->

-  E

<!--list-separator-->

-  F

<!--list-separator-->

-  G

<!--list-separator-->

-  H

<!--list-separator-->

-  I

<!--list-separator-->

-  J

<!--list-separator-->

-  K

<!--list-separator-->

-  L

<!--list-separator-->

-  M

<!--list-separator-->

-  N

<!--list-separator-->

-  O

<!--list-separator-->

-  P

<!--list-separator-->

-  Q

<!--list-separator-->

-  R

<!--list-separator-->

-  S

<!--list-separator-->

-  T

<!--list-separator-->

-  U

<!--list-separator-->

-  V

<!--list-separator-->

-  W

<!--list-separator-->

-  X

<!--list-separator-->

-  Y

<!--list-separator-->

-  Z


## Flashcards {#flashcards}


### Describe (C++) {#describe--c-plus-plus}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 6   | 118.31   | 2023-12-17T20:17:42Z |
| back     | 2.35 | 6   | 74.58    | 2023-12-01T13:06:00Z |

`const`


#### Back {#back}

Roughly, "I promise not to change this value".


#### Source {#source}

(<a href="#citeproc_bib_item_1">Stroustrup 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 6   | 83.31    | 2023-10-26T22:40:53Z |
| back     | 1.75 | 4   | 10.90    | 2023-09-29T13:29:03Z |

`constexpr` (C++)


#### Back {#back}

Roughly, "To be evaluated at compile time"


#### Source {#source}

(<a href="#citeproc_bib_item_1">Stroustrup 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.35 | 6   | 72.81    | 2023-11-10T10:39:29Z |
| 1        | 2.20 | 6   | 63.83    | 2023-11-08T11:23:37Z |

{{`consteval` and `constexpr`}@0} denote {{C++'s notion of [Pure functions]({{< relref "pure_functions.md" >}})}{functions}@1}


#### Source {#source}

(<a href="#citeproc_bib_item_1">Stroustrup 2022</a>)


### Compare and contrast {#compare-and-contrast}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.35 | 6   | 76.03    | 2023-10-23T15:50:07Z |

`constexpr` and `consteval` (C++ functions)


#### Back {#back}

-   Functions defined as `constexpr` can accept `constexpr` arguments **and** non-`constexpr` arguments
-   Functions defined as `consteval` can **only** accept `constexpr` arguments


#### Source {#source}

(<a href="#citeproc_bib_item_1">Stroustrup 2022</a>)


### Compare and contrast {#compare-and-contrast}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 6   | 86.28    | 2023-12-09T21:50:59Z |

```C++
int x = 2;
int y = 3;

int& rx = x;
int& ry = y;

rx = ry

// x == ?
// y == ?
// rx == ?
// ry == ?
```

and

```C++
int x = 2;
int y = 3;

int* px = &x;
int* py = &y;

px = py;

// x == ?
// y == ?
// px == ?
// py == ?
```


#### Back {#back}

In the first, by reference:

```C++
x == 2;
y == 2;

rx != ry;

rx == &x;
ry == &y;
```

And in the second, by pointer:

```C++
x == 2;
y == 3;

px == &y;
py == &y;

*px == 3;
*py == 3;
```


#### Source {#source}

(<a href="#citeproc_bib_item_1">Stroustrup 2022</a>)


### Built-in types {#built-in-types}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 6   | 83.48    | 2023-10-14T15:10:44Z |
| back     | 2.35 | 6   | 82.53    | 2023-11-19T01:25:58Z |

Types composed of fundamental types (e.g. `bool`), the `const` modifier, and declarator operators.


#### Source {#source}

(<a href="#citeproc_bib_item_1">Stroustrup 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.20 | 6   | 77.12    | 2023-11-06T16:18:58Z |

(C++) A declaration specifies {{a type (e.g. `int`) name (e.g. `count`)}@0}.


#### Source {#source}

(<a href="#citeproc_bib_item_1">Stroustrup 2022</a>)


### Example(s) {#example--s}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.35 | 6   | 78.70    | 2023-10-23T08:16:27Z |
| back     | 2.05 | 6   | 55.65    | 2023-11-16T05:51:35Z |

(C++) Declarations


#### Back {#back}

```C++
int count;
char v[7];
void foo(int a);
```


#### Source {#source}

(<a href="#citeproc_bib_item_1">Stroustrup 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 6   | 109.88   | 2023-12-18T09:50:02Z |

C++'s built-in types reflect {{the capabilities of conventional computer hardware}@0}.


#### Source {#source}

(<a href="#citeproc_bib_item_1">Stroustrup 2022</a>)


### Definition (C++) {#definition--c-plus-plus}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 6   | 98.43    | 2023-11-03T00:25:06Z |
| back     | 1.90 | 2   | 2.00     | 2023-09-21T23:50:33Z |

User-defined types


#### Back {#back}

Types built from built-in types and other [...].


#### Source {#source}

(<a href="#citeproc_bib_item_1">Stroustrup 2022</a>)


### Normal {#normal}

What is the value of `a`?

```C++
int foo(int i) {
  return i += 1;
}

int main() {
  int a = foo(14);
  return a;
}
```


#### Back {#back}

`a == 15`


#### Source {#source}

(<a href="#citeproc_bib_item_1">Stroustrup 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Stroustrup, Bjarne. 2022. <i>A Tour of C++</i>. Third. C++ in-Depth Series. Boston: Addison-Wesley.</div>
</div>
