# Microsoft Forms Build - Pilot Evidence Surveys

## Purpose

This note turns the survey drafts into a concrete Microsoft Forms build.

It assumes Microsoft Forms is the chosen survey surface for the initial pilot cohort.

## Global settings

Use these defaults unless privacy, HR, or tenant policy requires something stricter.

### Pre-pilot and post-pilot surveys

- responders: people in the organization only
- responses per person: one
- form owner: technical enablement lead
- sharing: pilot team only
- public link: off

### Weekly pulse

- responders: people in the organization only
- responses per person: multiple across the life of the form
- include a `Week starting` field so weekly results can be grouped
- do not rebuild the form every week unless the organization strongly prefers that

### Identity handling

- do not ask for names in the form body
- if the tenant records respondent identity automatically, restrict raw exports to the enablement lead and one backup
- publish only de-identified or aggregate results

## Form 1. Pre-pilot survey

Form name:

`AI Enablement - Pre-Pilot Survey - Initial Pilot Cohort`

Fields:

| Question | Type | Required? | Suggested setting |
| --- | --- | --- | --- |
| Role | choice | yes | single answer |
| Team | choice or text | yes | choice if stable list exists |
| Matching code | text | no | short answer |
| Familiarity with approved AI tools | rating | yes | `1-5` |
| Confidence in verifying AI-assisted output | rating | yes | `1-5` |
| Confidence in explaining AI-assisted output | rating | yes | `1-5` |
| Current frequency of AI use | choice | yes | `0-4` scale labels |
| Frequency of independent verification | rating | yes | `1-5` |
| Top concerns | choice | yes | multiple answers, limit in prompt text |
| Support from manager or peers | rating | yes | `1-5` |
| Workflow most worth improving | text | no | long answer |
| What would make the pilot unsafe or wasteful | text | no | long answer |

## Form 2. Post-pilot survey

Form name:

`AI Enablement - Post-Pilot Survey - Initial Pilot Cohort`

Fields:

| Question | Type | Required? | Suggested setting |
| --- | --- | --- | --- |
| Role | choice | yes | align with pre-pilot |
| Team | choice or text | yes | align with pre-pilot |
| Matching code | text | no | same pattern as pre |
| Pilot workflows personally used | choice or text | yes | multi-select if workflow list is stable |
| Confidence in verifying AI-assisted output | rating | yes | `1-5` |
| Confidence in explaining AI-assisted output | rating | yes | `1-5` |
| Workflow effect overall | choice | yes | `-2` to `+2` labels |
| Time saved but cleanup created | rating | yes | `1-5` |
| Meaningful AI mistakes caught | rating | yes | `1-5` |
| More likely to use explanation and verification | rating | yes | `1-5` |
| Manager or peer support helpful | rating | yes | `1-5` |
| Most valuable workflow and why | text | no | long answer |
| Most risk, confusion, or wasted effort | text | no | long answer |
| What to change first next version | text | no | long answer |

## Form 3. Weekly pulse

Form name:

`AI Enablement - Weekly Pilot Pulse - Initial Pilot Cohort`

Fields:

| Question | Type | Required? | Suggested setting |
| --- | --- | --- | --- |
| Week starting | date or choice | yes | use one standard weekly anchor |
| Most-used target workflow this week | choice | yes | controlled list preferred |
| Overall effect this week | choice | yes | single answer |
| Verification confidence | rating | yes | `1-5` |
| Rework or near-miss severity | choice | yes | none / minor / moderate / major |
| Short note on what happened | text | no | long answer |
| Most useful support next week | choice | yes | single answer |

Optional manager or technical-lead version:

- use the same form with `Role` as the first field, or
- create a second small pulse if the organization wants separate access control

## Optional Form 4. Retrieval check

Form name:

`AI Enablement - Retrieval Check`

Keep this to `1-3` questions after a workshop, demo, or office-hours burst.

Suggested fields:

| Question | Type | Required? |
| --- | --- | --- |
| Session or topic | choice | yes |
| One verification step you would not skip | text | yes |
| When should this workflow stay in learning mode | text or choice | yes |
| Confidence applying this next week | rating `1-5` | yes |

## Export routine

- export the pre-pilot survey once after kickoff closes
- export the weekly pulse once per week on the same day
- export the post-pilot survey once at pilot close
- keep raw exports in the restricted `Forms Exports` folder
- paste only aggregated or de-identified results into the shared workbook

## Build guardrails

- do not keep adding optional questions because the form feels too short
- do not ask for employee identifiers in the question set
- do not let the weekly pulse become a mini-retrospective
- do not use Forms as the system of record for decisions; the workbook remains the operational tracker
