# Workshop Pack - Paired Engineering with AI

## Usage note

This workshop pack, [Practitioner Workshop Deck Outline - Paired Engineering with AI](Practitioner%20Workshop%20Deck%20Outline%20-%20Paired%20Engineering%20with%20AI.md), and [Practitioner Workshop Deck Slide Copy - Paired Engineering with AI](Practitioner%20Workshop%20Deck%20Slide%20Copy%20-%20Paired%20Engineering%20with%20AI.md) now form the accepted locked markdown baseline for the practitioner workshop package.

Use this note as the facilitator and exercise layer unless a substantive audience or content gap appears.

## Purpose

This draft turns the practitioner playbook into a teachable session for pilot teams.

## Audience

Developers, QA, SDET, architects, and product owners in the first pilot wave.

## Workshop goals

- understand the paired-engineering stance
- distinguish `learning mode` from `delivery mode`
- apply capability-aware rules to realistic work
- practice verification habits on AI-assisted tasks

## Suggested format

- `15 min` framing and evidence summary
- `15 min` capability model walkthrough
- `20 min` live paired example
- `30 min` role-based exercises
- `10 min` debrief and team commitments

## Facilitator notes

- emphasize that oversight readiness is not job title alone
- reinforce that explanation is not verification
- keep examples grounded in real delivery work
- ask participants to name where verification is easy and where it is hard
- avoid learner-style labels; vary examples and supports without pretending each person needs a unique style match
- reference the supporting learning-design notes when formalizing this workshop further

## Opening script

AI can help us move faster, but speed is not the only outcome that matters.

In this pilot, we are using AI as a paired-engineering aid. That means we want better understanding, better debugging, better review, and safer acceleration. We are not treating AI as a substitute for engineering judgment.

## Exercise 1. Mode selection

Prompt:

Given a task, decide whether it belongs primarily in `learning mode` or `delivery mode`, then explain why.

Scenarios:

- new internal framework, first feature in the codebase
- familiar service, localized unit test updates
- production incident root-cause analysis with incomplete evidence
- rewriting acceptance criteria for a known backlog pattern

Debrief questions:

- what made the task unfamiliar
- what made the task hard to verify
- what would have made you overconfident

## Exercise 2. Verification check

Prompt:

Participants review an AI answer and list what would count as real verification before use.

Debrief questions:

- what evidence would you trust
- what would still worry you
- what would require peer review or stakeholder review

## Role-specific exercises

### Developers

Scenario:

Use AI to help debug a bounded defect in a familiar service. Then decide what you would still need to inspect manually.

Expected focus:

- explanation of failure mechanism
- test-based verification
- checking hidden assumptions

### QA and SDET

Scenario:

Use AI to propose additional test cases for a flaky workflow. Then separate good candidates from shallow or redundant ones.

Expected focus:

- edge cases
- data sensitivity
- whether the proposed cases would actually catch failures

### Architects

Scenario:

Use AI to generate two architecture options for a new integration. Then critique the missing tradeoffs and unknowns.

Expected focus:

- unsupported claims
- operational consequences
- where more evidence is needed before decision

### Product owners

Scenario:

Use AI to improve acceptance criteria and stakeholder questions for a story with ambiguous behavior. Then identify what the model cannot know.

Expected focus:

- hidden business assumptions
- semantic correctness
- unresolved stakeholder decisions

## Debrief prompts

- where did AI genuinely help
- where did it sound good without being trustworthy
- what verification step caught the biggest issue
- what would an engineer with lower oversight readiness likely miss here

## Team commitments

Ask each participant to write down:

- one workflow they will pilot
- one anti-pattern they will avoid
- one verification habit they will adopt

## Follow-up materials

- [Practitioner Playbook - Paired Engineering with AI](Practitioner%20Playbook%20-%20Paired%20Engineering%20with%20AI.md)
- [Exercise Library - Paired Engineering with AI](Exercise%20Library%20-%20Paired%20Engineering%20with%20AI.md)
- [Capability Model - Oversight Readiness x Task Familiarity x Risk](../framework/Capability%20Model%20-%20Oversight%20Readiness%20x%20Task%20Familiarity%20x%20Risk.md)
- [Rollout Matrix - Role-Specific Workflows by Phase](../framework/Rollout%20Matrix%20-%20Role-Specific%20Workflows%20by%20Phase.md)
- [Rollout Matrix - Capability Rules by Phase](../framework/Rollout%20Matrix%20-%20Capability%20Rules%20by%20Phase.md)

## Deeper exercise extension

Use [Exercise Library - Paired Engineering with AI](Exercise%20Library%20-%20Paired%20Engineering%20with%20AI.md) when the base workshop needs a stronger progression path for junior, intermediate, senior, or Staff practitioners.

That library:

- stays mostly language-agnostic
- rates exercises by `size` and `complexity`
- emphasizes verification and judgment rather than syntax drills
- gives facilitators a reusable progression beyond the first workshop session

Use [Exercise Worksheet Pack - Paired Engineering with AI](Exercise%20Worksheet%20Pack%20-%20Paired%20Engineering%20with%20AI.md) when the facilitator needs ready-to-run worksheet structure, timing, traps, and debrief guidance.
