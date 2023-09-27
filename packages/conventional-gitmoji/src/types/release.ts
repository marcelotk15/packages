import { Commit } from './commit'

export interface ReleaseRuleProps {
  branch: string | null
  code: string
  commit: Commit
  description: string
  emoji: string
  entity: string
  name: string
  semver: 'breaking' | 'feature' | 'fix' | 'major' | 'minor' | 'patch' | null
  type?: Commit
  value?: Commit
}

export type ReleaseRule = Partial<Record<Commit, ReleaseRuleProps>>
