# Post-Pilot Survey - Initial Pilot Cohort

## Purpose

This survey captures what changed during the pilot and where the rollout still needs refinement.

## Administration notes

- target completion time: `5-7 minutes`
- default reporting mode: confidential and aggregated
- not for performance management
- use the same confidential matching code as the pre-pilot survey if comparison is desired

## Form build notes

- keep the structure close to the pre-pilot survey for easier comparison
- use controlled lists for workflows if the pilot scope is narrow
- keep free-text fields short and decision-oriented

## Recommended form fields

| Field | Type | Required? | Notes |
| --- | --- | --- | --- |
| Role | single select | yes | align with pre-pilot survey |
| Team | single select or short text | yes | align with pre-pilot survey |
| Matching code | short text | optional | only if pre/post comparison is desired |
| Pilot workflows personally used | multi-select or short text | yes | pilot-scope dependent |
| Confidence in verifying AI-assisted output | scale `1-5` | yes | compare against baseline |
| Confidence in explaining AI-assisted output | scale `1-5` | yes | compare against baseline |
| Workflow effect overall | scale `-2` to `+2` | yes | directional workflow outcome |
| Time saved but cleanup created | scale `1-5` | yes | hidden-cost signal |
| Meaningful AI mistakes caught | scale `1-5` | yes | verification signal |
| More likely to use explanation and verification | scale `1-5` | yes | behavior shift |
| Manager or peer support helpful | scale `1-5` | yes | transfer support |
| Most valuable workflow and why | long text | no | success example |
| Most risk, confusion, or wasted effort | long text | no | failure-mode signal |
| What to change first next version | long text | no | rollout refinement input |

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

### 4. Which pilot workflows did you personally use?

Free text or controlled multi-select.

### 5. Confidence in verifying AI-assisted output before relying on it

Scale `1-5`

- `1`: not confident
- `5`: very confident

### 6. Confidence in explaining AI-assisted output in your own words

Scale `1-5`

- `1`: not confident
- `5`: very confident

### 7. Compared with before the pilot, how did AI affect your target workflows overall?

Scale `-2` to `+2`

- `-2`: much worse
- `-1`: somewhat worse
- `0`: no meaningful change
- `+1`: somewhat better
- `+2`: much better

### 8. During the pilot, how often did AI save time but create cleanup, confusion, or rework later?

Scale `1-5`

- `1`: almost never
- `5`: very often

### 9. During the pilot, how often did you catch a meaningful AI mistake before downstream use?

Scale `1-5`

- `1`: almost never
- `5`: very often

### 10. I am more likely now to use AI with explanation and verification rather than blind delegation.

Scale `1-5`

- `1`: strongly disagree
- `5`: strongly agree

### 11. Manager or peer support was helpful in applying the pilot workflows to real work.

Scale `1-5`

- `1`: strongly disagree
- `5`: strongly agree

### 12. Which workflow was most valuable and why?

Free text.

### 13. Where did the pilot create the most risk, confusion, or wasted effort?

Free text.

### 14. What should the next version of the rollout change first?

Free text.

## What this survey should produce

- directional change against the baseline
- perceived workflow value
- hidden-cost themes
- support and coaching signal
- a short list of what to refine before scaling
