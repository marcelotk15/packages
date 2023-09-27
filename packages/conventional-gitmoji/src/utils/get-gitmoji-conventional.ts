import { gitmojis } from 'gitmojis'

import { rewrites } from '../config/rewrites'
import { types } from '../config/types'
import { ReleaseRule } from '../types/release'

export const getGitmojiConventional = (): ReleaseRule => {
  gitmojis.map((gitmoji) => {
    const rewrite = rewrites.find((r) => r?.from === gitmoji.name)

    if (rewrite) {
      const semver = rewrite.semver
        ? gitmoji.semver || null
        : rewrite.semver || gitmoji?.semver || null

      types[rewrite.to] = {
        branch: rewrite?.branch ? rewrite.branch : null,
        code: gitmoji?.code,
        commit: rewrite.to,
        description: gitmoji?.description,
        emoji: gitmoji?.emoji,
        entity: gitmoji?.entity,
        name: gitmoji?.name,
        /**
         * @note
         * (semantic)
         * big lol, README does not meet requirements:
         * ref: https://github.com/semantic-release/semantic-release#commit-message-format
         *
         * ["major","premajor","minor","preminor","patch","prepatch","prerelease"]
         **/
        semver: semver
          ? semver.replace('fix', 'patch').replace('feature', 'minor').replace('breaking', 'major')
          : null,
      }
    } else {
      // console.dir(`@todo(conventional-gitmoji) create rewrite for: ${gitmoji.name}`)
    }
  })

  const items = Object.keys(types)
    .sort()
    .reduce((type, key) => {
      type[key] = types[key]

      return type
    }, {})

  return items
}
