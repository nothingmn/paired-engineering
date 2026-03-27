# Release Notes - v2.0.1

## Summary

This patch release adds lightweight client-side search to the generated HTML site for `Paired Engineering`.

The goal is simple: make it easier to find specific ideas, examples, and artifacts without leaving the site or relying on GitHub's repo search.

## Included in this release

- search input on the home page
- search input on section index pages
- search input on rendered content pages
- autocomplete-style suggestions as you type
- static generated search index built from published titles and page content

## Release posture

- built from the private source repo `main` branch
- passes the `full-v1` publication audit with `0` missing export items
- passes exported markdown and HTML link checks with `0` broken relative links

## What changed from v2.0.0

- the Pages layer now includes a client-side search UI
- published markdown artifacts are indexed for local HTML discovery
- binary assets such as slide decks and workbooks can also appear in search results when relevant

## Known limitations

- search is intentionally lightweight and client-side only
- ranking is simple and tuned for practical browsing, not full-text search sophistication
