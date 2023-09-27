import title from 'title'

import { Commit } from '../types'
import { ReleaseRule } from '../types/release'

export const getTypeSpecs = (types: ReleaseRule) => {
  return (Object.keys(types) as Array<Commit>).map((type) => ({
    code: types[type]?.code,
    description: title(types[type]?.description.replace('.', '') ?? ''),
    emoji: types[type]?.emoji,
    semver: types[type]?.semver,
    type: types[type]?.commit,
    value: types[type]?.commit,
  }))
}
