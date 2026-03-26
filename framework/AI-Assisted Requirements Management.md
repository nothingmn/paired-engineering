# AI-Assisted Requirements Management

This note defines how requirements and product documentation can be created, refined, and maintained with AI without drifting into bloated, low-signal documentation.

The central stance is simple:

- AI should help teams think more clearly about requirements
- AI should not become a machine for manufacturing larger requirement piles

## Evidence posture

- `evidence-backed`: low-observability knowledge artifacts need explicit verification and owner review rather than trust in fluent generated text.
- `evidence-backed`: transfer into real work depends on durable artifacts, social review, and reinforcement rather than one-off conversation output.
- `practice-based`: most concrete rules below are operating guidance for software teams, not the output of a mature experimental literature on AI-assisted requirement writing.

## Problem statement

AI makes it easy to produce large amounts of requirement text quickly.

That creates a predictable failure mode:

- oversized documents
- vague or redundant requirements
- drifting conversations
- context overload
- hard-to-maintain requirement histories

The risk is not only poor prose.

The larger risk is that teams mistake `more text` for `better understanding`.

## Design intent

The project should bias toward:

- MVP thinking
- small increments
- precise requirement statements
- durable structure over sprawling conversation history
- maintainable documentation over maximal documentation

## Core principle

Requirements should be `artifact-first`, not `chat-first`.

Chats are working space.

Canonical requirement artifacts are the source of truth.

That means:

- AI conversations can help generate, critique, and refine
- decisions, scope boundaries, and accepted wording must be consolidated into stable artifacts
- no team should depend on one endless thread to preserve product intent

## What this note is trying to solve

Weak AI-assisted requirements work usually looks like this:

- a very large generated PRD appears quickly
- everyone assumes the document is more complete than the thinking behind it
- implementation starts before assumptions and gaps are exposed
- the real requirement logic gets scattered across chats, docs, tickets, and comments
- later clarification work becomes archaeology

This note is trying to prevent that pattern.

## Key questions

- How should product owners and teams ask AI for requirement help without asking for the kitchen sink?
- What guidance should exist for keeping requirement artifacts small, precise, and increment-focused?
- How should long-term requirement history be managed when AI conversations have context limits and drift?
- What should live in canonical requirement artifacts versus transient AI chats?
- How do we prevent AI from inflating scope or giving false completeness to unclear product thinking?

## Recommended canonical artifact stack

Not every team needs every artifact.

But most teams need a stable structure like this.

### 1. Problem frame

Keep this short.

It should capture:

- the problem to solve
- the user or business outcome
- the reason this matters now
- the most important constraints
- explicit non-goals

### 2. Increment brief

This is the current smallest meaningful slice, not the whole universe of the initiative.

It should capture:

- the increment being built now
- what is in scope for this increment
- what is out of scope for this increment
- open questions that block execution
- linked dependencies

### 3. Delivery-facing backlog artifact

This might be a story, feature slice, task group, or kanban-ready work item.

It should capture:

- implementation-ready scope
- acceptance criteria
- key edge cases or business rules
- testability notes where relevant
- links back to the parent increment brief

### 4. Decision and change log

This is where changing intent belongs.

It should capture:

- what changed
- why it changed
- who confirmed it
- what downstream artifact was updated

### 5. Open questions and risks list

Do not bury unresolved issues inside long narrative text.

Track them explicitly:

- open product questions
- technical unknowns
- testing or rollout concerns
- stakeholder dependencies

## What AI is good for here

Useful jobs for AI in requirements work:

- ambiguity detection
- decomposition into smaller increments
- identifying missing assumptions
- generating stakeholder questions
- critiquing acceptance criteria for vagueness
- comparing two requirement drafts
- summarizing changes between versions
- helping build traceability between problem, scope, and criteria

Useful stance:

- ask AI to challenge the requirement
- ask AI to reduce scope
- ask AI what is missing
- ask AI what cannot yet be verified

## What AI is dangerous for here

High-risk uses:

- generating a full end-to-end PRD from a vague prompt and treating it as real thinking
- inventing precise acceptance criteria for decisions nobody has actually made
- expanding optional ideas into implied commitments
- preserving project memory only in chat threads
- producing polished summaries that hide unresolved disagreement

## Working rules

### 1. One increment at a time

Do not ask for the final complete system specification unless the team is actually prepared to review and own it.

Default prompt stance:

- define one problem
- define one increment
- define one artifact
- define one decision or clarification goal

### 2. Ask for reduction before expansion

Good requirement prompts often ask:

- what can be removed
- what is still unclear
- what assumption needs validation
- what belongs in a later increment

That is usually more useful than asking for “a comprehensive document.”

### 3. Separate ideas from commitments

AI should help generate options.

The canonical artifact should make clear:

- accepted requirement
- rejected option
- unresolved question
- future consideration

Do not let these blur together.

### 4. Keep assumptions explicit

Each meaningful requirement artifact should make assumptions visible.

If AI had to guess, that is a signal to verify, not a gift to quietly accept.

### 5. Link instead of restating

Do not copy the same product truth into many places unless there is a strong reason.

Prefer:

- short canonical artifact
- links to related detail
- stable IDs or references
- one maintained definition per concept

### 6. Close the chat loop

At the end of an AI session:

- extract the useful result
- update the canonical artifact
- record the change or open question
- leave the rest of the chat as transient working material

If the useful output never makes it into a durable artifact, the conversation did not really change the system.

## Context-drift controls

This is one of the biggest reasons requirement work gets messy with AI.

### Use small, bounded sessions

A single session should usually focus on one of:

- problem framing
- increment shaping
- acceptance criteria review
- ambiguity review
- decision comparison
- change summarization

### Bring in current canonical context, not the whole history

Include:

- current artifact text
- current scope boundary
- known constraints
- unresolved questions

Do not dump a month of chat history into the model and hope for coherence.

### Reset when the goal changes

If the work shifts from:

- discovery to refinement
- refinement to implementation readiness
- one increment to another

start a new bounded conversation and anchor it to the current artifact state.

### Maintain a short change trail

Keep the latest requirements state understandable without replaying chat archaeology.

A simple decision or delta log is usually enough.

## Role responsibilities

### Product owner or product manager

Primary responsibility:

- own business intent
- own scope boundaries
- decide what is now versus later
- confirm final wording for canonical requirement artifacts

Good AI use:

- challenge ambiguity
- shrink scope
- generate stakeholder questions
- compare requirement versions

Bad AI use:

- outsourcing product judgment
- treating polished language as validated meaning
- asking for giant documents to think on their behalf

### Developers and technical leads

Primary responsibility:

- challenge implementability
- surface hidden complexity
- identify technical assumptions
- ask whether the increment is actually buildable and reviewable

Good AI use:

- identify missing edge cases
- critique ambiguity
- suggest decomposition points

### QA and SDET

Primary responsibility:

- testability
- edge-case visibility
- detection of missing behavioral criteria

Good AI use:

- critique acceptance criteria for observability and testability
- propose scenarios and failure cases

### Architects or Staff Engineers

Primary responsibility:

- challenge cross-cutting implications
- identify decision dependencies
- detect when requirement wording smuggles in architectural commitments

## Verification expectations

Requirement artifacts should be verified for:

- semantic correctness
- scope boundary clarity
- testability
- implementability
- explicit ownership of open questions

What does not count:

- polished prose
- comprehensive-looking format
- AI confidence
- leader intuition without artifact review

Use [Verification Standards by Artifact and Work Type](Verification%20Standards%20by%20Artifact%20and%20Work%20Type.md) when deciding what level of review and confirmation is needed.

## Manager and technical-lead reinforcement

Requirements quality does not survive on artifact rules alone.

Managers and technical leads need to reinforce these behaviors during normal delivery work.

### Managers should reinforce

- keep the current increment small enough to review honestly
- require visible scope boundaries, non-goals, and open questions
- stop giant generated requirement packs from being treated as progress by themselves
- treat clarification spikes, reopened work, and ambiguous criteria as workflow signals worth investigating

### Technical leads should reinforce

- challenge buildability, reviewability, and testability before execution starts
- split oversized requirement artifacts before they become execution debt
- identify architectural or operational commitments hidden inside product wording
- make sure requirement changes are pushed back into canonical artifacts rather than left in chat threads

### Shared prompts

- what is in scope now and what is explicitly later
- what is still unclear and where is it tracked
- what acceptance criteria can actually be reviewed or tested
- what changed recently and which canonical artifact was updated

## Lightweight quality signals

Do not build a bureaucracy around this.

Just watch a small number of useful signals:

- number of mid-implementation requirement clarifications
- story or work-item spillover due to unclear scope
- reopened work due to requirement misunderstanding
- QA-found ambiguity in acceptance criteria
- number of open questions carried into execution
- duplicate or conflicting requirement artifacts found during refinement

These are usually more useful than measuring document length or how many AI-generated artifacts were created.

## Good pattern examples

- draft a short increment brief, then ask AI to identify what is still ambiguous
- ask AI to produce `three likely misunderstandings` of the current acceptance criteria
- ask AI to reduce a large requirement into the smallest releasable increment
- ask AI to summarize changes between version `n` and version `n+1`
- ask AI what product, engineering, and QA would each still need clarified before execution

## Anti-patterns

- kitchen-sink PRDs
- giant backlog epics with hidden sub-projects
- acceptance criteria that read precisely but hide unresolved assumptions
- using one endless chat as the memory of the requirement
- copying generated text across multiple artifacts and then forgetting which version is canonical
- using AI to make weak thinking look finished

## Working default for agile and kanban teams

### Scrum-style teams

Use AI during:

- backlog shaping
- refinement
- acceptance criteria critique
- sprint-scope sanity checks

Do not let sprint planning become the first real review of a giant generated requirement pack.

### Kanban-style teams

Use AI during:

- intake clarification
- work-item readiness checks
- ambiguity detection before pull
- change summarization when scope evolves quickly

Do not let AI-generated requirement speed flood the system with unready work.

## Recommended operating rule

If a requirement artifact is too large for the responsible people to review in one focused sitting, it is probably too large to be the right working artifact for the current increment.

## Working default summary

- one small increment at a time
- explicit scope boundaries
- acceptance-criteria precision
- artifact-first requirement management, not chat-history dependence
- periodic consolidation into canonical notes
- structured decomposition of large requirement spaces

## Connected artifacts

- [Manager and Technical-Lead Operating Model for AI Enablement](Manager%20and%20Technical-Lead%20Operating%20Model%20for%20AI%20Enablement.md)
- [Manager Coaching Guide - AI Enablement in Delivery Teams](../guides/Manager%20Coaching%20Guide%20-%20AI%20Enablement%20in%20Delivery%20Teams.md)
- [Verification Standards by Artifact and Work Type](Verification%20Standards%20by%20Artifact%20and%20Work%20Type.md)
- [V1 Rollout Playbook - Initial Pilot Cohort](V1%20Rollout%20Playbook%20-%20Initial%20Pilot%20Cohort.md)
