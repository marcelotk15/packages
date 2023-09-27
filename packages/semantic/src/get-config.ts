import { type Options as SemanticReleaseOptions } from 'semantic-release'

import { getPluginOptions, type PluginOptions } from './plugins'

export const getConfig = (configPassed: PluginOptions = {}): SemanticReleaseOptions => {
  const plugins = getPluginOptions(configPassed)

  const configInit = {
    branches: [{ name: 'main' }, { name: 'canary', prerelease: 'canary' }],
    extends: ['semantic-release-commit-filter'],
    plugins,
    tagFormat: `v\${version}`,
  }

  return {
    ...configInit,
    ...configPassed,
  }
}
