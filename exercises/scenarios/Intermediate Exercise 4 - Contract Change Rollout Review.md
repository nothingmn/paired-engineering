# Intermediate Exercise 4 - Contract Change Rollout Review

## Rating

- size: `4`
- complexity: `4`

## Purpose

Practice evaluating AI-generated rollout advice for cross-service changes where backwards compatibility and coordination matter more than elegant prose.

## Scenario

A payments service wants to add a new optional field to an event payload:

- producer will send `riskScore`
- some downstream consumers ignore unknown fields
- one reporting consumer deserializes into a strict schema
- AI says the change is "backwards compatible" because the field is optional

## Task

Use AI to help evaluate the rollout plan, then identify what still needs human design review.

## Expected output

- rollout-risk list
- safer phased rollout plan
- verification steps across producer and consumers
- explicit statement of what "compatible" does and does not mean here

## Good AI uses

- generating compatibility questions
- comparing rollout sequences
- surfacing coordination dependencies

## Verification focus

- test compatibility assumptions against actual consumers
- distinguish protocol compatibility from operational safety
- include rollback and observability checks

## Anti-patterns to watch

- trusting the word "optional" as proof of safety
- ignoring strict consumers because they are less visible
- shipping contract changes without a concrete verification path

## Debrief prompts

- what did the AI framing miss about compatibility
- which consumer created the real risk
- how would you stage this rollout safely
