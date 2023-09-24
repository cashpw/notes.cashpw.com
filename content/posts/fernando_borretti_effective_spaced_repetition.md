+++
title = "Fernando Borretti | Effective Spaced Repetition"
author = ["Cash Weaver"]
date = 2023-04-11T15:21:00-07:00
lastmod = 2023-09-24T10:10:21-07:00
tags = ["hastodo", "reference", "hastodo", "reference"]
categories = ["hastodo", "reference"]
draft = false
slug = "ec2a6f22-dad5-4615-a2a9-c5313229ff5d"
+++

[Fernando Borretti]({{< relref "fernando_borretti.md" >}}), (<a href="#citeproc_bib_item_1">Borretti 2023</a>)


## Summary {#summary}

On [Spaced repetition]({{< relref "spaced_repetition.md" >}}).


## Thoughts {#thoughts}


## Notes {#notes}

> There are two main limiting factors to effective spaced repetition:
>
> 1.  Habit Formation
>
>     For spaced repetition to be useful, it has to be a habit. I drill flashcards every day as part of my morning routine. But habit formation is difficult, doubly so for people who have ADHD or are low in conscientiousness.
>
>     The reason you have to do it every day is that the spaced repetition algorithm schedules the reviews for you, freeing you from having to do that manually. But you don't know what cards are due in a given day until you open the app. And if you skip a day, those cards pile up and are due the next day.
>
>     A common failure mode (and I did this more than once, before I got the hang of it) is to use Anki for two weeks, then drop it, and pick it back up six months later only to find you have 600 cards due for review. This is not encouraging, and it defeats the point of spaced repetition, which is to review the cards on the intervals the algorithm chooses.
>
> 2.  Card-Writing Skills
>
>     Writing effective flashcards is a skill that took me a while to acquire. Many of the cards I wrote in the first four or six months of using spaced repetition consistently turned out pretty much useless, and this can be frustrating. The main reason to write this post was to communicate the lessons I learnt so you can jump in to using spaced repetition effectively from the start.
>
>     One reason this can be frustrating is you'll often remember a flashcard for the first few weeks of it (when you're seeing it with high frequency), but after a couple of months, you start failing it. It didn't take root in your long term memory, because it was poorly written in some way. And this long feedback cycle means it takes time to acquire these skills through trial and error.
>
> [frmatting mine]


### Rules {#rules}


#### Understand First {#understand-first}

> Don't try to memorize what you don't understand. The concepts should be clear in your head before you try to commit them to memory. "Clear" can be a fuzzy thing. What I tend to do is: dig, expand, and clarify the text until I'm comfortable I have a good grasp of this region of the concept graph, and then write the flashcards.


#### Be Honest {#be-honest}

> The software doesn't know whether you recalled something correctly or not. You are only accountable to yourself. If you recalled something wrong, or not quite right, err on the side of caution and mark it forgotten.


#### Keep It Fun {#keep-it-fun}

> This is _crucial_ to maintaining the habit. If reviewing flashcards feels like a chore, you will become averse to doing it.
>
> I used to frequently have this problem. I solved it in a few ways:
>
> 1.  Having a diverse knowledge base you're drilling helps, so you are not bored by going through the same topic for a long time. Typically, spaced repetition software will shuffle the cards, so that if you're drilling all the cards across all decks, you will be surprised often.
> 2.  A common source of frustration is cards that are too long to recall quickly, and thus feel like a chore. Break big cards down into smaller cards. It feels good to be able to fly through the cards quickly.
> 3.  Cards that are difficult to recall are very frustrating. I solved this by applying the rules described in this post.


#### Repeat Yourself {#repeat-yourself}

> Memory is frequency times volume. Individual cards should be extremely brief, but your deck as a whole can be as repetitive as you want.


#### Organize by Source {#organize-by-source}

> Organize content by source, not topic.
>
> The reason is you'll often bring in information from multiple sources: multiple textbooks, plus Wikipedia, plus lecture notes, etc. Each one of these sources likely has a different way of organizing knowledge.
>
> Don't waste time trying to find the perfect ontology.
>
> Make a deck for each source. In the case of textbooks, make a sub-deck for each chapter. In the case of math textbooks, possibly make a sub-sub-deck in each chapter to put theorem cards.
>
> This also makes it easier to keep track of how far along you got into a text.


#### Write Atomic Flashcards {#write-atomic-flashcards}

> Cards should be short. They should refer to as little information as possible. They should be like chemical bonds, linking individual _atoms_ of knowledge.
>
> _This is the most important thing._ By far the worst failure mode is to put too much in a flashcard.
>
> There's two reasons for this rule:
>
> 1.  Larger cards are harder to remember.
> 2.  It's harder to objectively grade yourself: when you reveal the answer, you might have got some things right and some things wrong. If you click forget, you will be over-reviewing the parts you already know. If you click remembered, you will under-review the parts you forgot.
>
> There is one exception to this: you can have big cards if you also have smaller cards that add up to the same information. You can think of the larger card as testing that you can collate the information from the smaller cards.


#### Write Two-Way Questions {#write-two-way-questions}

> When possible, ask questions in two directions.
>
> Whenever you have a term with a definition, the obvious thing to do is to ask for the definition from the term, e.g.:
>
> <div class="quote2">
>
> Q: What is the order of a group?
>
> A: The cardinality of its underlying set.
>
> </div>
>
> But you can also ask for the term from the definition, e.g.:
>
> <div class="quote2">
>
> Q: What is the term for the cardinality of a group?
>
> A: The group's order.
>
> </div>
>
> When you have some notation, like \\(\mathbb{R}\\) for the real numbers, or \\(\dim V\\) for the dimension of a vector space, the natural thing to ask is what the notation means.
>
> <div class="quote2">
>
> Q: What does \\(\mathbb{R}\\) stand for?
>
> A: The set of real numbers.
>
> </div>
>
> You can also ask the question backwards:
>
> <div class="quote2">
>
> Q: What is the notation for the set of real numbers?
>
> A: \\(\mathbb{R}\\)R
>
> </div>


#### Ask Questions in Multiple Ways {#ask-questions-in-multiple-ways}

Ask questions in multiple ways. Ask for formal and informal definitions of terms. Ask for the formal and informal statements of a theorem. Ask questions forwards and backwards. Add contextual questions: "what is the intutition for [concept]?". Add questions that link different concepts across your knowledge graph.

The more interlinked your knowledge graph is, the better.


#### Concept Graphs {#concept-graphs}

It can help to visualize the concepts you're acquiring as being like a graph, where each node represents a discrete concept having certain properties, and the edges in the graphs are questions which get you from one concept to another.


#### Learning Hierarchies {#learning-hierarchies}

A lot of knowledge is hierarchical, of the form "Foo can be either A, B, or C", or, dually, "A is a kind of Foo". By analogy to OOP: these concepts are joined by superclass and subclass relations.

The idea is to ask questons in the top down direction ("What are the subclasses of Foo?") and the bottom-up direction ("What is Bar a subclass of?").

This ties into keeping flashcards atomic. Even when some information is not hierarchical, intrinsically, breaking down large flashcards into smaller flashcards is fundamentally building a hierarchy of flashcards.


#### Learning Sequences {#learning-sequences}

In general, to learn a sequence \\((A\_{1},\ldots,A\_{n})\\)(A1​&lt;&lt;&gt;&gt;,...,An​&lt;&lt;&gt;&gt;), you want to generate the following flashcards for each \\(i \in \lbrack 1,n\rbrack\\)i∈[1,n]:

| Question                                                  | Answer                                |
|-----------------------------------------------------------|---------------------------------------|
| What is the \\(i\\)i-th element?                          | \\(A\_{i}\\)Ai​&lt;&lt;&gt;&gt;        |
| What is the position of \\(A\_{i}\\)Ai​&lt;&lt;&gt;&gt;?   | \\(i\\)i                              |
| What element comes after \\(A\_{i}\\)Ai​&lt;&lt;&gt;&gt;?  | \\(A\_{i + 1}\\)Ai+1​&lt;&lt;&gt;&gt;  |
| What element comes before                                 | \\(A\_{i - 1}\\)Ai−1​&lt;&lt;&gt;&gt;  |
| \\(A\_{i}\\)Ai​&lt;&lt;&gt;&gt;?                           |                                       |

You might also want:

1.  A **\*test card:** a flashcard asking you to recite the sequence from beginning to end.
2.  A **\*cloze sequence:** flashcard with a cloze deletion for each element in the sequence, to fill in the blank given the context.

The [sequence script](https://borretti.me/article/effective-spaced-repetition#seq-script) can generate these for you.

How thorough you want to be depends on the nature of the information. Most of the time I use a cloze card and a test card.

Another type of card you might use (I use this to memorize poems) is a card that gives you some context (the previous one or two items in the sequence) and asks you to fill in the blank. For example, if you wanted to learn the sequence (A, B, C, D), you might have these flashcards:

| Question            | Answer |
|---------------------|--------|
| _Beginning_, ...    | A      |
| _Beginning_, A, ... | B      |
| A, B, ...           | C      |
| B, C, ...           | D      |

The [poetry script](https://borretti.me/article/effective-spaced-repetition#poetry-script) can generate these for you.


## Flashcards {#flashcards}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Borretti, Fernando. 2023. “Effective Spaced Repetition.” Fernando Borretti. April 10, 2023. <a href="https://borretti.me/article/effective-spaced-repetition">https://borretti.me/article/effective-spaced-repetition</a>.</div>
</div>
