+++
title = "Locator map (Staff Engineer's Path)"
author = ["Cash Prokop-Weaver"]
date = 2023-06-05T19:47:00-07:00
lastmod = 2024-02-24T17:52:27-08:00
tags = ["hastodo", "concept", "hastodo", "concept"]
categories = ["hastodo", "concept"]
draft = false
slug = "1b17b268-7192-4117-9d4f-1b67dcc091ee"
+++

The locator map is a metaphor for understanding how \\(X\\) fits within a broader context. It's a concept from [Tanya Reilly | The Staff Engineer's Path]({{< relref "tanya_reilly_the_staff_engineer_s_path.md" >}}). \\(X\\) here includes, but isn't limited to:

-   How do you fit within your team? What is your role?
-   How does your team fit within your company? How does it relate to other internal teams and to your company's product/service offerings?
-   What are the problems your company's product(s)/service(s) address and how does that offering, and the company broadly, fit among those solving similar problems (peer companies)?

It's a useful tool for answering questions like:

-   Where should you direct your effort?
-   What matters to your users? Your team? Your company?


## Notes from [Tanya Reilly | The Staff Engineer's Path]({{< relref "tanya_reilly_the_staff_engineer_s_path.md" >}}) {#notes-from-tanya-reilly-the-staff-engineer-s-path--tanya-reilly-the-staff-engineer-s-path-dot-md}

> Your locator map can help you make sure the teams you work with really understand their purpose in the organization, who their customers are, and how their work affects other people.
>
> [...]
>
> As you grow in seniority, making a real impact will mean being able to put your work in a bigger context, and recognizing that your point of view is heavily influenced by where you're standing.
>
> Of course, everyone else you work with will have their own point of view too: their "You are here" marker will be somewhere else on the map. If you want to make good decisions, you'll need to be able to see from some of those other points of view.
>
> The more time you spend absorbed in any domain and learning the nuances of the work at your scope, the richer and more complex it will become for you. As you understand the people, the problems, and the goals, you'll become more focused on them. That focus brings depth and understanding, but it comes with some risks, especially for a staff engineer.
>
> [...]
>
> -   Prioritizing badly
>
>     When everyone around you cares about the same set of things, it's easy to magnify the importance of those things. The problems that exist outside your group can start to appear simple or unimportant by comparison. [...]
>
> -   Losing empathy
>
>     It's easy to overfocus and forget that the rest of the world exists, or start thinking of other technology areas as trivial compared to your rich, nuanced domain. [[John Salvatier | Reality Has a Surprising Amount of Detail]({{< relref "salvatierRealityHasSurprising.md" >}})]. [...]
>
> -   Tuning out the background noise
>
>     If one failure mode is your team's concerns seeming more important than everyone else's, another is the exact opposite: you stop noticing problems at all! If you've been working around the same mucky configuration file or broken deploy process for months, you might get so used to it that you stop thinking of it as something you need to fix. Similarly, you might not notice that something that started out as just slightly annoying has slowly become worse. Maybe a problem is close to becoming a crisis, but you don't even notice it anymore, so you can't be objective about how quickly you need to react.
>
> -   Forgetting what the work is for
>
>     Being in your silo can mean that you lose your connection to what's going on elsewhere in the company. If your group originally took on some project to solve a larger goal, the project might still be ongoing even though the goal no longer matters or has already been solved in some other way. If you're working only on your own little part of a project, it's easy to stop thinking about what the project is for. You can slip into a world where everyone does their own little part and nobody feels like they're responsible for the end result. You can lose sight of the ethics of what you're doing, too, and find yourself working on something that you wouldn't really be OK with if you stepped back and thought about the whole picture.
>
> (<a href="#citeproc_bib_item_2">Reilly 2022</a>)


### Taking an outsider view {#taking-an-outsider-view}

> When the new person on your team looks at an architectural tangle or a pile of technical debt, they have no historical context. As my colleague, Dan Na, says, a new person can always see the problems. They haven't been around for the gradual change and the boiling frogs: they're just seeing the raw situation as it is. Without preconceptions, they're free to look around and ask, "What's really happening here? Is any of this working?"
>
> [...] as a staff engineer, you should try to have this perspective all the time. You need to be able to look at your own group as if you weren't part of it and to be honest about what you see. Do your technical decisions only make sense to people who have forgotten that there's a world outside your team? If you all stopped doing the work you're doing, how long would it be before other people would notice or care?


#### Read (<a href="#citeproc_bib_item_1">Na n.d.</a>) {#read}


### Escaping the echo chamber {#escaping-the-echo-chamber}

> Seeking out peers in other groups is an important part of your job. Build friendly relationships with other staff engineers. Get to a point where you can speak the truth to one another, and it won't be contentious, because you've built up so much goodwill. This includes understanding any negative opinions that other teams hold about your group— if you start seeing what's valid about their comments, you'll do better work. Think of the other staff engineers as your team, just as much as any team you're part of.
>
> Go beyond engineering: build relationships with product folks, customer support, administrative staff, and more. If your work affects them or their work affects you, go be friendly and understand their point of view. It will give you a whole new way of thinking about what's important to your department or your business.


### What's actually important? {#what-s-actually-important}

> As an engineer, it's easy to get absorbed in technology. But technology is a means to some end [[Programming as a tool to make things]({{< relref "gentleTribesProgramming2017.md#programming-as-a-tool-to-make-things" >}})]. Ultimately you're here to help your employer achieve its goals. You should know what those goals are. You should know what's important.
>
> [...] "the objectives that are always true" [...] are the needs of your company that are so obvious, they're only really stated if they're in danger. The product or service that your organization provides should work. Its customers should want to use it. Deploying it shouldn't be painfully slow. Know your implicit goals as well as the explicit ones.
>
> As time passes, your company's priorities will change and parts of your map will fog up again. To stay up to date with what's important, pay attention to all-hands meetings for your group and others, ask for skip-level one-on-ones with your manager's manager, and find face time with customers or teams that depend on you. If you don't have business context about why (or whether) your work matters, ask for it.


### What do your customers care about? {#what-do-your-customers-care-about}

> Mohit Suley, an engineering manager and former principal engineer at Microsoft, has spoken about his team tracking down and contacting unreliable ISPs where their search engine, Bing, wasn't reachable. It wasn't Bing that was broken, but as Suley says, "A user doesn't distinguish between DNS services, ISP, your CDN, or your endpoint, whatever that might be. At the end of the day, there are a bunch of websites that work, and a bunch that don't." You need to measure success from your users' point of view [[Measure success from your users' point of view]({{< relref "measure_success_from_your_users_point_of_view.md" >}})]. (If your customers are other teams inside your company, this still applies!) If you don't understand your customer, you don't have real perspective on what's important.


## Bibliography {#bibliography}

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Na, Dan. n.d. “Pushing Through Friction.” Accessed June 6, 2023. <a href="https://blog.danielna.com/talks/pushing-through-friction/">https://blog.danielna.com/talks/pushing-through-friction/</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>Reilly, Tanya. 2022. <i>The Staff Engineer’s Path: A Guide for Individual Contributors Navigating Growth and Change</i>. Sebastopol, CA: O’Reilly Media.</div>
</div>


## Backlinks {#backlinks}

-   [Big-picture thinking (Staff Engineer's Path)]({{< relref "big_picture_thinking_staff_engineer_s_path.md" >}})
-   [Tanya Reilly | The Staff Engineer's Path]({{< relref "tanya_reilly_the_staff_engineer_s_path.md" >}})
-   [Will Larson | 'Drawing Your Three Maps' Exercise]({{< relref "will_larson_drawing_your_three_maps_exercise.md" >}})
