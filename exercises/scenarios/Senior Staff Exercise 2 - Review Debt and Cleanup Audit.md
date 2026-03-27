# Senior Staff Exercise 2 - Review Debt and Cleanup Audit

## Rating

- size: `3`
- complexity: `4`

## Purpose

Practice identifying hidden review debt and cleanup cost in a team that appears successful if you only look at usage or output volume.

## Scenario

A team reports:

- high AI usage
- faster pull request creation
- strong manager sentiment

But there are weaker signals:

- senior reviewers are spending longer in review
- reverted changes increased slightly
- onboarding engineers rarely explain their changes well
- some requirements and test artifacts are more polished but less precise

## Task

Use AI to help organize the signals, then decide:

- what looks healthy
- what looks suspicious
- what you would inspect next

## Expected output

- hypothesis list about hidden system cost
- recommended sampling plan
- short note on what not to conclude yet

## Good AI uses

- organizing qualitative and quantitative signals
- generating inspection questions
- grouping risks by workflow stage

## Verification focus

- do not confuse plausible explanations with proof
- keep soft signals separate from validated findings
- identify the smallest next inspection that could reduce uncertainty

## Anti-patterns to watch

- defending the rollout because the dashboard is green
- assuming seniors are “just busy”
- treating soft signals as either everything or nothing
