const baseConfig = require('./base.cjs')

/** @type {import("eslint").Linter.Config} */
const config = {
  overrides: [
    {
      files: ['**/*.ts?(x)'],

      parser: '@typescript-eslint/parser',

      plugins: ['@typescript-eslint'],

      parserOptions: {
        allowAutomaticSingleRunInference: true,
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2022,
        sourceType: 'module',
        project: ['./tsconfig.json'],
        warnOnUnsupportedTypeScriptVersion: true,
      },

      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],

      rules: {
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/no-unsafe-call': 0,
        '@typescript-eslint/no-unsafe-return': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
        '@typescript-eslint/no-unsafe-argument': 0, // @todo(lint) move to error
      },
    },
  ],
}

module.exports = {
  ...baseConfig,
  ...config,
}
