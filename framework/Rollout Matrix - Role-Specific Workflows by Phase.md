# Rollout Matrix - Role-Specific Workflows by Phase

This note maps the lifecycle phases to concrete workflows for the target roles.

## Phase 1. Alignment and boundaries

- Developers: identify code, data, and repository areas where AI use is unsafe or needs stronger review
- QA/SDET: identify test data, automation, and defect-triage workflows with privacy or quality sensitivity
- Architects: define high-risk architectural decisions, approved patterns, and design-review boundaries
- Product owners: define acceptable use for backlog refinement, requirement drafting, ambiguity reduction, and stakeholder communication

## Phase 2. Baseline and workflow discovery

- Developers:
  - debugging support
  - code explanation
  - test generation support
  - refactoring assistance
- QA/SDET:
  - failure triage
  - test case expansion
  - automation review
  - flaky test investigation
- Architects:
  - architecture option comparison
  - dependency impact analysis
  - design review preparation
- Product owners:
  - requirement clarification
  - acceptance-criteria drafting
  - story decomposition
  - ambiguity detection

## Phase 3. Paired-engineering pilot

- Developers:
  - paired debugging on bounded defects
  - code-reading and explanation of unfamiliar modules
  - unit test drafting with explanation
  - refactoring suggestions on low-risk code
- QA/SDET:
  - exploratory test idea generation
  - defect reproduction support
  - test maintenance suggestions with review
  - failure pattern summarization
- Architects:
  - design tradeoff exploration
  - threat and dependency question generation
  - review of architectural assumptions
- Product owners:
  - backlog item clarification
  - acceptance-criteria challenge prompts
  - stakeholder question generation

## Phase 4. Capability-aware expansion

- Developers:
  - junior engineers use explanation-first workflows on unfamiliar tasks
  - senior engineers use stronger drafting on routine tasks
- QA/SDET:
  - less experienced staff use AI to understand failure mechanisms
  - more experienced staff use AI for broader automation leverage
- Architects:
  - focus on critique, option generation, and documentation support rather than authority replacement
- Product owners:
  - use AI to pressure-test logic and clarity, not to replace domain judgment

## Phase 5. Standards, self-service, and internal platform support

- Developers: reusable prompt patterns, code review checks, known-good examples
- QA/SDET: test-design templates, failure-analysis prompts, privacy-safe data handling examples
- Architects: design-review templates, decision-record prompts, architecture-question checklists
- Product owners: refinement templates, requirements-review prompts, ambiguity checklists

## Phase 6. Measure, adjust, and decide whether to scale

- Developers: review whether AI improved debugging, review quality, and rework patterns
- QA/SDET: review defect detection, test quality, maintenance burden, and false confidence risks
- Architects: review whether AI improved reasoning quality or just produced more text
- Product owners: review whether requirements got clearer, faster, and safer
