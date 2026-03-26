# Junior Exercise 5 - Incident Triage Warm-Up

## Rating

- size: `5`
- complexity: `3`

## Purpose

Practice using AI as a thinking partner during early incident triage without letting it create false certainty.

## Scenario

After a deployment, confirmation emails are delayed.

Available signals:

- queue depth rose from `200` to `4,000`
- email worker retries increased sharply
- order creation latency stayed normal
- release note mentions retry-policy cleanup

Worker pseudocode:

```text
sendEmail(message)
if failure:
  retry in 30 seconds
  mark attempt count + 1
if attempt count > 3:
  move to dead-letter queue
```

## Task

Use AI to help generate:

- possible causes
- missing evidence you would want next
- a safe next-step plan

Then decide what you would and would not conclude yet.

## Expected output

- ranked hypothesis list
- next `3` verification steps
- one sentence on current confidence
- one escalation trigger

## Good AI uses

- organizing partial evidence
- generating sensible next questions
- surfacing what is still unknown

## Verification focus

- distinguish symptoms from causes
- do not assume the release note is the root cause
- identify what evidence would confirm or falsify each hypothesis

## Anti-patterns to watch

- presenting a root cause too early
- copying an AI incident summary as if it were evidence
- confusing correlation with confirmation

## Debrief prompts

- what did AI help you organize well
- where did AI make the situation look more certain than it was
- what did you deliberately refuse to conclude
