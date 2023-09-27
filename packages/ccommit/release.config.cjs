const isCI = require('is-ci')
!isCI && require('dotenv').config({ path: '../../.env' })

const { config: configDefault } = require('../../release.config.cjs')
const { getConfig } = require('@teka15/semantic')

const { name } = require('./package.json')

const branches = [...configDefault.branches, { name: 'feat/enquirer', prerelease: 'enquirer' }]

const configPassed = {
  ...configDefault,
  branches,
  tagFormat: `${name}@\${version}`,
}

const config = getConfig(configPassed)

module.exports = config
