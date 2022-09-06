+++
title = "Red-black tree"
author = ["Cash Weaver"]
date = 2022-07-23T16:54:00-07:00
lastmod = 2022-09-05T16:15:21-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "019be402-8bef-48f3-afbf-6441010dd8cf"
+++

> In computer science, a red–black tree is a kind of [Self-balancing binary search tree]({{< relref "self_balancing_binary_search_tree.md" >}}). Each [Vertex]({{< relref "vertex.md" >}}) stores an extra bit representing "color" ("red" or "black"), used to ensure that the [Tree]({{< relref "tree.md" >}}) remains balanced during insertions and deletions.
>
> When the tree is modified, the new tree is rearranged [[Tree rotation]({{< relref "tree_rotation.md" >}})] and "repainted" to restore the coloring properties that constrain how unbalanced the tree can become in the worst case. The properties are designed such that this rearranging and recoloring can be performed efficiently.
>
> (<a href="#citeproc_bib_item_1">“Red-Black Tree” 2022</a>)


## Properties {#properties}

> 1.  Every node is either red or black
> 2.  All `NIL` nodes are considered black
> 3.  A red node does not have a red child
> 4.  Every path from a given node to any of its descendant `NIL` nodes goes through the same number of black nodes
>
> (<a href="#citeproc_bib_item_1">“Red-Black Tree” 2022</a>)


## Space Complexity {#space-complexity}

\\(\bigo{n}\\)


## Time Complexity {#time-complexity}

| Function | Amortized           | Worse case          |
|----------|---------------------|---------------------|
| Search   | \\(\bigo{\log n}\\) | \\(\bigo{\log n}\\) |
| Insert   | \\(\bigo{1}\\)      | \\(\bigo{\log n}\\) |
| Delete   | \\(\bigo{1}\\)      | \\(\bigo{\log n}\\) |


## Algorithm {#algorithm}


### Insertion {#insertion}

> Insertion begins by placing the new (non-`NIL`) node, say `N`, at the position in the binary search tree of a `NIL` node whose in-order predecessor's key compares less than the new node's key, which in turn compares less than the key of its in-order successor. (Frequently, this positioning is the result of a search within the tree immediately preceding the insert operation and consists of a node P together with a direction dir with `P->child[dir] == NIL`.) The newly inserted node is temporarily colored red so that all paths contain the same number of black nodes as before.
>
> (<a href="#citeproc_bib_item_1">“Red-Black Tree” 2022</a>)

Insertion may invalidate one or more [Properties](#properties) of the [Red-black tree]({{< relref "red_black_tree.md" >}}).


#### Cases {#cases}

<!--list-separator-->

-  1: Parent is black

    All [Properties](#properties) hold. No further work is necessary.

<!--list-separator-->

-  2: Parent and uncle are both red

    The third [Properties](#properties)


#### Implementation {#implementation}

```python
class red_black_tree():
    def insert(key, value):
        inserted_node = binary_tree_insert(key, value)
        insert_fix(inserted_node)

    def binary_tree_insert(value):
        pass

    def insert_fix(inserted_node):
        pass
```


### Deletion {#deletion}


#### Cases {#cases}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Red-Black Tree.” 2022. <i>Wikipedia</i>, July. <a href="https://en.wikipedia.org/w/index.php?title=Red%E2%80%93black_tree&oldid=1100748306">https://en.wikipedia.org/w/index.php?title=Red%E2%80%93black_tree&#38;oldid=1100748306</a>.</div>
</div>
