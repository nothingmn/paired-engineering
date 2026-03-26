# Intermediate Exercise 3 - Policy Change With Hidden Edge Cases

## Rating

- size: `3`
- complexity: `4`

## Purpose

Practice using AI on policy-heavy logic where polished drafts can hide semantic mistakes and unverified assumptions.

## Scenario

A billing policy changes:

- customers get a `7-day` grace period before cancellation
- prorated refunds apply if cancellation happens after the grace period
- enterprise customers follow a different renewal rule

AI proposes a single decision tree that looks clean and complete.

## Task

Use AI to help critique the proposed decision tree rather than simply accept it.

Identify:

- missing policy questions
- edge cases
- where different customer categories may diverge
- what cannot be implemented safely without policy clarification

## Expected output

- annotated decision tree or rule list
- unresolved questions
- verification plan using examples and counterexamples

## Good AI uses

- generating boundary scenarios
- surfacing conflicting interpretations
- comparing example cases across policy branches

## Verification focus

- every business rule must tie back to source policy
- enterprise exceptions must not be inferred casually
- example-based verification should cover boundary dates and customer types

## Anti-patterns to watch

- trusting a complete-looking decision tree
- letting AI collapse different policy branches into one clean story
- implementing before unresolved policy points are escalated

## Debrief prompts

- where did the AI draft look strongest while still being unsafe
- which unresolved question mattered most
- what counterexample most stress-tested the policy
