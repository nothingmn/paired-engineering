# Exercise Library - Paired Engineering with AI

## Purpose

This library extends the workshop pack with deeper guided exercises for junior, intermediate, senior, and Staff practitioners.

The point is not to train people to get an answer from AI as quickly as possible.

The point is to train:

- mode selection
- question quality
- verification habits
- judgment under uncertainty
- reflection on where AI helps and where it creates risk

## Design rules

- Prefer language-agnostic tasks that can be run in most software-delivery environments.
- Make the work feel real enough to be interesting, but bounded enough to be teachable.
- Focus on paired-engineering habits rather than syntax trivia or tool fandom.
- Keep the exercise objective centered on reasoning, verification, and workflow quality.
- Use the same exercise structure so facilitators can swap domains without rewriting the teaching method.

## Rating model

Each exercise has two ratings.

These ratings are not pretend precision.

They are a shared scoping heuristic for facilitators and learners.

The purpose is to make the expected shape of the work visible before the exercise begins.

## Boundary rule

- the minimum rating is `1`
- the maximum rating is `5`
- there is no valid `0`
- there is no valid `6`

If a task feels smaller than `1`, combine it with another small task until it forms a meaningful exercise.

If a task feels larger than `5`, break it down into smaller exercises before using it for practice.

The point is to keep training work bounded, teachable, and reviewable.

### Size

Size answers:

`How much work surface is involved?`

This is mostly about scope, number of moving parts, and amount of work to inspect.

`1`
- one small artifact or rule set
- narrow task surface
- short completion window

`2`
- two artifacts or one artifact plus one signal
- slightly larger comparison space

`3`
- several artifacts with one meaningful dependency
- more than one plausible path

`4`
- multiple artifacts with cross-checking required
- wider impact or more steps to verify

`5`
- cross-artifact reasoning, tradeoffs, or partial investigation
- enough surface area that sequencing matters

Examples:

- `size 1`: fix or extend one small test case, clarify one narrow rule, inspect one bounded bug
- `size 3`: compare a few options, update several related artifacts, or verify a multi-step workflow
- `size 5`: partial incident reconstruction, broad refactor planning, or cross-team rollout reasoning

### Complexity

Complexity answers:

`How deep, ambiguous, or hard to verify is the work?`

This is mostly about reasoning difficulty, uncertainty, and risk of false confidence.

`1`
- low ambiguity
- clear verification path
- low risk of false confidence

`2`
- one or two traps
- moderate ambiguity
- still fairly observable

`3`
- multiple plausible interpretations
- verification requires care
- risk of shallow confidence is real

`4`
- hidden dependencies or low-observability reasoning
- stronger tradeoffs and escalation judgment needed

`5`
- incomplete information
- cross-boundary reasoning
- high risk of overreliance if the facilitator does not slow people down

Examples:

- `complexity 1`: straightforward boundary check or local test correction with clear expected behavior
- `complexity 3`: multiple plausible explanations, tradeoffs, or verification traps
- `complexity 5`: long-standing low-observability defect, ambiguous incident, or system behavior where elegant answers are easy to generate and hard to trust

## How to read the ratings

The two ratings work together.

- high size and low complexity can still be heavy because there is a lot of work surface
- low size and high complexity can still be dangerous because the reasoning is hard
- high size and high complexity should be used carefully and often need stronger facilitation

The ratings are there to set expectations, not to pretend every exercise is objectively measurable.

## How to use the library

- Start with the exercise level that matches the learner's current oversight readiness, not just their title.
- Use a short worked example before independent exercise time when the pattern is new.
- Ask learners to choose `learning mode` or `delivery mode` first.
- Require a verification plan before accepting any AI-assisted answer.
- End every exercise with reflection on what the model helped with, what it made easier to miss, and what still required human judgment.

## Track guidance

The full library spans `size 1-5` and `complexity 1-5` overall.

The junior track intentionally stays lower-to-mid on complexity while still increasing in scope.

The intermediate track pushes harder on ambiguity, verification difficulty, and system effects.

The senior and Staff track is not the main exercise audience, but it is still useful for:

- low-observability reasoning
- architecture and standards critique
- workflow and tooling decisions
- coaching and review discipline
- cross-team tradeoff judgment

## Junior track

- [Junior Exercise 1 - Guardrail Test Matrix](../exercises/scenarios/Junior%20Exercise%201%20-%20Guardrail%20Test%20Matrix.md)
  - `size 1`
  - `complexity 1`
  - focus: edge-case thinking and simple verification

- [Junior Exercise 2 - Bug Story From a Failing Example](../exercises/scenarios/Junior%20Exercise%202%20-%20Bug%20Story%20From%20a%20Failing%20Example.md)
  - `size 2`
  - `complexity 2`
  - focus: hypothesis generation and minimal reproduction

- [Junior Exercise 3 - Ambiguous Requirements Cleanup](../exercises/scenarios/Junior%20Exercise%203%20-%20Ambiguous%20Requirements%20Cleanup.md)
  - `size 3`
  - `complexity 2`
  - focus: clarification, question design, and assumption control

- [Junior Exercise 4 - Safe Refactor Planning](../exercises/scenarios/Junior%20Exercise%204%20-%20Safe%20Refactor%20Planning.md)
  - `size 4`
  - `complexity 3`
  - focus: behavioral preservation and verification planning

- [Junior Exercise 5 - Incident Triage Warm-Up](../exercises/scenarios/Junior%20Exercise%205%20-%20Incident%20Triage%20Warm-Up.md)
  - `size 5`
  - `complexity 3`
  - focus: early incident reasoning without overclaiming certainty

## Intermediate track

- [Intermediate Exercise 1 - Flaky Test or Race Condition](../exercises/scenarios/Intermediate%20Exercise%201%20-%20Flaky%20Test%20or%20Race%20Condition.md)
  - `size 2`
  - `complexity 3`
  - focus: rejecting shallow fixes and investigating observability gaps

- [Intermediate Exercise 2 - Query and Cache Tradeoff Review](../exercises/scenarios/Intermediate%20Exercise%202%20-%20Query%20and%20Cache%20Tradeoff%20Review.md)
  - `size 3`
  - `complexity 3`
  - focus: performance advice, tradeoffs, and safe skepticism

- [Intermediate Exercise 3 - Policy Change With Hidden Edge Cases](../exercises/scenarios/Intermediate%20Exercise%203%20-%20Policy%20Change%20With%20Hidden%20Edge%20Cases.md)
  - `size 3`
  - `complexity 4`
  - focus: domain logic, policy interpretation, and verification traps

- [Intermediate Exercise 4 - Contract Change Rollout Review](../exercises/scenarios/Intermediate%20Exercise%204%20-%20Contract%20Change%20Rollout%20Review.md)
  - `size 4`
  - `complexity 4`
  - focus: rollout safety across service boundaries

- [Intermediate Exercise 5 - Partial Incident Reconstruction](../exercises/scenarios/Intermediate%20Exercise%205%20-%20Partial%20Incident%20Reconstruction.md)
  - `size 5`
  - `complexity 5`
  - focus: incomplete evidence, escalation, and disciplined uncertainty

## Senior and Staff track

- [Senior Staff Exercise 1 - Architecture Option Critique Under Missing Evidence](../exercises/scenarios/Senior%20Staff%20Exercise%201%20-%20Architecture%20Option%20Critique%20Under%20Missing%20Evidence.md)
  - `size 2`
  - `complexity 4`
  - focus: option critique, uncertainty, and unsupported assumptions

- [Senior Staff Exercise 2 - Review Debt and Cleanup Audit](../exercises/scenarios/Senior%20Staff%20Exercise%202%20-%20Review%20Debt%20and%20Cleanup%20Audit.md)
  - `size 3`
  - `complexity 4`
  - focus: detecting hidden system cost behind apparently successful adoption

- [Senior Staff Exercise 3 - Verification Standard Design](../exercises/scenarios/Senior%20Staff%20Exercise%203%20-%20Verification%20Standard%20Design.md)
  - `size 3`
  - `complexity 4`
  - focus: turning vague review expectations into explicit standards

- [Senior Staff Exercise 4 - Tool Selection and Governance Tradeoff](../exercises/scenarios/Senior%20Staff%20Exercise%204%20-%20Tool%20Selection%20and%20Governance%20Tradeoff.md)
  - `size 4`
  - `complexity 5`
  - focus: workflow fit, edit surface, governance, and long-term operational tradeoffs

- [Senior Staff Exercise 5 - Cross-Team Rollout Failure Review](../exercises/scenarios/Senior%20Staff%20Exercise%205%20-%20Cross-Team%20Rollout%20Failure%20Review.md)
  - `size 5`
  - `complexity 5`
  - focus: interpreting weak rollout signals and deciding how to intervene

## Facilitator pattern

For most sessions, use this sequence:

1. Briefly frame the scenario and desired learning pattern.
2. Ask learners to name the mode first.
3. Let them work with AI in a bounded way.
4. Require a verification path and a confidence statement.
5. Debrief what AI improved, what it obscured, and what should change next time.

## Relationship to the workshop pack

Use [Workshop Pack - Paired Engineering with AI](Workshop%20Pack%20-%20Paired%20Engineering%20with%20AI.md) for the base workshop flow.

Use this library when you want deeper practice, better progression, or more targeted sessions for junior, intermediate, senior, and Staff practitioners.

Use [Exercise Worksheet Pack - Paired Engineering with AI](Exercise%20Worksheet%20Pack%20-%20Paired%20Engineering%20with%20AI.md) when a facilitator wants ready-to-run delivery guidance rather than scenario notes alone.
