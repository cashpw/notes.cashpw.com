+++
title = "std::initializer_list"
author = ["Cash Prokop-Weaver"]
date = 2023-05-18T09:18:00-07:00
lastmod = 2023-12-05T21:05:52-08:00
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


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
</div>


## Backlinks {#backlinks}

-   [Bjarne Stroustrup | A Tour of C++]({{< relref "bjarne_stroustrup_a_tour_of_c.md" >}})
