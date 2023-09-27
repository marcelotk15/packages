import { PluginSpec } from 'semantic-release'

import { ReleaseRule, releaseRules as releaseRulesDefault } from '@teka15/conventional-gitmoji'

export const commitAnalyzer = (releaseRulesPassed: ReleaseRule[] = []): PluginSpec => {
  const releaseRules = [...releaseRulesDefault, ...releaseRulesPassed]

  return [
    '@semantic-release/commit-analyzer',
    {
      config: '@teka15/conventional-gitmoji',
      releaseRules,
    },
  ]
}
