## Starting the project

```
npm install - install dependencies
npm run start:dev - start the server + frontend project in dev mode
```

----

## Scripts

- `npm run start` - Starting the frontend proj with webpack dev-server
- `npm run start:vite` - Starting the frontend proj with vite
- `npm run start:dev` - Starting the frontend proj with dev server + backend (json-server)
- `npm run start:dev:vite` - Starting the frontend proj with vite + backend
- `npm run start:dev:server` - Starting the backend server
- `npm run build:prod` - Build in prod mode
- `npm run build:dev` - Build in dev mode (not minimized)
- `npm run lint:ts` - Checking ts files with eslint
- `npm run lint:ts:fix` - Fixing eslint errors in ts files
- `npm run lint:scss` - Checking scss files with style-lint
- `npm run lint:scss:fix` - Fixing style-lint errors in scss files
- `npm run test:unit` - Starting unit tests with jest
- `npm run test:ui` - Starting visual regression tests with loki
- `npm run test:ui:ok` - Approving of new snapshots
- `npm run test:ui:ci` - Starting visual regression tests in CI
- `npm run test:ui:report` - Generating full report for regression tests
- `npm run test:ui:json` - Generating json report for regression tests
- `npm run test:ui:html` - Generating HTML report for regression tests
- `npm run storybook` - Starting StoryBook
- `npm run storybook:build` - Building storybook
- `npm run prepare` - Pre-commit hooks
- `npm run generate:slice` - Generating a fsd slice

----

## Architecture

The project is written in conformity with Feature Slice Design methodology

[Documentation](https://feature-sliced.design/docs/get-started/tutorial)

----

## Working with translations

The project utilizes i18next library for working with translations.
Files with translations are in public/locales.

Installing a relevant plugin for your IDE is recommended for comfortable working process 

[i18next docs](https://react.i18next.com/)

----

## Testing

4 types of tests are used in the project:
1) Common unit tests with jest - `npm run test:unit`
2) Test for UI components with React Testing Library -`npm run test:unit`
3) Visual regression testing with loki `npm run test:ui`
4) e2e testing with Cypress `npm run test:e2e`

More on testing - [testing docs](/docs/tests.md).

----

## Linting

As for styleguide validation, ESLint is used for TypeScript files and StyleLint for checking of CSS files.

Besides, for the purpose of stricter control on abidance by architectural principles,
custom eslint plugin is used (*eslint-plugin-fsd-arch-validator*), which has 3 following rules:
1) relative-imports-within-module - prohibits usage of absolute imports within a single module
2) layer-imports - validates layers usage from the FSD perspective
   (e.g. widgets may not be used within features и entities)
3) import-from-public-api - ensures imports from other modules are only through public api

##### Running linters
- `npm run lint:ts` - Checking ts files with eslint
- `npm run lint:ts:fix` - Fixing ts files with eslint
- `npm run lint:scss` - Checking scss files with stylelint
- `npm run lint:scss:fix` - Fixing scss files with stylelint

----
## Storybook

Every project component has to have story cases described.
Server requests should be mocked with storybook-addon-mock.

File with story cases resides near its component .stories.tsx extension

StoryBook runs with:
- `npm run storybook`

More on [Storybook](/docs/storybook.md).

----

## Project configuration

Project has 2 configs:
1. Webpack - ./config/build
2. Vite - vite.config.ts

Both bundlers are adjusted to project main features.

All configuration resides in /config
- /config/babel - babel
- /config/build - webpack config
- /config/jest - test environment config
- /config/storybook - storybook config

`scripts` folder is meant for various scripts for refactoring/alleviation of code-writing/reports generation etc.

----

## CI pipeline & pre-commit hooks

GitHub actions config is in /.github/workflows.
CI runs all types of tests, linters, builds the project and storybook

Pre-commit hooks validates staged files with linters, config is in /.husky

----

## Working with data

Interaction with data is done with redux toolkit.
When possible, reused entities should be normalized with EntityAdapter

Server requests are sent with [RTK query](/src/shared/api/rtkApi.ts)

To connect reducers asynchronously (to not include them in main bundle)
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx) is used

----

## Working with feature-flags

Using feature-flags is done only with "toggleFeature" helper function.

It accepts config object with following properties:

 - name: string - name of the feature
 - on: function - function called after feature is turned on
 - off: function - function called after feature is turned off


For automatic feature removal, use "remove-feature.ts" script,
that takes following arguments:
1. Name of the feature-flag to remove
2. State to leave after removal (on/off)

----


## Entities

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Features

- [addCommentForm](/src/features/addCommentForm)
- [articleEditForm](/src/features/articleEditForm)
- [articleRating](/src/features/articleRating)
- [articleRecommendationsList](/src/features/articleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [notificationButton](/src/features/notificationButton)
- [profileRating](/src/features/profileRating)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [UI](/src/features/UI)
