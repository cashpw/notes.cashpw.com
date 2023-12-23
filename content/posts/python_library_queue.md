+++
title = "Python library: queue"
author = ["Cash Prokop-Weaver"]
date = 2023-02-08T08:51:00-08:00
lastmod = 2023-12-23T00:10:35-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "37b4cf4e-b716-4e46-a27f-dfb5fce06bc7"
+++

## [Queue]({{< relref "queue.md" >}}) {#queue--queue-dot-md}

```python
from queue import Queue

q = Queue()
q.put('a')
q.put('b')
q.put('c')
print(q.get())
print(q.get())
print(q.get())
```


## [LIFO]({{< relref "first_in_last_out.md" >}}) [Queue]({{< relref "queue.md" >}}) {#lifo--first-in-last-out-dot-md--queue--queue-dot-md}

```python
from queue import LifoQueue

q = LifoQueue()
q.put('a')
q.put('b')
q.put('c')
print(q.get())
print(q.get())
print(q.get())
```


## [Priority queue]({{< relref "priority_queue.md" >}}) {#priority-queue--priority-queue-dot-md}

```python
from queue import PriorityQueue

# The default behavior is a min_queue
min_queue = PriorityQueue()
min_queue.put((5, 'f'))
min_queue.put((2, 'h'))
min_queue.put((3, 'a'))
min_queue.put((4, 'c'))
print(min_queue.get(), 'is (2, h)')
print(min_queue.get(), 'is (3, a)')
print(min_queue.get(), 'is (4, c)')
print(min_queue.get(), 'is (5, f)')
```


### For max-heap {#for-max-heap}

`PriorityQueue` uses a [Min heap property]({{< relref "heap_property.md#min-heap-property" >}}). Flip the sign on the `priority` to get a [Max heap property]({{< relref "heap_property.md#max-heap-property" >}}):

```python
from queue import PriorityQueue
from dataclasses import dataclass, field
from typing import Any

min_queue = PriorityQueue()
min_queue.put((1, ('a', 'b')))
min_queue.put((-10, ('c', 'd')))
min_queue.put((3, ('e', 'f')))
min_queue.put((2, ('g', 'h')))
print('min_queue:', min_queue.get(), 'is (-10, (c, d))')
print('min_queue:', min_queue.get(), 'is (1, (a, b))')
print('min_queue:', min_queue.get(), 'is (2, (g, h))')
print('min_queue:', min_queue.get(), 'is (3, (e, f))')

print()

max_queue = PriorityQueue()
max_queue.put((-1, ('a', 'b')))
max_queue.put((10, ('c', 'd')))
max_queue.put((-3, ('e', 'f')))
max_queue.put((-2, ('g', 'h')))
print('max_queue:', max_queue.get(), 'is (-3, (e, f))')
print('max_queue:', max_queue.get(), 'is (-2, (g, h))')
print('max_queue:', max_queue.get(), 'is (-1, (a, b))')
print('max_queue:', max_queue.get(), 'is (10, (c, d))')
```

You could also subclass `PriorityQueue`:

```python
from queue import PriorityQueue
from typing import Tuple, Any

class MinPriorityQueue(PriorityQueue):
    pass

class MaxPriorityQueue(PriorityQueue):
    def put(self, item: Tuple[int, Any], *args, **kwargs):
        return PriorityQueue.put(self, (item[0] * -1, item[1]), *args, **kwargs)

    def get(self, *args, **kwargs):
        priority, data = PriorityQueue.get(self, *args, **kwargs)
        return -1 * priority, data

max_queue = MaxPriorityQueue()
max_queue.put((1, ('a', 'b')))
max_queue.put((-10, ('c', 'd')))
max_queue.put((3, ('e', 'f')))
max_queue.put((2, ('g', 'h')))
print('max_queue:', max_queue.get(), 'is (3, (e, f))')
print('max_queue:', max_queue.get(), 'is (2, (g, h))')
print('max_queue:', max_queue.get(), 'is (1, (a, b))')
print('max_queue:', max_queue.get(), 'is (-10, (c, d))')
```


### With updatable priorities {#with-updatable-priorities}

Python's built-in `PriorityQueue` doesn't support updating existing priorities.

```python
import heapq

from queue import PriorityQueue

class UpdatablePriorityQueue(PriorityQueue):
    """PriorityQueue with updatable priorities."""

    def update(self, new_priority, item):
        """Update an item in the queue in O(n) time."""
        for i, it in enumerate(self.queue):
            if it[1] == item:
                self.queue[i] = (new_priority, item)
                heapq.heapify(self.queue)
                break

    def peek(self):
        return self.queue[0] if len(self.queue) > 0 else None

min_queue = UpdatablePriorityQueue()
min_queue.put((4, 'a'))
min_queue.put((3, 'b'))
print(min_queue.peek(), 'should be (3, b)')
min_queue.update(5, 'b')
print(min_queue.get(), 'should be (4, a)')
print(min_queue.get(), 'should be (5, b)')
```


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
</div>
