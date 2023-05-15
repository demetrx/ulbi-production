module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks', 'fsd-arch-validator'],
  rules: {
    'react/jsx-filename-extension': ['error', {
      extensions: ['.jsx', '.tsx'],
    }],
    'react/no-array-index-key': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {
      argsIgnorePattern: '^_',
    }],
    'no-shadow': 'off',
    'import/extensions': 'off',
    'max-len': ['error', {
      ignoreComments: true,
      code: 100,
    }],
    'import/no-extraneous-dependencies': 'warn',
    'no-underscore-dangle': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/self-closing-comp': 'off',
    'fsd-arch-validator/relative-imports-within-module': ['error', {
      alias: '@',
      devFiles: ['**/*.test.*', '**/*.stories.*', '**/StoreDecorator.tsx'],
    }],
    'fsd-arch-validator/import-from-public-api': ['error', { alias: '@' }],
    'fsd-arch-validator/layer-imports': ['error', {
      alias: '@',
      ignoreImportPatterns: ['**/app/providers/**'],
    }],
    'i18next/no-literal-string': [2, {
      markupOnly: true,
      ignoreAttribute: [
        'data-testid',
        'to',
        'target',
        'justify',
        'align',
        'direction',
        'role',
        'as',
        'defaultValue',
        'border',
      ],
    },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    __IS_DEV__: true,
    __API_URL__: true,
    __PROJECT__: true,
    DeepPartial: true,
    OptionalRecord: true,
  },
  overrides: [
    {
      files: ['src/**/*Slice.ts'],
      rules: {
        'no-param-reassign': ['error', { props: false }],
      },
    },
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off',
      },
    },
    {
      files: ['src/shared/**/*.{ts,tsx}', 'src/**/*.stories.{ts,tsx}', 'src/**/*.async.tsx'],
      rules: {
        'react/jsx-props-no-spreading': 'off',
      },
    },
    {
      files: ['src/shared/config/**/*'],
      rules: {
        'fsd-arch-validator/layer-imports': 'off',
        'fsd-arch-validator/import-from-public-api': 'off',
      },
    },
    {
      files: [
        'src/**/*.test.{ts,tsx}',
        'src/**/*.stories.{ts,tsx}',
        'config/**/*.{ts,tsx,js}',
        'scripts/**/*.{ts,tsx,js}',
        'src/shared/lib/tests/**/*.{ts,tsx}',
        'src/shared/config/**/*.{ts,tsx}',
        './webpack.config.ts',
        './vite.config.ts',
      ],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    }],
};
