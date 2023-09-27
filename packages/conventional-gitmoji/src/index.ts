import { getGitmojiConventional, getReleaseRules, getTypeSpecs } from './utils'

export { parserOpts, writerOpts } from './changelog'
export * from './types'

export const types = getGitmojiConventional()

export const typeSpecs = getTypeSpecs(types)

export const releaseRules = getReleaseRules(types)
