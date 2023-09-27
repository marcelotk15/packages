import { PluginSpec } from 'semantic-release'

import { NPMPluginOptions } from '../types'

export const npm = (options?: NPMPluginOptions): PluginSpec => {
  if (!options || (!options.npmPublish && !options.pkgRoot && !options.tarballDir))
    return '@semantic-release/npm'

  return [
    '@semantic-release/npm',
    {
      // npmPublish: true,
      // tarballDir: 'release',
      // @note this may be oddly expensive
      // @ref https://prateeksurana.me/blog/why-using-object-spread-with-reduce-bad-idea/
      ...options,
    },
  ]
}
