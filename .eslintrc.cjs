const baseConfig = require('@teka/eslint-config/src/react.cjs')

/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ['@teka/eslint-config/src/base.cjs'],
  root: true,
  overrides: [
    {
      ...baseConfig.overrides[0],
      parserOptions: {
        ...baseConfig.overrides[0].parserOptions,
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.eslint.json', './config/*/tsconfig.json', './packages/*/tsconfig.json'],
      },
    },
  ]
}

module.exports = config
