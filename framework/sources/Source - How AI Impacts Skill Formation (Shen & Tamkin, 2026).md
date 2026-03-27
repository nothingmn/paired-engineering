# Source Summary

## Citation

Shen, Judy Hanwen, and Alex Tamkin. *How AI Impacts Skill Formation*. arXiv:2601.20245, February 3, 2026.

Companion materials:

- Anthropic article: https://www.anthropic.com/research/AI-assistance-coding-skills
- Public repository: https://github.com/safety-research/how-ai-impacts-skill-formation

## What it says

- This is a randomized between-subjects experiment on software developers learning an unfamiliar Python library, Trio, with or without AI assistance.
- The main study reports `n=52`, with `26` participants in the AI condition and `26` in the control condition.
- The AI condition used a chat-based coding assistant backed by `GPT-4o` that could see the participant's code and generate the full solution when prompted.
- The paper reports a lower immediate post-task mastery score for the AI group: `50%` average quiz score versus `67%` for the control group, a `17%` absolute gap with `Cohen's d = 0.738` and `p = 0.010`.
- The paper reports a small average speed improvement for the AI group, but says the completion-time difference was not statistically significant.
- The largest reported score gap was in debugging, with additional gaps in code reading and conceptual understanding.
- The authors argue that heavy delegation and AI-led debugging were associated with weaker learning outcomes, while explanation-seeking and conceptual inquiry were associated with better outcomes among AI users.

## What we could verify directly

- The appendix states that quiz grading was defined before the experiment in a pre-registration, but the public pre-registration link was not found during this review.
- The appendix states that annotated participant transcripts are publicly available, and that claim is true through the GitHub repository.
- The public repository includes:
  - the Trio task instructions
  - starter and completed task code
  - a post-task notebook with quiz material fragments
  - `52` annotated participant transcript JSON files
- The public transcript files include participant condition, task duration, annotated events, active coding time, task completion, and AI query text when applicable.
- From the public transcript JSON files, the mean main-task time is about `23.16` minutes for the AI condition and `24.93` minutes for the No-AI condition, which is directionally consistent with the paper's claim of a small speed advantage for AI.
- From the public transcript JSON files, AI participants averaged about `5.48` AI queries, with a maximum of `15`.
- From the public transcript JSON files, No-AI participants encountered more observed errors on average than AI participants, which is directionally consistent with the authors' interpretation that independent error resolution may have contributed to learning.

## Public data availability

The closest thing to public raw data is the annotated transcript set in the GitHub repository. It is useful, but it is not the full raw experimental dataset.

Publicly available:

- Annotated transcripts for each participant in JSON form
- Task materials and code artifacts
- Partial survey or quiz material in the notebook

Not found publicly during this review:

- Raw quiz responses
- A participant-level quiz score table
- Raw keystroke logs
- Screen recordings
- The public pre-registration record

The paper says quiz responses were stored in Google Drive and coding keystrokes were stored in the coding platform, but those raw stores do not appear to be public.

## Limitations and concerns

- The study measures immediate post-task understanding, not long-term retention or workplace mastery.
- The task uses one unfamiliar library, one chat-style assistant setup, and one short learning window, so external validity is limited.
- The paper's stronger causal claim is the group-level quiz difference; the AI interaction pattern analysis is much weaker because the pattern groups are very small.
- The public repository does not expose enough structured outcome data to reproduce the headline quiz effect independently.
- There is a documentation mismatch worth noting:
  - the main study section reports `26` AI and `26` control participants
  - the appendix says `51/52` participants uploaded recordings and that recordings for `25` AI and `25` No-AI participants were reviewed
  - the public transcript repository currently contains `52` JSON files split as `25` AI and `27` No-AI, with participant `26` missing
- Because of that mismatch, the public release should be treated as useful but not fully clean replication material.

## Relevance to AI enablement

This source is highly relevant to the project because it directly supports several working assumptions in [Project Charter](../Project%20Charter.md).

- It supports a comprehension-first rollout stance: using AI to understand code, concepts, and errors is safer than defaulting to code delegation.
- It supports capability-aware adoption: less experienced engineers may need explanation-first patterns and deliberate guardrails rather than unrestricted acceleration workflows.
- It supports the emphasis on paired engineering with AI rather than blind delegation.
- It supports measuring debugging and code-reading ability, not just speed, when evaluating adoption success.
- It supports the idea that enablement leaders should teach workflows, verification habits, and learning-preserving usage patterns rather than only granting tool access.

## What not to overclaim

- This source does not prove that all AI coding assistance harms learning.
- This source does not justify banning AI for software engineering.
- This source does not establish long-term skill erosion.
- This source does not cleanly generalize to senior engineers, agentic coding systems, autocomplete-heavy tools, or familiar tasks.

## Practical extraction for this project

- Prefer AI workflows that force or invite explanation, reflection, and independent reasoning.
- Treat debugging skill as a critical safeguard metric in AI rollout.
- Avoid presenting adoption success purely as speed gain.
- Use AI-free comprehension checks or review exercises when the goal is learning a new tool, framework, or internal platform.
- Teach engineers to ask `why`, `how`, and `what would happen if` questions instead of only requesting implementations.

## Follow-up questions

- Can the authors release participant-level quiz scores or at least an anonymized aggregate score table?
- Is the pre-registration public, and does it include the grading rubric?
- Why does the public transcript release not line up cleanly with the participant counts reported in the paper and appendix?
- How much of the observed effect persists after days or weeks rather than minutes?
