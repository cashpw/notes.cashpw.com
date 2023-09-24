+++
title = "Operators in C++"
author = ["Cash Prokop-Weaver"]
date = 2023-05-04T16:20:00-07:00
lastmod = 2023-09-24T10:36:06-07:00
tags = ["hastodo", "concept", "hastodo", "concept"]
categories = ["hastodo", "concept"]
draft = false
slug = "06278a18-c5ee-48fb-80af-422c748c610d"
+++

## `>>` and `<<` {#and}

These double angle-brackets are either:

1.  Iostreams: "Put-to" (`<<`) or "get-from" (`>>`)
2.  Numbers: Bit-wise left shift (`<<`) and right shift (`>>`)


## Indirection operator {#indirection-operator}

The indirection, or dereference, operator is the asterisk (`*`).

```C++
#include<iostream>

int foo() {
  int a = 5;
  int* b = &a;

  return *b;
}

int main() {
  std::cout << foo();
}

```


## Address-of operator {#address-of-operator}

The address-of operator is ampersand (`&`).

```C++
#include<iostream>

int foo() {
  int a = 5;
  int* b = &a;

  return *b;
}

int main() {
  std::cout << foo();
}

```


## Scope resolution operator {#scope-resolution-operator}

The scope resolution operator is `::`.


## Structured binding {#structured-binding}

Structured binding uses `auto` and `[]`:

```C++
struct Cat {
  int weight_in_lbs;
  int age;
};

Cat Foo() { ... }

auto [weight, age] = Foo();
```


## Flashcards {#flashcards}


### Denotes {#denotes}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.05 | 5   | 25.40    | 2023-10-10T00:34:30Z |
| back     | 2.50 | 1   | 1.00     | 2023-09-02T14:21:57Z |

Bitwise left shift operator (C++)


#### Back {#back}

`<<` in the following:

```C++
int foo(int bar) {
  return bar << 1;
}
```


#### Source {#source}


### Denotes {#denotes}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 1.90 | 5   | 21.94    | 2023-10-11T22:26:50Z |
| back     | 2.5  | -1  | 0        | 2023-05-04T23:28:36Z |

[Put-to operator](#and) (C++)


#### Back {#back}

`<<` in the following:

```C++
import std;

int main() {
  std::cout << "Foo";
}
```


#### Source {#source}


### Denotes {#denotes}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.35 | 6   | 59.35    | 2023-11-10T20:51:06Z |
| back     | 2.35 | 3   | 6.00     | 2023-09-06T18:32:46Z |

[Get-from operator](#and)


#### Back {#back}

`>>` in the following:

```C++
import std;

int main() {
  int foo;
  std::cin >> foo;

  return foo;
}
```


#### Source {#source}


### AKA {#aka}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.20 | 6   | 66.19    | 2023-11-03T19:35:28Z |
| 1        | 2.5  | -1  | 0        | 2023-05-04T23:31:57Z |

-   {{[Get-from operator](#and)}@0}
-   {{[Stream extraction operator](#and)}@1}


#### Source {#source}


### AKA {#aka}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.20 | 6   | 80.20    | 2023-11-29T03:56:11Z |
| 1        | 2.5  | -1  | 0        | 2023-05-04T23:34:22Z |

-   {{[Put-to operator](#and)}@0}
-   {{[Stream insertion operator](#and)}@1}


#### Source {#source}


### Denotes {#denotes}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.05 | 6   | 50.11    | 2023-10-09T18:43:43Z |
| back     | 2.5  | -1  | 0        | 2023-05-05T15:14:13Z |

[Indirection operator](#indirection-operator) (C++)


#### Back {#back}

`*` in the following:

```C++
int main() {
  int a = 4;
  int* b;
  b = &a;

  return *b;
}
```


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Operators in C and C++” 2023</a>)


### AKA {#aka}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 1.75 | 2   | 2.00     | 2023-09-23T14:15:08Z |
| 1        | 2.5  | -1  | 0        | 2023-05-05T15:14:31Z |

-   {{[Indirection operator](#indirection-operator)}@0}
-   {{[Dereference operator](#indirection-operator)}@1}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Operators in C and C++” 2023</a>)


### Denotes {#denotes}

[Address-of operator](#address-of-operator)


#### Back {#back}

`&` in the following:

```C++
int main() {
  int a = 4;
  int* b;
  b = &a;

  return *b;
}
```


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Operators in C and C++” 2023</a>)


### Denotes {#denotes}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 6   | 94.71    | 2023-11-22T16:31:21Z |
| back     | 2.5  | -1  | 0        | 2023-05-11T15:36:27Z |

`[]` in the following:

```C++
char v[6];
```


#### Back {#back}

(C++) Array of


#### Source {#source}

(<a href="#citeproc_bib_item_2">Stroustrup 2022</a>)


### Denotes {#denotes}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.35 | 5   | 36.76    | 2023-09-27T06:53:01Z |
| back     | 2.5  | -1  | 0        | 2023-05-11T15:37:08Z |

`*` in:

```C++
char* p;
```


#### Back {#back}

(C++) pointer to


#### Source {#source}

(<a href="#citeproc_bib_item_2">Stroustrup 2022</a>)


### Denotes {#denotes}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.20 | 2   | 2.00     | 2023-09-16T15:04:11Z |
| back     | 2.5  | -1  | 0        | 2023-05-11T15:38:30Z |

`*` in:

```C++
char x = *p;
```


#### Back {#back}

(C++) contents of


#### Source {#source}

(<a href="#citeproc_bib_item_2">Stroustrup 2022</a>)


### Denotes {#denotes}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 6   | 103.30   | 2023-12-30T06:12:28Z |
| back     | 2.50 | 1   | 1.00     | 2023-08-11T14:25:33Z |

`&` in:

```C++
char* p = &v[1];
```


#### Back {#back}

(C++) Address of


#### Source {#source}

(<a href="#citeproc_bib_item_2">Stroustrup 2022</a>)


### Denotes {#denotes}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 1.60 | 1   | 1.00     | 2023-09-05T17:59:58Z |
| back     | 2.50 | 1   | 1.00     | 2023-08-02T15:01:11Z |

`&` in:

```C++
char& p = v[5];
```


#### Back {#back}

(C++) Reference to


#### Source {#source}

(<a href="#citeproc_bib_item_2">Stroustrup 2022</a>)


### Denotes {#denotes}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.35 | 5   | 31.08    | 2023-09-25T17:04:56Z |
| back     | 2.50 | 1   | 1.00     | 2023-07-21T15:17:24Z |

Function definition with an argument which isn't copied, but also isn't modified.


#### Back {#back}

```C++
void sort(const std::vector<double>& numbers);
```


#### Source {#source}

(<a href="#citeproc_bib_item_2">Stroustrup 2022</a>)


### Denotes {#denotes}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 6   | 74.50    | 2023-11-04T01:26:16Z |
| back     | 2.5  | -1  | 0        | 2023-05-11T16:51:29Z |

[Scope resolution operator](#scope-resolution-operator)


#### Back {#back}

`::`


#### Source {#source}

(<a href="#citeproc_bib_item_2">Stroustrup 2022</a>)


### Denotes (C++) {#denotes--c-plus-plus}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 6   | 105.64   | 2023-12-22T05:38:16Z |
| back     | 2.5  | -1  | 0        | 2023-05-12T19:14:53Z |

[Structured binding](#structured-binding)


#### Back {#back}

`auto [var1, var2, ...]`


#### Source {#source}

(<a href="#citeproc_bib_item_3">“Structured Binding Declaration (since C++17)” n.d.</a>)


### Compare and contrast {#compare-and-contrast}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 5   | 34.03    | 2023-10-09T16:00:24Z |

-   [Structured binding](#structured-binding) (C++)
-   Destructured binding (Javascript)


#### Back {#back}

-   [Structured binding](#structured-binding): highlights the concept of binding or associating variables with structured data types, such as tuples, pairs, or user-defined types.
-   Destructured binding: emphasizes the idea of breaking down or deconstructing complex data structures, such as arrays or objects, into individual variables.


#### Source {#source}

ChatGPT

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Operators in C and C++.” 2023. In <i>Wikipedia</i>. <a href="https://en.wikipedia.org/w/index.php?title=Operators_in_C_and_C%2B%2B&oldid=1152745998">https://en.wikipedia.org/w/index.php?title=Operators_in_C_and_C%2B%2B&#38;oldid=1152745998</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>Stroustrup, Bjarne. 2022. <i>A Tour of C++</i>. Third. C++ in-Depth Series. Boston: Addison-Wesley.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_3"></a>“Structured Binding Declaration (since C++17).” n.d. Accessed May 12, 2023. <a href="https://en.cppreference.com/w/cpp/language/structured_binding">https://en.cppreference.com/w/cpp/language/structured_binding</a>.</div>
</div>
