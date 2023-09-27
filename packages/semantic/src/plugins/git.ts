import { PluginSpec } from 'semantic-release'

import { GitPluginOptions } from '../types/git'

export const git = (options: GitPluginOptions): PluginSpec => {
  return [
    '@semantic-release/git',
    {
      assets:
        typeof options.gitAssets === 'boolean'
          ? false
          : ['package.json'].concat(options.gitAssets ? options.gitAssets : []).filter((a) => a),
      message: options.message ?? '🔖️ `${nextRelease.gitTag}` [skip ci] \n\n${nextRelease.notes}',
    },
  ]
}
