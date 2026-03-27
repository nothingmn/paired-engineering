# Verification Standards by Artifact and Work Type

This note defines what `real verification` should look like for common AI-assisted artifacts and work types in software delivery.

The goal is not to require the same checks everywhere.

The goal is to stop teams from treating fluent explanation, tool confidence, or seniority alone as proof.

## Core rule

Verification must match:

- the artifact or work type
- the task risk
- the verification difficulty
- the person's oversight readiness

What counts as sufficient verification for one artifact may be deeply insufficient for another.

## Non-negotiable principles

- AI explanation is not verification.
- Explanation only helps when it lowers the cost of checking in a meaningful way.
- If the task is hard to verify, richer explanation text usually will not rescue it.
- Review preparation is not signoff.
- Fast generation increases the need for explicit evidence, not the right to skip it.
- Low-observability work should be treated as riskier than it first appears.
- Human accountability for release, requirements, architecture, and production decisions remains human.

## What explanation is still good for

Explanations are still useful when they help with:

- learning the workflow
- exposing model inconsistency or uncertainty
- surfacing likely failure patterns
- building better mental models of where the tool tends to help or fail

That is different from using explanation as release evidence.

## Verification lenses

Use these lenses to decide how to verify an output:

- `observable behavior`
  Can we run, execute, reproduce, or directly inspect the effect?

- `traceability`
  Can we point to the source, requirement, decision, dataset, log, or evidence behind the claim?

- `peer scrutiny`
  Has a relevant human reviewed the work with enough context to challenge it?

- `downstream consequence`
  If this is wrong, how expensive or dangerous is the error?

- `reversibility`
  Can we recover easily if the result is wrong?

## Standard by artifact or work type

### 1. Code changes

Verification should include:

- executable tests where appropriate
- local reasoning by the implementer
- code review by someone capable of challenging the change
- confirmation that the code matches the intended behavior, not just that it compiles

Extra checks are needed when:

- the area is security-sensitive
- the code path is unfamiliar
- the change alters infrastructure, data handling, concurrency, or production reliability

What does not count:

- “the model explained the code”
- “the diff looks clean”
- “the senior engineer accepted it without reading closely”

Default stance:

- bounded drafting is acceptable on reviewable work
- blind full-solution delegation is not acceptable on unfamiliar or high-risk work

### 2. Tests and test assets

This includes:

- unit tests
- integration tests
- end-to-end test cases
- exploratory test charters
- test data and fixtures

Verification should include:

- evidence that the test actually exercises the intended behavior
- review for redundancy, false assumptions, and brittle assertions
- traceability back to requirement, defect, or risk
- execution results where relevant

What does not count:

- “the generated test suite is large”
- “the tests passed once”
- “the AI described why these tests matter”

Default stance:

- executable evidence beats persuasive explanation
- shallow test generation should be treated as a common failure mode

### 3. Requirements and backlog artifacts

This includes:

- stories
- acceptance criteria
- refinement notes
- requirement summaries
- stakeholder communication drafts

Verification should include:

- confirmation by the responsible product or delivery stakeholders
- ambiguity review by delivery roles that will implement or test the work
- explicit scope boundary checks
- small-increment sanity check
- consolidation into canonical artifacts instead of dependence on long chat history

What does not count:

- “the requirement sounds clear”
- “the wording is polished”
- “the AI produced a comprehensive-looking document”

Default stance:

- semantic correctness matters more than polished prose
- requirement bloat and false completeness are first-class risks

### 4. Architecture and design reasoning

This includes:

- solution options
- tradeoff analysis
- ADR drafts
- dependency and integration reasoning
- threat, reliability, or scalability prompts

Verification should include:

- peer review by technically relevant reviewers
- challenge of hidden assumptions and missing tradeoffs
- explicit unknowns and unresolved risks
- operational and downstream constraints review where appropriate
- reference to actual system context rather than generic patterns alone

What does not count:

- “the rationale is articulate”
- “the options sound sophisticated”
- “the model cited common best practices”

Default stance:

- architecture reasoning is often easy to generate and hard to verify
- treat it as elevated-risk knowledge work even when no code is produced

### 5. Debugging, root-cause analysis, and incident reasoning

Verification should include:

- observable system evidence
- reproduction or partial reproduction where possible
- logs, traces, metrics, or direct environment inspection
- separation of hypothesis from confirmed cause
- peer escalation when the system or risk demands it

What does not count:

- “the diagnosis sounds plausible”
- “the model recognized a familiar pattern”
- “the summary is coherent”

Default stance:

- diagnosis must stay evidence-led
- AI is useful for question generation and hypothesis expansion, but operational evidence outranks fluent diagnosis

### 6. Runbooks, operational procedures, and release steps

This includes:

- deployment checklists
- rollback plans
- support procedures
- incident runbooks
- environment-specific instructions

Verification should include:

- environment-specific validation
- versioned ownership
- walkthrough or dry-run where feasible
- rollback and recovery path confirmation
- review by the operators or delivery owners who will actually use the artifact

What does not count:

- “the steps look complete”
- “the AI followed a generic best-practice template”

Default stance:

- operational artifacts are only useful if they remain executable under real conditions

### 7. Documentation and knowledge summaries

This includes:

- design summaries
- onboarding notes
- internal wiki drafts
- meeting summaries
- retrospective synthesis

Verification should include:

- source traceability
- spot-checking against canonical systems
- owner review for critical pages
- removal of invented certainty or invented decisions

What does not count:

- “the summary feels comprehensive”
- “the prose is well structured”

Default stance:

- summaries can accelerate communication, but they can also fossilize wrong assumptions quickly

## Verification difficulty guide

### Low difficulty

- output can be executed, tested, reproduced, or directly observed
- errors are localized and reversible

Examples:

- bounded refactor with tests
- draft unit tests against known behavior
- environment diff summaries confirmed against tooling

### Medium difficulty

- some evidence exists, but interpretation still matters
- downstream effects are meaningful

Examples:

- acceptance criteria drafts
- test strategy proposals
- non-trivial review summaries

### High difficulty

- correctness is hard to observe directly before downstream use
- confident wrongness is dangerous

Examples:

- architecture tradeoff reasoning
- root-cause diagnosis without reproduction
- policy interpretation
- broad requirement synthesis across many sources

## Default escalation rules

- If verification is hard, shrink the batch.
- If the artifact is canonical, require explicit owner review.
- If the task is high risk, require second-review expectations regardless of seniority.
- If the implementer cannot explain what they would verify, the work is not ready.
- If AI materially increased review burden, treat that as a signal that the workflow needs redesign.

## Role reminders

### Developers

- prove behavior, not just code plausibility

### QA and SDET

- prefer executable evidence and traceability to expected behavior

### Product owners

- verify semantic intent, scope boundaries, and ambiguity reduction

### Architects and technical leads

- surface unknowns, tradeoffs, and operational constraints explicitly

### Delivery leads and managers

- make sure verification standards are followed without turning them into surveillance theater

## What this note changes in practice

- Teams should stop using one generic `verify the AI output` instruction.
- Workflow guidance should name the expected evidence by artifact type.
- Training and examples should show verification steps explicitly.
- Pilot evidence reviews should score verification against artifact and risk, not against generic diligence language.

## Current operating connections

- [Rollout Matrix - Role-Specific Workflows by Phase](Rollout%20Matrix%20-%20Role-Specific%20Workflows%20by%20Phase.md) and [Rollout Matrix - Capability Rules by Phase](Rollout%20Matrix%20-%20Capability%20Rules%20by%20Phase.md) apply these standards to rollout guidance
- [AI-Assisted Requirements Management](AI-Assisted%20Requirements%20Management.md) applies them to requirement and backlog artifacts
- [Manager and Technical-Lead Responsibilities for AI Enablement](Manager%20and%20Technical-Lead%20Responsibilities%20for%20AI%20Enablement.md) and [Manager Coaching Guide - Paired Engineering in Delivery Teams](../guides/Manager%20Coaching%20Guide%20-%20Paired%20Engineering%20in%20Delivery%20Teams.md) translate them into management and technical-lead reinforcement
