import { type PluginSpec } from 'semantic-release'

import { GithubPluginOptions, NPMPluginOptions } from '../types'
import { GitPluginOptions } from '../types/git'
import { commitAnalyzer } from './commit-analyzer'
import { git } from './git'
import { github } from './github'
import { npm } from './npm'

import { parserOpts, writerOpts } from '@teka15/conventional-gitmoji'

export interface PluginOptions extends GitPluginOptions, GithubPluginOptions, NPMPluginOptions {
  enableGit?: boolean
  enableGithub?: boolean
  enableNpm?: boolean
  enableReleaseNotes?: boolean
  enableReleaseNotesCustom?: boolean
  // releaseRules?: ReleaseRule[]
  releaseRules?: any
}

export const getPluginOptions = (optionsPassed?: PluginOptions): PluginSpec[] => {
  const optionsDefault = {
    enableGit: false,
    enableGithub: true,
    enableNpm: true,
    enableReleaseNotes: false,
    enableReleaseNotesCustom: true,
    pkgRoot: './dist',
  }

  const options: PluginOptions = {
    ...optionsDefault,
    ...optionsPassed,
  }

  const releaseNotesConfig: PluginSpec = [
    '@semantic-release/release-notes-generator',
    {
      config: '@teka/conventional-gitmoji',
      parserOpts,
      writerOpts,
    },
  ]

  const releaseNotesCustomConfig: PluginSpec = [
    '@teka15/release-notes-generator',
    {
      config: '@teka15/conventional-gitmoji',
    },
  ]

  const { npmPublish, pkgRoot, tarballDir } = options

  const npmConfig = npm({ npmPublish, pkgRoot, tarballDir })

  const {
    addReleases,
    assignees,
    failComment,
    failTitle,
    githubApiPathPrefix,
    githubAssets,
    githubUrl,
    labels,
    proxy,
    releasedLabels,
  } = options

  const githubConfig = github({
    addReleases,
    assignees,
    failComment,
    failTitle,
    githubApiPathPrefix,
    githubAssets,
    githubUrl,
    labels,
    proxy,
    releasedLabels,
  })

  const gitConfig = git(options)

  const plugins = [
    commitAnalyzer(options.releaseRules),
    options.enableReleaseNotes ? releaseNotesConfig : '',
    options.enableReleaseNotesCustom ? releaseNotesCustomConfig : '',
    options.enableNpm ? npmConfig : '',
    options.enableGithub ? githubConfig : '',
    options.enableGit ? gitConfig : '',
  ]

  return plugins.filter((plugin) => !!plugin)
}
