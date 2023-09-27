import { defineConfig, type Options } from 'tsup'

import { config as monoConfig } from '../../tsup.config'

const config: Options = {
  ...monoConfig,
  entry: ['src/**'],
}

export default defineConfig(config)
