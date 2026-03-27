# Release Notes - v2.0.2

## Summary

This patch release improves navigation across the generated HTML site by making card titles clickable anywhere the shared card pattern is used.

The existing `Open` row is still present, but the title itself now acts as a link too, which makes the browsing experience feel more natural and less fussy.

## Included in this release

- clickable card titles on the home page
- clickable card titles on section index pages
- clickable card titles on generated directory and bundle pages

## Release posture

- built from the private source repo `main` branch
- passes the `full-v1` publication audit with `0` missing export items
- passes exported markdown and HTML link checks with `0` broken relative links

## What changed from v2.0.1

- the shared HTML card renderer now links both the title and the `Open` row
- card-title hover styling now gives clearer visual feedback
