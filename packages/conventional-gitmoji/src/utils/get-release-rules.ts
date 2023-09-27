import { ReleaseRule } from '../types/release'

export const getReleaseRules = (types: ReleaseRule) => {
  return (Object.keys(types) as Array<keyof ReleaseRule>).reduce(
    (acc, type) => {
      const releaseRule = types[type]

      if (!releaseRule || !releaseRule.semver) return acc

      return [
        ...acc,
        {
          release: releaseRule.semver,
          /**
           * @hack (semantic-release)
           * :arrow_up: => :arrow_up
           * accounting for that here "fixes"
           */
          type: releaseRule?.code.replace(/(:[^:]*):/g, '$1'),
        },

        {
          release: releaseRule.semver,
          type: releaseRule?.code,
        },

        {
          release: releaseRule.semver,
          type: releaseRule.commit,
        },

        {
          release: releaseRule.semver,
          type: releaseRule.emoji,
        },
      ]
    },
    [] as Array<Record<'release' | 'type', string>>,
  )
}
