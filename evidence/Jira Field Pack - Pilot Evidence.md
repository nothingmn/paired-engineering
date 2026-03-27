# Jira Field Pack - Pilot Evidence

## Purpose

This note defines the minimum Jira configuration needed to make the evidence kit work in a real pilot.

The goal is tagging and traceability, not perfect instrumentation.

## Minimum field pack

If Jira admins can create custom fields, use these.

### 1. `AI Pilot Cohort`

Type:

- checkbox
- or single select with `Yes/No`

Purpose:

- marks issues that belong to the pilot evidence set

### 2. `AI Target Workflow`

Type:

- single select

Purpose:

- tags the issue to one of the approved target workflows

Example values:

- `Developer - Debugging support`
- `Developer - Unit test drafting`
- `QA - Defect triage`
- `Product - Acceptance criteria drafting`

### 3. `AI Workflow Mode`

Type:

- single select

Values:

- `learning`
- `delivery`

Purpose:

- captures whether the work was primarily a learning-mode or delivery-mode use case

## Optional field pack

Use these only if the admin burden is low and the team will actually maintain them.

### 4. `AI Assistance Surface`

Type:

- single select

Values:

- `chat`
- `IDE assistant`
- `repo-aware assistant`
- `other`

### 5. `AI Review Follow-Up`

Type:

- checkbox

Purpose:

- marks issues where reviewer burden or follow-up became notable enough to inspect

## If custom fields are too hard

Use labels as the fallback, but stay consistent.

Suggested labels:

- `ai-pilot`
- `ai-learning`
- `ai-delivery`
- `ai-review-followup`
- `ai-workflow-<slug>`

This is weaker than real fields, but it is still better than leaving workflow tagging implicit.

## Saved filters

Create at least these filters.

### All pilot work

Use:

- `AI Pilot Cohort = Yes`

or label fallback:

- `labels = ai-pilot`

### Pilot work by workflow

Use:

- `AI Pilot Cohort = Yes AND "AI Target Workflow" = "<workflow name>"`

### Candidate rework or follow-up set

Use one of:

- `AI Pilot Cohort = Yes AND "AI Review Follow-Up" = Yes`
- `AI Pilot Cohort = Yes AND labels = ai-review-followup`
- linked follow-up fix issues using the team’s normal defect convention

Do not force one perfect query if the team already has a working rework convention.

## Fields to export or inspect weekly

At minimum, pull:

- issue key
- summary
- issue type
- created date
- resolved date if available
- current status
- AI Target Workflow
- AI Workflow Mode
- labels
- link to issue

Use Jira reports or exports for cycle-time direction where possible rather than building a separate timing system from scratch.

## Guardrails

- tag pilot issues before meaningful work begins
- if an issue is not tagged, it does not count as part of the pilot evidence set
- do not create many optional AI fields just because the admin console makes it possible
- keep the Jira layer focused on workflow traceability, not on rating people

## Translation rule

If the target workplace uses Azure DevOps, Linear, GitHub Projects, or another tracker, keep the same logical field pack:

- pilot flag
- target workflow
- workflow mode
- optional surface or review-follow-up indicator
