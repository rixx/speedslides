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

… oh wait, one more setup thing.


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

… right. Okay. Everybody ready? Then let's talk about speedrunning.


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

So, hi, I'm Tobias. I built pretalx (the tool giving you this conference schedule,
yell at me about it in the hallway track), and I ran DjangoCon Europe Heidelberg
-->

---
layout: speedimage
background: /images/djangocon_logo.svg
imageWidth: 25%
dim: false
---

<!--
together
with some people you'll also see on stage here. I also dislike talking about myself, so,
moving on,
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

oh. okay, in that case we can go a bit faster, I think. Let's try that again.



**second time**. speedrunning is rigorously defined as playing games really fast, or rather, with the intent to reach a set
objective as fast as possible within certain rules.
-->

---
split: definition
layout: speedimage
background: /images/startspeedrunning.png
dim: false
---


<!--
First impression often overwhelming

two common reactions are cheating and why not enjoy the game, spending so little time on it devalues it
but speedrunners spend tons of time on the game, thousands of hours
and there is method to the madness
-->
---
layout: speedimage
background: /images/star.png
dim: false
imageRepeat: 70
imageWidth: 90px
---

<!--
What varies among runs are the rules and the goals. Let me demonstrate with SM64.

- normally, you need 70 stars to finish the game
-->

---
layout: speedimage
background: /images/star.png
dim: false
imageRepeat: 70
imageWidth: 180px
---
<!--
- but with different sorts of tricks and glitches, you can get away with 16, 1 or even 0
- all of these are different speedrun categories,
- as comparing a 46 minute 70 star run with a 6 minute 0 star run makes no sense
-->

---
layout: speedimage
background: /images/star.png
dim: false
imageWidth: 180px
---
<!--
- but with different sorts of tricks and glitches, you can get away with 16, 1 or even 0
- all of these are different speedrun categories,
- as comparing a 46 minute 70 star run with a 6 minute 0 star run makes no sense
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
Appearances are very little in common. high-stress, game vs real life. 

First off. open about strategies, no strat hiding, everybody contributes.
-->
---
split: similarities.open
layout: speedimage
background: /images/glitch02.png
imageOrientation: left
dim: false
imageWidth: 740px
---

# Experts

<!--
Experts help
At least when the questions show participation
"How do I learn Any%" will get you a tired link to the pinned tutorial
"I'm failing to learn this skip in any%, here's a video of my attempts" will get enthusiastic help
-->
---
split: similarities.experts
layout: speedimage
background: /images/diversity1.png
imageOrientation: left
dim: false
---

<!--
Online communities diverse
But also in other sense. more games than programming languages, not exactly the same
-->
---
layout: speedimage
background: /images/diversity2.png
imageOrientation: left
dim: false
imageWidth: 740px
---
<!--
even within a game, runs are different, and there's more than just the official well-known ones
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
Lots of non-obvious roles. People only see the stars, top runners.
Not only are there more runners, there are also more roles in the community.
-->
---
layout: speedimage
background: /images/roles2.jpg
dim: false
imageOrientation: left
imageWidth: 740px
---

<!--
Labbers figure out new time saves, glitches, tricks.
Runners know some stuff about that, and there is overlap, but the average runner doesn't know tons of details.

or even just line-ups
For example... cartridge switching to access ram instruction pointer magic
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
Verifiers.
Tournament organisers. scheduling, artwork, commentators, runners, timeline, rules
Largely unseen
Not unLike conference organisers
Remember to say thanks
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
So many decisions, each community differently
- forum moderation
- code of conduct
- enforcement
- safety, confidentiality of reports
- cheaters
- do cheaters get banned from forums / code of conduct violations banned from leaderboards
- elections, votes, rules

all things you don't see at first glance, but important to get involved in. pitch for dsf, membership
-->

---
split: similarities.governance
---

# Flow

<!--
Everybody chases flow state
-->

---
layout: speedimage
background: /images/posture.png
dim: false
imageOrientation: left
imageWidth: 600px
imageCredit: "@Nintega-Dario on DeviantArt"
split: similarities.flow
---


<!--
hunched over at keyboard. no good. 
back pain
hand pain
rsi (repetetive strain injury)
we're both new at this, relatively speaking – but we can look at professions with centuries of experience. musicians
also rely utterly on their hands, and piano players resemble us a lot. we can learn from their posture and pose training
-->

---
layout: speedimage
background: /images/posture.png
dim: false
imageOrientation: left
imageWidth: 600px
imageCredit: "@Nintega-Dario on DeviantArt"
split: similarities.posture
---

<!--
it's not only obvious injuries. without movement. worse cognition. we aren't just brains, matrix-like attached to
computers. we have, and are, bodies, and neglecting that makes us think worse and be dumber
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

hype cycles

new tricks, new frameworks, new hype
new tools
can choose to not engage, but will end up left behind to a degree
also have to engage to judge
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
Differences

Lots of differences of course. no high stress, no competition, no game, no leaderboards
(what would our leaderboards be about lol)
but mostly about what we **do**. let me illustrate
-->
---

<img src="/images/suigi1.png" style="transform: rotate(-10deg)">
<v-click><img src="/images/suigi2.png" style="transform: rotate(10deg); width: 400px; margin-left: 250px; margin-top: -50px"></v-click>
<v-click><img src="/images/suigi3.png" style="transform: rotate(15deg); width: 400px"></v-click>
<v-click><img src="/images/suigi4.png" style="transform: rotate(-5deg); width: 400px; margin-left: 300px"></v-click>

<!--
Super Mario 64 is really old, and one of the most famous and most active speedgames
highly competetive

as of two months ago, 0 1 and 16 same record holder
Suigi
what's more, 7, 10, 15 seconds ahead, amazing times
in 16-star, only runner-up sob pulls even. absolutely wild
records set within less than a month

in most impactful trick, BLJ, several hundreds of hours of practice time
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
Intelligence and talent aren't useless, but mostly useful in starting out.
Chess players seem to draw an advantage from IQ for 1-2 years, then practice wins out
Many many things have been shown to be about the right kind of practice rather than talent
- absolute pitch can be taught to children
- even adults can learn an adequate replacement
- it's all about the kind and quality of practice
-->

---
split: practice.talent
---

# Deliberate practice

- interest/motivation/burnout
- deliberate practice
- mental representation

<!--
studies and scholarship have identified three components (apart from intelligence or talent, as mentioned)
- interest/motivation. too much to get into, as conf organiser I can't talk about burnout protection
- deliberate practice
- mental representation

-->
---

# deliberate practice

- doing
- focus
- comfort zone
- feedback

<!--
practice creates skill, type of practice important
- doing/performance, knowledge does not imply skillful application
- focus. shorter. easier for us than for physical exercise. zoning out makes practice much less effective, even harmful
  because you learn your mistakes
- out of comfort zone. discomfort vs motivation, but necessary. resistance with intellectual things, learning rust,
  frustration
- feedback (ideal. experts, but we can build our own loops. does it compile / build / test, we are fortunate)
-->
---
split: practice.practice
---
# mental representations


<!--

- chess, music
- domain specific
- chunking
- efficient encoding, access, recall, retrieval

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
