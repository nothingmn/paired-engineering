# Pilot Evidence Workbook Schema - Excel and SharePoint

## Purpose

This note defines the actual workbook shape for the pilot evidence tracker.

Workbook name:

[`AI Enablement - Pilot Evidence Tracker - Initial Pilot Cohort.xlsx`](AI%20Enablement%20-%20Pilot%20Evidence%20Tracker%20-%20Initial%20Pilot%20Cohort.xlsx)

Recommended location:

- restricted SharePoint document library
- or a Teams channel files area with limited membership

## Worksheet list

Create these tabs in this order:

1. `Pilot overview`
2. `Lookup lists`
3. `Workflow KPI tracker`
4. `Sampled case log`
5. `Support and learning log`
6. `Weekly action log`

## Tab 1. Pilot overview

Use one simple metadata block.

Fields:

- pilot name
- pilot start date
- pilot end date
- baseline window
- sponsor
- technical enablement lead
- manager sponsor
- technical reviewer
- survey links
- Jira filter link
- workbook owner
- current pilot decision: `refine`, `hold`, `pause`, `scale`

## Tab 2. Lookup lists

Use this tab for validation values so the rest of the workbook stays consistent.

Suggested lists:

- roles
- target workflows
- workflow mode
- AI surface
- familiarity values
- risk values
- verification difficulty values
- trend values
- action values

Default lookup values:

### Workflow mode

- `learning`
- `delivery`

### AI surface

- `chat`
- `IDE assistant`
- `repo-aware assistant`
- `other`

### Familiarity

- `F1 unfamiliar`
- `F2 mixed`
- `F3 familiar`

### Risk

- `R1 low`
- `R2 medium`
- `R3 high`

### Verification difficulty

- `low`
- `medium`
- `high`

### Trend

- `up`
- `down`
- `flat`
- `mixed`
- `unknown`

### Action

- `support`
- `inspect`
- `refine`
- `pause`
- `scale`
- `hold`

## Tab 3. Workflow KPI tracker

Use one row per `workflow + KPI + week`.

Columns:

| Column | Purpose |
| --- | --- |
| Week starting | weekly anchor |
| Workflow tag | stable workflow identifier |
| Role | reporting cut |
| KPI | one of the approved KPIs |
| Data source | Jira, PR system, Forms, rubric, other |
| Owner | person updating the row |
| Baseline | numeric or short text baseline |
| Current | current period value |
| Change | current minus baseline when numeric |
| Trend | `up/down/flat/mixed/unknown` |
| Decision note | what this means |
| Source link | report or export location |

Approved KPI names:

- `Target workflow median cycle time`
- `Downstream rework rate`
- `Review burden`
- `Guardrail exception count`
- `Adoption quality score`
- `Retrieval follow-up score`
- `Confidence calibration check`

## Tab 4. Sampled case log

Use one row per reviewed case.

Columns:

| Column | Purpose |
| --- | --- |
| Week starting | weekly anchor |
| Review date | date reviewed |
| Artifact link | issue, PR, doc, or case link |
| Role | participant role |
| Team | team or cohort group |
| Workflow tag | target workflow |
| Workflow mode | `learning` or `delivery` |
| AI surface | tool surface used |
| Task familiarity | `F1/F2/F3` |
| Task risk | `R1/R2/R3` |
| Verification difficulty | low, medium, or high |
| Workflow fit score | `0-2` |
| Explanation ability score | `0-2` |
| Verification quality score | `0-2` |
| Risk handling score | `0-2` |
| Downstream quality score | `0-2` |
| Total score | sum of the five scores |
| Strongest part | short text |
| Biggest concern | short text |
| Teaching note | short text |
| Follow-up owner | owner if action is needed |
| Escalation needed | yes or no |

Suggested total formula:

- `=SUM(L2:P2)` if the score columns begin in `L`

## Tab 5. Support and learning log

Use one row per support signal or learning event.

Columns:

| Column | Purpose |
| --- | --- |
| Week starting | weekly anchor |
| Signal type | workshop, office hours, manager check-in, peer support, retrieval check |
| Event or source | session name or source |
| Audience | who it served |
| Count | attendance or response count |
| Top support need | main request or issue |
| Follow-up owner | who handles it |
| Note | short observation |

## Tab 6. Weekly action log

Use one row per week.

Columns:

| Column | Purpose |
| --- | --- |
| Week starting | weekly anchor |
| What improved | short summary |
| What got heavier | short summary |
| What needs support | short summary |
| What needs inspection | short summary |
| Decision | `support/refine/pause/scale/hold` |
| Owner | who carries the action |
| Due date | target completion |
| Status | open or closed |

## Workbook rules

- keep raw survey exports outside this workbook
- keep names out of the shared tabs by default
- use links to internal cases instead of copying sensitive content
- if one tab stops informing decisions, simplify it instead of preserving it for completeness

## Minimum useful formulas

- `Total score` in the sampled case log
- optional conditional formatting for low scores and escalation flags
- optional simple pivot or filter view by workflow

Do not over-automate this workbook in the first pilot.

The point is operational clarity, not analytics theater.
