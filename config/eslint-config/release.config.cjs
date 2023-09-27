const isCI = require('is-ci')

!isCI && require('dotenv').config({ path: '../../.env' })

const { config: monoConfig } = require('../../release.config.cjs')

const { getConfig } = require('@teka15/semantic')

const { name } = require('./package.json')

const branches = [...monoConfig.branches, { name: 'refactor/NICE-54', prerelease: 'canary' }]

const configPassed = {
  ...monoConfig,
  branches,
  tagFormat: `${name}@\${version}`,
}

const config = getConfig(configPassed)

module.exports = config
