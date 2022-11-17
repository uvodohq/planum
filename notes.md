# Tech Stack

## Styling

Having Theming and Uvodo Design System requirments.

Stiches.js CSS-in-JS with near-zero runtime, SSR, multi-variant support, and a best-in-class developer experience.

## Accessible primitive components

Radix-UI Unstyled, accessible components for building high‑quality design systems and web apps in React.

React-Aria A library of React Hooks that provides accessible UI primitives for your design system.

watch: https://www.youtube.com/watch?v=dxDcBB7Xoxs

## Documentation for Components

Storybook is an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation.

## Bundle Tool

Vite is a fast new build tool that is intended for modern web projects. It uses native ES modules and provides a blazing-fast dev server and hot module replacement.

Vite will be used for SPA(Admin) and as component library bundler which uses Rollup under the hood.

### articles:

- https://jivancic.com/posts/build-a-component-library.html
- https://dev.to/lexswed/making-your-react-component-library-meaningful-in-2021-2gfj

## Testing

Vitest - a test runner

Playwright - for End to End testing

MSW - api mocking

Stroybook - for visiual testing -

## Code Quality and Code Style Guide

ESLint and Prettier are used to enforce code quality and style guide. and additonal rule plugins are used.

Resouces
https://nextui.org - uses Stiches.js

https://react-spectrum.adobe.com/architecture.html

https://hope-ui.com - Build with Vite

https://mantine.dev - good api

https://quatrochan.github.io/Equal/ - Build with Vite

## Semantic Release

https://semantic-release.gitbook.io/semantic-release
https://dev.to/baruchiro/how-to-setup-auto-semantic-release-4fd8
https://egghead.io/lessons/javascript-automating-releases-with-semantic-release

## Other Tools

np - https://github.com/sindresorhus/np

## Links

- https://storybook.js.org/blog/storybook-for-vite/

brandUrl: "https://uvodo.com",
barSelectedColor: "#8979e8",
brandTitle: "Uvodo Design",

```
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "**/*.{js,jsx,ts,tsx}": [
      "yarn format:check",
      "yarn lint"
    ]
  }

   "prepare": "husky install",
```

# TODO:

- Add .md doc file for each component for git
- Check SSR compitability of components
- Provide General <UvodoProvider /> for settings and i18n
- Setup Dark mode theme and provide Stichesjs theme and SSR feature

# How to start to create component

You can view your rendered component by running Demo Example App which uses Vite.

Example App is for showing how to use Planum UI Library components in real cases.

```sh
yarn dev
```

or document your component with Storybook

```sh
yarn storybook
```

Then import component in Example Demo or Storybook and see how it works.

```tsx
import { Component } from 'src'

// then render <Component /> with desired props.
```

&nbsp;

---

# How to develop UI component alongside with Admin App

You need to run `yarn start`

This command will `build and watch` Planum UI lib in `Dev` mode and will generate `./dist` folder.

in parallel, it will start to `build and watch` Types in `prod` mode.

Then, You must link `@uvodohq/planum` package in Admin App.

(in `./admin` folder run `npm link ../planum`)

Checkout [Admin App](https://gitlab.com/uvodo/admin-web-app/-/tree/dev) readme for How to integrate Planum UI Library with Admin App.

&nbsp;

### How to deploy Planum Stroybook and Demo to Netlify

1. You should run visual regression tests with chromatic to ensure that your UI is consistent with the design and not broken.  
   You need to add Chromatic Project id in `.env` file. and Has right Permission
   see `.env.example` and [chromatic](https://www.chromatic.com/docs/) doc

```sh
yarn chromatic:check
```

2. After Reviewing your UI, you can deploy your UI to Netlify.
   You need netlify access token.

```sh
yarn deploy:storybook
```

```sh
yarn deploy:example
```
