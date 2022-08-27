+++
title = "David Thompson | My Favourite Git Commit"
author = ["Cash Weaver"]
date = 2022-02-07T06:26:00-08:00
lastmod = 2022-08-26T22:07:10-07:00
tags = ["reference", "reference"]
categories = ["reference"]
draft = false
+++

[David Thompson]({{< relref "david_thompson.md" >}}), (<a href="#citeproc_bib_item_1">Thompson 2019</a>)


## Summary {#summary}


## Thoughts {#thoughts}

See: [Documenting Your Work]({{< relref "documenting_your_work.md" >}})


## Notes {#notes}

[Dan Carley](https://github.com/dcarley)'s [commit in alphagov/govuk-puppet](https://github.com/alphagov/govuk-puppet/commit/63b36f93bf75a848e2125008aa1e880c5861cf46):

```nil
Convert template to US-ASCII to fix error

I introduced some tests in a feature branch to match the contents of
`/etc/nginx/router_routes.conf`. They worked fine when run with `bundle exec
rake spec` or `bundle exec rspec modules/router/spec`. But when run as
`bundle exec rake` each should block failed with:

    ArgumentError:
      invalid byte sequence in US-ASCII

I eventually found that removing the `.with_content(//)` matchers made the
errors go away. That there weren't any weird characters in the spec file. And
that it could be reproduced by requiring Puppet in the same interpreter with:

    rake -E 'require "puppet"' spec

That particular template appears to be the only file in our codebase with an
identified encoding of `utf-8`. All others are `us-ascii`:

    dcarley-MBA:puppet dcarley$ find modules -type f -exec file --mime {} \+ | grep utf
    modules/router/templates/routes.conf.erb:                                         text/plain; charset=utf-8

Attempting to convert that file back to US-ASCII identified the offending
character as something that looked like a whitespace:

    dcarley-MBA:puppet dcarley$ iconv -f UTF8 -t US-ASCII modules/router/templates/routes.conf.erb 2>&1 | tail -n5
      proxy_intercept_errors off;

      # Set proxy timeout to 50 seconds as a quick fix for problems
      #
    iconv: modules/router/templates/routes.conf.erb:458:3: cannot convert

After replacing it (by hand) the file identifies as `us-ascii` again:

    dcarley-MBA:puppet dcarley$ file --mime modules/router/templates/routes.conf.erb
    modules/router/templates/routes.conf.erb: text/plain; charset=us-ascii

Now the tests work! One hour of my life I won't get back..
```


### It explains the reason for the change {#it-explains-the-reason-for-the-change}

> The best commit messages I've seen don't just explain **what** they've changed: they explain **why**.


### It's searchable {#it-s-searchable}

> One of the first things in this commit message is the error message that inspired the change:
>
> ```nil
> ArgumentError:
>   invalid byte sequence in US-ASCII
> ```


### It tells a story {#it-tells-a-story}

> This commit message goes into a lot of detail about what the problem looked like, what the process of investigating it looked like, and what the process of fixing it looked like.

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Thompson, David. 2019. “My Favourite Git Commit.” <i>Dhwthompson.Com</i>. <a href="https://dhwthompson.com/2019/my-favourite-git-commit">https://dhwthompson.com/2019/my-favourite-git-commit</a>.</div>
</div>
