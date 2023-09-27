const baseConfig = require('./index.cjs')

/** @type {import("prettier").Config} */
const config = {
  ...baseConfig,
  plugins: [...config.plugins, require('prettier-plugin-tailwindcss')],
  tailwindFunctions: ['cx'],
}

module.exports = config
