# Rollout Lifecycle - Initial Pilot Cohort

This note describes the first working rollout lifecycle for a bounded initial pilot cohort in software delivery.

## What this lifecycle is

This is not a one-time training plan. It is the sequence for moving a small software-delivery organization from curiosity and uneven experimentation toward repeatable, measured, and safer AI-assisted engineering practice.

## Design intent

- Start narrow enough to learn quickly
- Preserve software craftsmanship while increasing leverage
- Treat AI as paired engineering, not blind delegation
- Keep a parallel research lane open so the rollout model improves as the evidence base improves

## Lifecycle overview

### Phase 1. Alignment and boundaries

Goal:

- Establish why the organization is doing AI enablement and what good looks like

Key activities:

- Align on the problem statement from [Project Charter](Project%20Charter.md)
- Set initial guardrails for privacy, security, approved tools, and high-risk task boundaries
- Identify the initial pilot cohort and a technical enablement lead
- Clarify that the initial objective is workflow improvement and mastery-preserving adoption, not maximum short-term code generation

Outputs:

- Initial enablement charter for the pilot
- Initial tool and data-use boundaries
- Initial management narrative and expectations

Exit criteria:

- Teams know what is in scope, out of scope, and why
- Leadership understands that rollout quality matters more than rollout speed

### Phase 2. Baseline and workflow discovery

Goal:

- Understand current delivery work well enough to choose useful pilot workflows

Key activities:

- Identify role-specific tasks with high friction or repeated cognitive overhead
- Separate learning-heavy workflows from familiar execution workflows
- Capture current pain points, verification habits, and existing informal AI use
- Select a small number of target workflows for developers, QA, SDET, architects, or product owners

Outputs:

- Shortlist of pilot workflows
- Initial task-risk map
- Baseline measures for speed, quality, and review burden where possible

Exit criteria:

- The team is not rolling AI out everywhere
- There is a clear first set of workflows worth testing

### Phase 3. Paired-engineering pilot

Goal:

- Introduce AI through a small number of concrete workflows with coaching and observation

Key activities:

- Teach paired-engineering patterns for the selected workflows
- Require explanation-first usage for unfamiliar tasks and less experienced engineers
- Use higher-leverage acceleration patterns only where engineers can verify output reliably
- Run demos, office hours, and live pairing rather than only distributing guidance documents

Outputs:

- First workflow playbooks
- Example prompts and anti-patterns
- Early observations about what helps, what confuses, and what creates risk

Exit criteria:

- Engineers can describe when to use AI, how to verify it, and when not to use it
- At least a few workflows are being used repeatably in real work

### Phase 4. Capability-aware expansion

Goal:

- Adjust the rollout by oversight readiness and task risk instead of scaling one generic model

Key activities:

- Segment guidance by capability level and oversight ability
- Keep learning-mode practices for unfamiliar tasks
- Introduce stronger acceleration patterns for senior engineers on bounded tasks
- Add review expectations, code-reading checks, and debugging expectations

Outputs:

- Capability-aware guidance
- First version of role-specific enablement materials
- Early internal standards for AI-assisted work

Exit criteria:

- Teams are not using the same AI habits for junior engineers, senior engineers, and high-risk tasks
- Managers and leads can coach toward better usage patterns

### Phase 5. Standards, self-service, and internal platform support

Goal:

- Make the good patterns easy to reuse without losing judgment

Key activities:

- Publish lightweight standards for approved workflows
- Add internal examples, templates, prompt patterns, and checklists
- Improve developer workflow support through internal platform or self-service assets where appropriate
- Build repeatable enablement mechanisms such as brown bags, mentoring loops, and office hours

Outputs:

- Reusable standards and templates
- Self-service enablement assets
- Cross-team knowledge-sharing rhythm

Exit criteria:

- Good usage no longer depends entirely on one enthusiastic individual
- Teams can onboard into the practices without starting from zero

### Phase 6. Measure, adjust, and decide whether to scale

Goal:

- Decide what is actually working and whether the model is ready to expand

Key activities:

- Review adoption quality, delivery effects, quality effects, learning signals, and safety signals
- Compare expected benefits with real behavior and downstream side effects
- Identify where the current model still creates learning debt, review burden, or unsafe overreliance
- Decide whether to refine, pause, or expand toward broader multi-team adoption

Outputs:

- Pilot review
- Refined rollout model
- Decision on whether to scale

Exit criteria:

- There is evidence that the rollout improved real workflows without hiding new risks
- Scaling is based on observed behavior, not optimism

## Parallel research lane

The rollout should not wait for perfect evidence, but research should continue in parallel.

Current high-priority gaps:

- Long-term mastery and retention
- Overreliance and explanation design
- Real workplace interventions over time
- Multi-team adoption and influence dynamics

## What this means in practice

For a Staff Engineer or technical enablement lead, this lifecycle means:

- you spend less time announcing AI and more time designing workflows
- you teach through examples, pairing, demos, and review habits
- you translate tradeoffs upward without overselling the maturity of the rollout
- you treat adoption quality as more important than raw tool usage

## Current implementation layer

- [V1 Rollout Playbook - Initial Pilot Cohort](V1%20Rollout%20Playbook%20-%20Initial%20Pilot%20Cohort.md) turns the lifecycle into a week-by-week pilot shape
- [Executive Deck - AI Enablement for an Initial Pilot Cohort](../leadership/Executive%20Deck%20-%20AI%20Enablement%20for%20an%20Initial%20Pilot%20Cohort.md) and the related leadership material carry the sponsor-facing communication layer
- [Practitioner Playbook - Paired Engineering with AI](../workshops/Practitioner%20Playbook%20-%20Paired%20Engineering%20with%20AI.md) plus the workshop and exercise pack carry the practitioner teaching layer
- [Capability Model - Oversight Readiness x Task Familiarity x Risk](Capability%20Model%20-%20Oversight%20Readiness%20x%20Task%20Familiarity%20x%20Risk.md) and [Pilot Evidence Model - Practical Metrics and Lightweight Collection](Pilot%20Evidence%20Model%20-%20Practical%20Metrics%20and%20Lightweight%20Collection.md) carry the current model and measurement layer

## Supporting notes

- [V1 Rollout Playbook - Initial Pilot Cohort](V1%20Rollout%20Playbook%20-%20Initial%20Pilot%20Cohort.md)
- [Rollout Matrix - Role-Specific Workflows by Phase](Rollout%20Matrix%20-%20Role-Specific%20Workflows%20by%20Phase.md)
- [Rollout Matrix - Capability Rules by Phase](Rollout%20Matrix%20-%20Capability%20Rules%20by%20Phase.md)
- [AI Enablement Across the Software Delivery Lifecycle](AI%20Enablement%20Across%20the%20Software%20Delivery%20Lifecycle.md)
- [Pilot Evidence Model - Practical Metrics and Lightweight Collection](Pilot%20Evidence%20Model%20-%20Practical%20Metrics%20and%20Lightweight%20Collection.md)
- [Capability Model - Oversight Readiness x Task Familiarity x Risk](Capability%20Model%20-%20Oversight%20Readiness%20x%20Task%20Familiarity%20x%20Risk.md)
- [Verification Standards by Artifact and Work Type](Verification%20Standards%20by%20Artifact%20and%20Work%20Type.md)
- [Executive Deck - AI Enablement for an Initial Pilot Cohort](../leadership/Executive%20Deck%20-%20AI%20Enablement%20for%20an%20Initial%20Pilot%20Cohort.md)
- [Practitioner Playbook - Paired Engineering with AI](../workshops/Practitioner%20Playbook%20-%20Paired%20Engineering%20with%20AI.md)
