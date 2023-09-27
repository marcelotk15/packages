import { transformer } from './transformer'

export const writerOpts = {
  transform: (commit: any, context: any) => transformer(commit, context),
  groupBy: 'type',
  commitGroupsSort: ['order', 'title'],
  commitsSort: ['scope', 'subject'],
  noteGroupsSort: ['title'],
  notesSort: ['title'],
}
