+++
title = "Red-black tree"
author = ["Cash Prokop-Weaver"]
date = 2022-07-23T16:54:00-07:00
lastmod = 2022-12-17T11:27:06-08:00
tags = ["has-todo", "concept", "has-todo", "concept"]
categories = ["has-todo", "concept"]
draft = false
slug = "019be402-8bef-48f3-afbf-6441010dd8cf"
+++

ID: 019be402-8bef-48f3-afbf-6441010dd8cf

    ROAM_REFS: [cite:@RedblackTree2022]

    LAST_MODIFIED: [2022-12-16 Fri 09:41]

> In computer science, a red–black tree is a kind of [Self-balancing binary search tree]({{< relref "self_balancing_binary_search_tree.md" >}}). Each [Vertex]({{< relref "vertex.md" >}}) stores an extra bit representing "color" ("red" or "black"), used to ensure that the [Tree]({{< relref "tree.md" >}}) remains balanced during insertions and deletions.
>
> When the tree is modified, the new tree is rearranged [[Tree rotation]({{< relref "tree_rotation.md" >}})] and "repainted" to restore the coloring properties that constrain how unbalanced the tree can become in the worst case. The properties are designed such that this rearranging and recoloring can be performed efficiently.
>
> (<a href="#citeproc_bib_item_1">“Red-Black Tree” 2022</a>)


## Properties {#properties}

    ID: 265af7fb-38f7-4e99-8f49-07b7461ef5de

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


#### Implementation {#implementation}

```python
def insert(key, value):
    inserted_node = binary_tree_insert(key, value, root)
    insert_fix(inserted_node)

def binary_tree_insert(value):
    pass

def insert_fix(inserted_node):
    pass
```


### Deletion {#deletion}


#### Cases {#cases}


## Flashcards {#flashcards}

    ANKI_DECK: Default


### A [Red-black tree]({{< relref "red_black_tree.md" >}}) is a type of {{[Self-balancing binary search tree]({{< relref "self_balancing_binary_search_tree.md" >}})}@0} {#a-red-black-tree--red-black-tree-dot-md--is-a-type-of-self-balancing-binary-search-tree--self-balancing-binary-search-tree-dot-md--0}

    ID: b2354a9d-8744-4563-839d-2650b687e96e

    ANKI_NOTE_ID: 1661274359648

    FC_CREATED: 2022-08-23T17:05:59Z

    FC_TYPE: cloze

    FC_CLOZE_MAX: 1

    FC_CLOZE_TYPE: deletion

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 6   | 99.99    | 2023-02-09T16:16:01Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Red-Black Tree” 2022</a>)


### [Red-black tree]({{< relref "red_black_tree.md" >}}) search time complexity: {{\\(\bigo{\log n}\\)}@0} {#red-black-tree--red-black-tree-dot-md--search-time-complexity-bigo-log-n-0}

    ID: 2e1c1bc1-3d54-4f8b-b0e4-1ef3705c4ffc

    ANKI_NOTE_ID: 1662482184775

    FC_CREATED: 2022-09-06T16:36:24Z

    FC_TYPE: cloze

    FC_CLOZE_MAX: 1

    FC_CLOZE_TYPE: deletion

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 3.10 | 5   | 53.46    | 2023-01-25T06:29:48Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Red-Black Tree” 2022</a>)


### [Red-black tree]({{< relref "red_black_tree.md" >}}) insertion time complexity: {{amortized \\(\bigo{1}\\), worst case \\(\bigo{\log n}\\)}@0} {#red-black-tree--red-black-tree-dot-md--insertion-time-complexity-amortized-bigo-1-worst-case-bigo-log-n-0}

    ID: 4900a445-c751-4b35-8d1b-338413108e4b

    ANKI_NOTE_ID: 1662482186552

    FC_CREATED: 2022-09-06T16:36:26Z

    FC_TYPE: cloze

    FC_CLOZE_MAX: 1

    FC_CLOZE_TYPE: deletion

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.20 | 1   | 1.00     | 2022-12-17T17:41:08Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Red-Black Tree” 2022</a>)


### [Red-black tree]({{< relref "red_black_tree.md" >}}) deletion time complexity: {{amortized \\(\bigo{1}\\), worst case \\(\bigo{\log n}\\)}@0} {#red-black-tree--red-black-tree-dot-md--deletion-time-complexity-amortized-bigo-1-worst-case-bigo-log-n-0}

    ID: 944132c5-6721-4acc-9178-42a2fbe7e527

    ANKI_NOTE_ID: 1662482188550

    FC_CREATED: 2022-09-06T16:36:28Z

    FC_TYPE: cloze

    FC_CLOZE_MAX: 1

    FC_CLOZE_TYPE: deletion

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.20 | 0   | 0.00     | 2022-12-16T17:36:24Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Red-Black Tree” 2022</a>)


### [Red-black tree]({{< relref "red_black_tree.md" >}}) space complexity: {{\\(\bigo{n}\\)}@0} {#red-black-tree--red-black-tree-dot-md--space-complexity-bigo-n-0}

    ID: bdd3dd64-b387-45f2-8304-18897ffb9cd1

    ANKI_NOTE_ID: 1662482190272

    FC_CREATED: 2022-09-06T16:36:30Z

    FC_TYPE: cloze

    FC_CLOZE_MAX: 1

    FC_CLOZE_TYPE: deletion

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.95 | 5   | 48.40    | 2023-01-06T01:42:20Z |


#### Extra {#extra}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Red-Black Tree” 2022</a>)


### Properties {#properties}

    ID: 9f02a70e-b3bc-4927-9a49-dd1a6b3ac9b0

    ANKI_NOTE_ID: 1661274229748

    FC_CREATED: 2022-08-23T17:03:49Z

    FC_TYPE: cloze

    FC_CLOZE_MAX: 5

    FC_CLOZE_TYPE: deletion

    FC_BLOCKED_BY: a9784b27-128c-4a08-a347-dfd6ab204b00,559db6ae-f4f7-4f9c-8c16-1ecf7e9b021d,2f628869-4f2b-49ee-ad78-3b44389ab7e5,4e3440f5-ce7a-43e3-ba81-046d16d0f3ae

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 4        | 2.65 | 3   | 6.00     | 2022-11-16T17:30:58Z |
| 0        | 2.65 | 6   | 40.55    | 2022-11-02T05:26:21Z |
| 1        | 2.5  | 4   | 12       | 2022-09-16T13:00:00Z |
| 2        | 2.5  | 4   | 10       | 2022-09-20T13:00:00Z |
| 3        | 2.5  | 3   | 4        | 2022-09-14T13:00:00Z |

Properties of a {{[Red-black tree]({{< relref "red_black_tree.md" >}})}@4}

1.  {{Every node is either red or black}{color}@0}
2.  {{All NIL nodes are considered black}{NIL}@1}
3.  {{A red node does not have a red child}{children}@2}
4.  {{Every path from a given node to any of its descendant NIL nodes goes through the same number of black nodes}{paths}@3}


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Red-Black Tree” 2022</a>)


### ([Red-black tree]({{< relref "red_black_tree.md" >}})) Every node is {{red or black}{color}@0} {#red-black-tree-red-black-tree-dot-md---every-node-is-red-or-black-color-0}

    CREATED: [2022-11-11 Fri 07:48]

    FC_CREATED: 2022-11-11T15:49:03Z

    FC_TYPE: cloze

    ID: a9784b27-128c-4a08-a347-dfd6ab204b00

    FC_CLOZE_MAX: 0

    FC_CLOZE_TYPE: deletion

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 4   | 18.26    | 2022-12-18T23:13:26Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Red-Black Tree” 2022</a>)


### ([Red-black tree]({{< relref "red_black_tree.md" >}})) All {{`NIL` nodes}@0} are considered {{black}{color}@1} {#red-black-tree-red-black-tree-dot-md---all-nil-nodes-0-are-considered-black-color-1}

    CREATED: [2022-11-11 Fri 07:49]

    FC_CREATED: 2022-11-11T15:50:25Z

    FC_TYPE: cloze

    ID: 559db6ae-f4f7-4f9c-8c16-1ecf7e9b021d

    FC_CLOZE_MAX: 1

    FC_CLOZE_TYPE: deletion

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 4   | 16.53    | 2022-12-16T07:29:24Z |
| 1        | 2.50 | 2   | 2.00     | 2022-11-29T18:23:09Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Red-Black Tree” 2022</a>)


### ([Red-black tree]({{< relref "red_black_tree.md" >}})) Red nodes {{cannot}{can/can't}@0} have red children {#red-black-tree-red-black-tree-dot-md---red-nodes-cannot-can-can-t-0-have-red-children}

    CREATED: [2022-11-11 Fri 07:50]

    FC_CREATED: 2022-11-11T15:51:17Z

    FC_TYPE: cloze

    ID: 4e3440f5-ce7a-43e3-ba81-046d16d0f3ae

    FC_CLOZE_MAX: 0

    FC_CLOZE_TYPE: deletion

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 4   | 18.27    | 2022-12-21T01:13:10Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Red-Black Tree” 2022</a>)


### ([Red-black tree]({{< relref "red_black_tree.md" >}})) Every path from a node to its descendant `NIL` node(s) {{goes through the same number of black nodes}@0} {#red-black-tree-red-black-tree-dot-md---every-path-from-a-node-to-its-descendant-nil-node--s--goes-through-the-same-number-of-black-nodes-0}

    CREATED: [2022-11-11 Fri 07:52]

    FC_CREATED: 2022-11-11T15:52:47Z

    FC_TYPE: cloze

    ID: 2f628869-4f2b-49ee-ad78-3b44389ab7e5

    FC_CLOZE_MAX: 0

    FC_CLOZE_TYPE: deletion

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.80 | 4   | 16.40    | 2022-12-16T03:48:30Z |


#### Source {#source}

(<a href="#citeproc_bib_item_1">“Red-Black Tree” 2022</a>)

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Red-Black Tree.” 2022. <i>Wikipedia</i>, July. <a href="https://en.wikipedia.org/w/index.php?title=Red%E2%80%93black_tree&oldid=1100748306">https://en.wikipedia.org/w/index.php?title=Red%E2%80%93black_tree&#38;oldid=1100748306</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Self-balancing binary search tree]({{< relref "self_balancing_binary_search_tree.md" >}})
-   [Example(s) (balance)]({{< relref "self_balancing_binary_search_tree.md" >}})
