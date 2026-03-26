# Rollout Matrix - Capability Rules by Phase

This note explains how the capability model should be applied across the lifecycle phases.

## Phase 1. Alignment and boundaries

- define `E1`, `E2`, and `E3` usage expectations
- define `R3` work that requires stronger review regardless of oversight-readiness band
- communicate that title alone does not determine safe AI usage

## Phase 2. Baseline and workflow discovery

- identify where `E1` engineers are currently overusing AI on unfamiliar work
- identify where `E3` engineers can safely pilot stronger acceleration
- classify pilot workflows by familiarity, risk, and verification difficulty

## Phase 3. Paired-engineering pilot

- `E1`: explanation-first, attempt-first, no default full-solution generation on new work
- `E2`: guided acceleration with explanation and modification requirements
- `E3`: stronger leverage on bounded work, but still accountable for review quality

## Phase 4. Capability-aware expansion

- formalize different workflow rules by capability band
- add stronger review rules for `R3` work
- treat low-verifiability work as elevated risk even when the surface task looks lightweight
- prevent seniors from normalizing unsafe habits that juniors will imitate without equivalent judgment

## Phase 5. Standards, self-service, and internal platform support

- encode capability-aware rules into templates, standards, and examples
- encode verification checks and escalation paths into the templates, not just prompt patterns
- make learning-mode and delivery-mode workflows clearly distinct
- use [Verification Standards by Artifact and Work Type](Verification%20Standards%20by%20Artifact%20and%20Work%20Type.md) so verification requirements vary by artifact rather than collapsing into a generic review rule

## Phase 6. Measure, adjust, and decide whether to scale

- check whether capability-aware rules were actually followed
- review whether lower-oversight-readiness engineers are growing toward independent judgment
- review whether higher-leverage usage is creating hidden review debt
- review where verification difficulty was underestimated during the pilot
