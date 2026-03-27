# Capability Model - Oversight Readiness x Task Familiarity x Risk

This note operationalizes `capability-aware adoption` for the project. It is the control system for deciding how much AI leverage is appropriate in a given situation.

`Oversight readiness` is now the preferred project term for the construct stack that sits behind this dimension. The current note title is retained temporarily for continuity while related notes are updated.

## Why this model exists

Job title alone is too blunt. Safe and useful AI adoption depends on at least three variables, plus an explicit verification check:

- oversight readiness
- task familiarity
- task risk

The same engineer can safely use AI very differently depending on what they are doing.

## Core dimensions

### Oversight readiness

- `E1 Assisted learner`
  The engineer is still building core mental models and often cannot reliably spot subtle errors without support.

- `E2 Independent practitioner`
  The engineer can complete normal work independently and verify common output, but still benefits from scaffolding on unfamiliar work.

- `E3 Oversight-capable engineer`
  The engineer can reason about tradeoffs, detect deeper problems, review generated output critically, and coach others.

Oversight readiness here does not mean age, title, confidence, or years employed by default. It means task-relevant judgment, verification discipline, self-awareness about what the engineer does not yet know, and the ability to slow down when the task demands it.

A career-changing junior developer may have strong oversight-readiness traits for AI-assisted work even while still building technical depth. Likewise, a nominally senior engineer may have weak oversight readiness for a specific task if unfamiliarity, overconfidence, or weak verification habits are present.

### Task familiarity

- `F1 New`
  New library, framework, architecture pattern, domain, or workflow

- `F2 Known`
  Some prior experience exists, but not enough for fluent judgment under pressure

- `F3 Routine`
  The engineer can already execute and review the work reliably

### Task risk

- `R1 Low`
  Localized, reversible, easy to review, low data sensitivity

- `R2 Medium`
  Meaningful downstream effects, moderate coordination or review burden

- `R3 High`
  Sensitive data, security, compliance, architecture-critical logic, production reliability, or decisions with expensive rework

## Verification difficulty as a risk amplifier

Verification difficulty is not a separate oversight-readiness band, but it is a control check that changes how the model should be applied.

- If it is hard to tell whether output is correct before downstream use, treat the task as at least one risk level higher.
- When verification is difficult, prefer smaller steps, external sources, tests, peer review, or stakeholder review.
- Requirements drafting, architecture reasoning, root-cause analysis, and policy interpretation can look fast and low-friction while still being hard to verify well.

## Two operating modes

### Learning mode

Use when the main goal is building understanding, not just finishing faster.

Default behaviors:

- explanation-first prompting
- independent attempt before full-solution prompting
- code reading and modification after generation
- explicit reasoning checks

### Delivery mode

Use when the main goal is safe, efficient execution on work the engineer can already oversee.

Default behaviors:

- bounded acceleration
- stronger use of drafting and transformation workflows
- verification remains mandatory
- review burden is tracked

## Default guidance by combination

### E1 Assisted learner

- `F1 New + any risk`
  Default: learning mode
  Rule: no blind delegation
  Allowed: explanation, walkthroughs, concept checks, partial examples, debugging with explanation

- `F2 Known + R1 or R2`
  Default: learning mode with guided acceleration
  Allowed: draft generation if the engineer must explain and modify the result

- `F3 Routine + R1`
  Default: light delivery mode
  Allowed: higher leverage on bounded tasks, but verification remains explicit

- `Any + R3`
  Default: stricter review, limited generation, strong human oversight

### E2 Independent practitioner

- `F1 New + R1 or R2`
  Default: hybrid mode
  Allowed: generate, explain, compare options, then implement

- `F2 Known + R1 or R2`
  Default: guided delivery mode
  Allowed: drafting, transformation, test help, debugging support, design alternatives

- `F3 Routine + R1`
  Default: delivery mode
  Allowed: strong acceleration if review quality stays high

- `Any + R3`
  Default: delivery mode with tighter guardrails and second-review expectations

### E3 Oversight-capable engineer

- `F1 New + R1 or R2`
  Default: exploratory paired use
  Allowed: fast exploration, but still with reasoning checks because unfamiliarity matters

- `F2 Known or F3 Routine + R1`
  Default: leverage-oriented delivery mode
  Allowed: strong acceleration, pattern extraction, automation, review support, workflow optimization

- `Any + R3`
  Default: constrained delivery mode
  Allowed: assistance for exploration, drafts, and review support, but not uncritical acceptance

## Red-line rules

- No engineer should rely on opaque generation for `R3` work without strong review.
- `E1` engineers should not use full-solution generation as the default path on `F1 New` work.
- “I can use it because I’m senior” is not enough justification when the task is unfamiliar or high risk.
- Explanation-first does not mean trusting the model's own explanation as sufficient verification.
- Low-observability work should not stay in `R1` just because no immediate failure is visible.
- High output speed is not a success condition if explanation ability and review quality degrade.

## Progression signals

An engineer can move toward higher-leverage patterns when they can:

- explain generated code in their own words
- modify it safely
- predict likely failure modes
- catch non-obvious mistakes
- choose when not to use AI
- notice when they are overconfident or under-informed
- slow down and ask for review when the task exceeds their current oversight ability

## What this model protects

- mastery-building for less experienced engineers
- safe leverage for stronger engineers
- better matching between workflow and real oversight ability
- better caution on tasks that are easy to generate but hard to evaluate

## Current uses of the model

- [Rollout Matrix - Capability Rules by Phase](Rollout%20Matrix%20-%20Capability%20Rules%20by%20Phase.md) applies the model to rollout stages
- [Rollout Matrix - Role-Specific Workflows by Phase](Rollout%20Matrix%20-%20Role-Specific%20Workflows%20by%20Phase.md) applies it to concrete workflow choices
- [Manager and Technical-Lead Responsibilities for AI Enablement](Manager%20and%20Technical-Lead%20Responsibilities%20for%20AI%20Enablement.md) and [Software-Specific Apprenticeship and Onboarding for AI-Enabled Teams](Software-Specific%20Apprenticeship%20and%20Onboarding%20for%20AI-Enabled%20Teams.md) use it to shape coaching, task ladders, and learning-mode defaults
- Capability Model Validation - Evidence and Edge Cases continues the validation lane
