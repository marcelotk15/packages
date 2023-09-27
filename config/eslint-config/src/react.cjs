const tsConfig = require('./typescript.cjs')

/** @type {import("eslint").Linter.Config} */
const config = {
  ...tsConfig,

  plugins: [...tsConfig.plugins, 'jsx-a11y', 'react-hooks'],

  rules: {
    ...tsConfig.rules,
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
}

module.exports = config
