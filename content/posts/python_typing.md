+++
title = "Python typing"
author = ["Cash Weaver"]
date = 2022-08-25T09:29:00-07:00
lastmod = 2022-08-26T22:05:25-07:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
+++

Type hints in [Python]({{< relref "python.md" >}}).


## Generics {#generics}

```python
from typing import TypeVar

T = TypeVar("T")

def generic_adder(a: T, b: T) -> T:
    return a + b
```

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
</div>
