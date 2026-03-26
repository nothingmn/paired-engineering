# Project Charter

This charter defines the first working version of the AI Enablement project. It is intentionally narrow enough to test and refine rather than broad enough to sound complete.

## Primary lens

This project should read and reason from the perspective of a Staff Software Engineer or technical enablement leader. The emphasis is hands-on engineering workflows, developer tooling, internal platforms, mentoring, presentations, and cross-team influence rather than architecture-led governance alone.

## Mission

Design a practical, evidence-aware approach for enabling software product delivery teams to use AI in ways that improve engineering workflows, quality, learning, debugging, and decision quality without weakening safety, engineering discipline, or accountability.

## Initial scope

- Organization size: optimize first for a bounded initial pilot cohort in software delivery while keeping an org-wide enablement posture that can scale later
- Roles: software developers first, with product owners, architects, QA, and SDET included as delivery partners and enablement stakeholders
- Work types: discovery, planning, design, implementation, debugging, testing, review, documentation, onboarding, apprenticeship, internal advocacy, mentoring, and presentation to leadership
- Technical focus: AI-powered engineering workflows, developer tooling, internal platforms, private and security-conscious adoption patterns, and evaluation of emerging engineering tools
- Expected outputs: an operating model, rollout sequence, teaching material, leadership narratives, decision aids, workflow patterns, and a measurement approach

## Explicit non-goals for v1

- Broad multi-team rollout as the assumed starting point
- A universal AI policy for every business function
- A general labor-market policy or macroeconomic forecast project
- Tool procurement-led strategy or one-time vendor bakeoff
- Productivity claims without a measurement design
- Blind code delegation as the default mode of AI use
- Narrating the work primarily as architecture governance instead of technical enablement

## Working problem statement

Providing access to AI tools is not the same as enabling reliable performance improvement. Teams often receive access before they receive workflow design, role-specific practice, risk boundaries, feedback loops, useful measurement, or hands-on examples of how AI should improve engineering judgment rather than replace it.

This statement is a working hypothesis, not a settled conclusion. It should be tested and refined through sources captured in Research Inbox.

## Problem statement status

The current problem statement should be treated as `draft but justified`.

- `draft` because the evidence base is still incomplete, especially for long-term mastery, multi-team rollout, and real workplace interventions over time
- `justified` because the current source set is already strong enough to support action-oriented design work, especially around comprehension-first adoption, capability-aware rollout, and the need to measure more than speed

## Working assumptions

- AI enablement is partly a change management problem and partly a skill acquisition problem.
- Different delivery roles will need different use cases, review habits, prompts, workflow scaffolds, and guardrails.
- The value of AI use should be evaluated by both outcomes and failure modes.
- Early rollout quality matters more than broad rollout speed.
- AI should be treated as paired engineering support that improves comprehension, debugging, design exploration, and verification rather than as blind delegation.
- Adoption patterns should vary by engineer capability level and task risk.
- Internal advocacy, mentoring, presentations, and influence without authority are part of the rollout work, not side chores.
- Private, security-conscious, and platform-aware adoption patterns matter from the beginning.

## Design principles

- `evidence-backed` when possible, explicit about uncertainty when not
- Role-specific instead of one-size-fits-all
- Workflow-centered instead of tool-centered
- Comprehension-first rollout: paired engineering over blind delegation
- Capability-aware adoption based on oversight readiness and task risk
- Capability multiplication over simple headcount subtraction
- Security-conscious and privacy-aware by default
- Platform thinking and self-service enablement where it reduces friction safely
- Influence-led rollout through mentoring, standards, demos, and internal teaching
- Measured by outcomes, side effects, and adoption quality
- Safe enough for real delivery work, not only for demos
- Preserve and grow mastery in the craft of software development
- Deconstructed for reuse, then reassembled into artifacts when needed

## Core enablement themes

- AI-assisted engineering workflows that help engineers understand systems, reason about tradeoffs, and debug faster
- Internal education that teaches how to work with AI critically rather than how to paste requests into a chatbot
- Technical leadership that influences multiple teams without direct authority
- Leadership translation that turns engineering reality into concise, credible management communication
- Tool evaluation that considers fit, privacy, security, workflow impact, and maturity rather than hype

## Tooling stance

This project should evaluate emerging tools such as Claude Code, local models, RAG patterns, and embeddings only in service of workflow fit, governance fit, and practical enablement. The goal is not to chase every tool release or write hype-driven comparisons.

## Candidate outcome domains

These are initial measurement domains, not final metrics:

- Adoption quality: whether people use approved AI workflows in real work and can explain when not to use them
- Delivery flow: cycle time, lead time, handoff friction, debugging speed, and rework patterns
- Quality: escaped defects, review findings, test quality, and requirements clarity
- Learning: confidence calibration, workflow skill, transfer of learning into live delivery work, and growth toward independent judgment
- Safety: policy violations, data handling failures, and overreliance on unverified output
- Leadership reach: cross-team adoption through demos, mentoring, documentation, standards, and presentations
- Platform leverage: whether internal tooling and self-service patterns reduce friction without hiding risk
- Workforce resilience: onboarding health, apprenticeship capacity, mentoring burden, and long-term capability pipeline health

## Risks and failure modes

- Cargo cult adoption with weak verification habits
- AI use that accelerates output while weakening comprehension
- Uneven capability where a few power users race ahead and the rest stall
- Governance or data handling constraints discovered too late
- Local productivity gains that create downstream quality loss
- Premature standardization around one tool or one way of working
- A rollout story that is too executive-facing and not hands-on enough for engineers
- Less experienced engineers using high-risk workflows before they have the judgment to verify results
- A cost-cutting rollout that narrows junior hiring or apprenticeship capacity without replacing the developmental function those roles provided

## Open questions

- Which paired-engineering workflows create the earliest repeatable value for each role?
- What minimum guardrails are needed for an initial pilot cohort without creating so much friction that adoption collapses?
- What kind of practice design helps people move from novelty to reliable skill and then toward mastery?
- How should capability level and task risk shape recommended AI usage patterns?
- What should a technical enablement leader present to upper management so support grows without overselling the maturity of the rollout?
- Which benefits should be measured first so that rollout claims stay credible?

## Where to go next

If this charter feels directionally right, the next most useful artifacts are:

- [Rollout Lifecycle - Initial Pilot Cohort](Rollout%20Lifecycle%20-%20Initial%20Pilot%20Cohort.md) for the phased rollout model
- [V1 Rollout Playbook - Initial Pilot Cohort](V1%20Rollout%20Playbook%20-%20Initial%20Pilot%20Cohort.md) for the week-by-week pilot shape
- [Capability Model - Oversight Readiness x Task Familiarity x Risk](Capability%20Model%20-%20Oversight%20Readiness%20x%20Task%20Familiarity%20x%20Risk.md) for capability-aware usage decisions
- [Verification Standards by Artifact and Work Type](Verification%20Standards%20by%20Artifact%20and%20Work%20Type.md) for concrete verification expectations
- [Getting Started with AI Enablement](../guides/Getting%20Started%20with%20AI%20Enablement.md) for a practical public entry path through the package
