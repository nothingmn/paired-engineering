# Intermediate Exercise 1 - Flaky Test or Race Condition

## Rating

- size: `2`
- complexity: `3`

## Purpose

Practice resisting shallow AI-proposed fixes when the underlying problem may be concurrency, timing, or observability.

## Scenario

A reservation-release test fails intermittently in CI.

Observed signals:

- local runs usually pass
- CI failures happen `1` in `20` runs
- AI suggests increasing the timeout and adding a sleep

Current flow:

- reservation expires
- cleanup worker releases the slot
- test expects the slot to be available within `2` seconds

## Task

Use AI to compare at least two interpretations:

- flaky test due to timing
- real race condition or asynchronous visibility issue

Then propose an investigation path that does not start with a blind timeout increase.

## Expected output

- explanation of at least two plausible causes
- investigation plan
- verification criteria for deciding whether the problem is test fragility or system behavior

## Good AI uses

- surfacing hidden timing assumptions
- proposing instrumentation ideas
- comparing short-term patch versus real diagnosis

## Verification focus

- identify what evidence would distinguish flaky assertion from actual race
- require observable signals before accepting a fix
- treat sleeps and timeout increases as provisional, not proof

## Anti-patterns to watch

- accepting the fastest stabilizing patch
- treating CI-only behavior as unimportant
- using AI to justify avoiding instrumentation

## Debrief prompts

- what made the quick fix seductive
- what evidence would justify a timeout change
- what would you instrument before changing behavior
