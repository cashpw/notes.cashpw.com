+++
title = "Operators in C++"
author = ["Cash Prokop-Weaver"]
date = 2023-05-04T16:20:00-07:00
lastmod = 2023-12-05T20:43:17-08:00
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


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
</div>
