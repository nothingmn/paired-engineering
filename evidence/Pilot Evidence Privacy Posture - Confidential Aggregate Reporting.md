# Pilot Evidence Privacy Posture - Confidential Aggregate Reporting

## Purpose

This note defines the default privacy posture for running the pilot evidence kit in a real workplace.

It is intentionally stricter than casual internal reporting and intentionally lighter than a full compliance policy.

## Default posture

Treat pilot evidence as:

- confidential internal operational learning data
- not anonymous by default
- not performance-management data
- shared in aggregate unless a safety issue requires specific follow-up

## Allowed data

The pilot may collect:

- role
- team or cohort group
- workflow used
- confidence and support ratings
- short comments about friction, rework, or support needs
- participant-generated matching code
- redacted links to internal artifacts for sampled review

## Data to avoid collecting

Do not collect unless a clear exception is approved:

- names in the analysis workbook
- salary, tenure, or performance-rating data
- protected-class or demographic data
- customer personal data
- raw prompts containing secrets or internal credentials
- copied source-code or incident content when a link is enough

## Access model

### Raw Forms exports

Access:

- technical enablement lead
- one designated backup coordinator

### Shared evidence workbook

Access:

- technical enablement lead
- manager sponsor
- designated technical reviewer

The shared workbook should be de-identified by default.

### Weekly summaries

Access:

- sponsor
- participating managers
- technical leads
- pilot cohort if appropriate

Weekly summaries should stay aggregate and operational.

## Comment handling rules

- strip names and identifying details from comments before wider sharing
- summarize patterns rather than quoting individuals when possible
- keep case links internal and permission-aware
- never paste raw sensitive material into the workbook

## Reporting rules

- do not create individual scorecards
- do not publish team breakouts if the group is too small to feel safely confidential
- use sampled cases for learning, not surveillance
- if a safety or policy issue requires individual follow-up, keep that outside the normal summary channel

## Retention default

Unless the organization requires otherwise:

- raw survey exports: delete `60` days after pilot close
- matching-code handling notes: delete `60` days after pilot close
- working evidence workbook: retain for the pilot plus `180` days
- final aggregate summary and redacted example cases: retain as program artifacts

## Launch checklist

Before the pilot begins:

1. confirm this posture with the sponsor
2. confirm whether HR, privacy, or security wants a review
3. state clearly that the kit is not for performance management
4. confirm who can access raw exports and the workbook
5. confirm where the restricted folder and workbook will live

## Participant notice snippet

Suggested language:

`This pilot collects a small amount of workflow-learning data to improve the rollout. Responses are handled confidentially, reported in aggregate by default, and are not used for performance ranking. A small number of real cases may be sampled for workflow-quality review, but the goal is to improve the rollout, not to score individuals.`
