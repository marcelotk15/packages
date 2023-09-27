// import isCI from 'is-ci'
import { defineConfig, type Format } from 'tsup'

import { config as monoConfig } from '../../tsup.config.js'

const entry = ['src/*.ts']
const format: Format[] = ['esm']

export default defineConfig({
  ...monoConfig,
  dts: false,
  format,
  entry,
})
