# Senior Staff Exercise 4 - Tool Selection and Governance Tradeoff

## Rating

- size: `4`
- complexity: `5`

## Purpose

Practice evaluating AI tools with the actual system of work, governance boundary, and verification model in mind rather than demo appeal alone.

## Scenario

A delivery organization is comparing three tools:

- a strong general chat assistant with no direct code or ticket editing
- an IDE-integrated assistant with direct code changes but weak auditability
- a repo-aware agentic assistant with stronger automation but heavier governance concerns

The organization also uses:

- GitHub
- Jira
- Confluence
- CI pipelines with strict approval requirements

## Task

Use AI to structure the decision, then produce your own recommendation with explicit tradeoffs.

## Expected output

- comparison matrix by workflow fit
- governance and verification risk list
- recommendation by role or use case
- pilot advice rather than final procurement language

## Good AI uses

- organizing criteria
- comparing surfaces of work
- generating questions for security and platform teams

## Verification focus

- match tool capability to actual workflow needs
- separate tool impressiveness from operational fit
- identify where auditability, reversibility, or edit-surface gaps matter most

## Anti-patterns to watch

- choosing by benchmark prestige
- using one tool for every role because procurement prefers simplicity
- ignoring platform and governance costs because the demo looked productive
