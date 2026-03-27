# Changelog

This file tracks public-package level changes over time.

## [2.0.2] - 2026-03-27

### Changed

- Made card titles clickable across the generated HTML site anywhere the shared site-card pattern is used
- Kept the existing `Open` action row while improving discoverability and reducing click friction on section and content cards

### Notes

- This is a small navigation polish release on top of `2.0.1`.

## [2.0.1] - 2026-03-27

### Added

- Lightweight client-side search across the generated Pages site
- Autocomplete-style result suggestions on the home page, section indexes, and rendered content pages

### Changed

- Extended the generated HTML layer so the search UI appears consistently across the local review site and public Pages site

### Notes

- This is a patch release focused on findability and navigation. The underlying package content and bundle structure remain the same as `2.0.0`.

## [2.0.0] - 2026-03-27

### Changed

- Repositioned the public package around the locked `v2` language architecture for `Paired Engineering`
- Adopted `A practical delivery model for AI-enabled software teams.` as the current public category phrase baseline
- Harmonized public-facing, executive, leadership, manager, and Staff artifact titles around the updated naming system
- Refreshed the public README, landing-page copy, release notes, and generated HTML mirror so the public package reads consistently end to end
- Renamed several public-facing markdown and slide artifacts, making this a breaking package-surface change rather than only a content refresh

### Notes

- This release is versioned as `2.0.0` because the public terminology, title system, and package-facing artifact names changed substantially enough to behave like a new public interface layer.
- The package still passes the full `full-v1` publication audit, but now presents that material through the stronger `v2` language layer.

## [1.0.0] - 2026-03-25

### Added

- First stable `full-v1` public release package for `Paired Engineering`
- Bundle-based public repo structure: `guides`, `framework`, `leadership`, `workshops`, `exercises`, `evidence`, and `slides`
- Workshop pack, exercise library, worksheet packs, and individual practice scenarios in the public export
- Pilot evidence kit plus Microsoft 365 and Jira reference deployment material in the public export
- Generated PPTX decks with exported speaker notes and a reusable theme baseline

### Notes

- This is the first release intended to be treated as a stable public package rather than only an internal packaging baseline.
- The package now passes both the `public-core` and `full-v1` publication audits.
