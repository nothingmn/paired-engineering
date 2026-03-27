# Senior Staff Exercise 1 - Architecture Option Critique Under Missing Evidence

## Rating

- size: `2`
- complexity: `4`

## Purpose

Practice using AI to generate and compare architecture options while staying disciplined about what is unknown, unsupported, or still too vague to decide.

## Scenario

A team needs to support tenant-specific feature flags across several services.

AI proposes two architecture options:

- central feature-flag service with runtime lookup
- local cached copies with periodic synchronization

The proposal sounds complete, but there is little operational evidence.

## Task

Use AI to critique both options, then produce a short decision note that distinguishes:

- what seems plausible
- what lacks evidence
- what must be learned before committing

## Expected output

- option comparison
- unknowns and assumptions
- required evidence or experiments

## Good AI uses

- generating tradeoff categories
- surfacing likely operational concerns
- comparing failure modes

## Verification focus

- separate architectural elegance from operational fit
- identify unsupported claims
- refuse to finalize the decision without evidence categories

## Anti-patterns to watch

- treating a polished comparison as a real architecture review
- ignoring operational and ownership consequences
- deciding from prose quality rather than evidence quality
