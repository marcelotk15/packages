const isCi = require('is-ci')
const path = require('path')

const rootDir = path.join(__dirname, '../../')

!isCi && require('dotenv').config({ path: path.join(rootDir, '.env') })

const { config: configDefault } = require(path.join(rootDir, 'release.config.cjs'))

const {} = require('@teka/semantic')
