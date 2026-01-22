# 2. Add Nx Release to CI

Date: 2026-01-21

## Status

Accepted

## Context

Currently there is no automated way to bump version numbers after a merge. 

## Decision

This change will add [Nx Release](https://nx.dev/docs/features/manage-releases#using-the-programmatic-api-for-nx-release) to our CI pipeline.

## Consequences

After this change version bumping will be automatically and consistently 
applied to workspace-scoped `package.json` files after a successful merge event.
