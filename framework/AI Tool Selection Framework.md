# AI Tool Selection Framework

This note defines how to choose AI tools for software-delivery organizations without reducing the decision to vendor hype, personal preference, or isolated demos.

The taxonomy note explains `what kind of tool this is`.

This note explains `how to decide whether a specific tool is a good fit`.

## Core principle

Pick tools by workflow fit and operational constraints, not by model prestige alone.

A strong model inside the wrong operating surface is often less valuable than a slightly weaker tool that fits the real workflow and governance environment.

## What this note is trying to prevent

Weak tool selection often looks like this:

- leadership picks the most impressive demo
- engineers are expected to use one tool for every job
- the tool cannot act on the systems where work actually lives
- the organization buys automation power before it buys review, audit, and rollback discipline
- the success story becomes licenses, prompts, or logo count instead of workflow improvement

## Universal selection criteria

These criteria matter across almost every tool category.

### 1. Workflow fit

Ask:

- which specific workflow problem does this tool improve
- where in the lifecycle will it actually be used
- who will use it
- what current friction does it reduce

If the answer is vague, the tool is probably being selected too early.

### 2. Edit surface and actionability

Ask:

- can the tool work directly in the surface where the team already works
- can it edit code, tickets, wiki pages, pull requests, or runbooks where appropriate
- does it only generate text in a separate chat window

This matters a lot.

For many roles, a tool that cannot touch the real work surface remains a thinking aid rather than a workflow accelerator.

### 3. Context quality

Ask:

- what context can the tool see
- how fresh is that context
- does it understand the repository, backlog, wiki, incidents, or architecture notes
- can it point back to source material

Poor context quality often creates persuasive but low-value output.

### 4. Verification support

Ask:

- does the tool help the user verify the output
- does it provide traceability, citations, diff visibility, test hooks, or source links
- does it encourage reviewable work or opaque generation

Selection should favor tools that make verification easier, not just generation faster.

### 5. Security and privacy fit

Ask:

- what data will the tool see
- what leaves the environment
- what retention rules exist
- how are permissions, secrets, and internal systems handled

This is a design input, not a late approval checkbox.

### 6. Auditability and control

Ask:

- can we understand what the tool changed or suggested
- can we see the diff, source, command, or action history
- can we require approvals where needed

Opaque action without usable review is a poor fit for high-risk work.

### 7. Reversibility

Ask:

- if the tool behaves badly, how easy is it to undo
- can we contain its changes
- are dry-run, rollback, or approval gates available

The more autonomous the tool, the more this matters.

### 8. Adoption friction

Ask:

- how much workflow switching does the tool require
- how much new behavior must users learn
- is the tool easy to try safely in bounded work

Friction matters because even good tools fail if they are awkward to use in the real delivery rhythm.

### 9. Administrative burden

Ask:

- how much setup, maintenance, indexing, governance, or enablement overhead does the tool create
- who owns the integration and support burden

A tool that saves minutes for users but creates hours of platform burden may not be worth it.

### 10. Cost model

Ask:

- what is the license or usage cost
- does the pricing align with the expected workflow value
- will integration behavior create runaway token or seat costs

Cost matters, but should be considered against workflow value, governance burden, and review burden together.

### 11. Portability and lock-in

Ask:

- can the organization change models or providers later
- are prompts, workflows, data connectors, and artifacts portable
- does the tool create a fragile dependency on one vendor surface

This is especially important for strategic or large-scale rollout decisions.

## Category-specific criteria

Use these criteria in addition to the universal set.

### Conversational reasoning partners

Strong criteria:

- good source grounding
- easy export into canonical artifacts
- low friction for bounded questioning
- strong explanation and critique quality

Weak fit signal:

- the tool becomes a substitute for durable documentation or decision logging

### Artifact drafting assistants

Strong criteria:

- version awareness
- ability to compare drafts
- support for structured output
- easy write-back into the canonical documentation system

Weak fit signal:

- the tool mainly produces long polished drafts with little help reducing scope or exposing ambiguity

### IDE copilots and inline coding tools

Strong criteria:

- direct code editing
- clear diff visibility
- repository context
- test-aware usage
- low friction inside the editor

Weak fit signal:

- completion speed is high but code review burden rises sharply

### Repository-aware engineering assistants

Strong criteria:

- fresh indexing
- source links to symbols, files, commits, and tests
- ability to answer “where” and “why” questions inside the codebase
- support for onboarding and debugging

Weak fit signal:

- confident answers without usable traceability

### Agentic coding and task-execution tools

Strong criteria:

- bounded task definition
- approval controls
- rollback path
- environment and permission boundaries
- reliable diff or change review

Weak fit signal:

- the tool can act widely but cannot be constrained or reviewed well

### Retrieval and knowledge access tools

Strong criteria:

- permission-aware retrieval
- freshness of indexed sources
- citation or source linking
- support for canonical artifacts rather than chat memory alone

Weak fit signal:

- the knowledge base itself is stale, contradictory, or too noisy to retrieve well

### Quality, test, and evaluation helpers

Strong criteria:

- traceability back to requirement, defect, or risk
- useful comparison views
- clear false-positive handling
- integration with test and review workflows

Weak fit signal:

- the tool produces a large quantity of issues or tests without helping the team understand quality impact

### DevOps, platform, and infrastructure assistants

Strong criteria:

- audit trail
- secrets safety
- environment awareness
- rollback or dry-run support
- compatibility with current delivery controls

Weak fit signal:

- the tool speeds up pipeline or IaC edits but weakens operational trust

### Observability and incident-analysis assistants

Strong criteria:

- evidence links to logs, traces, metrics, and alerts
- timeline and correlation support
- clear separation between hypothesis and confirmed cause

Weak fit signal:

- the tool creates polished but weak root-cause narratives

### MLOps and model-lifecycle assistants

Strong criteria:

- evaluation support
- versioning
- prompt or workflow traceability
- dataset and experiment governance
- release control for AI-enabled product behavior

Weak fit signal:

- the tool accelerates experimentation but weakens reproducibility or governance

### Planning, meeting, and synthesis tools

Strong criteria:

- clear action extraction
- decision capture
- easy promotion of output into canonical artifacts
- low privacy surprise

Weak fit signal:

- meetings get summarized, but unresolved issues quietly disappear

### Local and private model setups

Strong criteria:

- strong privacy fit
- acceptable performance
- sustainable hosting burden
- clear model update and support path

Weak fit signal:

- privacy improves but operational burden overwhelms the value

## Role-specific minimums

These are not absolute rules, but they are good defaults.

### Developers

Usually high-value criteria:

- direct code editing or diff generation
- repository awareness
- test-aware workflow support
- pull-request or review compatibility

### Product owners and product managers

Usually high-value criteria:

- ability to work with the backlog system
- ability to draft or update canonical requirement artifacts
- change comparison
- ambiguity detection
- wiki or documentation integration where that is the real source of truth

### QA and SDET

Usually high-value criteria:

- traceability from requirements or defects to test assets
- support for failure analysis
- compatibility with test management or issue systems
- easy review of generated test suggestions

### Architects and Staff Engineers

Usually high-value criteria:

- strong source grounding
- design and dependency context
- ADR or decision-log compatibility
- explicit handling of unknowns and tradeoffs

### DevOps, platform, and SRE

Usually high-value criteria:

- infrastructure-aware context
- environment and secret safety
- runbook and pipeline compatibility
- strong auditability and rollback

## Lightweight selection process

Do not over-engineer this.

### Step 1. Pick the workflow first

Choose `2-4` real workflows.

Examples:

- debugging a service regression
- drafting and refining backlog items
- updating runbooks
- triaging flaky tests

### Step 2. Define must-haves and nice-to-haves

For each workflow, decide:

- what the tool absolutely must support
- what would be helpful but optional
- what would disqualify the tool

### Step 3. Score the candidate simply

Use a simple `1-5` scale for:

- workflow fit
- edit surface fit
- context quality
- verification support
- security and privacy fit
- admin burden
- cost-value fit

### Step 4. Pilot the top candidates

Use a bounded pilot with sampled review, not a broad rollout.

### Step 5. Review the hidden costs

Do not look only at apparent speed.

Also review:

- review burden
- rework
- onboarding friction
- user confusion
- governance overhead

## Anti-patterns

- choosing a tool because the model brand is strong
- standardizing on one tool before workflows are understood
- requiring teams to leave their real work surfaces for everything
- buying agentic power before approval, rollback, and review are ready
- ignoring wiki, backlog, repo, or ticket integration for roles that live in those systems
- measuring tool choice success by seats, prompts, or message counts

## Relationship to market examples

Modern tool examples can be useful as reference points.

They should stay secondary to this framework.

The durable guidance is:

- choose by job performed
- choose by workflow fit
- choose by governance fit
- choose by verification support

Then use current market examples only to show what kinds of tools currently fit those shapes.
