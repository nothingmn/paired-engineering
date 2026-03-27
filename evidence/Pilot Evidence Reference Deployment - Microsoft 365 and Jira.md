# Pilot Evidence Reference Deployment - Microsoft 365 and Jira

## Purpose

This note turns the pilot evidence kit into a concrete reference deployment.

It assumes a common enterprise stack:

- Microsoft Forms for surveys and pulse checks
- SharePoint or Teams-backed Excel workbook for the shared tracker
- Jira for workflow tagging and basic workflow metrics
- existing pull request system for review-burden observation

This is a reference build, not a universal mandate.

If the target workplace uses Google Workspace, Azure DevOps, or another equivalent stack, translate the surfaces but keep the logic.

## Why this stack

This stack is concrete enough to deploy, but common enough that most organizations can map to it.

It also keeps the evidence loop lightweight:

- no new measurement platform
- no separate analytics vendor
- no requirement for heavy automation before the pilot begins

## Named assets to create

Create these assets with stable names so the pilot team knows where the system of record lives.

### Microsoft Forms

1. `AI Enablement - Pre-Pilot Survey - Initial Pilot Cohort`
2. `AI Enablement - Post-Pilot Survey - Initial Pilot Cohort`
3. `AI Enablement - Weekly Pilot Pulse - Initial Pilot Cohort`
4. Optional: `AI Enablement - Retrieval Check`

Use [Microsoft Forms Build - Pilot Evidence Surveys](Microsoft%20Forms%20Build%20-%20Pilot%20Evidence%20Surveys.md) for the exact form structure.

### SharePoint or Teams document library

Create one restricted folder:

`AI Enablement Pilot Evidence`

Suggested subfolders:

- `Forms Exports`
- `Weekly Summaries`
- `Redacted Example Cases`

### Excel workbook

Create one workbook in that folder:

[`AI Enablement - Pilot Evidence Tracker - Initial Pilot Cohort.xlsx`](AI%20Enablement%20-%20Pilot%20Evidence%20Tracker%20-%20Initial%20Pilot%20Cohort.xlsx)

Use [Pilot Evidence Workbook Schema - Excel and SharePoint](Pilot%20Evidence%20Workbook%20Schema%20-%20Excel%20and%20SharePoint.md) for the worksheet structure.

### Jira configuration

Create the pilot field pack and saved filters in the target Jira project or program scope.

Use [Jira Field Pack - Pilot Evidence](Jira%20Field%20Pack%20-%20Pilot%20Evidence.md) for the exact fields and filter pattern.

### Privacy note

Publish one short internal handling note or policy reference before launch.

Use [Pilot Evidence Privacy Posture - Confidential Aggregate Reporting](Pilot%20Evidence%20Privacy%20Posture%20-%20Confidential%20Aggregate%20Reporting.md) as the default.

## First build order

1. Confirm the privacy posture and sponsor language.
2. Create the SharePoint or Teams folder.
3. Create the Excel workbook.
4. Build the three Microsoft Forms.
5. Add the Jira field pack and saved filters.
6. Tag the target workflows before pilot start.
7. Run the pre-pilot survey.
8. Start weekly tracking only after the workbook, filters, and ownership model exist.

## KPI-to-system map

| KPI | Primary system | Secondary input | Owner |
| --- | --- | --- | --- |
| Target workflow median cycle time | Jira report or export | workbook trend note | technical enablement lead |
| Downstream rework rate | Jira reopened work or linked follow-up fixes | defect tracker | technical enablement lead |
| Review burden | pull request system | reviewer check-in | technical lead |
| Guardrail exception count | exception log or weekly action log | manager or reviewer escalation | manager sponsor plus enablement lead |
| Adoption quality score | workbook sampled case log | rubric | technical reviewer |
| Retrieval follow-up score | Microsoft Forms retrieval check | workshop notes | facilitator or enablement lead |
| Confidence calibration check | survey plus weekly pulse | sampled case review | enablement lead |

## Weekly operating rhythm in this stack

### Monday or early week

- export or inspect the Jira pilot filter
- update the `Workflow KPI tracker` sheet
- export the latest weekly pulse results from Microsoft Forms

### Midweek

- sample `5-10` real cases
- review them with the rubric
- enter case rows into the `Sampled case log`

### End of week

- update the `Support and learning log`
- write one row in the `Weekly action log`
- send an aggregate summary in Teams or email

## What stays outside the workbook

Do not paste everything into the shared tracker.

Keep these outside the workbook:

- raw Microsoft Forms exports with respondent identity if the tenant captures it
- raw prompts containing secrets, customer data, or personal data
- full incident transcripts or sensitive customer tickets
- performance commentary about individuals

The workbook should hold only the working operational data needed to run the pilot.

## What makes this deployable

This reference deployment is concrete enough that a small pilot team can build it in a few hours, not a few weeks.

That is the point.

If the team cannot launch this version of the evidence loop, the pilot scope is probably still too broad.
