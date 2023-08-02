+++
title = "C++ class"
author = ["Cash Prokop-Weaver"]
date = 2023-05-11T10:06:00-07:00
lastmod = 2023-08-02T10:38:51-07:00
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


## Flashcards {#flashcards}


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 6   | 114.53   | 2023-11-15T16:41:20Z |
| 1        | 2.65 | 5   | 49.87    | 2023-08-17T14:12:22Z |

(C++) {{`class`}@0} members are {{private}{visibility}@1} by default.


#### Source {#source}

(<a href="#citeproc_bib_item_1">Stroustrup 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.80 | 6   | 117.91   | 2023-11-27T12:59:28Z |
| back     | 2.35 | 5   | 35.40    | 2023-08-05T11:13:21Z |

[Concrete class](#concrete-class)


#### Back {#back}

A class which behaves just like built-in types. It has no abstract methods.


#### Source {#source}

(<a href="#citeproc_bib_item_1">Stroustrup 2022</a>)


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 6   | 90.70    | 2023-10-28T07:42:49Z |
| back     | 2.50 | 5   | 37.09    | 2023-08-07T16:26:44Z |

[Abstract class](#abstract-class)


#### Back {#back}

A class with at least one method which another class must implement.


#### Source {#source}

(<a href="#citeproc_bib_item_1">Stroustrup 2022</a>)


### Cloze {#cloze}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.35 | 5   | 34.86    | 2023-08-19T10:59:09Z |

`Foo` implements `Bar`

```C++
class Foo{{ : public Bar ...}@0}
```


#### Source {#source}

(<a href="#citeproc_bib_item_1">Stroustrup 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Stroustrup, Bjarne. 2022. <i>A Tour of C++</i>. Third. C++ in-Depth Series. Boston: Addison-Wesley.</div>
</div>


## Backlinks {#backlinks}

-   [Bjarne Stroustrup | A Tour of C++]({{< relref "bjarne_stroustrup_a_tour_of_c.md" >}})
