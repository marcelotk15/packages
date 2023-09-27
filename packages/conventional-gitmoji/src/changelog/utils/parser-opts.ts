export const parserOpts = {
  headerPattern: /^(.*?)(?:\((.*)\))?:?\s(.*)$/,
  headerCorrespondence: ['type', 'scope', 'subject', 'ticket'],
  noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
  revertPattern: /^Revert\s"([\s\S]*)"\s*This reverts commit (\w*)\./,
  //
  // @todo(conventional-commits-parser) can this be removed w/ renovate?
  // @hack(conventional-commits-parser) 🤖️ dependabot workaround
  //      random uuid to ensure these will never get called
  issuePrefixes: ['1b9fe48b-292c-46e7-bfde-0599639d0ec0'],
  referenceActions: ['b6db85c1-4860-4275-88e3-bd9917a0b29f'],
}
