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
          // Packages `react` related packages come first.
          ['^react', '^@?\\w'],
          ['^(@|~)(/.*|$)'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.?(css)$'],
        ],
      },
    ],

    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
}

module.exports = config
