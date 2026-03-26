# Senior Staff Exercise 5 - Cross-Team Rollout Failure Review

## Rating

- size: `5`
- complexity: `5`

## Purpose

Practice diagnosing a rollout that looks acceptable in executive reporting but is producing weak local behavior and hidden system strain.

## Scenario

Three teams adopted AI tools over one quarter.

Reported success signals:

- strong license uptake
- more AI-assisted pull requests
- positive anecdotal feedback from leadership

Warning signals:

- one team has rising review turnaround
- another has better throughput but worse requirement quality
- one manager says “something feels off” but cannot prove it
- junior engineers appear highly productive but struggle to explain changes
- platform teams report growing tool-support requests

## Task

Use AI to help structure the situation, then decide:

- what likely went wrong in the rollout design
- what you would inspect first
- what leadership should hear now
- what should change before broader scale-up

## Expected output

- failure-mode map
- prioritized intervention plan
- leadership summary with clear uncertainty boundaries

## Good AI uses

- organizing cross-team signals
- grouping issues by workflow, measurement, management, and platform
- drafting a structured briefing

## Verification focus

- separate hypothesis from validated diagnosis
- do not let executive success signals erase local warning signals
- identify which problems are measurement problems versus behavior problems versus support-model problems

## Anti-patterns to watch

- assuming high uptake means healthy adoption
- blaming one team before reviewing rollout design
- writing a leadership summary that is tidier than the evidence
