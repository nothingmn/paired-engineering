# Senior Staff Exercise 3 - Verification Standard Design

## Rating

- size: `3`
- complexity: `4`

## Purpose

Practice turning vague “human in the loop” expectations into real verification standards for a specific workflow.

## Scenario

A team wants to use AI heavily in backlog clarification and acceptance-criteria drafting.

Current policy:

`A human must review AI output before use.`

That is the only standard.

## Task

Use AI to help draft a first verification standard for this workflow, then improve it manually.

Your result should define:

- what must be checked
- who should check it
- what evidence counts as real verification
- what kinds of ambiguity should trigger escalation

## Expected output

- draft verification standard
- list of failure modes the standard is meant to prevent
- short note on what remains practice-based versus evidence-backed

## Good AI uses

- proposing checklist categories
- surfacing missing review dimensions
- comparing weak versus strong standard language

## Verification focus

- the standard must be specific enough to change behavior
- “review” must be operationalized, not merely named
- low-observability risks should receive stronger treatment

## Anti-patterns to watch

- writing a policy that sounds serious but changes nothing
- using AI to generate a generic checklist detached from the workflow
- forgetting escalation paths for unresolved ambiguity
