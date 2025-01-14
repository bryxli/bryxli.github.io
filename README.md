# [bryxli.github.io](https://bryxli.github.io)

Portfolio website for projects by bryxli.

## 🚀 Project Structure

```text
/
├── public/
│   ├── projects/
│   ├── summary/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   │   ├── react/
│   │   │   │   └── Icons.tsx
│   │   │   └── types.ts
│   │   ├── Landing/
│   │   │   ├── Background.astro
│   │   │   └── LandingPage.astro
│   │   ├── Navigation/
│   │   │   ├── Navbar.astro
│   │   │   └── Options.tsx
│   │   ├── Projects/
│   │   │   ├── ProjectInfo.tsx
│   │   │   └── ProjectList.tsx
│   │   └── Summary/
│   │       └── Content.vue
│   ├── data/
│   │   └── projects.json
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── store/
│       └── optionsStore.ts
└── package.json
```

### Component Breakdown

### `src/components/`

Modular components grouped by functionality:

- **`common/`**: Reusable components organized by framework.
  - **`react/`**: React-specific utilities.
  - **`types.ts`**: Shared type definitions.
- **`Landing/`**: Components for the landing page.
- **`Navigation/`**: Components for the navigation bar.
- **`Projects/`**: Components for displaying projects. These use data from [`projects.json`](src/data/projects.json).
- **`Summary/`**: Components for the "About Me" section.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command          | Action                                           |
| :--------------- | :----------------------------------------------- |
| `yarn`           | Installs dependencies                            |
| `yarn dev`       | Starts local dev server at `localhost:4321`      |
| `yarn test`      | Run unit tests with Vitest                       |
| `yarn build`     | Build your production site to `./dist/`          |
| `yarn preview`   | Preview your build locally, before deploying     |
| `yarn astro ...` | Run CLI commands like `astro add`, `astro check` |

## Status

[![GitHub Pages Status](https://github.com/bryxli/bryxli.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/bryxli/bryxli.github.io/actions/workflows/deploy.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=bryxli_bryxli.github.io&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=bryxli_bryxli.github.io)
