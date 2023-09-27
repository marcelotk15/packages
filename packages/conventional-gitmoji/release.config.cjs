const isCI = require('is-ci')

!isCI && require('dotenv').config({ path: '../../.env' })

const { config: configDefault } = require('../../release.config.cjs')

const { getConfig } = require('@teka/semantic')

const { name } = require('./package.json')

const branches = [
  ...configDefault.branches,
  { name: 'feature/next-notion', prerelease: 'next-notion' },
  { name: 'feature/cmdk', prerelease: 'cmdk' },
]

const configPassed = {
  ...configDefault,
  branches,
  tagFormat: `${name}@\${version}`,
}

module.exports = getConfig(configPassed)
