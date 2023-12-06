+++
title = "Pure virtual function"
author = ["Cash Prokop-Weaver"]
date = 2023-05-18T09:37:00-07:00
lastmod = 2023-12-05T14:38:39-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "cbe60cda-fc7d-4188-9cb3-4715ae550b3d"
+++

A `virtual` function which the implementing class **must** implement. They're denoted with `=0;` (see the first and second virtual functions in `Container`).

```C++
class Container {
 public:
  virtual double& operator[](int) = 0;
  virtual int size() const = 0;
  virtual ˜Container() {}
};
```


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
</div>


## Backlinks {#backlinks}

-   [Bjarne Stroustrup | A Tour of C++]({{< relref "bjarne_stroustrup_a_tour_of_c.md" >}})
-   [Abstract class]({{< relref "c_class.md#abstract-class" >}})