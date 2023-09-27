/** @type {import("eslint").Linter.Config} */
const config = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  extends: ['eslint:recommended', 'eslint-config-turbo', 'prettier'],

  ignorePatterns: ['.next', '.turbo', 'node_modules', '**/*.js', '**/*.mjs', '**/*.jsx'],

  // parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
  },

  plugins: ['simple-import-sort', 'prettier'],

  // http://eslint.org/docs/rules/
  root: true,

  rules: {
    'prettier/prettier': 'error',

    'import/extensions': 'off',
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // Packages and side effect imports.
          ['^~?\\w', '^\\u0000'],
          // Components and providers.
          ['^`~/components', '^~/providers'],
          // Hooks
          ['^~/hooks'],
          // Utils, helpers, and lib
          ['^~/utils', '^~/helpers', '^~/lib'],
          // Other absolute imports.
          ['^~/'],
          // Relative imports.
          ['^\\.'],
          // Import type and types.
          ['^.*\\u0000$', '^@/types'],
          // Styles.
          ['^.+\\.s?css$'],
          // Anything not matched in another group.
          ['^'],
        ],
      },
    ],

    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
}

module.exports = config
