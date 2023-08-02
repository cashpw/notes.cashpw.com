+++
title = "C++ union"
author = ["Cash Prokop-Weaver"]
date = 2023-05-11T10:14:00-07:00
lastmod = 2023-08-02T10:39:01-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "6f967c9a-b981-43f8-86cb-0f096639bdfb"
+++

> A union is a struct [[C++ struct]({{< relref "c_struct.md" >}})] in which all members are allocated at the same address so the union occupies only as much space as its largest member.
>
> (<a href="#citeproc_bib_item_1">Stroustrup 2022</a>)


## Flashcards {#flashcards}


### Describe {#describe}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.50 | 6   | 97.98    | 2023-10-22T13:23:30Z |
| back     | 2.65 | 5   | 40.87    | 2023-08-03T10:54:40Z |

[C++ union]({{< relref "c_union.md" >}})


#### Back {#back}

A [C++ struct]({{< relref "c_struct.md" >}}) which allocates all members into the same address; the size of the [...] is only as large as its largest member.


#### Source {#source}

(<a href="#citeproc_bib_item_1">Stroustrup 2022</a>)


### Cloze (C++) {#cloze--c-plus-plus}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.50 | 6   | 100.51   | 2023-10-28T01:53:19Z |
| 1        | 2.50 | 6   | 74.49    | 2023-10-03T03:03:47Z |

The size of a {{[C++ union]({{< relref "c_union.md" >}})}@0} is {{the size of its largest member}@1}.


#### Source {#source}

(<a href="#citeproc_bib_item_1">Stroustrup 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Stroustrup, Bjarne. 2022. <i>A Tour of C++</i>. Third. C++ in-Depth Series. Boston: Addison-Wesley.</div>
</div>


## Backlinks {#backlinks}

-   [Bjarne Stroustrup | A Tour of C++]({{< relref "bjarne_stroustrup_a_tour_of_c.md" >}})
-   [std::variant]({{< relref "std_variant.md" >}})
