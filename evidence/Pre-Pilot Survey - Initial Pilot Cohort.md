# Pre-Pilot Survey - Initial Pilot Cohort

## Purpose

This survey establishes a lightweight baseline before the pilot begins.

## Administration notes

- target completion time: `5-7 minutes`
- default reporting mode: confidential and aggregated
- not for performance management
- if pre/post comparison is needed, use a confidential matching code rather than a name

## Form build notes

- keep required fields to the minimum needed for comparison
- use controlled lists where possible for role and team
- export results with timestamps
- do not ask for names unless the organization has a very specific reason and explicit consent model

## Suggested confidential matching code

Participants can create a simple code known only to them.

Suggested pattern:

- two self-chosen letters
- two self-chosen numbers
- one self-chosen symbol or extra letter

The code should be memorable to the participant but should not be derived from sensitive personal identifiers.

Any organization using this should still review the method with privacy and HR standards first.

## Recommended form fields

| Field | Type | Required? | Notes |
| --- | --- | --- | --- |
| Role | single select | yes | controlled list |
| Team | single select or short text | yes | controlled list preferred |
| Matching code | short text | optional | only if pre/post comparison is desired |
| Familiarity with approved AI tools | scale `1-5` | yes | baseline familiarity |
| Confidence in verifying AI-assisted output | scale `1-5` | yes | key calibration input |
| Confidence in explaining AI-assisted output | scale `1-5` | yes | key learning input |
| Current frequency of AI use | scale `0-4` | yes | context only |
| Frequency of independent verification | scale `1-5` | yes | behavior baseline |
| Top concerns | multi-select, max `3` | yes | risk framing |
| Support from manager or peers | scale `1-5` | yes | transfer condition |
| Workflow most worth improving | long text | no | prioritization input |
| What would make the pilot unsafe or wasteful | long text | no | guardrail input |

## Questions

### 1. Role

- developer
- QA/SDET
- architect
- product owner
- manager or technical lead

### 2. Team

Free text or controlled list.

### 3. Matching code

Optional if pre/post comparison is desired.

### 4. Current familiarity with approved AI tools for work

Scale `1-5`

- `1`: none
- `5`: highly familiar

### 5. Current confidence in verifying AI-assisted output before using it

Scale `1-5`

- `1`: not confident
- `5`: very confident

### 6. Current confidence in explaining AI-assisted output in your own words

Scale `1-5`

- `1`: not confident
- `5`: very confident

### 7. How often do you currently use AI in your software-delivery work?

Scale `0-4`

- `0`: never
- `1`: rarely
- `2`: sometimes
- `3`: often
- `4`: very often

### 8. When you use AI, how often do you independently verify the output before relying on it?

Scale `1-5`

- `1`: almost never
- `5`: almost always

### 9. Which concerns matter most to you right now?

Pick up to `3`

- incorrect output
- hidden rework
- privacy or security
- loss of learning
- review burden
- unclear policy or guardrails
- unclear workflow fit
- overreliance
- none of the above

### 10. How supported do you feel by your manager or peers in learning better AI-assisted working habits?

Scale `1-5`

- `1`: not supported
- `5`: strongly supported

### 11. Which workflow would you most like this pilot to improve?

Free text.

### 12. What would make this pilot feel unsafe, wasteful, or unhelpful?

Free text.

## What this survey should produce

- a lightweight behavioral baseline
- top concern themes
- a sense of where support is weakest before kickoff
- enough information to compare directionally against the post-pilot survey
