+++
title = "Alexey Nikitin | My least favorite Git commit"
author = ["Cash Prokop-Weaver"]
date = 2022-02-07T06:31:00-08:00
lastmod = 2024-02-24T17:59:22-08:00
tags = ["reference", "reference"]
categories = ["reference"]
draft = false
slug = "89fb44ee-8994-4c6c-89db-bc210039a39b"
+++

[Alexey Nikitin]({{< relref "alexey_nikitin.md" >}}), (<a href="#citeproc_bib_item_1">Nikitin 2019</a>)


## Summary {#summary}

A response to [David Thompson | My Favourite Git Commit]({{< relref "thompsonMyFavouriteGitCommit2019.md" >}}) which asserts that git commit messages are less useful when compared to testing and more-accessible documentation (e.g. a README).


## Thoughts {#thoughts}

See: [Documenting Your Work]({{< relref "documenting_your_work.md" >}})


## Notes {#notes}

The essay isn't written in English. I've used Google Translate to read and quote.

> Commit messages do not help to find problems and their causes
>
> [...] very often I cannot find the commit in which the change I need was made. First, on a line that works erroneously, there are usually several commits, and you need to look at everything. Secondly, this line could be copied from somewhere, in which case its history will be lost.

<!--quoteend-->

> `git log` [is a] powerful tool, it can be used to find a commit by a . But ask yourself a question: will you run a gitcommit search if you have an encoding error in your project when executing scripts? No. Most will answer that they will open google , or immediately [Stack Overflow] and there they will look for a solution to the problem. In this case, none `git log` will help, because this is not the tool that is used to find solutions to a problem. Although I have no doubt that the author of the commit is a smart guy, and gathered the right information to find the problem with encodings.

<!--quoteend-->

> How could you have done
>
> Test
>
> The very first thing that came to my mind was a test. Write a test that will check for new such errors in the project (Den should have written a bash test that would check the encoding in the project files before running all the tests). When configured, CI is a powerful tool for future project participants. If someone in the future wrote one / several (yes, even the entire file) in a different encoding, then he would be stopped by a test that would kindly report the accepted encoding in the project - checkmate.
>
> Documentation
>
> The accepted encoding is a disciplinary rule in the project. Since the project has readme, it was possible to add a paragraph there about the accepted encoding and possible problems if you deviate from this encoding. After all, new people enter the project just through reading readme(usually it says how to run, which versions to use, possible errors, even the changelog of versions can be seen there). Then, faced with a similar error, the project participant would definitely remember the accepted encoding and fix the problem. Leaving documentation of the project discipline rules in commit messages would not have the same effect.

<!--quoteend-->

> A commit message to change a single character is hard-to-find information. The project once paid for this information, but now it's worthless, floundering uselessly in a sea of ​​27,000 commits. And the project will have to pay more if a similar problem shoots in the future.
>
> Long commit messages degrade maintainability
>
> If you are tempted to write a whole story in a commit message, you should think about how you can provide this story in another way - tests or documentation are much better. Having to read commit messages in order to find and fix a problem is not a sign of good code.


## Bibliography {#bibliography}

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Nikitin, Alexey. 2019. “My least favorite Git commit.” <i>Alexey Nikitin</i>. <a href="https://www.nikialeksey.com/2019/10/26/long-commit-message.html">https://www.nikialeksey.com/2019/10/26/long-commit-message.html</a>.</div>
</div>


## Backlinks {#backlinks}

-   [Document your work]({{< relref "documenting_your_work.md" >}})
