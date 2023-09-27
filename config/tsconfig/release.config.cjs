const isCi = require('is-ci')
const path = require('path')

const rootDir = path.join(__dirname, '../../')

!isCi && require('dotenv').config({ path: path.join(rootDir, '.env') })

const { config: configDefault } = require(path.join(rootDir, 'release.config.cjs'))

const { name } = require('./package.json')

const branches = [
  ...configDefault.branches,
  { name: 'feat/config-canary', prerelease: 'canary' },
]

const configPassed = {
  ...configDefault,
  branches,
  tagFormat: `${name}@\${version}`,
}

const config = getConfig(configPassed)

module.exports = config
