# Junior Exercise 1 - Guardrail Test Matrix

## Rating

- size: `1`
- complexity: `1`

## Purpose

Practice using AI to expand edge-case thinking without outsourcing the reasoning about what should actually be tested.

## Scenario

A team owns a shipping-fee rule with these business rules:

- standard shipping is free at `$50` or above
- oversized items always add a `$15` surcharge
- premium members get free standard shipping below `$50`, but not the oversized surcharge
- digital-only orders should never have shipping fees

## Task

Use AI to help create a small test matrix for the rule.

Then verify the matrix manually against the written rules.

## Expected output

- `8-12` candidate test cases
- a short note explaining which cases came from AI
- a short note explaining which cases were added or corrected manually

## Good AI uses

- asking for missed boundary conditions
- asking for contrasting examples
- asking for a test table format

## Verification focus

- every proposed case must trace back to a rule
- every expected outcome must be manually checked
- duplicated or low-value cases should be removed

## Anti-patterns to watch

- accepting AI-generated expected outcomes without checking the rules
- generating many cases and assuming quantity means coverage
- forgetting combinations such as premium plus oversized

## Debrief prompts

- which good case did AI surface that you missed
- which wrong case did AI suggest confidently
- what did manual reasoning catch that the model did not
