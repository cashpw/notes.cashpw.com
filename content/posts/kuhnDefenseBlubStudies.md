+++
title = "Ben Kuhn | In Defense of Blub Studies"
author = ["Cash Prokop-Weaver"]
date = 2022-03-12T05:25:00-08:00
lastmod = 2023-12-05T14:20:59-08:00
tags = ["reference", "reference"]
categories = ["reference"]
draft = false
slug = "2b7b62cd-9368-468d-a562-4bc13acb2ee1"
+++

[Ben Kuhn]({{< relref "ben_kuhn.md" >}}), (<a href="#citeproc_bib_item_1">Kuhn n.d.</a>)


## Summary {#summary}

> [Blub studies]({{< relref "blub_studies.md" >}}) is the study of what goes on in the guts of these boring, everyday systems—not the kind you get tenure for inventing, but the kind people actually use.


## Thoughts {#thoughts}

Related:

-   [Do things that compound]({{< relref "do_things_that_compound.md" >}})


## Notes {#notes}

> Sometimes people ask me what they should learn to become a better programmer. I feel like the default recommendation here is usually an obscure programming language or a textbook on some high-powered machinery like ML. So I always feel a little bit embarrassed and boring when I instead suggest going really deep on what you already know: your main programming language, web framework, object-relational mapper, UI library, version control system, database, Unix tools, etc. It's not shiny or esoteric, but for me, building a detailed mental model of those (and how they compare to alternatives) might be the learning that's contributed most to my effectiveness as an engineer.

<!--quoteend-->

> In short, if you're in search of generalizable knowledge that [compounds exponentially over time]({{< relref "do_things_that_compound.md" >}}), then blub studies looks like the crap you have to wade through to get to the good stuff. So it's easy to see why people give up on understanding all the blub they're surrounded by, except what they need to get the job done.
>
> But for me, the opposite attitude has been more productive. [Computers can be understood]({{< relref "elhageComputersCanBe.md" >}})—even if it's hard and takes a while. Blub studies is more generalizable than it seems, and has its own way of compounding over time, too. That makes it a lot more useful than you'd expect.

<!--quoteend-->

> The most straightforward benefit of blub expertise is that it saves you time. ["You can't apply those brilliant insights you learned from SICP if you don't have the knowledge base and emotional fortitude to fight through `pip install` first."](https://twitter.com/geoffreylitt/status/1305214228991750144) If you know how Git's internal model works, you can get your repository out of its borked state without spending hours on Stack Overflow.

<!--quoteend-->

> Blub studies are surprisingly broadly applicable because, even if you're learning about the details of some specific blubby system, that system's design will contain a juicy non-blubby core of extractible general principles [[Learn things with a long shelf-life]({{< relref "learn_things_with_a_long_shelf_life.md" >}})].

<!--quoteend-->

> Once, while pair programming with a more junior coworker, we were writing a complicated SQLAlchemy query. My coworker used `user.name` (the `name` field of an object stored in the `user` variable) instead of `User.name` (the `name` field of the _class_ `User`) and was wondering why her query gave the wrong results. I tried to explain the "magic" by which `User.name` was an instance of `Column` while `user.name` was a simple `str`. I went around in circles for a little while until I eventually explained Python's [descriptor protocol](https://docs.python.org/3/howto/descriptor.html) to her (the language feature SQLAlchemy uses to enable the "declarative" ORM syntax). At that point, everything clicked---and I realized that Python's `__dunder__` methods are the key to decoding quite a lot of "magical" seeming code. If you learn the Python language features well, lots of complicated libraries will become a lot easier to understand.
>
> [...]
>
> If you know enough different blubs, you can end up at the point where you don't even need to look things up to figure out how they're (probably) implemented. An experienced Python programmer can guess immediately how SQLAlchemy's "declarative" ORM works under the hood. That's the point when your blub expertise will really start compounding—almost as soon as you start working with something new, you'll start figuring out how it works and extracting the kernel of generally-interesting ideas.

<!--quoteend-->

> Because of this compounding effect, the most important step toward becoming a blub master is to kickstart your "blub flywheel"—the virtuous cycle of blub accumulation—however you can. That means starting with whichever blubs are the easiest or most motivating to learn, and branching out from there. For me, the easiest place to start has been with blubs I'm already using at my day job. I have a couple strategies for getting the most out of those.
>
> First, I'll try to go deeper than necessary. If I really want to ship something, it's easy to give into temptation to, say, Google an error message, copy-paste a fix from Stack Overflow, and move on with my day. But it often doesn't take that much longer to actually read the error message, understand what it means, and try to figure out why that Stack Overflow answer fixed my problem. Similarly, if I'm stuck in a tricky yak shave, I'll bias against "guess-and-check" style debugging in favor of getting a better understanding of the system I'm trying to debug. It doesn't always feel worth it to, e.g., dive into the docs of tcpdump and iptables rules to track down my weird one-off networking issue—but over time I've run into enough "weird one-off networking issues" that it's paid off many times over.
>
> The second part of my blub flywheel is to pay attention to magic. Whenever I'm working with something new, I try to continuously update my best-guess mental model of how it's implemented. "Okay, the docs are telling me to create an Ingress, I guess this is probably the widget that provisions a load balancer to talk to my backend containers?" If I realize I'm wrong, I'll dig in and update. "Hmm, I can't ping those pods from outside the cluster, so how could the load balancer be talking to them? Aha—it's talking to the nodes, and there's a NodePort Service as a second layer of indirection." If I have no idea at all how something could work, that usually means it's time to read a book.


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Kuhn, Ben. n.d. “In Defense of Blub Studies.” <i>Benkuhn.Net</i>. Accessed March 12, 2022. <a href="https://www.benkuhn.net/blub/">https://www.benkuhn.net/blub/</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Blub studies]({{< relref "blub_studies.md" >}})
