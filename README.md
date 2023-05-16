## Starting the project

```
npm install - install dependencies
npm run start:dev или npm run start:dev:vite - start the server + frontend project in dev mode
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

ESLint is used for styleguide validation of TypeScript project files and StyleLint for checking of css files.

Besides, for the purposes of stricter control on abidance by architectural principles,
custom eslint plugin is used *eslint-plugin-fsd-arch-validator*, which has 3 following rules:
1) path-checker - запрещает использовать абсолютные импорты в рамках одного модуля
2) layer-imports - проверяет корректность использования слоев с точки зрения FSD
   (например widgets нельзя использовать в features и entitites)
3) public-api-imports - разрешает импорт из других модулей только из public api. Имеет auto fix

##### Running linters
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером

----
## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:
- `npm run storybook`

Подробнее о [Storybook](/docs/storybook.md)

Пример:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
```


----

## Конфигурация проекта

Для разработки проект содержит 2 конфига:
1. Webpack - ./config/build
2. vite - vite.config.ts

Оба сборщика адаптированы под основные фичи приложения.

Вся конфигурация хранится в /config
- /config/babel - babel
- /config/build - конфигурация webpack
- /config/jest - конфигурация тестовой среды
- /config/storybook - конфигурация сторибука

В папке `scripts` находятся различные скрипты для рефакторинга\упрощения написания кода\генерации отчетов и тд.

----

## CI pipeline и pre commit хуки

Конфигурация github actions находится в /.github/workflows.
В ci прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

В прекоммит хуках проверяем проект линтерами, конфиг в /.husky

----

### Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.
По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

----


## Сущности (entities)

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Фичи (features)

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
