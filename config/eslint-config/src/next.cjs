const reactConfig = require('./react.cjs')

/** @type {import("eslint").Linter.Config} */
const config = {
  ...reactConfig,

  extends: [
    ...reactConfig.extends,
    'plugin:storybook/recommended',
    'plugin:@next/next/core-web-vitals',
    'plugin:@next/next/recommended',
  ],

  plugins: [...reactConfig.plugins, 'turbo'],

  rules: {
    ...reactConfig.rules,

    '@next/next/no-html-link-for-pages': 0,
    'turbo/no-undeclared-env-vars': [
      'error',
      {
        allowList: ['^ENV_[A-Z]+$'],
      },
    ],
  },
}

module.exports = config
