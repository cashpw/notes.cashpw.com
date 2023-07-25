+++
title = "std::variant"
author = ["Cash Prokop-Weaver"]
date = 2023-05-11T10:19:00-07:00
lastmod = 2023-07-25T12:31:15-07:00
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


## Flashcards {#flashcards}


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 6   | 87.18    | 2023-10-11T18:23:17Z |
| 1        | 2.50 | 5   | 42.79    | 2023-07-31T09:17:50Z |

Prefer {{[std::variant]({{< relref "std_variant.md" >}})}@0} to {{naked [C++ union]({{< relref "c_union.md" >}})}@1}.


#### Source {#source}

(<a href="#citeproc_bib_item_2">Stroustrup 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.05 | 5   | 24.57    | 2023-07-26T04:02:04Z |
| 1        | 2.50 | 5   | 39.84    | 2023-07-26T11:40:21Z |

Use {{`std::holds_alternative<type>`}@0} to test the type held in a {{[std::variant]({{< relref "std_variant.md" >}})}@1}.


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Std:Variant” n.d.</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Std:Variant.” n.d. Accessed May 18, 2023. <a href="https://en.cppreference.com/w/cpp/utility/variant">https://en.cppreference.com/w/cpp/utility/variant</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>Stroustrup, Bjarne. 2022. <i>A Tour of C++</i>. Third. C++ in-Depth Series. Boston: Addison-Wesley.</div>
</div>


## Backlinks {#backlinks}

-   [Bjarne Stroustrup | A Tour of C++]({{< relref "bjarne_stroustrup_a_tour_of_c.md" >}})
