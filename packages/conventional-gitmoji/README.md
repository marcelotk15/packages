# @teka/conventional-gitmoji

1. 🌉️ A bridge between `gitmoji` and `conventional-commits` configured for `semantic-release`.
2. 🛠️ A `conventional-changelog` plugin for `semantic-release`.

## Usage

```sh
pnpm install @teka/conventional-gitmoji
```

```ts
import { releaseRules, typeSpecs, types } from '@teka/conventional-gitmoji`
```

- `releaseRules`: informs `@semantic-release/commit-analyzer`
- `typeSpecs`: informs `@teka/release-notes-generator` (via `writerOpts`)
  - `@hack`: This informs three different ways to ensure we catch the change from `gitmoji` to `conventional`
- `types`: informs `@teka/git-cz` for the `gitmoji` theme.

### Commit Analyzer

```sh
  [
    '@semantic-release/commit-analyzer',
    {
      config: '@teka/conventional-gitmoji',
      releaseRules,
    },
  ]
```

### Release Notes Generator

```sh
  [
    '@teka/release-notes-generator',
    {
      config: '@teka/conventional-gitmoji',
    },
  ]
```

## Overview

### 😄️ gitmoji

This maps `gitmoji` to an equivalent `conventional-commit`.

**⚗️ Example(s):**

- ✨️ => `feat`
- 🐛️ => `fix`
- 🚑️ => `hotfix`

### 📝️ conventional-commits

This expands on the original `conventional-commits` nomenclature to account for the multitude coming from `gitmoji`

**⚗️ Example(s):**

- ⚗️ (gitmoji)
  - `alembic` (emoji code)
  - `experiement` (conventional)
- 🤡️ (gitmoji)
  - `clown-face` (emoji code)
  - `mock` (conventional)
- 🚨️ (gitmoji)
  - `rotating-light` (emoji code)
  - `lint` (conventional)

### 🚀️ semantic-release

Adds `semver` to each type to inform `@teka/semantic` how to handle each commit type (and if it is a convential branch type).

**⚗️ Example(s):**

```json
{
  "experiment": {
    "branch": false,
    "code": ":alembic:",
    "commit": "experiment",
    "description": "Perform experiments.",
    "emoji": "⚗️",
    "entity": "&#128248;",
    "name": "alembic",
    "semver": "patch"
  },
  "feat": {
    "branch": "feature",
    "code": ":sparkles:",
    "commit": "feat",
    "description": "Introduce new features.",
    "emoji": "✨",
    "entity": "&#x2728;",
    "name": "sparkles",
    "semver": "minor"
  },
  "log-add": {
    "branch": false,
    "code": ":loud_sound:",
    "commit": "log-add",
    "description": "Add or update logs.",
    "emoji": "🔊",
    "entity": "&#128266;",
    "name": "loud-sound",
    "semver": null
  }
}
```

**📝️ Please Note:** The values `major|minor|patch` are moving to `breaking|feature|fix`
