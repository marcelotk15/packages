// import isCI from 'is-ci'
import { defineConfig } from 'tsup'

import { config as _config } from '../../tsup.config.js'

import type { Options } from 'tsup'

const entry = ['src/index.ts']
const config: Options = {
  ..._config,
  clean: true,
  dts: false,
  entry,
  format: ['esm'],
  splitting: true,
  treeshake: true,
}

export default defineConfig({
  ...config,
})
