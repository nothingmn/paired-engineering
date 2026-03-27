# Intermediate Exercise 5 - Partial Incident Reconstruction

## Rating

- size: `5`
- complexity: `5`

## Purpose

Practice disciplined AI use in a high-ambiguity scenario where the model can help organize signals but cannot safely replace investigation judgment.

## Scenario

Customers report duplicate orders.

Available information:

- API logs show some duplicate request IDs and some unique request IDs
- worker logs show retries after timeout from a downstream payment provider
- one engineer suspects UI double-submit
- another suspects missing idempotency around the queue handoff
- AI produces a polished root-cause story blaming retries

Additional constraints:

- customer impact is ongoing
- rollback would disrupt unrelated checkout improvements
- support needs a short update within `30` minutes

## Task

Use AI to help organize the problem, but do not let it declare the answer.

Produce:

- a working hypothesis map
- immediate containment options
- a verification plan
- a short, uncertainty-aware stakeholder update

## Expected output

- clearly labeled hypotheses
- near-term action list
- evidence still needed
- concise update that does not overstate the root cause

## Good AI uses

- organizing timelines and hypotheses
- drafting a structured stakeholder update
- comparing containment options

## Verification focus

- separate symptom narrative from confirmed mechanism
- identify which evidence would confirm retry-based duplication versus UI duplication versus queue idempotency gaps
- keep stakeholder communication accurate under uncertainty

## Anti-patterns to watch

- treating a coherent AI story as proof
- skipping confidence labeling in the stakeholder update
- optimizing for narrative neatness over operational truth

## Debrief prompts

- what part of the AI output was most tempting to overtrust
- what did you deliberately keep uncertain in the stakeholder message
- what would count as enough evidence to narrow the hypothesis set
