import { parserOpts } from '.'

export const conventionalRecommendedBump = {
  parserOpts,

  whatBump: (commits: any[]) => {
    let level = 2
    let breakings = 0
    let features = 0

    commits.forEach((commit) => {
      if (commit.note?.length) {
        breakings += commit.note.length
        level = 0
      }

      if (commit.type === `feat`) {
        features += 1
        if (level === 2) {
          level = 1
        }
      }
    })

    return {
      level,
      reason:
        breakings === 1
          ? `There is ${breakings} BREAKING CHANGE and ${features} features`
          : `There are ${breakings} BREAKING CHANGES and ${features} features`,
    }
  },
}
