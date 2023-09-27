const isCI = require('is-ci')

!isCI && require('dotenv').config({ path: '../../.env' })

const { config: configDefault } = require('../../release.config.cjs')

const { getConfig } = require('@teka/semantic')

const { name } = require('./package.json')

const configPassed = {
  ...configDefault,
  tagFormat: `${name}@\${version}`,
}

module.exports = getConfig(configPassed)
