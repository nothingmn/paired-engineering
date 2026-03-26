# AI Tool Taxonomy by Job

This note defines AI tools at the level of the jobs they perform so the project does not become anchored to a specific vendor list.

For tool-choice criteria and a lightweight decision path, use [AI Tool Selection Framework](AI%20Tool%20Selection%20Framework.md).

## Why this note exists

Tool names and market leaders will change.

The project needs a more durable layer that answers:

- what kind of job does this tool perform
- when is this kind of tool appropriate
- what risks and verification expectations come with it

## Stable category set

### 1. Conversational reasoning partners

Primary job:

- question generation
- option comparison
- explanation
- critique

Typical workflow fit:

- discovery
- backlog shaping
- design exploration
- incident questioning

Verification expectation:

- medium to high, depending on task observability

### 2. Artifact drafting assistants

Primary job:

- first drafts of stories, ADRs, release notes, stakeholder summaries, and test plans

Typical workflow fit:

- backlog shaping
- design documentation
- review preparation
- release communication

Verification expectation:

- high, because drafting speed easily creates scope and wording debt

### 3. IDE copilots and inline completion tools

Primary job:

- local code and test drafting inside the implementation environment

Typical workflow fit:

- implementation
- refactoring
- unit test scaffolding

Verification expectation:

- high, but often manageable on bounded familiar work

### 4. Repository-aware engineering assistants

Primary job:

- answer questions using the local codebase, change history, tests, and repository structure

Typical workflow fit:

- debugging
- code reading
- review support
- onboarding to internal systems

Verification expectation:

- high, especially when the assistant synthesizes from incomplete or stale project context

### 5. Agentic coding and task-execution tools

Primary job:

- perform multi-step engineering work with some autonomy

Typical workflow fit:

- repetitive engineering chores
- bounded migration tasks
- structured repair or test-generation workflows

Verification expectation:

- very high

Working stance:

- use only where task boundaries, rollback paths, and review loops are strong

### 6. Retrieval and knowledge access tools

Primary job:

- find, retrieve, and summarize internal documentation, requirements, standards, incidents, and past decisions

Typical workflow fit:

- discovery
- backlog shaping
- implementation
- operations

Verification expectation:

- medium to high

Working stance:

- strong value when artifact quality is already decent
- weak value when the underlying knowledge base is noisy or contradictory

### 7. Quality, test, and evaluation helpers

Primary job:

- generate test ideas
- assess outputs
- compare changes
- run evaluation or guardrail checks

Typical workflow fit:

- testing
- review
- release readiness

Verification expectation:

- high, but they can reduce human review load when well-scoped

### 8. DevOps, platform, and infrastructure assistants

Primary job:

- support CI or CD workflow work
- assist with infrastructure as code
- help with deployment pipelines
- summarize operational configuration and environment differences

Typical workflow fit:

- release readiness
- deployment
- environment management
- platform engineering

Verification expectation:

- very high

Working stance:

- infrastructure and pipeline speed-ups are only wins if rollback, auditability, and environment correctness remain strong

### 9. Observability and incident-analysis assistants

Primary job:

- summarize telemetry
- cluster alerts and symptoms
- support incident questioning
- draft post-incident follow-up

Typical workflow fit:

- operations
- production support
- release follow-up
- reliability review

Verification expectation:

- very high

Main risk:

- persuasive but wrong root-cause narratives

### 10. MLOps and model-lifecycle assistants

Primary job:

- support model evaluation, prompt or workflow versioning, dataset handling, experiment comparison, and deployment coordination for AI-enabled systems

Typical workflow fit:

- AI product delivery
- evaluation and regression checks
- model or prompt release workflows
- governance on AI-enabled applications

Verification expectation:

- very high

Working stance:

- this category matters most when the team is shipping AI-enabled product behavior, not just using AI internally for software delivery

### 11. Planning, meeting, and synthesis tools

Primary job:

- summarize meetings
- extract actions
- cluster themes
- draft planning artifacts

Typical workflow fit:

- delivery coordination
- retrospectives
- review follow-up

Verification expectation:

- medium

Main risk:

- convincing summaries that miss the actual unresolved decision

### 12. Local and private model setups

Primary job:

- enable sensitive workflows under stronger privacy and governance constraints

Typical workflow fit:

- security-sensitive engineering work
- internal knowledge tasks
- regulated or private data contexts

Verification expectation:

- depends on the task, but governance expectations are higher

### 13. Governance, observability, and policy support tools

Primary job:

- track approved usage boundaries
- support lightweight evidence collection
- enforce policy or routing constraints

Typical workflow fit:

- pilot management
- risk control
- audit support

Verification expectation:

- focused on process integrity rather than content accuracy alone

## Analysis dimensions

- primary job performed
- typical workflow fit
- strengths
- common failure modes
- privacy and security implications
- verification expectations
- level of human oversight needed

## Working stance

Current product examples can be named as temporary instances of a category, but the category should matter more than the vendor.

Examples can help orientation, but they should not become the taxonomy itself.

## Rule for market examples

Current market examples can add value if they are handled as dated illustrations rather than canonical knowledge.

If examples are added later, they should:

- be clearly marked as time-bound snapshots
- sit under the category, not replace the category
- include why the example fits the category
- avoid turning into a ranked vendor list unless a specific comparison task requires it
- be treated as secondary to workflow fit, verification needs, and governance fit

## How the categories map to lifecycle work

- discovery and backlog shaping lean more on conversational reasoning, artifact drafting, retrieval, and planning tools
- implementation and debugging lean more on IDE copilots, repository-aware assistants, and bounded agentic tools
- testing and review lean more on evaluation helpers, retrieval tools, and review-prep assistants
- release and follow-up lean more on DevOps, observability, synthesis, retrieval, and governance tools
- AI-enabled product delivery adds MLOps or model-lifecycle tooling where prompts, models, or evaluation assets must be versioned and governed

## How oversight readiness changes tool fit

- lower-oversight-readiness users should spend more time with reasoning, explanation, retrieval, and bounded drafting support
- higher-oversight-readiness users can safely extract more leverage from repository-aware and agentic tools on bounded work
- low-observability work should move toward stricter review regardless of the tool category

## Typical meta toolset for a real team

A modern software delivery team will often need a compact stack rather than a single platform:

- one conversational or reasoning partner
- one engineering-integrated assistant for code and tests
- one retrieval layer for internal knowledge
- one documentation and synthesis aid
- one evaluation or guardrail layer for review and evidence
- one DevOps or observability-support layer when delivery teams own deployment and production operations
- one MLOps or model-lifecycle layer when the team is shipping AI-enabled product behavior
- optional local or private model capability where sensitive work requires it

The right question is not "which AI tool wins?"

The right question is "which small set of tool jobs improves this workflow without creating unsafe hidden work elsewhere?"

## Current companion guidance

- [AI Tool Selection Framework](AI%20Tool%20Selection%20Framework.md) gives the actual decision criteria and selection path
- [AI Enablement Across the Software Delivery Lifecycle](AI%20Enablement%20Across%20the%20Software%20Delivery%20Lifecycle.md) maps these tool jobs to lifecycle work
- [Capability Model - Oversight Readiness x Task Familiarity x Risk](Capability%20Model%20-%20Oversight%20Readiness%20x%20Task%20Familiarity%20x%20Risk.md) helps explain why tool fit changes with user capability and task profile

## Optional future extension

- add a dated market-example appendix later if the project needs concrete examples for a specific publication or workshop context
