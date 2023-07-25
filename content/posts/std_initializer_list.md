+++
title = "std::initializer_list"
author = ["Cash Prokop-Weaver"]
date = 2023-05-18T09:18:00-07:00
lastmod = 2023-07-25T12:31:10-07:00
draft = false
slug = "a707abfd-b17d-40d0-a1c2-1caa14e2de47"
+++

A part of the [Standard Library (C++)]({{< relref "c_standard_library.md" >}}).

```C++
std::vector v = {1, 2, 3};
```

`{1, 2, 3}` in the code above is an example of an `std::initializer_list`.

```C++
#include<initializer_list>

class Vector {
    Vector(std::initializer_list<double> list) : elements_(new double[list.size()]), size(list.size()) {
        std::copy(list.begin(), list.end(), elements);
    }
}
```


## Flashcards {#flashcards}


### Example(s) {#example--s}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.35 | 6   | 82.69    | 2023-10-11T07:42:46Z |
| back     | 2.50 | 5   | 41.44    | 2023-08-04T23:53:54Z |

[std::initializer_list]({{< relref "std_initializer_list.md" >}})


#### Back {#back}

The type of `{1, 2, 3}` in the following snippet:

```C++
std::vector v = {1, 2, 3};
```


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Std:Initializer\_List” n.d.</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 5   | 40.22    | 2023-07-28T19:40:27Z |

```C++
std::vector v = {1, 2, 3};

namespace std {
  class vector {
    {{vector(std::initializer_list<int> list)}{constructor}@0}
  }
}
```


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Std:Initializer\_List” n.d.</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Std:Initializer\_List.” n.d. Accessed May 18, 2023. <a href="https://en.cppreference.com/w/cpp/utility/initializer_list">https://en.cppreference.com/w/cpp/utility/initializer_list</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Bjarne Stroustrup | A Tour of C++]({{< relref "bjarne_stroustrup_a_tour_of_c.md" >}})
