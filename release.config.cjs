const map = require('lodash/map.js')

const releaseBranchTypes = require('./scripts/release-branch-types/index.cjs')
const { getConfig } = require('./packages/semantic/dist/index.cjs')

const branchTypes = map(releaseBranchTypes, (releaseBranchType, releaseBranchTypeIndex) => {
  return map(releaseBranchType, (branchType) => {
    return (
      !!branchType && {
        name: `${releaseBranchTypeIndex}/${branchType}`,
        prerelease: branchType,
      }
    )
  })[0]
}).filter((branchType) => !!branchType)

const branches = [{ name: 'main' }, { name: 'canary', prerelease: 'canary' }, ...branchTypes]

/** @type {import('semantic-release').Options} */
const config = {
  branches,
  repositoryUrl: 'https://github.com/marcelotk15/packages.git',
  extends: ['semantic-release-monorepo'],
  contributorsProhibitList: {
    email: [],
    login: ['marcelotk15'],
  },
}

module.exports.config = config

module.exports.getConfig = getConfig
