+++
title = "std::variant"
author = ["Cash Prokop-Weaver"]
date = 2023-05-11T10:19:00-07:00
lastmod = 2023-12-05T21:06:03-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "cd536767-14e7-4cc2-a7f1-d4b0cffbc1c8"
+++

A part of the [Standard Library (C++)]({{< relref "c_standard_library.md" >}}).

`std::variant` is a discriminating [C++ union]({{< relref "c_union.md" >}}); a `union` that tracks the "active" member.

```C++
#include <string>
#include <variant>

struct Entry {
  std::string name;
  std::variant<std::string, int, double> value;
};

int main() {
  Entry e;
  e.name = "foo";
  e.value = 14;

  if (std::holds_alternative<std::string>(e.value)) {
    return 0;
  }

  if (std::holds_alternative<double>(e.value)) {
    return 1;
  }

  if (std::holds_alternative<int>(e.value)) {
    return 2;
  }
}
```


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
</div>


## Backlinks {#backlinks}

-   [Bjarne Stroustrup | A Tour of C++]({{< relref "bjarne_stroustrup_a_tour_of_c.md" >}})
