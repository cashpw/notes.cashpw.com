+++
title = "Dan Luu | Some Reasons to Work on Productivity and Velocity"
author = ["Cash Weaver"]
date = 2023-10-26T20:08:00-07:00
lastmod = 2023-12-22T21:52:17-08:00
tags = ["reference", "reference"]
categories = ["reference"]
draft = false
slug = "fc1981fa-71a3-4e36-aa09-c87e1dcfc28a"
+++

[Dan luu]({{< relref "dan_luu.md" >}}), (<a href="#citeproc_bib_item_1">Luu n.d.</a>)


## Summary {#summary}

Reasons to work on productivity and velocity:

-   You'll have a greater chance of [Working on the right thing]({{< relref "work_on_the_right_thing.md" >}}) and then of [Solving the problem]({{< relref "solve_the_problem.md" >}}) because you can try more things in the same amount of time as other people
-   They're competitive advantages. "[Relatively few people seriously attempt to improve]({{< relref "dan_luu_95_ile_isn_t_that_good.md" >}})".
-   [Speed enables new workflows]({{< relref "be_fast.md#speed-enables-new-workflows" >}})
-   "[...] it's fairly easy to find low hanging fruit on 'execution speed' and not so easy to find low hanging fruit on 'having better ideas'".


## Thoughts {#thoughts}


## Notes {#notes}

> The top reasons I see people say that productivity doesn't matter (or is actually bad) fall into one of three buckets:
>
> -   Working on the right thing [[Work on the right thing]({{< relref "work_on_the_right_thing.md" >}})] is more important than working quickly
> -   Speed at X doesn't matter because you don't spend much time doing X
> -   Thinking about productivity is bad and you should "live life"


### Working on the right thing is more important than working quickly {#working-on-the-right-thing-is-more-important-than-working-quickly}

> I certainly agree that working on the right thing is important, but increasing velocity doesn't stop you from working on the right thing. If anything, each of these is a force multiplier for the other. Having strong execution skills becomes more impactful if you're good at picking the right problem and vice versa.
>
> It's true that the gains from picking the right problem can be greater than the gains from having better tactical execution because the gains from picking the right problem can be unbounded, but it's also much easier to improve tactical execution and doing so also helps with picking the right problem because having faster execution lets you experiment more quickly, which helps you find the right problem.

<!--quoteend-->

> A concrete example of this is a project I worked on to quantify the machine health of the fleet. The project discovered a number of serious issues (a decent fraction of hosts were actively corrupting data or had a performance problem that would increase tail latency by &gt; 2 orders of magnitude, or both). This was considered serious enough that a new team was created to deal with the problem.
>
> In retrospect, my first attempts at quantifying the problem were doomed and couldn't have really worked (or not in a reasonable amount of time, anyway). I spent a few weeks cranking through ideas that couldn't work and a critical part of getting to the idea that did work after "only" a few weeks was being able to quickly try out and discard ideas that didn't work. In part of a previous post, I described how long a tiny part of that process took and multiple people objected to that being impossibly fast in internet comments.
>
> [...]
>
> Anyway, despite operating at a rate that some internet commenters thought was impossible, it took me weeks of dead ends to find something that worked. If I was doing things at a speed that people thought was normal, I suspect it would've taken long enough to find a feasible solution that I would've dropped the problem after spending maybe one or two quarters on it. The number of plausible-ish seeming dead ends was probably not unrelated to why the problem was still an open problem despite being a critical issue for years. Of course, someone who's better at having ideas than me could've solved the problem without the dead ends, but as we discussed earlier, **it's fairly easy to find low hanging fruit on "execution speed" and not so easy to find low hanging fruit on "having better ideas"**. However, it's possible to, to a limited extent, simulate someone who has better ideas than me by being able to quickly try out and discard ideas (I also work on having better ideas, but I think it makes sense to go after the easier high ROI wins that are available as well). Being able to try out ideas quickly also improves the rate at which I can improve at having better ideas since a key part of that is building intuition by getting feedback on what works.
>
> [emphasis mine]


### Speed at X doesn't matter because you don't spend much time doing X {#speed-at-x-doesn-t-matter-because-you-don-t-spend-much-time-doing-x}

> [...] when people say that optimizing X doesn't help because they don't spend time on X and are not bottlenecked on X, that doesn't match my experience as I find I spend plenty of time bottlenecked on X for commonly dismissed Xs. I think that part of this is because getting faster at X can actually increase time spent on X due to a sort of virtuous cycle feedback loop of where it makes sense to spend time. Another part of this is illustrated in this comment by Fabian Giesen:
>
> <div class="quote2">
>
> It is commonly accepted, verging on a cliche, that you have no idea where your program spends time until you actually profile it, but the corollary that you also don't know where you spend your time until you've measured it is not nearly as accepted.
>
> </div>
>
> When I've looked how people spend time vs. how people think they spend time, it's wildly inaccurate and I think there's a fundamental reason that, unless they measure, people's estimates of how they spend their time tends to be way off, which is nicely summed in by another Fabian Giesen quote, which happens to be about solving rubik's cubes but applies to other cognitive tasks:
>
> <div class="quote2">
>
> Paraphrasing a well-known cuber, "your own pauses never seem bad while you're solving, because your brain is busy and you know what you're thinking about, but once you have a video it tends to become blindingly obvious what you need to improve". Which is pretty much the usual "don't assume, profile" advice for programs, but applied to a situation where you're concentrated and busy for the entire time, whereas the default assumption in programming circles seems to be that as long as you're actually doing work and not distracted or slacking off, you can't possibly be losing a lot of time
>
> </div>
>
> Unlike most people who discuss this topic online, I've actually looked at where my time goes and a lot of it goes to things that are canonical examples of things that you shouldn't waste time improving because people don't spend much time doing them.
>
> An example of one of these, the most commonly cited bad-thing-to-optimize example that I've seen, is typing speed (when discussing this, people usually say that typing speed doesn't matter because more time is spent thinking than typing). But, when I look at where my time goes, a lot of it is spent typing.
>
> [...]
>
> I spend roughly halve my writing time typing. If I typed at what some people say median typing speed is (40 WPM) instead of the rate some random typing test clocked me at (110 WPM), this would be a 0.5 + 0.5 \* 110/40 = 1.875x slowdown [...]

Also see [Randall Munroe | Is It Worth the Time?]({{< relref "randall_munroe_is_it_worth_the_time.md" >}})

[Speed enables new workflows]({{< relref "be_fast.md#speed-enables-new-workflows" >}}). Luu points out that improvements in either enable a different way of interacting. You can write up documents on "long shot" ideas which may not resonate with people. If you can write faster, you can crank out more documents such that you can accept a lower chance for each idea landing.

> I spend time on things that are high ROI, but those things are generally only high ROI because I've spent time improving my velocity, which reduces the "I" in ROI.


### Thinking about productivity is bad and you should "live life" {#thinking-about-productivity-is-bad-and-you-should-live-life}

> The last major argument I see against working on velocity assigns negative moral weight to the idea of thinking about productivity and working on velocity at all. This kind of comment often assigns positive moral weight to various kinds of leisure, such as spending time with friends and family. I find this argument to be backwards. If someone thinks it's important to spend time with friends and family, an easy way to do that is to be more productive at work and spend less time working.
>
> [...]
>
> A related idea, one that Holden Karnofsky has been talking about for a while, is that if you ever want to make a difference in the world in some way, it's useful to work on your skills even in jobs where it's not obvious that being better at the job is useful, because the developed skills will give you more leverage on the world when you switch to something that's more aligned with you want to achieve.


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Luu, Dan. n.d. “Some Reasons to Work on Productivity and Velocity.” Accessed October 27, 2023. <a href="https://danluu.com/productivity-velocity/">https://danluu.com/productivity-velocity/</a>.</div>
</div>
