+++
title = "C++ class"
author = ["Cash Prokop-Weaver"]
date = 2023-05-11T10:06:00-07:00
lastmod = 2023-11-10T10:29:59-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "b3c25e15-f426-41d3-ae97-925da325ed73"
+++

A `class` in C++ represents a user-defined data structure. It's similar to a [C++ struct]({{< relref "c_struct.md" >}}).


## Concrete class {#concrete-class}

> The basic idea of ocncrete classes is that they behave "just like built-in types".
>
> (<a href="#citeproc_bib_item_1">Stroustrup 2022</a>)

Classes without any abstract methods.


## Abstract class {#abstract-class}

Classes with at least one abstract method.

An example of an abstract class is the following `Container`:

```C++
class Container {
 public:
  virtual double& operator[](int) = 0;
  virtual int size() const = 0;
  virtual ˜Container() {}
};
```

See [Pure virtual function]({{< relref "pure_virtual_function.md" >}})


## Inheritance and implementation {#inheritance-and-implementation}

`Foo` implements `Container` in the following example. `Container` is the base-class and `Foo` is the derived-class.

```C++
class Container {
 public:
  virtual double& operator[](int) = 0;
  virtual int size() const = 0;
  virtual ˜Container() {}
};

class Foo : public Container {
  // ...
}
```


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Stroustrup, Bjarne. 2022. <i>A Tour of C++</i>. Third. C++ in-Depth Series. Boston: Addison-Wesley.</div>
</div>


## Backlinks {#backlinks}

-   [Bjarne Stroustrup | A Tour of C++]({{< relref "bjarne_stroustrup_a_tour_of_c.md" >}})
