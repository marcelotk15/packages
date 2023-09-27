import { getConfig } from './get-config'
import { getPluginOptions } from './plugins'

import type { Options } from 'semantic-release'

export const plugins: Options = getPluginOptions()

export const config = getConfig()

export { getConfig, getPluginOptions }
