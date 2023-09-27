const map = require('lodash/map.js')

const releaseBranchTypes = require('./scripts/release-branch-types/index.cjs')

const { getConfig } = require('./packages/semantic/dist/index.cjs')

const branchTypes = map(
  releaseBranchTypes,
  (releaseBranchType, releaseBranchTypeIndex) =>
    map(
      releaseBranchType,
      (branchType) =>
        !!branchType && { name: `${releaseBranchTypeIndex}/${branchType}`, prerelease: branchType },
    )[0],
).filter((branchType) => !!branchType)

const branches = [{ name: 'main' }, { name: 'canary', prerelease: 'canary' }, ...branchTypes]

const config = {
  branches,
  contributorsProhibitList: {
    email: ['marcelotk_15@hotmail.com'],
    loginL: ['marcelotk15'],
  },
}

module.exports.config = config
module.exports.getConfig = getConfig
