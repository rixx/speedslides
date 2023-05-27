---
theme: ./theme
lineNumbers: false
background: ./public/images/00-test-pattern.jpg
split: stop
record: false
selectable: false
routerMode: 'hash'
drawings:
  enabled: false
codeCopy: false
title: testing, testing, is this thing on?
---

# testing, is this thing on?

<!--
Setup. Remember your feet. Remember your larynx
-->

---
split: reset
background: ./public/images/01-title-mario.jpg
layout: cover
---

<div style="height: 100px"></div>

# a speedrunning guide<br> to software development

<!--
Feet. Larynx.

Thank you for the introduction. Let me be one of the first to welcome you to …

… oh wait, one more setup thing. ***NEXT***


**second time**. click through

-->
---
split: show
background: ./public/images/01-title-mario.jpg
layout: cover
---

<div style="height: 100px"></div>

# a speedrunning guide<br> to software development


<!--
[timer is now visible]

… right. Okay. Everybody ready? Then let's talk about speedrunning. ***NEXT***


**second time**. Thank you, ___, for the introduction, and welcome, everybdoy, to DjangoCon Europe!

-->
---
split: start
layout: speedimage
background: /images/django_logo.svg
dim: false
---
<!--
[timer starts running]

… after a short intro, because it is extremely awkward to be standing here without
any kind of justification, assuming the authority of a keynote speaker, such as it is.
So let me first off present my CV and my greatest LinkedIn hits. Hmmm, I don't feel a lot
of enthusiasm at this prospect. Let's start over and cut the useless parts, then.

[RESET]

**second time** I'm Tobias, and I'll be your keynote speaker today.

-->

---
layout: speedimage
background: /images/pretalx_logo.svg
imageWidth: 25%
dim: false
---

<!--
I built pretalx (the tool giving you this conference call for proposals and schedule.
If you have opinions about that, yell at me about it later). I also ran DjangoCon Europe Heidelberg ***NEXT***
-->

---
layout: speedimage
background: /images/djangocon_logo.svg
imageWidth: 25%
dim: false
---

<!--
together with some other lovely people you'll also see on stage here in the coming days.
-->

---
layout: speedimage
background: /images/rixx.de.svg
imageWidth: 25%
dim: false
---

<!--
I also dislike talking about myself, so if you want to know anything else, you'll find it at my homepage.

-->
---
split: intro
---

<h1 style="text-decoration: underline">
  speedrunning
  ([ˈspiːdˌr<span style="transform: scale(-1, 1);">v</span>ni<span style="letter-spacing:-9.2px; position: relative">nj<span style="display: block; position: absolute; top: -8px; left: 3px; px; width: 10px; height: 10px; background-color: #092e20;"></span></span> ]),
  noun:
</h1>

<ul style="list-style-type: none">
<v-click><li> going very very fast</li> </v-click>
<v-click><li> in video games</li></v-click>
<v-click><li> ( to reach a goal ) </li></v-click>
<v-click> <li> (( within specific rules ))</li> </v-click>
</ul>

<!--
what is speedrunning?  and how does it apply to software development?

okay, first off, who here has heard of speedrunning before?

…

ah. okay, in that case we can go a bit faster:


speedrunning is playing games really fast, or rather, playing a game with the intent to reach a set
objective as fast as possible within certain rules.
-->

---
split: definition
layout: speedimage
background: /images/startspeedrunning.png
dim: false
---


<!--
When you first see a speedrun, it's usually one of a game you've played, either recently or in your childhood. Seeing
your first speedrun of a game you know is a jarring event: it's rapid, it's hard to follow, and often looks very weird
or glitchy.

The two common negative reactions are calling the speedrunner a cheater, or asking why they prefer to speed through this
game rather than spending time with it and enjoying it. Rushing through it and ignoring most parts of the game feels
like it devalues the game and misses the point, after all.

But that's a misconception that stems from seeing only that one successful speedrun. Speedrunners arguably spend more
time on a game than anybody else – beginners start with hundreds of hours, but top level runners have thousands of hours
running and practicing their game. We'll come back to that later.
-->
---
layout: speedimage
background: /images/star.png
dim: false
imageRepeat: 70
imageWidth: 70px
---

<!--
One interesting thing about speedrunning is how varied it is. Not only are there speedruns for thousands of games out
there, even within a single game, there is a ton of variety. Let me illustrate this with Super Mario 64, a 3D platformer
game from 1996, only five years younger than Python.

Normally, in SM64 you need to collect 70 out of 120 stars to finish the game (don't count! these aren't 70!), and there
is a speedrun doing exactly that.
-->

---
layout: speedimage
background: /images/star.png
dim: false
imageRepeat: 70
imageWidth: 140px
---
<!--
However, it turns out that with some tricks and glitches, you can get away with just 16 stars (these aren't 16 either, I
know!),
and later, tricks were found to finisht the game with just
-->

---
layout: speedimage
background: /images/star.png
dim: false
imageWidth: 140px
---
<!--
one or zero stars.

These runs are increasingly shorter and involve more tricks, and so they have separate leaderboards, as it makes no
sense to compare a 46 minute 70 star run with a 6 minute 0 star run.

So that's how speedrunning works!
-->

---
split: rules
layout: speedimage
background: /images/glitch01.png
imageOrientation: left
dim: false
---

<!--
By first appearances, speedrunning has very little in common with software development. It's just a weird way to play a
game after all, nothing like the serious and time-honoured tradition of our craft! It requires twitch reflexes and is
all about leaderboards and competition.

But, in my opinion, there are a lot of surprising similarities that have shown me software development in a new light
when I jumped (or stumbled) into speedrunning, and there are some less obvious differences that are very informative.

First off: Speedrunning is like open source work, in that everybody shares. You might find that surprising given the
competitive nature, but it's really frowned upon to hide new strategies to gain an edge over the competition. Glitches
and tricks are developed by the community collaboratively and shared with everybody freely through the actual runs, but
also tutorials and guides and resources, just like open source software. Nobody's going "yes, allright, Django can speak
to PostgresQL, but we're not going to tell you HOW we do that!"
-->
---
split: similarities.open
layout: speedimage
background: /images/glitch02.png
imageOrientation: left
dim: false
---

<!--
An extension of this openness is that there is help readily available to newcomers.

Be it on the Django forum, or a speedrunning Discord, there are experts with years of experience around who enjoy
helping people with their problems.

… that is, when the questions show some thought. Just like "Hey, teach me how to write a website" will get a tired link
to the Django Girls tutorial, a "How do I learn the Any% speedrun?" won't get much of a response.

But asking "I'm trying to learn this one trick, which is part of that route, and I can't get it. I watched this tutorial
and here's a video of my attempts" will have people enthusiastically helping, much like on our forum.
-->
---
split: similarities.experts
layout: speedimage
background: /images/roles1.jpg
dim: false
imageOrientation: left
imageWidth: 740px
---

<!--
The forum illustrates another thing: Both software development and speedrunning have lots of non-obvious roles.

People only see the lone heroes, the stars, top runners, heroic lead developers.

But not only are there more runners, there are also more roles than just that in the community.
-->
---
layout: speedimage
background: /images/roles2.jpg
dim: false
imageOrientation: left
imageWidth: 740px
---

<!--
A huge foundation of speedrunning are the labbers. Labbers, in their laboratories, figure out new time saves, glitches, tricks.

On one end of the spectrum they may improve an existing trick to be easier more accessible, whereas at the other end of
the spectrum they will sit down with RAM inspectors and build exploits that are closer to programming than gameplay. For
those tricks, runners will kill an enemy at a specific position and then die at another position, making sure those
coordinates are written to RAM and later called on as actual programming instructions.

-->

---
layout: speedimage
imageWidth: 400px
dim: false
imageCredit: "@Nintega-Dario on DeviantArt"
background: /images/link-yoshi.png
---

<!--
In one extreme case, you spend most of the speedrun for one game, Paper Mario, playing another game, Ocarina of Time, in
order to set up these exploit variables, and then switching the game cartridge fast enough that the console will keep
those values around. It's wild.

And while the runners usually have some understanding what's going on, it doesn't have to be terribly detailed compared
to the labbers. It's pretty much like how I have a vague understanding of how Python's Global Interpreter Lock works,
enough to explain it to newer colleagues, and enough to follow the gist of discussions and how Python works around it.
But it's the labbers, the people working on Python itself, who have a deep understanding of the matter that I don't
have, and don't need.
-->
---
layout: speedimage
background: /images/roles3.jpg
dim: false
imageOrientation: left
imageWidth: 740px
split: similarities.labbers
---

<!--
And there are roles even less obvious and even more in the shadows:

Where there are leaderboards, there are competitions. In speedrunning, those are showcase races and tournaments.
Event organisers who set up tournament, scheduling, commission artwork, organise commentators and runners into seamless
streams. Event organisers work for months in the shadows just so that an event like this one can come together.

And that's why we're all extremely thankful to our wonderful conference organisers <3
-->

---
layout: speedimage
background: /images/roles4.jpg
dim: false
imageOrientation: left
imageWidth: 740px
split: similarities.organisers
---

<!--
And, coming back to the forum, every growing group of people sooner or later needs governance. Both speedrunners and software developers have
a social and a technical kind of governance. 

Once you have a forum, or a mailing list, or a Discord server, you need moderation. Moderators need guidelines, a code of conduct, that somebody needs to write,
and to enforce, and provide a place for confidential reports.

On the technical side, in speedrunning there's deciding what the rules are, what counts as a glitch, making sure nobody
cheats. In Django, we have similar need of both social and technical governance and steering, things that happen in part
in the DSF (which I highly encourage you to support!), in DEPs and various other places.

And then, every community has to answer tough questions. Which roles are elected, and elected by whom? How do you deal
with cases where the technical rules are broken – do cheaters still get to participate in community forums? And the
other way around, do people with code of conduct violations still get to show up at events, or on the leaderboards?

-->

---
layout: speedimage
background: /images/hype.png
dim: false
imageOrientation: left
split: similarities.governance
---

<!--
And, of course, we all have to deal with hot new revolutionary technology changing what we do and we know. Speedrunners,
even for very old games, have to adjust to new tricks and exploits constantly, just as we have to look at new language
and framework features and think carefully if those are useful to us. That's really hard to do! At first it's very
tempting to be extremely in favour of every latest thing, and later it's just as easy to be the proverbial old man
yelling at the cloud and rejecting all new things just because they are new.

This also goes not just for our main focus of work – the game or the software, but for the tools we use along the way.
Speedgames improving is often due to the practice tools improving, and allowing more specific practice (we'll come back
to that later), just like I had to painfully learn that IDEs exist for a reason, and that the one semester in uni that I
spent writing Java in a plain text editor just because I could? yeah, that was not well spent, let me tell you.
-->
---
layout: speedimage
background: /images/hype.png
dim: false
imageOrientation: left
split: similarities.hype
---

<!--
And that's it for the similarities between speedrunning and software development. (I lie – there's much more!
Tool-assisted speedruns, bad posture and hand pain rather than learning from musicians who have solutions to those and much more, but we don't have time!)

The differences are easier and more, of course: Software Development does not require twitch reflexes, repeating the
same optimised movement for hours, it's, in the end, not a game, and we don't even have leaderboards. (What would our
leaderboards even be? Fastest one to merge new PRs? Lines of Code deleted?)

But the arguably most important difference is about what we DO. Let me illustrate
-->
---

<img src="/images/suigi1.png" style="transform: rotate(-10deg)">
<v-click><img src="/images/suigi2.png" style="transform: rotate(10deg); width: 400px; margin-left: 250px; margin-top: -50px"></v-click>
<v-click><img src="/images/suigi3.png" style="transform: rotate(15deg); width: 400px"></v-click>
<v-click><img src="/images/suigi4.png" style="transform: rotate(-5deg); width: 400px; margin-left: 300px"></v-click>

<!--
Back to Super Mario 64:  is really old, and one of the most famous and most active speedgames, but earlier this year,
something unexpected happened.

First off, end of March, the world record holder of the 16 star category improved his record to a somewhat ridiculous
degree – he's now 15 seconds ahead the second place, which is incredibly in a 15 minute category. Only the runner-up has
a sum of best segmetns that reaches this best run. Truly out of this world, and enough to make news on its own.

However, two weeks later, Suigi set a new 1-star world record that broke the minute barriar and finally got 1-star below
7 minutes. And, only one more week later, he also snagged the 0-star world record, by a still comparatively giant 7
second lead.

Holding three records is not entirely unheard of, but at the current level of optimisation in the game, it was unlikely
and unexpected. And when something like this happens, everybody wonders: how? Why? What makes this guy special?

And the tempting answer is: talent. Top level runners, man, they are so talented! So impressive! 

But it's not talent. Sorry. It's practice. That might sound boring, but it's true: In the most famous trick of SM64, the
Backwards Long Jump, Suigi has several hundreds of hours of practice time, more than beginner runners have time in the
game in total.

so there's the difference. speedrunners, at top level, spend a ton of time practicing, whereas we spend most of our time
working, much less time learning
-->

---
split: differences
layout: speedimage
background: /images/sky.jpg
---

<v-click><h3>“If you trust in yourself …”</h3></v-click>

<v-click><h3>“Yes?”</h3></v-click>

<v-click><h3>“… and believe in your dreams …”</h3></v-click>

<v-click><h3>“Yes?”</h3></v-click>

<v-click><h3>“… and follow your star …”</h3></v-click>

<v-click><h3>“Yes?”</h3></v-click>

<v-click><h3>“… you'll still get beaten by people who spent THEIR time working hard and learning things and weren't so lazy. Goodbye.”</h3></v-click>

<h5 v-click="1" style="margin-top: 1em"> Terry Pratchett, The Wee Free Men</h5>

<!--
And practice is what I really want to talk about. I just used speedrunning to draw you in. hah!

the past decades have shown us much more how practice works
and that practice is vastly more important than intelligence

as the late and great Terry Pratchett said:

[remember to double-click!!]

If you trust in yourself

And believe in your dreams

And follow your star

you'll still get beaten by people who spent THEIR time working hard and learning things and weren't so lazy


Intelligence and talent aren't useless, but they mostly useful in starting out. I'm going to refer to chess and music a
lot, because both have been around for a long time, and have been well-studied.

Chess players seem to draw an advantage from IQ for 1-2 years, but then then practice wins out, and for a bit, IQ is
even negatively correllated (very slightly) with skill, probably because people with a high IQ haven't been forced to
figure out how to practice as much, and have to learn that at that point.

Many many things have been shown to be about the right kind of practice rather than talent
- perfect pitch can be taught to children
- even adults can learn an adequate replacement

It's all about the kind and quality of practice, you can't just spend more time and brute force the issue.
-->

---
split: practice.talent
---

# Components of expertise

<ul>
<v-click><li>Motivation</li></v-click>
<v-click><li>Deliberate Practice</li></v-click>
<v-click><li>Mental Representation</li></v-click>
</ul>

<!--
There have been a lot of studies and papers written about all of this in the past decades, and they have identified
three big components of becoming an expert in any given field.

Motivation is a big topic, which I won't be getting into at all. It's about having interest (and this is where talent
comes into things, because it holds your attention initially), and keeping motivation up over the course of years while
preventing burnout. As a recovering conference organiser, there's nothing I can add to that, so moving on:

the next aspect is called Deliberate Practice, and is a theory on how to pick up pretty much any skill.

And finally, there's an underrated but crucial concept called "Mental Representations" that sets experts apart. More on
that in a bit.
-->
---

# Deliberate Practice

<ul>
<v-click><li>Doing</li></v-click>
<v-click><li>Focus</li></v-click>
<v-click><li>Comfort zone</li></v-click>
<v-click><li>Feedback</li></v-click>
</ul>

<!--
If we assume that skills don't fall from the sky and aren't part of you as a mystical talent for writing Django web
applications that you have had from childhood, then skill is created by practice, and how we practice is extremely
important.

There are four crucial parts to DP:

- first off, practice needs to be focused on doing things, on performing the skill you want to learn. knowledge on its
  own does not imply skillful application. this runs counter to our schooling system, but is thankfully easily included
  in anything related to programming. but even here it's easy to look at something like the Django Girls tutorial and,
  despite plentiful warnings, just read it instead of working through it, with the result of feeling accomplished and
  having learned very little
- secondly, practice needs to be focused. This isn't just about focusing on a goal (though having goals for each
  practice session is also important): it's about focusing on the things you're doing right and wrong. Again, this is
  comparatively easy for us; certainly easier than, say, training for sports, where it's extremely tempting to just zone
  out during an hour-long run, instead of constantly focusing on your form. This also means that your practice sessions
  are limited in length by the time you're able to focus (and of course, your ability to focus will improve with
  practice). zoning out is also harmful because you start making small mistakes, and then you will practice those
  mistakes absentmindedly, and learn them
- good practice is always a bit outside your comfort zone. not all the way out – you still need to be able to complete
  the thing you're attempting. but staying inside your comfort zone, while tempting, won't teach you anything. I find
  this one very easy to say and very hard to do – the discomfort of moving outside my comfort zone, for example when
  learning a new programming language, is super aversive and easy to avoid. the frustration is not attractive
- and finally, a big load-bearing part of deliberate practice is having feedback loops. The traditional approach is
  having a teacher, maybe once a week or more often, who offers guidance and correction. We don't really have that,
  apart from peer programming, but fortunately, building feedback loops is already a part of what we do: the primitive
  "does it compile" loop, of course, and choosing to look at every change we make immediately rather than coding for an
  hour and *then* figuring out all the broken parts, but of course also things like TDD
-->
---
split: practice.practice
layout: speedimage
background: /images/chess.webp
dim: false
---

<!--

Mental Representations are what it says on the tin: how you think about your subject matter, or more particularly: how
efficiently you can access your mental version of what you're dealing with, in order to compare it to reality.
I have a chess example and a music example again:

Good chess players can take one glance at a chess board, and remember the board position exactly. When describing the
board position, they won't talk about where an individual piece is, and rather talk about power blocks and lines of
attack. Interestingly enough they only have this ability for configurations that could be part of a chess game. If you
just sprinkle chess pieces randomly across a board, a chess grandmaster will not be any better than a chess novice at
remembering the positions.


And the most important measure here is chunk size. The chess experts can encode chess positions at a very large chunk
size, so they don't have to remember and think about 32 separate pieces and their positions when considering the board.
My favourite illustration of this comes from music:

-->

---
layout: speedimage
imageWidth: 400px
dim: false
imageCredit: "@Nintega-Dario on DeviantArt"
background: /images/music01.png
---

<!--

When a child learns to play an instrument, and start to manage to hit notes, they will still sound something like this:
du du du. They think about one note at a time. After some time their – speaking as a programmer – lookahead increases,
and they may start to think about two notes at a time: dudu dudu. Better, right?
A bit more progress, and they will think in entire bars: dudududu – and finally in musical phrases (ideally keeping the
entire piece in the back of their head for context): dududuududududu.
-->
---
split: practice.representation
layout: speedimage
background: /images/fluent.png
dim: false
---

<!--

The main thing we're aiming for with these large mental representations is fluency. If good mental representations are
the invisible reason behind expertise, then fluency is the visible symptom. Think about multipliation tables: Nobody
likes learning them, but knowing how to multiply small numbers without thinking is dead useful. Aiming at effortless
fluency is a good way to identify what to improve.
-->
---
split: action.fluency
layout: speedimage
background: /images/posture.png
imageWidth: 500px
dim: false
---

<!--
And the best way to build fluency in software development, arguably, is by being fluent in the tools you use. Our daily
tasks are nowhere near as repetitive as a speedrun, but our use of our tools is, and anything that's repetitive can be
practiced and optimised.

The first and most obvious thing to work on is typing. Now, I'm not advocating for any particular way of typing, or a
specific keyboard layout – all I'm saying is that when your typing isn't fluent and effortless and fast, then everything
that is downstream of typing will suffer.

Of course there are different ways to practice typing – you can just take the naive approach of typing more, possibly
with a timer. This will probably improve your typing a bit, but not a lot. Real improvements start when you figure out
aspects and letter combinations that give you trouble, and practice them in particular. I, for example, have for many
years held the title of regional champion in misspelling django – if there were leaderboards for that, I'd have been at
the very top. djagno, dajgno, – my hit chance was roughly 50%, until I sat down a few times one week and practiced until
that went away.
-->
---
split: action.tools
layout: speedimage
background: /images/spaced.png
dim: false
---

<!--
The next thing that I want to advocate for learning is your language, your libraries, your framework. Looking things up
in the Python docs, or the Django docs, or StackOverflow is the opposite of fluency: it breaks flow, and it's
frustrating. 

How do I know? Well, if you thought I couldn't get more impressive than being unable to spell "django", I live to
surprise: My most looked-up function for years used to be JavaScript's setTimeout. It's a function with all of two
arguments. But I could NEVER remember the argument order or if the timeout interval was set in seconds or milliseconds. 
Eventually, I put the function signature into a flashcard tool. Most of those use a mechanism called "spaced
repetition", which shows you cards that you remember in increasingly larger intervals (one day, one week, etc), and if you forget a card, you
start over by seeing it every day. It's a very simple concept, and works very well to remember things.

When that worked, I started to occasionally just read parts of the Python and Django docs, and put important or useful
seeming facts in there. Different things will work for you, but spaced repetition is shown to align very well with how
memory works, and increased fluency of not looking everything up (and even just knowing that many useful tools exist!)
has been great.

I don't have a great way for you to build mental representations, apart from keeping in mind that they exist, and
recognising when they fail you. Interactive debuggers can be useful in my experience, as they prompt you to stop and
explore and predict what is going to happen, but that's the best I have to offer.
-->
---
split: action.spaced
---
# Build Feedback Loops

<!--
And finally: build tight feedback loops in whatever you want to learn or improve or do.
Notice when you don't have good feedback loops. What kind of feedback loops? That depends on the situation, honestly.
I mentioned pair programming, but when that's not an option, there are a few other things to try:
An exercise I like a lot is to read other people's code, but try to write parts of it myself, then compare the results.
Similarly, there are people who record and stream their programming sessions on Twitch or YouTube, and watching
something like that, but pausing and trying to predict their next actions can be very informative.

And finally, the possibly roughest suggestion I have: Be your own feedback loop. Take a screen recording of a day's
work, and then play it back at high speed. Fair warning: this can be a very uncomfortable experience :D
-->
---
split: action.feedback
---


<!--
I wish I had time to talk about AI and Copilot and how they make the deep, deliberate kind of learning harder, by making
the shallow kind easier. But no time – if you want to talk about that, find me later.
-->

---
layout: speedimage
background: /images/star.png
dim: false
imageWidth: 140px
---

<h1 style="text-align: center">Pick what to be good at</h1>

<!--
One final note before we run out of time: I've talked a lot about expertise and excellence. I don't mean to imply that
you have a duty to be excellent, or an expert. You can't be good at everything, anyways. But I hopefully made the point
that you CAN be good at the things you want to be good at, and that it's good to consciously pick what those are. And
that if you're trying to be good at something and are not, then: it's not you. It's not that you're born without the
divine spark to write great Django code. It's just that your practice methods probably need a bit of work.
-->

---
layout: speedimage
background: /images/end.png
dim: false
imageWidth: 740px
imageOrientation: left
---

<!--
And finally: practice is often not fun. Even applying things you've practiced is not always fun. But you know what's
fun? Hanging out with a ton of wonderful people here at DjangoCon. I hope you have a wonderful conference. Thank you.
-->

---
layout: speedimage
background: /images/end.png
dim: false
imageWidth: 740px
imageOrientation: left
split: outro
---

<!-- if timer does not stop, GOTO next -->

---
layout: speedimage
background: /images/end.png
dim: false
imageWidth: 740px
imageOrientation: left
timer: stop
---
