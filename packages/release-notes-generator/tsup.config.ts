import { defineConfig } from 'tsup'

import { config as _config } from '../../tsup.config.js'

import type { Options } from 'tsup'

const entry = ['src/*']
const config: Options = {
  ..._config,
  entry,
}

export default defineConfig({
  ...config,
})
