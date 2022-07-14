+++
title = "Joseph Gentle | Three Tribes of Programming"
author = ["Cash Weaver"]
date = 2022-03-14T10:06:00-07:00
lastmod = 2022-07-13T20:32:34-07:00
tags = ["reference", "reference"]
categories = ["reference"]
draft = false
+++

[Joseph Gentle]({{< relref "joseph_gentle.md" >}}), (<a href="#citeproc_bib_item_1">Gentle 2017</a>)


## Summary {#summary}

> Programs, obviously, hold all of these properties. But I think there's fundamentally 3 architypes of programmers, divided by which ideals we hold in highest esteem:
>
> 1.  You are a poet and a mathematician. Programming is your poetry
> 2.  You are a hacker. You make hardware dance to your tune
> 3.  You are a maker. You build things for people to use
>
> We self-select into communities of our peers based on these ideals. We use coded language to express these ideals to our peers.
>
> I think each group has its own conferences, and its own subreddits. Its own programming languages, heroes and its own villains.


## Notes {#notes}


### Programming as applied mathematics {#programming-as-applied-mathematics}

> -   Source code: The source should read like poetry - dense, with very few lines of code needed to express an idea. Once understood, the terse program seems like a beautiful and obvious description of your program. It is more important that the source code is simple than the execution is simple or fast. High level languages are better than low level languages because they let you express your intent more clearly.
> -   Execution: How the program is executed by the computer is an implementation detail of the compiler. It is more important that the code is simple than the execution is fast.
> -   Correctness: A program is correct if it implements the spec exactly. The best programs use tools like Ada to formally prove correctness.
> -   UI: How the code interacts with humans is a separate consideration from its implementation. Beautiful code is more important than beautiful UI.

<!--quoteend-->

> Most (arguably all) of the modern advancements in programming languages come from people in this camp. If you've used React to make a website, you should know that the model of immutability and expressing your view as a pure function from data to DOM came from functional programming. Actually, most modern language features are invented by people who think of programming as thought. Years (or decades) later, those features get copied into the more popular languages and get treated as new ideas.


### Programming as hardware hacking {#programming-as-hardware-hacking}

> -   Source code: The code should be clean, but clean code is less important than a clean execution. Low level languages are often better than high level languages because you can be more explicit about what the computer will do when it executes your code. (Thus you have more room to optimize).
> -   Execution: How the computer executes your code is paramount. Programming without thinking about execution is just begging for slow performance.
> -   Correctness: A program is correct if it runs the way you expect it to run, given normal parameters. Execution elegance is more important than correctness. And if a theoretical issue can't happen in practice due to how the machine works, its not a real bug. A program must be adequately fast to be considered correct.
> -   UI: How the code interacts with humans is a separate consideration from its implementation. Its ok to let the constraints of the hardware guide the user experience.

<!--quoteend-->

> To this community we owe almost all performance improvements in our computers, above and beyond what is demanded by customers. Nobody else cares about performance quite like people who think about the hardware all day. But if you're thinking about your computer as a machine, what greater ugliness can you inflict than pointless work?


### Programming as a tool to make things {#programming-as-a-tool-to-make-things}

> -   Source code: The code should be clean, but only because cleaner code is easier to iterate on. Code cleanliness is less important than most other considerations.
> -   Execution: The program only has to be fast enough for the users. If you make it even faster, you're taking time away from adding features that people care about more.
> -   Correctness: Bugs are bad only in proportion to their impact. The program should act the way the users expect it to act.
> -   UI: The UI is more important than anything else. Every other part of the program only exists in service to the user interface.

<!--quoteend-->

> I think most professional software engineers are in this tribe - which makes sense, because this is the place where it is easiest to make money writing software.
>
> In my experience people in this camp are better at community. They seem to be much more positive and encouraging of new members, and willing to help. I guess its because you can tell if you're doing a good job in the other two camps by simply taking a look yourself. If you make software for other humans, satisfaction comes from making the people around you happy.
>
> I can't help but feel that this place is a touch soulless. Taken to the extreme, this world view doesn't value the beauty in the engineering itself. Although you could probably make the opposite criticism against the other groups - they don't value how their software can impact the world.

Also see [Moloch]({{< relref "moloch.md" >}}).

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Gentle, Joseph. 2017. “3 Tribes of Programming.” <i>Seph</i>. <a href="http://josephg.com/blog/3-tribes/">http://josephg.com/blog/3-tribes/</a>.</div>
</div>
