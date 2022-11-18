<div align="center" >
  <img src="planum-logo.png#gh-light-mode-only" alt="Planum" title="Planum" width="220px" />
  <img src="planum-logo-for-dark.png#gh-dark-mode-only" alt="Planum" title="Planum" width="220px" />

<h1 align="center">
  Planum - A React UI Kit for Uvodo Design System
</h1>
 
<img src="https://img.shields.io/npm/v/@uvodohq/planum?color=blue">
<img src="https://img.shields.io/npm/l/@uvodohq/planum">
<img src="https://img.shields.io/npm/dw/@uvodohq/planum">

Planum UI is a React component library with 20+ components based on TypeScript and Uvodo Design System.
<br>

<a href="https://planum-storybook.netlify.app"><strong>Explore Planum components</strong></a>
<br>
<a href="https://twitter.com/uvodohq">
<img src="https://img.shields.io/twitter/follow/uvodohq?label=uvodohq&style=social" alt="Twitter Follow">
</a>

  <hr />
</div>

# Powered by

- 🏎 [Turborepo](https://turbo.build/repo) — High-performance build system for Monorepos
- 🚀 [React](https://reactjs.org/) — JavaScript library for user interfaces
- 🛠 [Tsup](https://github.com/egoist/tsup) — TypeScript bundler powered by esbuild
- 📖 [Storybook](https://storybook.js.org/) — UI component environment powered by Vite

- Uvodo design system
- Accessibility friendly components

As well as a few others tools used:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Changesets](https://github.com/changesets/changesets) for managing versioning and changelogs
- [GitHub Actions](https://github.com/changesets/action) for fully automated package publishing

# Live ⚡️

- Demo Example App [![Netlify Status](https://api.netlify.com/api/v1/badges/c492e5e8-9f20-4b17-a494-a57a09ea1768/deploy-status)](https://app.netlify.com/sites/planum-demo/deploys)

  https://uvodo.design

- Planum Storybook [![Netlify Status](https://api.netlify.com/api/v1/badges/8a6b4d8d-d711-436c-94cd-6f16b47e6dc2/deploy-status)](https://app.netlify.com/sites/planum-storybook/deploys)

  https://planum-storybook.netlify.app

# Install

```bash
# npm
npm install @uvodohq/planum
```

```bash
# yarn
yarn add @uvodohq/planum
```

```js
import { Button } from '@uvodohq/planum'
```

### Useful Commands

- `yarn build` - Build all packages including the Storybook site
- `yarn dev` - Run all packages locally and preview with Storybook
- `yarn lint` - Lint all packages
- `yarn changeset` - Generate a changeset
- `yarn clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)

## Turborepo

[Turborepo](https://turbo.build/repo) is a high-performance build system for JavaScript and TypeScript codebases. It was designed after the workflows used by massive software engineering organizations to ship code at scale. Turborepo abstracts the complex configuration needed for monorepos and provides fast, incremental builds with zero-configuration remote caching.

Using Turborepo simplifes managing your design system monorepo, as you can have a single lint, build, test, and release process for all packages. [Learn more](https://vercel.com/blog/monorepos-are-changing-how-teams-build-software) about how monorepos improve your development workflow.

## Apps & Packages

- `apps/docs`: Component documentation site with Storybook
- `apps/showcase`: Example app using Planum UI components use Vite
- `apps/example`: Empty vite app for testing tree shaking
- `packages/@uvodohq/planum`: Core React components
- `packages/@uvodohq/planum-editor`: Text editor based on TipTap
- `packages/planum-tsconfig`: Shared `tsconfig.json`s used throughout in apps and packages
- `packages/eslint-config-planum`: Shared ESLint preset

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/). Yarn Workspaces enables us to "hoist" dependencies that are shared between packages to the root `package.json`. This means smaller `node_modules` folders and a better local dev experience. To install a dependency for the entire monorepo, use the `-W` workspaces flag with `yarn add`.

This example sets up your `.gitignore` to exclude all generated files, other folders like `node_modules` used to store your dependencies.

### Compilation

To make the core library code work across all browsers, we need to compile the raw TypeScript and React code to plain JavaScript. We can accomplish this with `tsup`, which uses `esbuild` to greatly improve performance.

Running `yarn build` from the root of the Turborepo will run the `build` command defined in each package's `package.json` file. Turborepo runs each `build` in parallel and caches & hashes the output to speed up future builds.

`tsup` compiles `src/index.tsx`, which exports all of the components in the design system, into both ES Modules and CommonJS formats as well as their TypeScript types. The `package.json` for `planum` then instructs the consumer to select the correct format:

```json
{
  "name": "@uvodohq/planum",
  "version": "0.0.0",
  "sideEffects": false,
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts"
}
```

Run `yarn build` to confirm compilation is working correctly. You should see a folder `planum/dist` which contains the compiled output.

```bash
planum
└── dist
    ├── index.d.ts  <-- Types
    ├── index.js    <-- CommonJS version
    └── index.mjs   <-- ES Modules version
```

## Components

Each file inside of `planum/src` is a component inside our design system. For example:

```tsx
# planum/src/button.tsx
import * as React from 'react'

export interface ButtonProps {
  children: React.ReactNode
}

export function Button(props: ButtonProps) {
  return <button>{props.children}</button>
}

Button.displayName = 'Button'
```

When adding a new file, ensure the component is also exported from the entry `index.tsx` file:

```tsx
// planum/src/index.tsx
import * as React from 'react'

export { type ButtonProps, Button } from './Button'
// Add new component exports here
```

## Storybook v6.5

Storybook provides us with an interactive UI playground for our components. This allows us to preview our components in the browser and instantly see changes when developing locally. This example preconfigures Storybook to:

- Use Vite to bundle stories instantly (in milliseconds)
- Automatically find any stories inside the `stories/` folder
- Support using module path aliases like `@uvodohq/planum` for imports
- Write MDX for component documentation pages

For example, here's the included Story for our `Button` component:

```js
import { Button } from '@uvodohq/planum/src';
import { Meta, Story, Preview, Props } from '@storybook/addon-docs/blocks';

<Meta title="Components/Button" component={Button} />

# Button

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, euismod aliquam nisl nunc euismod.

## Props

<Props of={Box} />

## Examples

<Preview>
  <Story name="Default">
    <Button>Hello</Button>
  </Story>
</Preview>
```

This example includes a few helpful Storybook scripts:

- `yarn dev`: Starts Storybook in dev mode with hot reloading at `localhost:6006`
- `yarn build`: Builds the Storybook UI and generates the static HTML files
- `yarn preview-storybook`: Starts a local server to view the generated Storybook UI

## Versioning & Publishing Packages

This example uses [Changesets](https://github.com/changesets/changesets) to manage versions, create changelogs, and publish to npm. It's preconfigured so you can start publishing packages immediately.

You'll need to create an `NPM_TOKEN` and `GITHUB_TOKEN` and add it to your GitHub repository settings to enable access to npm. It's also worth installing the [Changesets bot](https://github.com/apps/changeset-bot) on your repository.

### Generating the Changelog

To generate your changelog, run `yarn changeset` locally:

1. **Which packages would you like to include?** – This shows which packages and changed and which have remained the same. By default, no packages are included. Press `space` to select the packages you want to include in the `changeset`.
1. **Which packages should have a major bump?** – Press `space` to select the packages you want to bump versions for.
1. If doing the first major version, confirm you want to release.
1. Write a summary for the changes.
1. Confirm the changeset looks as expected.
1. A new Markdown file will be created in the `changeset` folder with the summary and a list of the packages included.

### Releasing

When you push your code to GitHub, the [GitHub Action](https://github.com/changesets/action) will run the `release` script defined in the root `package.json`:

```bash
turbo run build --filter=docs^... && changeset publish
```

Turborepo runs the `build` script for all publishable packages (excluding docs) and publishes the packages to npm. By default, this example includes `acme` as the npm organization. To change this, do the following:

- Rename folders in `packages/*` to replace `acme` with your desired scope
- Search and replace `acme` with your desired scope
- Re-run `yarn install`

To publish packages to a private npm organization scope, **remove** the following from each of the `package.json`'s

```diff
- "publishConfig": {
-  "access": "public"
- },
```
