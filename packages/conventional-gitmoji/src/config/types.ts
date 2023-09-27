type Commit =
  | 'access'
  | 'analytics'
  | 'animation'
  | 'arch'
  | 'assets'
  | 'beer'
  | 'breaking'
  | 'build'
  | 'catch'
  | 'chore'
  | 'ci'
  | 'clean'
  | 'compat'
  | 'concurrency'
  | 'config'
  | 'contrib-add'
  | 'data'
  | 'db'
  | 'dep-add'
  | 'dep-rm'
  | 'dep-up'
  | 'deploy'
  | 'docs'
  | 'docs-code'
  | 'downgrade'
  | 'dx'
  | 'egg'
  | 'experiment'
  | 'feat'
  | 'fix'
  | 'fix-ci'
  | 'flags'
  | 'healthcheck'
  | 'hotfix'
  | 'i18n'
  | 'ignore'
  | 'inf'
  | 'init'
  | 'iphone'
  | 'license'
  | 'lint'
  | 'log-add'
  | 'log-rm'
  | 'logic'
  | 'merge'
  | 'mock'
  | 'mv'
  | 'patch'
  | 'perf'
  | 'poo'
  | 'prune'
  | 'pushpin'
  | 'refactor'
  | 'release'
  | 'revert'
  | 'rip'
  | 'roles'
  | 'rollforward'
  | 'run-build'
  | 'secrets'
  | 'security'
  | 'seed'
  | 'seo'
  | 'snapshot'
  | 'sponsor'
  | 'style'
  | 'test'
  | 'test-fail'
  | 'texts'
  | 'types'
  | 'typo'
  | 'ui'
  | 'upgrade'
  | 'ux'
  | 'validation'
  | 'wip'

interface ReleaseRule {
  branch: string | null
  code: string
  commit: Commit
  description: string
  emoji: string
  entity: string
  name: string
  semver?: 'breaking' | 'feature' | 'fix' | 'major' | 'minor' | 'patch'
  type?: Commit
  value?: Commit
}

export const types = {
  chore: {
    branch: 'chore',
    code: ':computer_disk:',
    commit: 'chore',
    description: 'Changes that don’t modify src or test files',
    emoji: '💽️',
    entity: '&#x1f4bd;',
    name: 'computer-disk',
  },
  rollforward: {
    branch: null,
    code: ':fast_forward:',
    commit: 'rollforward',
    description: 'Create rollforward version.',
    emoji: '⏩️',
    entity: '&#23E9;',
    name: 'rollforward',
  },
  'run-build': {
    branch: null,
    code: ':rocket:',
    commit: 'run-build',
    description: 'Custom type for CI/CD to hook into run build override.',
    emoji: '🚀️',
    entity: '&#1F680;',
    name: 'run-build',
    semver: 'patch',
  },
} satisfies Partial<Record<Commit, ReleaseRule>>
