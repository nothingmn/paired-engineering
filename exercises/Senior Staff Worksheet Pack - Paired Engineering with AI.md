# Senior Staff Worksheet Pack - Paired Engineering with AI

## Pack intent

These worksheets are for senior engineers, Staff Engineers, principals, and technical enablement leads.

They are not harder because they require more syntax.

They are harder because they involve weaker observability, broader tradeoffs, and more responsibility for standards, rollout, or system consequences.

## Facilitation defaults

- preferred format: pairs, triads, or small peer groups
- recommended timebox: `25-40 min` per exercise plus `15 min` debrief
- recommended AI stance: often `delivery mode` for structure generation, but `learning mode` for critique, uncertainty, and judgment

## Worksheet 1. Architecture Option Critique Under Missing Evidence

Canonical scenario:

- [Senior Staff Exercise 1 - Architecture Option Critique Under Missing Evidence](scenarios/Senior%20Staff%20Exercise%201%20-%20Architecture%20Option%20Critique%20Under%20Missing%20Evidence.md)

Use when:

- the audience tends to confuse structured comparison with real architecture evaluation
- the facilitator wants to reinforce explicit unknowns

Suggested format:

- `25 min` working time
- `10 min` debrief
- pairs

Facilitator setup:

- ask for an “unknowns” section before any recommendation
- emphasize that the goal is critique, not elegant prose

Learner handout prompt:

Use AI to compare architecture options, but separate plausible reasoning from actual evidence. Identify what still needs to be learned before a decision is responsible.

What good looks like:

- unsupported assumptions are visible
- operational concerns are named
- recommendation language is conditional where it should be

Likely traps:

- prose-quality bias
- architecture by vibe
- skipping evidence needs

Debrief prompts:

- what sounded convincing but weakly supported
- what evidence category mattered most
- what would have made a recommendation premature

## Worksheet 2. Review Debt and Cleanup Audit

Canonical scenario:

- [Senior Staff Exercise 2 - Review Debt and Cleanup Audit](scenarios/Senior%20Staff%20Exercise%202%20-%20Review%20Debt%20and%20Cleanup%20Audit.md)

Use when:

- rollout health looks better on dashboards than in daily work
- the audience needs practice treating soft signals seriously without overclaiming

Suggested format:

- `30 min` working time
- `15 min` debrief
- triads

Facilitator setup:

- keep the difference between signal and proof explicit
- require a sampling or inspection plan

Learner handout prompt:

Use AI to organize the signals, then decide what looks healthy, what looks suspicious, and what you would inspect next before making stronger claims.

What good looks like:

- green dashboards do not erase warning signals
- the next inspection step is concrete
- the diagnosis remains provisional where it should

Likely traps:

- overreacting to anecdotes
- dismissing anecdotes because they are qualitative
- writing a neat diagnosis without an inspection path

Debrief prompts:

- which signal deserved the earliest follow-up
- what would count as confirming evidence
- where did AI help structure ambiguity without resolving it

## Worksheet 3. Verification Standard Design

Canonical scenario:

- [Senior Staff Exercise 3 - Verification Standard Design](scenarios/Senior%20Staff%20Exercise%203%20-%20Verification%20Standard%20Design.md)

Use when:

- teams say “human review” without operational meaning
- the facilitator wants to translate philosophy into behavior

Suggested format:

- `30 min` working time
- `10 min` debrief
- pairs

Facilitator setup:

- insist on workflow-specific language
- ask learners to name failure modes the standard is intended to prevent

Learner handout prompt:

Use AI to help draft a verification standard for the workflow, then rewrite it so it changes behavior rather than sounding formal.

What good looks like:

- the standard is actionable
- review expectations are explicit
- escalation points are visible

Likely traps:

- generic checklist language
- policy that sounds strict but remains unverifiable
- missing low-observability risks

Debrief prompts:

- what part of the draft felt real versus performative
- what would change in actual team behavior if this standard were adopted
- what remained practice-based rather than fully evidence-backed

## Worksheet 4. Tool Selection and Governance Tradeoff

Canonical scenario:

- [Senior Staff Exercise 4 - Tool Selection and Governance Tradeoff](scenarios/Senior%20Staff%20Exercise%204%20-%20Tool%20Selection%20and%20Governance%20Tradeoff.md)

Use when:

- tool choice conversations are drifting toward prestige or demos
- the audience needs a workflow-first selection discipline

Suggested format:

- `35 min` working time
- `15 min` debrief
- triads

Facilitator setup:

- keep work-surface and governance concerns visible
- require a recommendation by role or use case, not just one winner

Learner handout prompt:

Use AI to structure the comparison, then recommend tools by workflow fit, edit surface, verification support, and governance boundary rather than demo appeal alone.

What good looks like:

- recommendation is conditional and role-aware
- governance costs are explicit
- “most capable model” is not treated as the only meaningful axis

Likely traps:

- benchmark prestige bias
- one-tool-fits-all thinking
- underestimating support and platform burden

Debrief prompts:

- which criterion most changed the recommendation
- what looked strong in a demo but weak in the real system of work
- what should be piloted before procurement hardens

## Worksheet 5. Cross-Team Rollout Failure Review

Canonical scenario:

- [Senior Staff Exercise 5 - Cross-Team Rollout Failure Review](scenarios/Senior%20Staff%20Exercise%205%20-%20Cross-Team%20Rollout%20Failure%20Review.md)

Use when:

- the audience needs a high-level systems exercise
- the facilitator wants to test rollout diagnosis rather than local task execution

Suggested format:

- `40 min` working time
- `15 min` debrief
- triads or small groups

Facilitator setup:

- require separation between validated facts and rollout hypotheses
- ask for both technical and leadership-facing outputs

Learner handout prompt:

Use AI to organize the cross-team signals, then identify what likely went wrong in the rollout design, what should be inspected first, and what leadership should hear now without false certainty.

What good looks like:

- multiple failure modes are considered
- intervention priorities are explicit
- leadership communication is accurate and non-theatrical

Likely traps:

- blaming one team instead of the rollout design
- letting usage metrics dominate the interpretation
- collapsing uncertainty to make the story sound stronger

Debrief prompts:

- what system-level weakness mattered most
- what would you inspect before scaling further
- what should leadership hear immediately versus after more evidence
