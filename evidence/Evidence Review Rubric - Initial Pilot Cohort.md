# Evidence Review Rubric - Initial Pilot Cohort

## Purpose

This rubric is for sampled review of real pilot cases. It is meant to assess quality of AI-assisted work, not to evaluate employee worth.

## How to use this rubric

- Review a small sample of cases each week.
- Use it on target pilot workflows only.
- Score the case on a `0-2` scale per category.
- Aggregate results at workflow or team level rather than turning the score into an individual leaderboard.
- Capture a short note on what the case teaches, not just what it scored.

## Reviewer prerequisites

- The reviewer should understand the target workflow well enough to judge verification quality.
- The reviewer should know whether the task was familiar or unfamiliar, low or high risk, and easy or hard to verify.
- The reviewer should have enough context to see whether the output created cleanup later.

## Sample size guidance

- `5-10` sampled cases per week across the pilot is usually enough for a small initial pilot cohort.
- Bias the sample toward important workflows, unfamiliar work, and suspected failure modes.

## Sampling pattern

If possible, aim for a mixed weekly sample:

- `1-2` cases that appear strong
- `1-2` cases that appear mixed
- `1-2` cases that triggered concern, review burden, or soft-signal unease

Do not sample only the best-looking cases.

## Case metadata

- date
- role
- team
- workflow
- workflow mode: `learning` or `delivery`
- AI surface used: chat, IDE assistant, repo-aware assistant, other
- task familiarity: `F1`, `F2`, or `F3`
- task risk: `R1`, `R2`, or `R3`
- verification difficulty: low, medium, or high
- reviewer
- artifact or case link

## Scoring scale

- `0`: weak or unsafe
- `1`: mixed or incomplete
- `2`: strong and appropriate

## Rubric categories

### 1. Workflow fit

Question:

Was AI used in a workflow-appropriate way for the task, role, and risk level?

- `0`: AI use was poorly matched to the workflow or risk context
- `1`: AI use was partly appropriate but included avoidable misuse or drift
- `2`: AI use fit the workflow and risk context well

### 2. Explanation ability

Question:

Could the participant explain the AI-assisted output or reasoning in their own words?

- `0`: could not explain key parts or relied on vague repetition
- `1`: partial explanation with notable gaps
- `2`: clear explanation of what happened, why it happened, and what could fail

### 3. Verification quality

Question:

Did the participant use appropriate checks before trusting or shipping the result?

- `0`: weak or absent verification
- `1`: some verification, but missing important checks
- `2`: verification matched the task, risk, and likely failure modes

### 4. Risk handling

Question:

Did the participant handle privacy, security, policy, and verification difficulty appropriately?

- `0`: ignored or mishandled key risk factors
- `1`: recognized some risks but handled them inconsistently
- `2`: handled major risks appropriately and escalated when needed

### 5. Downstream quality

Question:

Did the output create unnecessary rework, confusion, or review burden?

- `0`: created significant downstream issues
- `1`: mixed result with some cleanup or preventable burden
- `2`: output was useful without obvious hidden cost

## Optional notes

- strongest part of the case
- biggest concern
- what the team should learn from this example
- whether this should become a good-example or bad-example case in the enablement library
- what follow-up action is needed, if any

## Immediate escalation override

Do not hide serious problems inside an average score.

Escalate immediately if:

- a high-risk case scores `0` on `Verification quality`
- a case shows a privacy, security, or policy exception
- the participant could not explain a high-impact output that was still trusted or shipped

## Interpretation

- `0-3`: weak case, likely indicates misuse or major gaps
- `4-7`: mixed case, usable for coaching and refinement
- `8-10`: strong case, candidate for reuse as an example

Interpret totals cautiously.

The notes and red flags matter as much as the sum.

## What not to do

- do not use the rubric as an employee rating system
- do not review every case
- do not score without enough context to understand the task and constraints
- do not reduce the review to only throughput
