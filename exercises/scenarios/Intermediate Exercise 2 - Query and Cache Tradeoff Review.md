# Intermediate Exercise 2 - Query and Cache Tradeoff Review

## Rating

- size: `3`
- complexity: `3`

## Purpose

Practice using AI for performance reasoning without letting it hide invalidation risk, observability gaps, or cost tradeoffs.

## Scenario

An account-summary page is slow during peak load.

Current facts:

- median response time is acceptable
- p95 is high
- most slow requests involve users with many transactions
- AI suggests caching the entire summary payload

Known constraints:

- balances must stay fresh enough for user trust
- transaction history updates frequently
- support teams already struggle with stale-data complaints

## Task

Use AI to compare:

- query optimization
- partial caching
- full payload caching

Then decide which option deserves further investigation and what evidence is still missing.

## Expected output

- option comparison
- risk and tradeoff list
- next data to collect before implementation

## Good AI uses

- structuring tradeoff analysis
- proposing performance questions
- surfacing invalidation concerns

## Verification focus

- do not accept performance advice without a measurement plan
- separate median improvement from tail-latency improvement
- treat cache freshness and invalidation as first-class concerns

## Anti-patterns to watch

- assuming cache equals improvement
- using AI benchmark-style language without local evidence
- treating stale data as a product problem instead of an engineering risk

## Debrief prompts

- what did AI help structure well
- where did AI simplify a messy tradeoff too aggressively
- what would you measure before and after any change
