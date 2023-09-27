import { PluginSpec } from 'semantic-release'

import { GithubPluginOptions } from '../types'

export const github = (options?: GithubPluginOptions): PluginSpec => {
  const optionsEmpty = !!options && !Object.values(options).filter((value) => !!value).length

  if (!options || optionsEmpty)
    return [
      '@semantic-release/github',
      {
        // @note(github) ensure someone has to override to put these on, haha
        addReleases: false,
        labels: false,
        releasedLabels: false,
        successComment: false,
      },
    ]

  const { githubAssets, ...config } = options

  return [
    '@semantic-release/github',
    {
      assets: githubAssets,
      // @note(github) ensure someone has to override to put these on, haha
      addReleases: false,
      labels: false,
      releasedLabels: false,
      successComment: false,
      ...config,
    },
  ]
}
