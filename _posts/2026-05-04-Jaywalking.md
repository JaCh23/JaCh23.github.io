---
layout: post
title: Should Baymax (Ever) Jaywalk?
date: 2026-05-04 01:01:01
description: 
tags: mid-tech
categories: 
---

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/baymax-jaywalk.png" class="img-fluid rounded z-depth-1" zoomable=true %}
</div>

*Post and image generated with assistance of AI tools

#### 1. Introduction: To Jaywalk, or Not To Jaywalk?

Think about the last time you were standing at a crosswalk with no cars in sight, but the "Don’t Walk" sign was still glowing red. Most of us eventually just cross anyway because it’s faster and clearly safe—it’s just common sense. Even though it's technically against the rules, jaywalking is one of those things we all just "get." It's a tiny, rational act of efficiency that happens every day.

This points to a bigger idea: jaywalking is a social norms problem. A social norm is like an unwritten rule that we all just agree on so that life runs smoothly. When the street is empty and everyone else is crossing, sticking strictly to the "legal" rule can actually feel out of place, or even a bit annoying to the people behind you. It’s a "read the room" situation where we constantly balance the official laws against the actual flow of the world around us.

Now, imagine dropping an AI into that same situation. If we’re building robots to live and move in our world, we have to decide how they should behave. Do we want them to be perfectly rigid rule-followers who wait for every light, even when it makes no sense? Or do we want them to have the "common sense" to jaywalk just like we do? It’s a bigger question than it looks, and it’s forcing us to rethink how we teach machines to exist alongside humans.

#### 2. From Intuition to Numbers: Codifying the Crosswalk

To understand why an AI would even consider breaking a rule, we first have to look at ourselves. When we stand at an empty curb, we don't usually stay put out of a deep-seated devotion to traffic statutes; we stay because we’ve intuitively calculated that the risk of a fine or an accident outweighs the thirty seconds we’d save. But when the coast is clear, that calculation flips. Humans are naturally wired to be rational agents, constantly making trade-offs between efficiency and safety. 

##### Back to Objective Functions and Rewards
When we stand at that curb, our brains are essentially running a background script that weighs the value of our time against variables like the probability of a car appearing or the potential social cost of a ticket. This internal negotiation is a perfect mirror for the objective functions we use to build AI - a system of rewards and penalties designed to guide an agent toward the most "valuable" outcome. Viewed this way, our decision to step off the curb isn't necessarily a moral choice, but a reflection of our natural drive to maximize utility in a world full of complex trade-offs.

In this scenario, we are effectively evaluating our decision based off the Utility function, where a somewhat simple form would consider 2 main variables, the reward and costs*:

$$
Utility = \text{Reward}(\text{time saved}) - \text{Cost}(\text{safety risks})
$$

> It is worth noting that the specific weightings of these reward and cost functions are inherently subjective, varying based on an individual’s risk tolerance or a specific model’s training parameters; same argument for the parameters, where it may be non-exhaustive. But let's stick with this framework for now, as the 'Street View' of how we make choices.

##### Jaywalking and Social Norms

While the internal math might suggest that crossing is the "correct" move for an individual, we don’t live in a vacuum—we live in a world governed by social norms. While laws are rigid and come from the top down, social norms are unwritten rules that bubble up from the bottom. They are the shared expectations we use to navigate each other without having to talk about it.

To understand why jaywalking is often seen as "bad", we have to look at the social contract of the road. At its heart, a busy street only works because of predictability. When you’re driving, you operate on the assumption that people on the sidewalk will stay there until the light changes. When someone jaywalks, they break that shared script. They force everyone else to suddenly pay closer attention and react, which adds a layer of stress and uncertainty to a high-stakes environment. By stepping out of line, you're essentially asking everyone else to do more work to keep the system safe.

However, jaywalking is also the perfect example of how the official rules and the "street rules" can drift apart. In many places, the real norm isn't "wait for the sign", it’s more towards "don't get hit." We all recognize that the law and what’s actually sensible in the moment aren't always the same thing. In these situations, standing perfectly still at a completely empty intersection can actually feel like you're out of sync with the world around you. It’s a refusal to join in on the common-sense consensus that says, "the coast is clear, let's go."

##### Modeling with Payoff Matrices
Now, we can take these human observations and formalize them. To see how an agent—human or otherwise—weighs these choices, we can map the interaction between a pedestrian and a driver using a payoff matrix. This tool allows us to visualize the rewards and risks for both "players" depending on their actions, represented by the payoffs of the pedestrian against the driver, aka Pedestrian / Driver:

| Pedestrian Choice | Outcome: No Accident | Outcome: Accident |
| :--- | :--- | :--- |
| **Jaywalk (JW)** | $\ge 0 \ /\ 0$ | $\ll 0 \ /\ < 0$ |
| **Don't Jaywalk (DJW)** | $\le 0 \ /\ 0$ | $N/A$ |

Note: Notations follow (Pedestrian / Driver)

> Note on the Model: We use broad inequalities here—specifically the "much less than" sign ($\ll 0$) for a catastrophe—to keep our estimates as conservative and general as possible. Here, specific integers are avoided to acknowledge that while the value of time or the cost of a collision is subjective, the relative magnitude of these outcomes is what drives the decision-making process. As long as the cost of an accident is significantly larger than the benefit of saving time, the fundamental logic of the trade-off remains roughly the same. Also, modelling the "boring" outcomes as $\ge 0$ and $\le 0$ acts as a conservative baseline. These values are highly dependent on risk-seeking behavior: a person in a massive hurry might see a huge reward in $\ge 0$, while a very cautious person might view $\le 0$ as a negligible price to pay for total peace of mind.

Ok let's break it down a bit:
* The Efficient Cross (Jaywalk + No Accident): This is the high-reward scenario for the pedestrian. They save time (maximizing their utility), while the driver is unaffected, keeping the system flow neutral.

* The Safe Wait (Don't Jaywalk + No Accident): Here, the pedestrian prioritizes the rulebook. While "safe," they incur a "waiting cost" - a loss of utility by being inefficient.

* The Catastrophe (Jaywalk + Accident): This is the absolute floor. If the pedestrian miscalculates the gap in traffic, the result is catastrophic for both parties.

#### 3. Let's Revisit: To Jaywalk, or Not To Jaywalk?

Now that we have our payoff matrix, we can see how an agent’s behavior changes depending on what it’s actually trying to optimize.

##### Option 1: The Selfish Jaywalker
When we act as a "selfish" agent, our focus is laser-targeted on our own immediate goals. We aren’t necessarily trying to be mean; we’re just prioritizing our own time above all else. From this perspective, the street is just a puzzle to be solved. 

If the coast is clear, the selfish agent sees a payoff of $(\ge 0 / 0)$. The "positive" score comes from the time they saved, and since there’s no one on the road to be inconvenienced, the driver’s score stays at a neutral zero. To this agent, staying at the curb feels like a glitch in the system—a failure to reach their destination as effectively as possible. As long as the risk of an accident remains a distant, abstract possibility, the decision to cross isn't a moral dilemma; it’s just the most logical way to get the highest score.

However, there is the inevitable flip side: the "catastrophe" scenario. If the agent miscalculates the gap in traffic or fails to see a car speeding around a corner, the payoff crashes to $(\ll 0 \ /\ < 0)$. This represents a massive, non-linear loss for the agent—think total system failure or severe injury—and a significant loss for the driver as well. Because the penalty of an accident is so much greater than the reward of saving a few seconds, a truly rational agent isn't necessarily reckless; it simply requires a high degree of statistical certainty that the coast is clear before deciding that breaking the rule is the most efficient path forward.

> In informall terms, "stupidity" may often be the result of an agent deciding that thirty seconds of saved time is a fair wager against an unplanned, high-speed physics lesson from a two-ton moving object.

##### Option 2: The Socially Responsible Good Boy

On the other hand, the choice to stay on the curb isn’t always a high-minded sacrifice for the greater good; sometimes, it’s a reflection of the messy, human variables that don't always look like traditional optimization.

There are plenty of reasons to wait that have nothing to do with maximizing a "time-saved" reward. You might stay put simply to avoid the social friction of "funny looks" from a crowd of law-abiding strangers—the desire to avoid judgment is a powerful motivator. Other times, it’s about internal peace of mind; for some, the anxiety of breaking a rule or the mental effort of scanning for distant cars is more taxing than just waiting for the light. Or, quite frankly, you might just be tired. On those days, the red light isn't a "bottleneck" to be solved; it’s a welcome excuse to go on autopilot and stop moving for a minute.

In these instances, the payoff of $(\le 0 \ /\ 0)$ might not be a "tax" paid to society, but rather a choice to prioritize personal comfort and ease over the efficiency of the clock. Whether it's avoiding a social faux pas, preserving our limited mental energy, or just following a habit that keeps our world feeling predictable, our internal "success" is often defined by variables far more diverse than just time and safety. We aren't always solving for the fastest route; sometimes, we may just perhaps be solving for the path of least resistance—and where that path lies changes depending on the day, our mood, and who is standing next to us.

#### 4. An Edge Case: The 3AM Robot Emergency

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/baymax-jaywalk.png" class="img-fluid rounded z-depth-1" zoomable=true %}
</div>

Imagine a scenario straight out of Big Hero 6: You have collapsed, and Baymax—a high-tech healthcare companion—is carrying you in his arms. Your vitals are dropping, and the hospital is just across the street. Baymax reaches the curb, and the pedestrian signal is a steady, unyielding red. The street is completely empty, yet the "law" says stay put.

In this moment, the variables in the robot’s objective function are now bouncing between "efficiency" to "survival."
* The Rigid Compliance Path: If Baymax is programmed with a hard, binary rule to never break a traffic law, he will stand perfectly still. He will wait for the sixty-second timer to countdown while his "payload"—a human life—flatlines. In this context, following the law isn't "safe"; it is a failure of his core directive.

* The Rational Defiance Path: A more sophisticated AI would recognize that the "cost" of waiting (potential loss of life) infinitely outweighs the "cost" of a traffic violation or the tiny statistical risk of an accident on an empty road. The math flips. The only "rational" move is to step off the curb.

To move from the philosophical "should he cross?" to the design room, we have to look at how we actually architect an AI’s internal logic. This transition takes us away from simple "if-then" statements and into a territory where we must decide how much "freedom" a machine should have to interpret its environment. As developers of a system like Baymax, we aren’t just writing code; we are essentially codifying a hierarchy of high-level notions, concepts, and values.

#### 5. Conclusion: Baymax + Morals/Ethics = ?

As we move toward a future where agents like Baymax inhabit our physical spaces, the "problem" of jaywalking reveals a much deeper challenge: we are no longer just building tools; we are building moral proxies. If a machine is to truly serve humanity, its safety architecture cannot be a static list of prohibitions. Instead, it must be a dynamic system capable of weighing competing priorities in real-time.

To achieve this, several variables remain at the forefront of the discussion from an AI safety angle, postulating a future where "safe" is a relative term rather than an absolute one:
* The Elasticity of Constraints: How do we define the "breaking point" for a law? Developers must consider whether rules should be "hard" (unbreakable) or "soft" (overridable given enough pressure), and what specific ethical metrics allow for that relaxation.
* Thresholds of Uncertainty: Since an AI operates on probabilities rather than "truth," we must decide how much statistical confidence is required before an agent deviates from the norm. We must ask: Is a 99.9% certainty of an empty street enough to break a law when a life is on the line, or does the weight of potential failure demand even more?
* The Conflict of Alignments: AI safety isn't just about avoiding physical harm; it’s about navigating the gap between Legal Alignment (following the rules) and Moral Alignment (doing the right thing). This may point us towards a discussion between building an agent that is safe for a courtroom and one that is safe for humanity: That a machine which achieves legal perfection while remaining idle during a catastrophe level situation, failing to distinguish a minor civil infraction from a moral crisis, is to some degree "unsafe".

At the end of the day, teaching an AI to jaywalk is really just teaching it how to 'read the room'. We aren’t just shipping code; we’re trying to translate the unwritten rules of the sidewalk into a language a machine can actually speak.

Maybe the goal of AI safety isn't to build a robot that’s a perfect rule-follower. It’s to build one that knows exactly how much a rule is worth compared to a human life. After all, every step off the curb is a choice between the clock, the crowd, and the person right in front of us. AI safety isn't a magic equation — it’s perhaps more of a way to make sure our tech reflects the best parts of us, one calculated risk at a time.

Still, keep an eye out — if you happen to see Baymax at the curb, maybe give the big guy a little bit of slack.