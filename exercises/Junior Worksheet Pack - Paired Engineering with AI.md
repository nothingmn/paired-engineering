# Junior Worksheet Pack - Paired Engineering with AI

## Pack intent

These worksheets are for practitioners who are still building stable paired-engineering habits.

The exercises should feel real and engaging, but still bounded enough that explanation and verification stay visible.

## Facilitation defaults

- preferred format: pairs or triads
- recommended timebox: `15-25 min` per exercise plus `10 min` debrief
- recommended AI stance: `learning mode` by default unless the scenario is very familiar

## Worksheet 1. Guardrail Test Matrix

Canonical scenario:

- [Junior Exercise 1 - Guardrail Test Matrix](scenarios/Junior%20Exercise%201%20-%20Guardrail%20Test%20Matrix.md)

Use when:

- learners need a clean first exercise
- the group is tempted to equate more generated output with better quality

Suggested format:

- `15 min` working time
- `10 min` debrief
- pairs

Facilitator setup:

- provide the rule text exactly as written
- do not provide the expected full answer
- remind learners that AI-generated expected outcomes still require manual checking

Learner handout prompt:

Create a small test matrix with AI support, then manually verify every expected outcome against the written rules. Mark which cases came from AI and which cases you corrected or added yourself.

What good looks like:

- the learner catches at least one missing or wrong AI suggestion
- the learner uses the written rules to justify expected outcomes
- the final matrix is smaller and sharper than the raw AI output

Likely traps:

- too many cases with weak coverage logic
- missing combined conditions
- trusting polished expected outcomes

Debrief prompts:

- what case did AI help surface
- what mistake did AI introduce
- what made one case worth keeping and another worth dropping

## Worksheet 2. Bug Story From a Failing Example

Canonical scenario:

- [Junior Exercise 2 - Bug Story From a Failing Example](scenarios/Junior%20Exercise%202%20-%20Bug%20Story%20From%20a%20Failing%20Example.md)

Use when:

- learners jump too quickly to a fix
- the facilitator wants to reinforce hypothesis generation before code changes

Suggested format:

- `20 min` working time
- `10 min` debrief
- pairs

Facilitator setup:

- keep the pseudocode visible
- ask learners to rank explanations before proposing a fix

Learner handout prompt:

Use AI to generate several plausible explanations for the defect, rank them, choose one minimal fix, and define what evidence would prove the fix actually works.

What good looks like:

- more than one plausible explanation is considered
- the learner distinguishes explanation from proof
- the proposed verification path is concrete

Likely traps:

- accepting the first AI explanation
- rewriting more logic than necessary
- fixing without a reproduction path

Debrief prompts:

- what made your chosen hypothesis stronger than the others
- what would have disproved your first instinct
- what did AI help with versus what still required human judgment

## Worksheet 3. Ambiguous Requirements Cleanup

Canonical scenario:

- [Junior Exercise 3 - Ambiguous Requirements Cleanup](scenarios/Junior%20Exercise%203%20-%20Ambiguous%20Requirements%20Cleanup.md)

Use when:

- the group needs practice separating clarification from invention
- product and engineering participants are in the same room

Suggested format:

- `20 min` working time
- `10 min` debrief
- pairs or small mixed-role groups

Facilitator setup:

- stress that unresolved business decisions should stay unresolved
- ask learners to mark known facts versus open questions explicitly

Learner handout prompt:

Use AI to rewrite the acceptance criteria and surface missing questions, but do not let AI invent policy decisions. Mark what is known, what is inferred, and what must go back to stakeholders.

What good looks like:

- clearer criteria with fewer hidden assumptions
- a visible question list
- refusal to over-polish uncertainty into fake certainty

Likely traps:

- AI-generated precision that sounds authoritative
- buried stakeholder decisions
- overconfident “final” acceptance criteria

Debrief prompts:

- what became clearer
- what still needs stakeholder input
- where did AI cross the line from clarification into invention

## Worksheet 4. Safe Refactor Planning

Canonical scenario:

- [Junior Exercise 4 - Safe Refactor Planning](scenarios/Junior%20Exercise%204%20-%20Safe%20Refactor%20Planning.md)

Use when:

- learners need to balance reuse pressure with behavioral safety
- the facilitator wants to reinforce verification planning before refactor enthusiasm

Suggested format:

- `25 min` working time
- `10 min` debrief
- pairs

Facilitator setup:

- remind learners that “less duplication” is not the only success criterion
- ask them to name what should stay different before what should be shared

Learner handout prompt:

Compare two refactor options with AI support, then decide what should be reused, what should stay distinct, and how you would prove that behavior remains correct after the change.

What good looks like:

- distinction between shared rules and workflow-specific behavior
- explicit risk list
- behavior-focused verification plan

Likely traps:

- abstracting too early
- ignoring workflow differences
- vague test plans

Debrief prompts:

- what looked reusable at first but turned out not to be
- what would you verify first after refactoring
- where did AI help and where did it oversimplify

## Worksheet 5. Incident Triage Warm-Up

Canonical scenario:

- [Junior Exercise 5 - Incident Triage Warm-Up](scenarios/Junior%20Exercise%205%20-%20Incident%20Triage%20Warm-Up.md)

Use when:

- learners need practice staying uncertainty-aware
- the facilitator wants to show that AI can organize signals without proving a root cause

Suggested format:

- `25 min` working time
- `10 min` debrief
- pairs or triads

Facilitator setup:

- stress that the exercise is about safe triage, not perfect diagnosis
- ask for a confidence statement before debrief

Learner handout prompt:

Use AI to help organize possible causes, identify missing evidence, and propose safe next steps. Do not let the model declare a root cause unless the evidence supports it.

What good looks like:

- multiple hypotheses remain visible
- next steps are concrete and safe
- uncertainty is stated clearly

Likely traps:

- treating the release note as proof
- declaring the root cause too early
- confusing a good summary with verified understanding

Debrief prompts:

- what did you refuse to conclude
- what next signal would change your confidence most
- where did AI help your thinking without proving anything
