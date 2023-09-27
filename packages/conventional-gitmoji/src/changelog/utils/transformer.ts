import GraphemeSplitter from 'grapheme-splitter'
import pullAt from 'lodash/pullAt'

import { typeSpecs } from '../..'

const splitter = new GraphemeSplitter()

export const transformer = (commit: any, _: any) => {
  const { type } = commit

  let mainType = type

  let typeSpecIndex = typeSpecs.findIndex(({ code, emoji, type, value }) => {
    if (!mainType) return

    return (
      // @hack(semantic) strip colon from :type: for stricter comparison
      mainType.replace(/:/g, '') === code?.replace(/:/g, '') ||
      mainType === type ||
      mainType === value ||
      mainType === emoji
    )
  })

  /**
   * @hack
   * - if type is not present, attempt fallback
   * - if type is not present or fallback
   *    => typeSpecIndex => exit
   */
  if (typeSpecIndex === -1) {
    mainType = splitter.splitGraphemes(type)[0]

    typeSpecIndex = typeSpecs.findIndex(({ emoji }) => {
      if (mainType === null) return

      return mainType[0] === emoji?.[0] || mainType[0] === splitter.splitGraphemes(emoji ?? '')[0]
    })
  }

  if (typeSpecIndex === -1) return

  const typeSpec = typeSpecs[typeSpecIndex]

  commit.type = `${typeSpec.emoji}  ${typeSpec.description}`
  commit.typeSpecIndex = typeSpecIndex
  commit.typeSpec = typeSpec

  if (typeof commit.hash === 'string') {
    commit.hash = commit.hash.substring(0, 7)
  }

  const subjectTemp = splitter.splitGraphemes(commit.subject)

  const isEmojiMatch = subjectTemp[0] === typeSpec.emoji

  const subject = isEmojiMatch
    ? commit.subject.replace(pullAt(subjectTemp, [0]), '').replace(pullAt(subjectTemp, [0]), '')
    : commit.subject

  commit.subject = subject.trim()

  return commit
}
