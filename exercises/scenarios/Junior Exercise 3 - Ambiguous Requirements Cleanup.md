# Junior Exercise 3 - Ambiguous Requirements Cleanup

## Rating

- size: `3`
- complexity: `2`

## Purpose

Practice using AI to clarify ambiguous requirements without letting the model invent policy decisions.

## Scenario

Current story:

`Users should be able to pause notifications for a while if they need a break.`

Stakeholder note:

`This should work across email and push. We do not want people to miss critical messages. It should feel flexible.`

Current acceptance criteria:

- user can pause notifications
- user can resume notifications
- system should respect user preference

## Task

Use AI to:

- rewrite the acceptance criteria
- surface missing questions
- separate what is known from what still requires stakeholder decision

## Expected output

- a cleaner acceptance-criteria draft
- a list of open questions
- a short note identifying which statements came from the source and which were AI suggestions

## Good AI uses

- finding hidden ambiguities
- drafting clearer requirement language
- proposing question categories such as timing, exceptions, and channels

## Verification focus

- no AI-generated rule should be accepted as policy without source backing
- critical-message exceptions must be explicit, not implied
- time-zone, duration, and channel behavior should be treated as open questions unless specified

## Anti-patterns to watch

- turning vague input into false precision
- accepting polished wording as real agreement
- hiding unresolved business decisions inside nice prose

## Debrief prompts

- what did AI clarify well
- where did AI overreach beyond the source material
- what should go back to a product owner or stakeholder before implementation begins
