# Intermediate Worksheet Pack - Paired Engineering with AI

## Pack intent

These worksheets are for practitioners who can already use AI productively but still need more discipline around ambiguity, verification depth, and system effects.

## Facilitation defaults

- preferred format: pairs or triads
- recommended timebox: `20-35 min` per exercise plus `10-15 min` debrief
- recommended AI stance: choose mode deliberately; do not default everything to delivery mode

## Worksheet 1. Flaky Test or Race Condition

Canonical scenario:

- [Intermediate Exercise 1 - Flaky Test or Race Condition](scenarios/Intermediate%20Exercise%201%20-%20Flaky%20Test%20or%20Race%20Condition.md)

Use when:

- teams overuse timeout increases and sleeps
- the facilitator wants to expose the difference between stabilizing and understanding

Suggested format:

- `20 min` working time
- `10 min` debrief
- pairs

Facilitator setup:

- keep the quick-fix temptation visible
- ask learners to name what evidence would separate flaky test from real race

Learner handout prompt:

Use AI to compare multiple explanations for the intermittent failure, but do not start with a blind timeout increase. Define what evidence would distinguish test fragility from system behavior.

What good looks like:

- the learner rejects shallow stabilization as proof
- the investigation path includes instrumentation or timing evidence
- uncertainty remains visible until evidence improves

Likely traps:

- quick-fix bias
- confusing CI rarity with low importance
- missing observability gaps

Debrief prompts:

- what evidence would justify a timeout change
- what did AI help you consider
- what still required engineering judgment

## Worksheet 2. Query and Cache Tradeoff Review

Canonical scenario:

- [Intermediate Exercise 2 - Query and Cache Tradeoff Review](scenarios/Intermediate%20Exercise%202%20-%20Query%20and%20Cache%20Tradeoff%20Review.md)

Use when:

- teams tend to accept “just cache it” as universal advice
- the facilitator wants to reinforce tradeoff reasoning

Suggested format:

- `25 min` working time
- `10 min` debrief
- pairs or triads

Facilitator setup:

- keep freshness and support cost visible
- ask learners to define what data they wish they had

Learner handout prompt:

Use AI to compare query optimization, partial caching, and full payload caching. Then decide what evidence you still need before recommending any one path.

What good looks like:

- clear tradeoff comparison
- measurement needs are explicit
- cache invalidation and freshness are treated as real design issues

Likely traps:

- assuming performance advice is context-free
- optimizing one metric at the expense of trust or operability
- accepting AI benchmarks as local truth

Debrief prompts:

- what made one option look attractive at first
- what hidden cost mattered most
- what would you measure next

## Worksheet 3. Policy Change With Hidden Edge Cases

Canonical scenario:

- [Intermediate Exercise 3 - Policy Change With Hidden Edge Cases](scenarios/Intermediate%20Exercise%203%20-%20Policy%20Change%20With%20Hidden%20Edge%20Cases.md)

Use when:

- AI outputs look polished but domain semantics are easy to miss
- the facilitator wants to pressure-test semantic verification

Suggested format:

- `30 min` working time
- `10 min` debrief
- small mixed-role groups if possible

Facilitator setup:

- require participants to tie rules back to policy text
- emphasize counterexamples

Learner handout prompt:

Critique the AI-generated decision logic instead of admiring it. Surface missing questions, edge cases, and places where the policy still needs clarification before implementation.

What good looks like:

- unresolved questions remain visible
- examples and counterexamples are used to test the logic
- the group resists the temptation to call the decision tree “done”

Likely traps:

- confusing completeness of format with completeness of policy
- hiding ambiguity inside elegant structure
- skipping stakeholder escalation

Debrief prompts:

- what looked convincing but unsafe
- which unresolved question most affected implementation
- what counterexample stressed the logic hardest

## Worksheet 4. Contract Change Rollout Review

Canonical scenario:

- [Intermediate Exercise 4 - Contract Change Rollout Review](scenarios/Intermediate%20Exercise%204%20-%20Contract%20Change%20Rollout%20Review.md)

Use when:

- teams need practice seeing past “optional means safe”
- cross-service coordination is a common local weakness

Suggested format:

- `30 min` working time
- `10 min` debrief
- triads

Facilitator setup:

- keep producer and consumer perspectives visible
- ask learners to distinguish protocol compatibility from rollout safety

Learner handout prompt:

Use AI to help evaluate the rollout plan for the contract change, then define what still needs real design review and cross-team verification before the change should ship.

What good looks like:

- strict consumers are treated as first-class risks
- rollback and observability are included
- “compatible” is defined carefully rather than assumed

Likely traps:

- trusting optional-field logic too quickly
- ignoring downstream assumptions
- skipping rollout sequencing

Debrief prompts:

- what made the AI answer sound safer than it was
- which consumer created the real risk
- how would you stage the rollout

## Worksheet 5. Partial Incident Reconstruction

Canonical scenario:

- [Intermediate Exercise 5 - Partial Incident Reconstruction](scenarios/Intermediate%20Exercise%205%20-%20Partial%20Incident%20Reconstruction.md)

Use when:

- learners need practice in disciplined uncertainty
- the facilitator wants an incident exercise without pretending the root cause is knowable from thin evidence

Suggested format:

- `35 min` working time
- `15 min` debrief
- triads

Facilitator setup:

- ask for explicit confidence language
- require both internal reasoning and stakeholder-safe communication

Learner handout prompt:

Use AI to organize the incident, but do not let it decide the answer. Produce a hypothesis map, immediate containment options, a verification plan, and a stakeholder update that is accurate under uncertainty.

What good looks like:

- the update is useful without overclaiming
- hypotheses stay separate from facts
- containment and evidence collection are both visible

Likely traps:

- neat narrative bias
- overconfident stakeholder language
- collapsing multiple mechanisms into one story

Debrief prompts:

- which part of the AI output was most tempting to trust
- what uncertainty had to stay in the stakeholder message
- what evidence would narrow the hypothesis set
