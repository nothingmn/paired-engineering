# Pilot Evidence Model - Practical Metrics and Lightweight Collection

This note defines a practical measurement model for the initial pilot cohort.

The goal is to collect enough evidence to make better rollout decisions without creating a heavy reporting burden or turning the pilot into surveillance.

## Measurement posture

The pilot should not try to measure everything.

It should measure:

- whether target workflows are improving
- whether review and verification quality are holding
- whether people are learning better habits, not just using the tool more
- whether the rollout is producing hidden costs such as rework, false confidence, or policy issues

## Principles

- Prefer workflow-level metrics over vanity activity metrics.
- Prefer existing systems over new measurement tooling.
- Prefer small sampled reviews over blanket inspection of everything.
- Prefer a short list of metrics that will change decisions.
- Measure teams and workflows, not individual worth.
- Treat privacy and trust as part of measurement design.
- Treat soft qualitative signals as valid early warnings, but not as standalone proof.

## Can a professional workplace measure this?

Yes, but only if the scope stays narrow.

A workplace can usually measure enough for the pilot if it:

- chooses a small set of target workflows
- establishes a simple baseline before rollout
- samples artifacts instead of trying to review everything
- uses existing tools such as issue tracking, pull requests, defect logs, survey forms, and workshop follow-up

It becomes wasteful when the program:

- instruments every action
- tries to prove everything statistically in a tiny pilot
- turns measurement into manager surveillance
- tracks tool activity instead of work quality and learning

## Recommended measurement stack

Use existing workplace systems first.

The kit should run as a small operating routine, not as a reporting side project.

Use [Pilot Evidence Operations Guide - Initial Pilot Cohort](../evidence/Pilot%20Evidence%20Operations%20Guide%20-%20Initial%20Pilot%20Cohort.md) for the weekly cadence, ownership model, and action thresholds.

If a real workplace needs a concrete default stack rather than more abstraction, start from [Pilot Evidence Reference Deployment - Microsoft 365 and Jira](../evidence/Pilot%20Evidence%20Reference%20Deployment%20-%20Microsoft%20365%20and%20Jira.md) and adapt from there.

### Existing systems to use

- issue tracker for workflow timing, status changes, and target workflow tagging
- source control and code review system for review rounds, reopened pull requests, and sampled review quality
- defect or incident tracker for escaped defects, rollback events, and follow-up fixes
- workshop attendance and office-hours log for enablement participation
- lightweight form or survey tool for confidence, usefulness, and retrieval checks
- simple spreadsheet or table for sampled evidence reviews

### Do not buy new tools first

For the initial pilot cohort, new measurement platforms are usually unnecessary.

If the pilot cannot be measured with existing workflow systems and a small amount of manual sampling, the scope is probably too broad.

## Metric tiers

### Tier 1. Core metrics that should be easy to collect

These are the default pilot metrics.

#### 1. Target workflow throughput

Definition:

- median cycle time for the selected pilot workflows before and during the pilot

Why it matters:

- shows whether the workflow is moving faster or slower

How to collect:

- issue tracker timestamps

#### 2. Downstream rework

Definition:

- follow-up fixes, reopened work items, or meaningful rework within a defined window after completion

Why it matters:

- catches false productivity where speed is purchased with cleanup later

How to collect:

- issue tracker, pull requests, defect tracker

#### 3. Review burden

Definition:

- review rounds, major revision requests, or reviewer-reported difficulty on pilot workflow outputs

Why it matters:

- catches hidden cost shifted onto leads and reviewers

How to collect:

- code review system and light reviewer check-in

#### 4. Guardrail exceptions

Definition:

- privacy, security, policy, or workflow-boundary exceptions in the pilot

Why it matters:

- makes safety visible without pretending everything is solved by enablement

How to collect:

- simple incident log or exception tracker

#### 5. Retrieval follow-up score

Definition:

- short follow-up checks after workshops or demos on key workflow and verification concepts

Why it matters:

- gives a lightweight signal of retention rather than only in-session understanding

How to collect:

- short form, quiz, or office-hours checkpoint

#### 6. Confidence calibration check

Definition:

- whether participant confidence matches sampled output quality and verification quality

Why it matters:

- helps distinguish real capability growth from fluent overconfidence

How to collect:

- short self-rating plus sampled artifact review

#### 7. Manager and peer support uptake

Definition:

- whether managers and peers are using the coaching prompts, office hours, and review language designed for the pilot

Why it matters:

- transfer into work usually fails without environmental support

How to collect:

- attendance logs, checklist completion, or short manager pulse

### Tier 2. High-value sampled metrics

These are worth collecting, but only on samples.

#### 8. Adoption quality score

Definition:

- a sampled rubric score for whether AI was used in a workflow-appropriate, well-verified, non-blind way

Why it matters:

- measures quality of use rather than tool activity

How to collect:

- review a small sample of artifacts or cases each week

#### 9. Explanation ability

Definition:

- whether participants can explain sampled AI-assisted output in their own words

Why it matters:

- supports the mastery-building side of the rollout

How to collect:

- short debrief, review conversation, or workshop check

#### 10. Verification quality

Definition:

- whether the participant used appropriate checks for the workflow and risk level

Why it matters:

- makes the paired-engineering stance measurable

How to collect:

- sampled rubric, peer review prompt, or facilitator review

Reference:

- use [Verification Standards by Artifact and Work Type](Verification%20Standards%20by%20Artifact%20and%20Work%20Type.md) to define what counts as appropriate verification for the artifact being reviewed

#### 11. Good and bad usage examples

Definition:

- small curated set of real examples showing strong use, overreliance, and failure modes

Why it matters:

- helps the pilot learn faster than raw numbers alone

How to collect:

- enablement lead captures a small number of reviewed cases

#### 12. Soft operating signals

Definition:

- lightweight qualitative signals from managers, technical leads, reviewers, or participants that something feels heavier, less trustworthy, or more confusing than the dashboard suggests

Why it matters:

- weak rollout patterns often show up as intuition, friction, or unease before they become visible in harder metrics

How to collect:

- short weekly manager or technical-lead notes
- retro themes
- office-hours observations
- facilitator notes from sampled reviews

Caution:

- do not treat these signals as proof on their own
- use them to decide where to inspect more closely
- compare them against artifact samples, review burden, rework, and explanation quality

## Proposed KPI set for the initial pilot cohort

If we want a compact KPI set, I would start with these seven:

- target workflow median cycle time
- downstream rework rate
- review burden on pilot outputs
- guardrail exception count
- adoption quality score from sampled cases
- retrieval follow-up score
- confidence calibration check

This is small enough to manage and broad enough to avoid the trap of measuring only throughput.

## What not to use as primary KPIs

Weak or misleading defaults:

- tool opens
- prompt count
- message volume
- lines of code generated
- commit count
- pull request count alone
- self-reported productivity without outcome checks

These can be useful context at most, but they should not drive pilot decisions.

Practice-based field signal:

- In Field Observation - Anonymous Large-Enterprise AI Enablement Interview Signals, an engineering manager from a large organization described weekly CTO reporting on Copilot adoption using `five requests per day` and `60 percent` uptake as the key story.
- The useful lesson is not that the organization is unserious.
- The useful lesson is that even serious programs can drift toward easy activity dashboards when leadership wants simple adoption numbers.

## Lightweight collection cadence

### Before the pilot

- tag the target workflows
- collect a short baseline
- define the sampled review rubric

### Weekly during the pilot

- update core workflow metrics
- review a small sample of artifacts or cases
- record good and bad examples
- capture office-hours and manager-support activity

### After each workshop or learning event

- run one short retrieval check
- capture a confidence rating
- compare a small sample of confidence to actual quality

### At pilot close

- compare baseline to pilot outcomes
- review hidden costs and side effects
- decide refine, pause, or scale

## Minimum viable build

If the pilot team has limited capacity, the minimum viable build is:

- pre-pilot survey
- weekly pulse
- shared evidence sheet
- sampled case rubric
- post-pilot survey

Anything beyond that should earn its keep by changing decisions.

## Simple rubric suggestion for sampled cases

Each sampled case can be reviewed on a `0-2` scale for:

- workflow fit
- explanation ability
- verification quality
- risk handling
- downstream quality

This keeps the review light while still structured enough to compare cases.

## How not to waste time

- choose `2-4` target workflows per role at most
- sample cases instead of auditing everything
- keep follow-up checks short
- use one shared evidence sheet instead of many disconnected trackers
- stop collecting any metric that is not changing decisions

## What this measurement model protects

- signal over noise
- learning over vanity
- quality over mere activity
- realistic evidence collection in a live workplace

## Current operational follow-through

- [Pilot Evidence Kit - Initial Pilot Cohort](../evidence/Pilot%20Evidence%20Kit%20-%20Initial%20Pilot%20Cohort.md) carries the practical artifact set
- [Pilot Evidence Operations Guide - Initial Pilot Cohort](../evidence/Pilot%20Evidence%20Operations%20Guide%20-%20Initial%20Pilot%20Cohort.md) defines cadence, ownership, and reporting rhythm
- [Pilot Evidence Reference Deployment - Microsoft 365 and Jira](../evidence/Pilot%20Evidence%20Reference%20Deployment%20-%20Microsoft%20365%20and%20Jira.md) shows one concrete enterprise-stack translation

## What remains contextual

- tailoring the kit to the actual tool stack, privacy posture, and reporting rhythm of a named workplace
- deciding which KPIs are truly feasible in a specific delivery environment
- calibrating whether the sampling and cadence feel honest after real pilot use
