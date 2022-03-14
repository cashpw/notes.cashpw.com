+++
title = "John Allspaw | On Being A Senior Engineer"
author = ["Cash Weaver"]
date = 2022-02-21T15:31:00-08:00
lastmod = 2022-02-22T06:50:23-08:00
tags = ["reference", "reference"]
categories = ["reference"]
draft = false
+++

[John Allspaw]({{< relref "john_allspaw.md" >}}), (<a href="#citeproc_bib_item_1">Allspaw n.d.</a>)


## <span class="org-todo todo TODO">TODO</span> Summary {#summary}


## <span class="org-todo todo TODO">TODO</span> Thoughts {#thoughts}


## Notes {#notes}

> In order not to confuse titles with expectations that are fuzzy, sometimes I'll refer to engineering maturity.
>
> Meaning: I expect a "senior" engineer to be a mature engineer.
>
> I'm going to gloss over the part where one could simply list the technical areas in which a mature engineer should have some level of mastery or understanding (such as "Networking", "Filesystems", "Algorithms", etc.) and instead highlight the personal characteristics that in my mind give me indication that someone can influence an organization or a business positively in the domain of engineering.


### Mature engineers seek out constructive criticism of their designs {#mature-engineers-seek-out-constructive-criticism-of-their-designs}

>
>
> Every successful engineer I've met, upon finishing up a design or getting ready for a project, will continually ask their peers questions along the lines of:
>
> -   "What could I be missing?"
> -   "How will this not work?"
> -   "Will you please shoot as many holes as possible into my thinking on this?"
> -   "Even if it's technically sound, is it understandable enough for the rest of the organization to operate, troubleshoot, and extend it?"
>
> This is because they know that nothing they make will ever only be in their hands, and that good peer review is what makes better design decisions. As it's been said elsewhere, they "beg for the bad news."


### Mature engineers understand the non-technical areas of how they are perceived {#mature-engineers-understand-the-non-technical-areas-of-how-they-are-perceived}

> Being able to write a Bloom Filter in Erlang, or write multi-threaded C in your sleep is insufficient. None of that matters if no one wants to work with you. Mature engineers know that no matter how complete, elegant, or superior their designs are, it won't matter if no one wants to work alongside them because they are assholes. Condescension, belittling, narcissism, and ego-boosting behavior send the message to other engineers (maybe tacitly) to stay away. Part of being happy in engineering comes from enjoying the company of the people you work with while designing and building things. An engineer who is quick to call someone a moron is someone destined to stunt his or her career.
>
> This also means that mature engineers have self-awareness when it comes to their communication. This isn't to say that every mature engineer communicates perfectly, only that they have some notion about where they could be better, and continually ask for a gut-check from peers and managers on how they're doing. They aim to be assertive, not passive or aggressive in how they get their ideas across.
>
> I've mentioned it elsewhere, but I must emphasize the point more: the degree to which other people want to work with you is a direct indication on how successful you'll be in your career as an engineer. Be the engineer that everyone wants to work with.


### Mature engineers do not shy away from making estimates and are always trying to get better at it {#mature-engineers-do-not-shy-away-from-making-estimates-and-are-always-trying-to-get-better-at-it}

> Avoiding responsibility for estimates is another way of saying, "I'm not ready to be relied upon for building critical pieces of infrastructure." All businesses rely on estimates, and all engineers working on a project are involved in Joint Activity, which means that they have a responsibility to others to make themselves interpredictable. In general, mature engineers are comfortable with working within some nonzero amount of uncertainty and risk.


### Mature engineers have an innate sense of anticipation, even if they don't know they do {#mature-engineers-have-an-innate-sense-of-anticipation-even-if-they-don-t-know-they-do}

> This code looks good, I'm proud of myself. I've asked other people to review it, and I've taken their feedback. Now: how long will it last before it's rewritten? Once it's in production, how will its execution affect resource usage? How much do I expect CPU/memory/disk/network to increase or decrease? Will others be able to understand this code? Am I making it as easy as I can for others to extend or introspect this work?


### Mature engineers understand that not all of their projects are filled with rockstar-on-stage work {#mature-engineers-understand-that-not-all-of-their-projects-are-filled-with-rockstar-on-stage-work}

> Getting things done means doing things you might not be interested in. No matter how exciting or appealing a project is, there are always boring tasks. Tedious tasks. Tasks that a less mature engineer may deem beneath their dignity or their job title.


### Mature engineers lift the skills and expertise of those around them {#mature-engineers-lift-the-skills-and-expertise-of-those-around-them}

> They recognize that at some point, their individual contribution and potential cannot be exercised singularly. They recognize that there is only so much that can be produced by a single person, and the world's best engineering feats are executed by teams, not singularly brilliant and lone engineers.


### Mature engineers understand the difference between mentorship and sponsorship, and develop a habit of the latter {#mature-engineers-understand-the-difference-between-mentorship-and-sponsorship-and-develop-a-habit-of-the-latter}

Allspaw distinguishes between "mentorship" and "sponsorship":

-   [Mentors Face Inward]({{< relref "mentors_face_inward.md" >}})
-   [Sponsors Face Outward]({{< relref "sponsors_face_outward.md" >}})

> Engineers who find that the visibility of their own work is increasing acknowledge that a fundamental of wielding influence in your local community (both inside and outside your organization) is developing and maintaining awareness of opportunities to sponsor those around them that would benefit. It is not a secret that the tech industry is seriously challenged when it comes to supporting underrepresented and/or marginalized groups.
>
> Developing this as a habit takes effort, but the benefits are multi-fold; the engineer sharpens their critical-thinking skills ("oh, what we're talking about in this meeting would be a great opportunity for $NAME to work on…") and the sponsored engineer has opportunities that they otherwise might not.

<!--quoteend-->

> [...] this instinct to mentor plays into the idea that those who are marginalized aren't already skilled enough, smart enough, or ready for more responsibility or leadership.
>
> What members of underrepresented groups in tech often need most is opportunity and visibility, not advice. They have to work extremely hard and be extremely good at what they do to combat the systemic privilege and unconscious bias at play in our work environments. They are consistently under-promoted and under-compensated for this work, even though it's excellent work.


### Mature engineers make their trade-offs explicit when making judgments and decisions {#mature-engineers-make-their-trade-offs-explicit-when-making-judgments-and-decisions}

> They realize all engineering decisions, implementations, and designs exist within a spectrum; we do not live in a binary world. They can quickly point out contexts where one successful approach or solution could work and where it could not. They know that one cannot be both efficient and thorough at the same time (The ETTO Principle), that most projects engineers work on exist on an axis of optimality and brittleness, and that whether the problems they are solving are acute or chronic.
>
> They know that they work within a spectrum of ideal and non-ideal, and are OK with that. They are comfortable with it because they strive to make the ideal and non-ideal in a design explicit. Later on in the lifecycle of a design, when the original design is not scaling anymore or needs to be replaced or rewritten, they can look back not with a perspective of how short-sighted those earlier decisions were, but instead say "yep, we made it this far with it and knew we'd have to extend or change it at some point. Looks like that time is now, let's get to work!" [...]

<!--quoteend-->

> The tl;dr on trade-offs is that everyone cuts corners, in every project. Immature engineers discover them in hindsight, disgusted. Mature engineers spell them out at the onset of a project, accept them and recognize them as part of good engineering.


### Mature engineers don't practice CYAE ("Cover Your Ass Engineering") {#mature-engineers-don-t-practice-cyae--cover-your-ass-engineering}

> An example of CYAE is "It's not my fault. They broke it, they used it wrong. I built it to spec, I can't be held responsible for their mistakes or improper specification."

I disagree with this point. I consider a lot of the documentation and design work that a mature engineer does to be under the heading of CYA. I agree that mature engineers won't seek to throw others under the bus. However, I also expect mature engineers to understand that others may not play by the same rules. I expect a mature engineer to, at least to some extent, [play the game]({{< relref "the_metagame.md" >}}).


### Mature engineers are empathetic {#mature-engineers-are-empathetic}

> In complex projects, there are usually a number of stakeholders. In any project, the designers, product managers, operations engineers, developers, and business development folks all have goals and perspectives, and mature engineers realize that those goals and views may be different. They understand this so that they can navigate effectively in the work that they do. Being empathetic in this sense means having the ability to view the project from another person's perspective and to take that into consideration into your own work.


### Mature engineers make grounded complaints {#mature-engineers-make-grounded-complaints}

> [...] they express judgments based on empirical evidence and bring with those judgments options for solving the problem which they've identified. A great manager of mine said to never go to your boss with a complaint about anything without at least one (ideally more than one) suggestion for a solution. Even demonstrating that you've tried working the problem on your own and came up empty-handed is better than an empty complaint.


### Mature engineers are aware of cognitive biases {#mature-engineers-are-aware-of-cognitive-biases}

> This isn't to say that every mature engineer needs to have a degree in psychology, but cognitive biases are what can limit the growth of an engineer's career at a certain point. Even if they're not aware of the details of how they appear or how these biases can be guarded against, most mature engineers I know have a level of self-awareness to at least recognize they (like everyone) are susceptible to them.

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Allspaw, John. n.d. “On Being A Senior Engineer.” <i>Kitchen Soap</i>. Accessed February 21, 2022. <a href="https://www.kitchensoap.com/2012/10/25/on-being-a-senior-engineer/">https://www.kitchensoap.com/2012/10/25/on-being-a-senior-engineer/</a>.</div>
</div>
