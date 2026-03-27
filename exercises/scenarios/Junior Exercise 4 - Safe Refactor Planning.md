# Junior Exercise 4 - Safe Refactor Planning

## Rating

- size: `4`
- complexity: `3`

## Purpose

Practice using AI to compare refactor options while keeping behavioral preservation and verification in view.

## Scenario

A team has duplicate validation logic in two places:

- checkout form validation
- CSV import validation

Known defect:

- checkout blocks blank postal code for international addresses
- CSV import allows blank postal code for the same case

The team wants to reduce duplication but avoid breaking either path.

## Task

Use AI to compare at least two refactor approaches:

- shared validator
- shared rule set with separate adapters

Then decide:

- what should be reused
- what should stay different
- how you would verify behavior after the change

## Expected output

- short comparison of two refactor options
- risk list
- verification plan with test categories

## Good AI uses

- comparing alternative structures
- spotting duplicated assumptions
- proposing a verification checklist

## Verification focus

- preserve existing valid behavior where intended
- explicitly cover checkout-only and import-only constraints
- verify the known defect is fixed in both paths

## Anti-patterns to watch

- forcing a shared abstraction because it looks cleaner
- ignoring context differences between interactive and batch workflows
- accepting a refactor plan without a behavioral safety net

## Debrief prompts

- what difference between the two workflows mattered most
- where did AI oversimplify the design decision
- what would have made a shared solution unsafe
