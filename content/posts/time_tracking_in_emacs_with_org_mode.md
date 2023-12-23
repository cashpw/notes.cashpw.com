+++
title = "Time tracking in Emacs with org-mode"
author = ["Cash Prokop-Weaver"]
date = 2023-11-28T07:57:00-08:00
lastmod = 2023-12-23T01:47:21-08:00
tags = ["hastodo", "concept", "hastodo", "concept"]
categories = ["hastodo", "concept"]
draft = false
slug = "526d55d9-0b10-4385-9d87-4860f787e4d0"
+++

Tracking time is key to my [Retrospective]({{< relref "retrospective.md" >}}) habit(s). I track my personal and professional time in [Emacs]({{< relref "emacs.md" >}}) [org-mode]({{< relref "org_mode.md" >}}).

Key points:

-   Everything is a `TODO` (or at least [80%]({{< relref "pareto_principle.md" >}}) of things)
-   Different files for different flows
    -   `todos.org`: Catch-all for TODOs
    -   `retrospective.org`: Contains daily/weekly/etc retrospectives
-   Track time with `org-clock`
-   [Personal emacs config]({{< relref "personal_emacs_config.md" >}}) provides agenda views, customized clock-in and clock-out behavior, [`clocktable-by-category`](https://github.com/cashpw/clocktable-by-category) for retrospectives
-   View `TODO=s with =org-agenda` and `org-super-agenda` (see [Personal emacs config]({{< relref "personal_emacs_config.md" >}}))


## Workflow {#workflow}


### Daily {#daily}

Throughout the day I follow this loop:

1.  Open my agenda view for today (see [Personal emacs config]({{< relref "personal_emacs_config.md" >}}))
2.  Start work (`clock-in`) on one of:
    -   what I've scheduled for this point the day
    -   the top-priority unscheduled item
3.  When done: `clock-out`
4.  Go to step 1

Then, at the end of the day I do a brief retrospective:

1.  Open retrospective file
2.  Insert a new heading for the current day
3.  Insert a [`clocktable-by-category`](https://github.com/cashpw/clocktable-by-category)
4.  Review where my time went during the day
5.  Reschedule any items I didn't get to (and think about why)


### Weekly {#weekly}

1.  Open my retrospective file
2.  Insert a new heading for the current week
3.  Insert a [`clocktable-by-category`](https://github.com/cashpw/clocktable-by-category)
4.  Review where my time went during the week and if I want to make any changes
5.  Open my agenda view for planning the week (see [Personal emacs config]({{< relref "personal_emacs_config.md" >}}))
6.  Schedule items such that I'm 60-80% booked each day; leave [Slack]({{< relref "slack.md" >}}) in my schedule for unexpected items or for those which take more time than expected


## Scheduling [org-mode]({{< relref "org_mode.md" >}}) events for different times on different days {#scheduling-org-mode--org-mode-dot-md--events-for-different-times-on-different-days}

Some of my TODOs have schedules which don't mesh with [org-mode]({{< relref "org_mode.md" >}})'s model of deadlines and scheduling. [org-mode]({{< relref "org_mode.md" >}}) doesn't support scheduling a TODO for more than one time:

> Scheduling an item in Org mode should not be understood in the same way that we understand scheduling a meeting. Setting a date for a meeting is just a simple appointment, you should mark this entry with a simple plain timestamp, to get this item shown on the date where it applies. This is a frequent misunderstanding by Org users. In Org mode, scheduling means setting a date when you want to start working on an action item.
>
> (<a href="#citeproc_bib_item_1">“Deadlines and Scheduling (The Org Manual)” n.d.</a>)

Items have just the one `SCHEUDLED` property. They can have more than one timestamp; however, [org-mode]({{< relref "org_mode.md" >}}) increments all of the timestamps when you mark the item as `DONE` (see `org-auto-repeat-maybe`) --- not just today's timestamp.

My hack-ish fix is to have duplicate TODOs. That is, for an event that has a different time on weekdays and weekends:

```org
* Do the thing
SCHEDULED: <2023-11-27 Mon 10:00-10:30 ++1w>
* Do the thing
SCHEDULED: <2023-11-28 Tue 10:00-10:30 ++1w>
* Do the thing
SCHEDULED: <2023-11-29 Wed 10:00-10:30 ++1w>
* Do the thing
SCHEDULED: <2023-11-30 Thu 10:00-10:30 ++1w>
* Do the thing
SCHEDULED: <2023-12-01 Fri 10:00-10:30 ++1w>
* Do the thing
SCHEDULED: <2023-12-02 Sat 08:00-08:30 ++1w>
* Do the thing
SCHEDULED: <2023-12-03 Sun 08:00-08:30 ++1w>
```

This would be annoying if I used the built-in `clocktable` which would show a separate line-item for each TODO:

```org
#+BEGIN: clocktable :block "2023-W48" ...
#+CAPTION: Clock summary at [2023-11-28 Tue 09:37], for week 2023-W48.
| File           | Headline         |   Time |
|----------------+------------------+--------|
|                | ALL *Total time* | *3:30* |
|----------------+------------------+--------|
| Personal TODOs | *File time*      | *3:30* |
|                | Do the thing     |   0:30 |
|                | Do the thing     |   0:30 |
|                | Do the thing     |   0:30 |
|                | Do the thing     |   0:30 |
|                | Do the thing     |   0:30 |
|                | Do the thing     |   0:30 |
#+END:
```

Instead, I use [`clocktable-by-category`](https://github.com/cashpw/clocktable-by-category) which supports merging duplicate headings into one line-item with a duration equal to the sum of the duration of the duplicates:

```org
#+BEGIN: clocktable-by-category :block "2023-W48" ... :merge-duplicate-headlines t
#+CAPTION: Clock summary at [2023-11-28 Tue 09:37], for week 2023-W48.
| Category       | Headline         | Time   |
|----------------+------------------+--------|
|                | ALL *Total time* | *3:30* |
|----------------+------------------+--------|
| Personal TODOs | *Category time*  | *3:30* |
|                | Do the thing     | 3:30   |
#+END:
```


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>“Deadlines and Scheduling (The Org Manual).” n.d. Accessed November 28, 2023. <a href="https://orgmode.org/manual/Deadlines-and-Scheduling.html">https://orgmode.org/manual/Deadlines-and-Scheduling.html</a>.</div>
</div>
