+++
title = "Pure virtual function"
author = ["Cash Prokop-Weaver"]
date = 2023-05-18T09:37:00-07:00
lastmod = 2023-07-25T11:32:47-07:00
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


## Flashcards {#flashcards}


### Denotes {#denotes}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.20 | 2   | 2.00     | 2023-07-26T03:56:07Z |
| back     | 2.80 | 5   | 45.98    | 2023-08-16T01:19:30Z |

[Pure virtual function]({{< relref "pure_virtual_function.md" >}})


#### Back {#back}

`=0;` at the end of the function's declaration.


#### Source {#source}

(<a href="#citeproc_bib_item_1">Stroustrup 2022</a>)


### Definition {#definition}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.65 | 5   | 43.02    | 2023-07-31T04:27:14Z |
| back     | 1.90 | 2   | 2.00     | 2023-07-22T15:24:11Z |

[Pure virtual function]({{< relref "pure_virtual_function.md" >}})


#### Back {#back}

(C++) A function which the implementing class **must** implement.


#### Source {#source}

(<a href="#citeproc_bib_item_1">Stroustrup 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Stroustrup, Bjarne. 2022. <i>A Tour of C++</i>. Third. C++ in-Depth Series. Boston: Addison-Wesley.</div>
</div>


## Backlinks {#backlinks}

-   [Abstract class]({{< relref "c_class.md#abstract-class" >}})
-   [Bjarne Stroustrup | A Tour of C++]({{< relref "bjarne_stroustrup_a_tour_of_c.md" >}})
