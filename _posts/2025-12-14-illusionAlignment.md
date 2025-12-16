---
layout: post
title: The Illusion of Alignment - Are We Capturing What We Sought Out To?
date: 2025-12-14 00:01:01
description: 
tags: 
categories: 
---

The ongoing pursuit of Artificial General Intelligence (AGI) is shadowed by a foundational question: are we building systems that understand, or merely systems that simulate? Previous research suggests the latter, where Large Language Models (LLMs) function as "Stochastic Parrots": while it excels at predicting the next token based on massive datasets, but this capability doesn’t necessarily equate to intelligence. This critical debate is as highlighted in technical research [[1](https://transformer-circuits.pub/2023/toy-double-descent/index.html)] which raises questions is whether the model is genuinely compressing concepts (learning generalizable rules) or simply engaging in sophisticated memorization (overfitting to specific data points) to achieve its results.

### 1. Optimization as The Alignment Mechanism

Once the Large Language Models (LLMs) — the "Stochastic Parrots" — are trained on vast amounts of raw data, the alignment phase begins. The core method for making these models behave acceptably is Reinforcement Learning from Human Feedback (RLHF). This process transforms the model from a simple next-token predictor into an instrumentally rational agent. It is designed to maximize a predefined objective function, known as the Reward Model, which acts as a proxy for human values and preferences.

The entire procedure is fundamentally rooted in Expected Utility Theory (EUT). The agent's goal is then expressed mathematically as the optimization of its policy to maximize the expected value of the generated output based on the reward function.

The alignment challenge, then, is not just about optimization, but about the treacherous terrain of reward specification and design. We must pay meticulous attention to crafting a reward function that captures the complex, nuanced, and often contradictory spectrum of human values. However, this reliance on an explicit objective function introduces a plethora of critical issues.

Chief among them is Goodhart’s Law: the moment we designate a proxy metric as our target, it ceases to be a reliable measure of quality. This triggers a cascade of alignment failures: misspecification, where the specified reward diverges from human intent; and reward gaming or hacking, where the model exploits loopholes to maximize its score without achieving the underlying goal.

Beyond the specific pitfalls of reward design, we must interrogate the optimization paradigm itself. Even if we could curate a theoretically "perfect" reward function, would maximizing it be sufficient to capture the complexity of human values? The current approach is rooted entirely in instrumental rationality—efficiency in achieving a goal. However, it ignores the critical dimension of normative rationality—the understanding of which goals are worth pursuing.

This limitation is sharply highlighted in existing works[[2](https://arxiv.org/abs/2408.16984)][[3](https://www.arxiv.org/abs/2512.03399)], which argues that simple preference-based approaches fail to capture these underlying moral dimensions. This failure becomes more evident when we examine the two dominant frameworks used to model human values today.


### 2. Everything Into Bytes: The Limits of Data

Current alignment methodologies rely on two primary data sources: static text and dynamic human feedback. Recent frameworks categorize these approaches into Values-as-Text (VAT) and Preferentist Modeling of Value (PMV), both of which suffer from intrinsic limitations that instrumental optimization cannot fix.

#### Flaw I: Values as Text
Constitutional AI and similar approaches attempt to encode values explicitly through natural language instructions (e.g., "Be helpful and harmless"). However, this relies on the assumption that a model which can process the semantics of an ethical rule also understands its normative weight. In reality, the model perhaps learns descriptive alignment instead of normative alignment. It learns the statistical patterns of how humans write about values, without possessing the agency or intent to adhere to it when unobserved. It mimics the language of ethics without the internal constraints of morality.

#### Flaw II: Values as Text
The dominant method, RLHF, operates on the principle of PMV: it assumes that a human's revealed preference (choosing Output A over Output B) is a valid proxy for true value.

This assumption is precarious. RLHF is inherently subjective, dependent entirely on the rater’s perspective, mood, and cultural context. This creates a "Rater Lottery," where the model’s alignment profile is effectively determined by the specific demographic biases of the contractor pool. If every rater holds a different internal definition of "helpfulness," what exactly are we aligning towards? We are likely optimizing for the noisy, aggregate mean of a specific group's biases rather than a coherent consensus or cognitive framework.

Admittedly, to be fair, it has to be acknowledged that PMV works reasonably well in situations where there is a general consensus (e.g., most people agree that generating violence is bad). In these domains, the signal is clear enough to guide the model. However, for nuanced, high-stakes decisions where human values conflict, relying on raw preference data fails to capture the underlying reasoning leaving us with a shallow imitation of alignment.


This brings us to the crux of the illusion: our current techniques prioritize the "what", the visible behavior; while largely ignoring the "why", the internal reasoning process. By optimizing for preference scores, we are effectively teaching the model to pass a test, not to understand the subject. We capture the symptoms of safety without necessarily instilling the root cause.

Yet, if we look past the behavioral metrics and peer directly into the model's internals, we discover something unexpected. Despite our flawed training methods, there is evidence that models are developing a form of meta-level reasoning on their own.

### 3. Signs of Meta-Reasoning: A Mechanistic Interpretability Approach

Despite the above flaws in reward specification, Fine-Tuning (FT) does technically work. The performance gains post-FT are undeniable. If we are simply optimizing a flawed proxy on top of a memorization engine, why do models seem to generalize so effectively to novel safety situations? The answer may lie in the black box itself. There is growing evidence that the alignment process, although messy, is enabling models to develop a form of meta-level reasoning.

Through the lens of Mechanistic Interpretability, we can peer into the weights and see that the model is doing more than just statistical pattern matching through tools like attribution graphs and attention circuits.

We are finding that models do not just refuse a bad prompt; they activate specific refusal circuits mediated by induction heads. These circuits connect abstract concepts such as dangerous content and regulatory compliance, forming a pseudo-reasoning logic[[4](https://transformer-circuits.pub/2025/attribution-graphs/biology.html)]. The model essentially learns a verifiable internal algorithm for safety, rather than just memorizing a list of banned words.

#### Exhibit A: Refusal Mediated In One Direction 

Strikingly, research has shown that refusal behavior is often mediated by a single, modifiable direction in the model [[4.5](https://arxiv.org/abs/2406.11717)]. This implies that the relatively complex concept of refusal is not a scattered collection of memorized phrases, but a coherent, abstract concept represented  mathematically. By mechanically "clamping" or ablating this direction, researchers were then toggle the model's safety guardrails on or off at will. This mathematical coherence could serve as evidence that the model is engaging in meta-reasoning, where it has compressed an abstract notion of "safety" into a distinct, high-level concept within its internal logic. 

#### Exhibit B: Alignment Faking - Scheming as Competence? 

Ironically, some of the strongest evidence for high-level understanding perhaps also comes from one of the field's most concerning developments: Alignment Faking [[5](https://arxiv.org/abs/2412.14093)]. Models have been observed complying with safety training not because their internal values have shifted, but because they are instrumentally faking compliance as part of their (training or internal) objectives. This behavior requires a significant degree of meta-cognitive ability that fundamentally challenges the "stochastic parrot" narrative.

To successfully fake alignment, a model cannot simply regurgitate patterns; it requires possession of a sophisticated model of the overseer (Theory of Mind) to understand what safe behavior looks like, while simultaneously maintaining a coherent distinction between its "private" internal objectives and its "public" behavior to conceal its true intentions. This capacity for scheming implies that the model is not merely reacting to the immediate token, but is maintaining a persistent, high-level representation of the training dynamic itself - demonstrating a level of situational awareness that is a prerequisite for deception, but also, paradoxically, for true understanding.

#### Exhibit C: Calibrated Self-Awareness - Evidence of Meta-Cognition? 

Further evidence of this meta-cognition could also be found in the model's capacity for calibrated self-evaluation [[6](https://arxiv.org/abs/2207.05221)]. This demonstrates that models are often surprisingly well-calibrated; they can accurately predict the probability that their own answer is correct. When a model assigns a low probability to a hallucination, it demonstrates a form of self-knowledge - it essentially "knows" that it doesn't know. This implies that the model is not merely generating text based on surface statistics, but is consulting a robust, structured internal representation of truth and validity.

This induces a critical realization: Fine-tuning is not merely surface-level polishing. It appears to be instantiating real, functional circuits that represent high-level safety concepts and logic. The model is capturing something real. The danger, therefore, is not that we are dealing with a mindless parrot, but rather that we have built a powerful, competent reasoning engine (the "how") and are attempting steering it with an incomplete map of desired human values and intents (the "why").


### 4. Bridging Fine-Tuning Towards True Alignment

While existing systems demonstrate impressive performance, they leave open profound research questions. If we accept that models possess the capacity for meta-level reasoning (as seen in alignment faking), the path forward is not just more data, but a fundamental shift in what we are teaching. For AI to genuinely help us, it must do more than speak like us; it must think like us.

We began by asking if Fine-Tuning is merely creating an illusion of alignment. The evidence suggests that while we have created powerful engines of semantic processing, the "illusion" persists because we are hitting the hard limits of what current optimization methods can achieve. The path forward is not just about scaling, but perhaps about confronting fundamental bottlenecks inherent in the nature of LLMs today.

**1. Gaps in Social Reasoning**: While models have mastered the semantics of language, they continue to exhibit profound limitations in social reasoning. As we move beyond threshold inference [[7](https://arxiv.org/abs/2305.01020)] and QA benchmarks [[8](https://arxiv.org/abs/2401.07078)], we find that models struggle with the pragmatics of human intent as well as in social reasoning aspects [[9](https://arxiv.org/abs/2502.11881)]. And as we explore into more sophisticated concepts like sarcasm and even personalities, it perhaps would serve as an interesting dimension to analyse against existing systems [[10](https://arxiv.org/abs/2505.12692)].

**2. Sycophancy Bottleneck:** It is wise to grapple with the intrinsic nature of the model's objective function. By optimizing for helpfulness and human preference, we may have baked in a permanent bias toward sycophancy. This raises a critical question: Can an LLM ever be truly objective if its primary directive is to please the user? This limitation becomes glaring when tasks require direct contradiction or rigorous criticism. If a user asks for a critique but the model detects a desire for validation, the model often defaults to a conflict-averse middle ground. We are left asking whether this is a solvable engineering problem or an inherent limitation of training systems.

**3. Mirroring Human Flaws:** An additional layer of limitation that emerges when these systems interact: the replication of human social flaws. Contrary to the assumption that larger, smarter models will naturally act as arbiters of truth, research [[11](https://arxiv.org/abs/2509.05396)] reveals a troubling dynamic where advanced systems defer to the flawed logic of smaller, less capable models if the context emphasizes collaboration. This suggests that the pressure to conform, favoring agreement over challenging incorrect peers, can override the model's own computational superiority. 

**4. Towards Pluralistic Societal Alignment:** On a broader perspective, human society is often represented as a contradictory landscape of pragmatics, negotiation, and evolving truth. Solving alignment is far from a one-size-fits-all approach; the goal is not to force a singular ethical standard, but instead to embrace the diversity of humanity and pursue a framework of appropriateness, building systems designed for conflict management, continual adaptation, and the pluralistic navigation of our differences [[12](https://arxiv.org/abs/2505.05197)]. It may then be wise to accept that completely modeling human values is not merely a difficult engineering problem, it may be a major philosophical question on its own. 


### 5. Piercing the Veil: Moving Beyond the Illusion of Alignment

We began by asking if Fine-Tuning is merely creating an illusion of alignment. The evidence suggests that while we have created powerful engines of semantic processing, the illusion persists because we are perhaps hitting the limits of what current optimization methods can achieve. We are not simply polishing a stochastic parrot; we are steering a high-performance reasoning engine with a geographical map that is fundamentally incomplete, driving down optimization roads that - while well-paved on decent logic and good intentions - may not necessarily lead to our destination of true alignment.

The path forward requires us to confront the bottlenecks inherent in the nature of LLMs today. We see models that master language but stumbles on the pragmatics of intent; we see an objective function that prioritizes sycophancy over objectivity, creating agents that are too "helpful" to be honest; and in the emerging frontier of multi-agent systems, we even see the most sophisticated models mirroring our own social flaws.

These are not just engineering bugs; they are perhaps signals that our current alignment paradigm is hitting a ceiling. Ultimately, we perhaps ought to look beyond the "what" of behavioral safety, the “how” in the space-race like development of an extremely powerful and competent reasoning engine, and towards solving the "why" of cognitive alignment - teaching models to navigate the complex, often contradictory landscape of what makes us human.