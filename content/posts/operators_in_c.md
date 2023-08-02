+++
title = "Operators in C++"
author = ["Cash Prokop-Weaver"]
date = 2023-05-04T16:20:00-07:00
lastmod = 2023-08-02T11:51:32-07:00
tags = ["has-todo", "concept", "has-todo", "concept"]
categories = ["has-todo", "concept"]
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
| front    | 2.20 | 0   | 0.00     | 2023-08-01T15:05:15Z |
| back     | 2.5  | -1  | 0        | 2023-05-04T23:26:53Z |

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
| front    | 1.90 | 2   | 2.00     | 2023-08-03T01:22:36Z |
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
| front    | 2.35 | 4   | 12.98    | 2023-07-28T13:47:53Z |
| back     | 2.50 | 0   | 0.00     | 2023-07-26T02:55:14Z |

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
| 0        | 2.20 | 5   | 33.30    | 2023-08-25T10:50:51Z |
| 1        | 2.5  | -1  | 0        | 2023-05-04T23:31:57Z |

-   {{[Get-from operator](#and)}@0}
-   {{[Stream extraction operator](#and)}@1}


#### Source {#source}


### AKA {#aka}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.20 | 5   | 34.43    | 2023-09-05T01:11:00Z |
| 1        | 2.5  | -1  | 0        | 2023-05-04T23:34:22Z |

-   {{[Put-to operator](#and)}@0}
-   {{[Stream insertion operator](#and)}@1}


#### Source {#source}


### Denotes {#denotes}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.20 | 5   | 26.37    | 2023-08-12T22:45:52Z |
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
| 0        | 2.20 | 1   | 1.00     | 2023-07-28T14:13:03Z |
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
| front    | 2.50 | 5   | 35.69    | 2023-08-19T05:52:21Z |
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
| front    | 2.50 | 4   | 14.84    | 2023-08-14T19:46:58Z |
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
| front    | 2.50 | 5   | 31.02    | 2023-08-28T15:26:04Z |
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
| front    | 2.50 | 5   | 39.69    | 2023-09-04T07:30:12Z |
| back     | 2.5  | -1  | 0        | 2023-05-11T15:40:41Z |

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
| front    | 2.05 | 4   | 11.20    | 2023-08-09T19:46:06Z |
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
| front    | 2.50 | 3   | 6.00     | 2023-08-05T23:41:34Z |
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
| front    | 2.50 | 5   | 31.05    | 2023-08-18T14:48:25Z |
| back     | 2.5  | -1  | 0        | 2023-05-11T16:51:29Z |

[Scope resolution operator](#scope-resolution-operator)


#### Back {#back}

`::`


#### Source {#source}

(<a href="#citeproc_bib_item_2">Stroustrup 2022</a>)


### Denotes {#denotes}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 5   | 39.04    | 2023-09-04T14:42:53Z |
| back     | 2.5  | -1  | 0        | 2023-05-12T19:14:53Z |

[Structured binding](#structured-binding)


#### Back {#back}

`auto [var1, var2, ...]`


#### Source {#source}

(<a href="#citeproc_bib_item_3">“Structured Binding Declaration (since C++17)” n.d.</a>)


### Compare and contrast {#compare-and-contrast}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 3   | 6.00     | 2023-07-09T01:16:39Z |

-   [Structured binding](#structured-binding) (C++)
-   Destructured binding (Javascript)


#### Back {#back}

-   [Structured binding](#structured-binding): highlights the concept of binding or associating variables with structured data types, such as tuples, pairs, or user-defined types.
-   Destructured binding: emphasizes the idea of breaking down or deconstructing complex data structures, such as arrays or objects, into individual variables.


#### Source {#source}

ChatGPT

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Operators in C and C++.” 2023. <i>Wikipedia</i>, May. <a href="https://en.wikipedia.org/w/index.php?title=Operators_in_C_and_C%2B%2B&oldid=1152745998">https://en.wikipedia.org/w/index.php?title=Operators_in_C_and_C%2B%2B&#38;oldid=1152745998</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>Stroustrup, Bjarne. 2022. <i>A Tour of C++</i>. Third. C++ in-Depth Series. Boston: Addison-Wesley.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_3"></a>“Structured Binding Declaration (since C++17).” n.d. Accessed May 12, 2023. <a href="https://en.cppreference.com/w/cpp/language/structured_binding">https://en.cppreference.com/w/cpp/language/structured_binding</a>.</div>
</div>
