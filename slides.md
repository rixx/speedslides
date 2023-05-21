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

## just one thing after n-other

<div style="height: 50px"></div>

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

## just one thing after n-other

<div style="height: 50px"></div>

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

-->

---
layout: speedimage
background: /images/pretalx_logo.svg
imageWidth: 25%
dim: false
---

<!--

So, hi, I'm Tobias. I built pretalx (the tool giving you this conference call for proposals and schedule.
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

I also dislike talking about myself, so, moving on, ***NEXT TWICE***
-->

---
layout: speedimage
background: /images/rixx.de.svg
imageWidth: 25%
dim: false
---

<!--
**second time**. I am your keynote speaker today, and if you want to know more, uhm, check rixx.de and a bunch of related
sub-pages.

-->
---
split: intro
---

<h1 style="text-decoration: underline">
  speedrunning
  ([ˈspiːdˌr<span style="transform: scale(-1, 1);">v</span>ni<span style="letter-spacing:-9.2px; position: relative">nj<span style="display: block; position: absolute; top: -8px; left: 3px; px; width: 10px; height: 10px; background-color: #092e20;"></span></span> ]),
  noun:
</h1>

<v-click> <h2>going very very fast</h2> </v-click>
<v-click> <h2>in video games</h2> </v-click>
<v-click> <h2>(to reach a goal within a given set of rules)</h2> </v-click>

<!--
what is speedrunning?  and how does it apply to software development?

you'll be glad to hear that I spent a lot of time researching definitions and current academic discussions, and am happy
to share ALL of them with you. so, speedrunning …

hold up, who here has heard of speedrunning before?

…

ah. okay, in that case we can go a bit faster, I think. Let's try that again.


**second time**. now, in the spirit of the topic, the fast definition:

speedrunning is rigorously defined as playing games really fast, or rather, playing a game with the intent to reach a set
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
imageWidth: 90px
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
imageWidth: 180px
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
imageWidth: 180px
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
imageWidth: 740px
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
imageWidth: 740px
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
background: /images/diversity1.png
imageOrientation: left
dim: false
---

<!--
Another similarity is that it's actually hard to talk about speedrunning as such (and you'll see me returning to SM64
because of this frequently), because there are just so many games and runners! It's similarly hard to talk about
software development in general, as for example web development and systems development on embedded platforms is such a
different experience.
-->
---
layout: speedimage
background: /images/diversity2.png
imageOrientation: left
dim: false
imageWidth: 740px
---
<!--

But even within one game, or one language, we see this diversity play out – Python is used for web development and data
engineering and sysadmin tasks, and these three groups have very different experiences with the language, different
problems and expectations and hopes and frustrations. Much like the runners of shorter and longer, normal and glitched
categories in any given game don't have that much in common, yet form one single community, with shared knowledge and
governance.

-->
---
split: similarities.diverse
layout: speedimage
background: /images/roles1.jpg
dim: false
imageOrientation: left
imageWidth: 740px
---

<!--
Governance is another great point: Both software development and speedrunning have lots of non-obvious roles.

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

Verifiers who make sure nobody cheats in their runs.

Event organisers who set up tournament, scheduling, commission artwork, organise commentators and runners into seamless
streams. Event organisers work for months in the shadows just so that an event like this one can come together. Remember
to thank your conference organisers, everybody!
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
And then, every growing group of people sooner or later needs governance. Both speedrunners and software developers have
a social and a technical kind of governance. 

Once you have a forum, you need moderation. Moderators need guidelines, a code of conduct, that somebody needs to write,
and to enforce, and provide a place for confidential reports.

On the technical side, in speedrunning there's deciding what the rules are, what counts as a glitch, making sure nobody
cheats. In Django, we have similar need of both social and technical governance and steering, things that happen in part
in the DSF (which I highly encourage you to support!), in DEPs and various other places.

And then, every community has to answer tough questions. Which roles are elected, and elected by whom? How do you deal
with cases where the technical rules are broken – do cheaters still get to participate in community forums? And the
other way around, do people with code of conduct violations still get to show up at events, or on the leaderboards?

-->

---
split: similarities.governance
layout: speedimage
background: /images/posture.png
dim: false
imageOrientation: left
imageWidth: 600px
imageCredit: "@Nintega-Dario on DeviantArt"
---


<!--
What else do we have in common?

- We all chase that elusive flow state that makes hard things easy and joyful
- We all sit for hours in front of a screen, often with increasingly terrible posture, with resulting back pain and
  headaches
- The vast majority relies on their hands as input method, and any bit of bad posture or incorrect tension can lead to
  repeptitive strain injury and threatens to permanently ruin our hands. (By the way, speedrunners are way more
  attentive to this than software developers, and I think we can do better here. As both speedrunning and SD are pretty
  new, globally speaking, it's very worth your time to look into how eg professional musicians handle these things –
  they rely on their hands even more than we do, and have had centuries to figure out how to be a concert pianist
  without losing use of their hands after a decade or two.)
- sitting still in front of a screen is bad for cognition, we are made to move, and it's easy to forget that and start
  feeling like a brain with hands. We're not just brains! We are bodies. Please please remember tomove.
-->

---
layout: speedimage
background: /images/hype.png
dim: false
imageOrientation: left
imageWidth: 740px
split: similarities.bodies
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
imageWidth: 740px
split: similarities.hype
---

<!--
And that's it for the similarities between speedrunning and software development. (I lie – there's much more!
Tool-assisted speedruns, creative categories and much more, but we don't have time!)

The differences are easier and more, of course: Software Development does not require twitch reflexes, repeating the
same optimised movement for hours, it's, in the end, not a game, and we don't even have leaderboards. (What would our
leaderboards even be? Fastest StackOverflow responder? TODO )

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
class: 'text-center'
---

# Deliberate Practice

<!--
And that's what I really want to talk about. I just used speedrunning to draw you in. hah!

the past decades have shown us much more how practice works
and that practice is vastly more important than intelligence

as the late and great Terry Pratchett said:
-->
---
layout: speedimage
background: /images/sky.jpg
---

<v-click><h1>“If you trust in yourself …”</h1></v-click>

<v-click><h1>“Yes?”</h1></v-click>

<v-click><h1>“… and believe in your dreams …”</h1></v-click>

<v-click><h1>“Yes?”</h1></v-click>

<v-click><h1>“… and follow your star …”</h1></v-click>

<v-click><h1>“Yes?”</h1></v-click>

<v-click><h1>“… you'll still get beaten by people who spent THEIR time working hard and learning things and weren't so lazy. Goodbye.”</h1></v-click>

<v-click><h3> Terry Pratchett, The Wee Free Men</h3></v-click>

<!--
obligatory pratchett quote here
-->

---

# Todo chart: Practice talent intelligence

<!--
Intelligence and talent aren't useless, but they mostly useful in starting out. I'm going to refer to chess and music a
lot, because both have been around for a long time, and have been well-studied.

Chess players seem to draw an advantage from IQ for 1-2 years, but then then practice wins out, and for a bit, IQ is
even negatively correllated (very slightly) with skill, probably because people with a high IQ haven't been forced to
figure out how to practice as much, and have to learn that at that point.

Many many things have been shown to be about the right kind of practice rather than talent
- absolute pitch can be taught to children
- even adults can learn an adequate replacement

It's all about the kind and quality of practice, you can't just spend more time and brute force the issue.
-->

---
split: practice.talent
---

# The path to becoming an expert

<v-click>- Motivation</v-click>
<v-click>- deliberate practice</v-click>
<v-click>- mental representation</v-click>

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

<v-click>- doing</v-click>
<v-click>- focus</v-click>
<v-click>- comfort zone</v-click>
<v-click>- feedback</v-click>

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
---
# mental representations


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

When a child learns to play an instrument, and start to manage to hit notes, they will still sound something like this:
du du du. They think about one note at a time. After some time their – speaking as a programmer – lookahead increases,
and they may start to think about two notes at a time: dudu dudu. Better, right?
A bit more progress, and they will think in entire bars: dudududu – and finally in musical phrases (ideally keeping the
entire piece in the back of their head for context): dududuududududu.
-->
---
split: practice.representation
---
# fluency

<!--

- fluency matters so much, no waste
- multiplication tables, unthinking use
- you want that fluency whereever you can
-->
---
split: action.fluency
---
# tools


<!--
learn your tools
- typing practice levels
  - just practice
  - with timer
  - problems explicitly
- editor actions, shortcuts, chunk size
- programming language and framework, looking things up on stackoverflow is not fluency (or copilot)
-->
---
split: action.tools
---
# spaced repetition

<!--
learn things with spaced repetition
- setTimeout order of arguments
- django imports
- half an hour per week of stdlib and putting things you want to remember somewhere
-->
---
split: action.spaced
---
# build feedback loops

<!--
feedback loops all the way. ideally with experts, pair programming etc
but also simulate experts
- read code but only parts and think how you'd build them, then uncover
- watch streams of good/interesting coders, but pause and think before continuing
- record your screen and play back fast to see where you waste time
-->
---
split: action.feedback
---
# AI

<!--
no time to talk about AI and Copilot and how it makes learning harder. talk to me in the hallway track.
-->

---

# mediocre is fine

<!--
mediocre si fine, you can't be good at everything anyways
but you can be good at the things you want to be good at
pick things to be good at
ease your mental load
if you're not improving, it's not you, just your practice methods
-->

---
layout: speedimage
background: /images/end.png
dim: false
imageWidth: 740px
imageOrientation: left
---

<!--
go forth, continue slide when stopped talking!
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
