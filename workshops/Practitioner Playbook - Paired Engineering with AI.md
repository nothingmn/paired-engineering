# Practitioner Playbook - Paired Engineering with AI

## Audience

Developers, QA, SDET, architects, and product owners working inside the first AI enablement pilot.

## Core stance

Use AI as a paired-engineering aid that improves understanding, debugging, review, and workflow execution.

Do not use AI as a substitute for judgment.

## Two working modes

### Learning mode

Use this when:

- the task is unfamiliar
- you are still building mental models
- the cost of misunderstanding is meaningful

Default behaviors:

- ask for explanation before asking for full solutions
- attempt part of the task yourself first
- read and modify generated output
- explain the result back in your own words

### Delivery mode

Use this when:

- the task is familiar
- the work is bounded
- you can verify the output reliably

Default behaviors:

- use AI to draft, transform, summarize, or compare options
- verify with tests, review, or direct system feedback
- track whether acceleration creates hidden cleanup or review work

## Capability-aware defaults

- `E1 Assisted learner`: explanation-first by default; no blind delegation on new work
- `E2 Independent practitioner`: guided acceleration is acceptable when the work is familiar enough to verify
- `E3 Oversight-capable engineer`: stronger leverage is acceptable on bounded work, but unfamiliarity and high risk still override seniority

## Verification rule

If it is hard to tell whether the output is correct before downstream use, treat the task as riskier than it first appears.

That means:

- smaller steps
- stronger review
- external sources
- tests
- peer or stakeholder checks

## Role workflows

### Developers

Good starter workflows:

- bounded debugging support
- code explanation on unfamiliar modules
- unit test drafting
- localized refactoring suggestions

Use extra caution on:

- new frameworks
- architecture-heavy refactors
- production-critical logic

### QA and SDET

Good starter workflows:

- failure triage
- exploratory test idea generation
- flaky test investigation
- automation maintenance support

Use extra caution on:

- fabricated root-cause narratives
- privacy-sensitive test data
- weakly verified test generation

### Architects

Good starter workflows:

- option comparison
- dependency and risk review
- architecture question generation
- ADR drafting support

Use extra caution on:

- elegant but shallow rationales
- unsupported tradeoff claims
- premature convergence on one design

### Product owners

Good starter workflows:

- backlog clarification
- acceptance criteria drafting
- ambiguity detection
- stakeholder question generation

Use extra caution on:

- requirements that sound crisp but are semantically wrong
- domain assumptions the model cannot truly know
- stakeholder language that hides unresolved decisions

## Anti-patterns

- asking for the full answer before you understand the problem
- accepting a fluent explanation as proof
- using AI on high-risk work without a stronger review path
- measuring success by prompt count or code volume
- copying senior habits without senior oversight ability

## What good looks like

- you can explain the output in your own words
- you can modify it safely
- you know what to verify and how
- you know when to stop using AI and think independently
- your use of AI reduces friction without increasing downstream confusion
