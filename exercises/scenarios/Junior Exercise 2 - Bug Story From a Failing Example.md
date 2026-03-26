# Junior Exercise 2 - Bug Story From a Failing Example

## Rating

- size: `2`
- complexity: `2`

## Purpose

Practice using AI to generate and compare debugging hypotheses while still grounding the investigation in concrete evidence.

## Scenario

A loyalty-points service is crediting points for returned items when it should be subtracting them.

Known failing examples:

- purchase of `100` earns `100` points
- return of `40` should reduce points by `40`
- current behavior adds `40` instead

Pseudocode:

```text
if event.type == "purchase":
  points = event.amount
else:
  points = abs(event.amount)
```

## Task

Use AI to propose likely bug explanations and a minimal fix.

Then decide what you would verify before trusting the fix.

## Expected output

- a hypothesis list ranked from most to least likely
- one minimal code or logic change
- a minimal reproduction or test idea that proves the fix

## Good AI uses

- comparing alternative explanations
- asking what hidden assumptions exist in the current logic
- asking for a minimal reproduction idea

## Verification focus

- prove the defect with a concrete example
- verify that the fix handles purchase and return paths
- check whether negative amounts or refund events create new edge cases

## Anti-patterns to watch

- asking for a full rewrite when the defect is localized
- accepting the first plausible explanation
- fixing the symptom without verifying event semantics

## Debrief prompts

- what made one hypothesis stronger than another
- what evidence would disprove your chosen explanation
- what would a weaker engineer be tempted to trust too quickly
