// @todo(ccommit) cache + generation from: @teka/conventional-gitmoji
import { SEMVER } from '~ccommit/lib/index.js'

// @hack(ccommit) emojiLength is to help with formatting until can do it programmatically
const types = [
  {
    code: ':wheelchair:',
    description: 'Improve Accessibility',
    emoji: '♿️',
    emojiLength: 1,
    semver: SEMVER.PATCH,
    type: 'access',
  },
  {
    code: ':chart_with_upwards_trend:',
    description: 'Add or Update Analytics or Track Code',
    emoji: '📈',
    emojiLength: 1,
    semver: SEMVER.PATCH,
    type: 'analytics',
  },
  {
    code: ':dizzy:',
    description: 'Add or Update Animations and Transitions',
    emoji: '💫',
    emojiLength: 1,
    semver: SEMVER.PATCH,
    type: 'animation',
  },
  {
    code: ':building_construction:',
    description: 'Make Architectural Changes',
    emoji: '🏗️',
    emojiLength: 0,
    semver: SEMVER.NULL,
    type: 'arch',
  },
  {
    code: ':bento:',
    description: 'Add or Update Assets',
    emoji: '🍱',
    emojiLength: 1,
    semver: SEMVER.PATCH,
    type: 'assets',
  },
  {
    code: ':beers:',
    description: 'Write Code Drunkenly',
    emoji: '🍻',
    emojiLength: 1,
    semver: SEMVER.NULL,
    type: 'beer',
  },
  {
    code: ':boom:',
    description: 'Introduce Breaking Changes',
    emoji: '💥',
    emojiLength: 1,
    semver: SEMVER.MAJOR,
    type: 'breaking',
  },
  {
    code: ':hammer:',
    description: 'Add or Update Development Scripts',
    emoji: '🔨',
    emojiLength: 1,
    semver: SEMVER.NULL,
    type: 'build',
  },
  {
    code: ':goal_net:',
    description: 'Catch Errors',
    emoji: '🥅',
    emojiLength: 1,
    semver: SEMVER.PATCH,
    type: 'catch',
  },
  {
    code: ':computer_disk:',
    description: 'Changes That Don’t Modify Src or Test Files',
    emoji: '💽️',
    emojiLength: 1,
    semver: SEMVER.NULL,
    type: 'chore',
  },
  {
    code: ':construction_worker:',
    description: 'Add or Update CI Build System',
    emoji: '👷',
    emojiLength: 1,
    semver: SEMVER.NULL,
    type: 'ci',
  },
  {
    code: ':wastebasket:',
    description: 'Deprecate Code That Needs to Be Cleaned Up',
    emoji: '🗑️',
    emojiLength: 0,
    semver: SEMVER.PATCH,
    type: 'clean',
  },
  {
    code: ':alien:',
    description: 'Update Code Due to External API Changes',
    emoji: '👽️',
    emojiLength: 1,
    semver: SEMVER.PATCH,
    type: 'compat',
  },
  {
    code: ':thread:',
    description: 'Add or Update Code Related to Multithreading or Concurrency',
    emoji: '🧵',
    emojiLength: 1,
    semver: SEMVER.NULL,
    type: 'concurrency',
  },
  {
    code: ':wrench:',
    description: 'Add or Update Configuration Files',
    emoji: '🔧',
    emojiLength: 1,
    semver: SEMVER.PATCH,
    type: 'config',
  },
  {
    code: ':busts_in_silhouette:',
    description: 'Add or Update Contributor(s)',
    emoji: '👥',
    emojiLength: 1,
    semver: SEMVER.NULL,
    type: 'contrib-add',
  },
  {
    code: ':monocle_face:',
    description: 'Data Exploration/inspection',
    emoji: '🧐',
    emojiLength: 1,
    semver: SEMVER.NULL,
    type: 'data',
  },
  {
    code: ':card_file_box:',
    description: 'Perform Database Related Changes',
    emoji: '🗃️',
    emojiLength: 0,
    semver: SEMVER.PATCH,
    type: 'db',
  },
  {
    code: ':heavy_plus_sign:',
    description: 'Add a Dependency',
    emoji: '➕',
    emojiLength: 1,
    semver: SEMVER.PATCH,
    type: 'dep-add',
  },
  {
    code: ':heavy_minus_sign:',
    description: 'Remove a Dependency',
    emoji: '➖',
    emojiLength: 1,
    semver: SEMVER.PATCH,
    type: 'dep-rm',
  },
  {
    code: ':package:',
    description: 'Add or Update Compiled Files or Packages',
    emoji: '📦️',
    emojiLength: 1,
    semver: SEMVER.PATCH,
    type: 'dep-up',
  },
  {
    code: ':rocket:',
    description: 'Deploy Stuff',
    emoji: '🚀',
    emojiLength: 1,
    semver: SEMVER.NULL,
    type: 'deploy',
  },
  {
    code: ':bulb:',
    description: 'Add or Update Comments in Source Code',
    emoji: '💡',
    emojiLength: 1,
    semver: SEMVER.NULL,
    type: 'docs-code',
  },
  {
    code: ':memo:',
    description: 'Add or Update Documentation',
    emoji: '📝',
    emojiLength: 1,
    semver: SEMVER.NULL,
    type: 'docs',
  },
  {
    code: ':arrow_down:',
    description: 'Downgrade Dependencies',
    emoji: '⬇️',
    emojiLength: 0,
    semver: SEMVER.PATCH,
    type: 'downgrade',
  },
  {
    code: ':technologist:',
    description: 'Improve Developer Experience',
    emoji: '💻',
    emojiLength: 1,
    semver: SEMVER.NULL,
    type: 'dx',
  },
  {
    code: ':egg:',
    description: 'Add or Update an Easter Egg',
    emoji: '🥚',
    emojiLength: 1,
    semver: SEMVER.PATCH,
    type: 'egg',
  },
  {
    code: ':alembic:',
    description: 'Perform Experiments',
    emoji: '⚗️',
    emojiLength: 0,
    semver: SEMVER.PATCH,
    type: 'experiment',
  },
  {
    code: ':sparkles:',
    description: 'Introduce New Features',
    emoji: '✨',
    emojiLength: 1,
    semver: SEMVER.MINOR,
    type: 'feat',
  },
  {
    code: ':bug:',
    description: 'Fix a Bug',
    emoji: '🐛',
    emojiLength: 1,
    semver: SEMVER.PATCH,
    type: 'fix',
  },
  {
    code: ':green_heart:',
    description: 'Fix CI Build',
    emoji: '💚',
    emojiLength: 1,
    semver: SEMVER.NULL,
    type: 'fix-ci',
  },
  {
    code: ':triangular_flag_on_post:',
    description: 'Add Update or Remove Feature Flags',
    emoji: '🚩',
    emojiLength: 1,
    semver: SEMVER.PATCH,
    type: 'flags',
  },
  {
    code: ':stethoscope:',
    description: 'Add or Update Healthcheck',
    emoji: '🩺',
    emojiLength: 1,
    semver: SEMVER.NULL,
    type: 'healthcheck',
  },
  {
    code: ':ambulance:',
    description: 'Critical Hotfix',
    emoji: '🚑️',
    emojiLength: 1,
    semver: SEMVER.PATCH,
    type: 'hotfix',
  },
  {
    code: ':globe_with_meridians:',
    description: 'Internationalization and Localization',
    emoji: '🌐',
    emojiLength: 1,
    semver: SEMVER.PATCH,
    type: 'i18n',
  },
  {
    code: ':see_no_evil:',
    description: 'Add or Update a Gitignore File.',
    emoji: '🙈',
    emojiLength: 1,
    semver: SEMVER.NULL,
    type: 'ignore',
  },
  {
    code: ':bricks:',
    description: 'Infrastructure Related Changes',
    emoji: '🧱',
    emojiLength: 1,
    semver: SEMVER.NULL,
    type: 'inf',
  },
  {
    code: ':tada:',
    description: 'Begin a Project',
    emoji: '🎉',
    emojiLength: 1,
    semver: SEMVER.PATCH,
    type: 'init',
  },
  {
    code: ':iphone:',
    description: 'Work on Responsive Design',
    emoji: '📱',
    emojiLength: 1,
    semver: SEMVER.PATCH,
    type: 'iphone',
  },
  {
    code: ':page_facing_up:',
    description: 'Add or Update License',
    emoji: '📄',
    emojiLength: 1,
    semver: SEMVER.NULL,
    type: 'license',
  },
  {
    code: ':rotating_light:',
    description: 'Fix Compiler / Linter Warnings',
    emoji: '🚨',
    emojiLength: 1,
    semver: SEMVER.NULL,
    type: 'lint',
  },
  {
    code: ':loud_sound:',
    description: 'Add or Update Logs',
    emoji: '🔊',
    emojiLength: 1,
    semver: SEMVER.NULL,
    type: 'log-add',
  },
  {
    code: ':mute:',
    description: 'Remove Logs',
    emoji: '🔇',
    emojiLength: 1,
    semver: SEMVER.NULL,
    type: 'log-rm',
  },
  {
    code: ':necktie:',
    description: 'Add or Update Business Logic',
    emoji: '👔',
    emojiLength: 1,
    semver: SEMVER.PATCH,
    type: 'logic',
  },
  {
    code: ':twisted_rightwards_arrows:',
    description: 'Merge Branches',
    emoji: '🔀',
    emojiLength: 1,
    semver: SEMVER.NULL,
    type: 'merge',
  },
  {
    code: ':clown_face:',
    description: 'Mock Things',
    emoji: '🤡',
    emojiLength: 1,
    semver: SEMVER.NULL,
    type: 'mock',
  },
  {
    code: ':truck:',
    description: 'Move or Rename Resources (Eg.: Files Paths Routes).',
    emoji: '🚚',
    emojiLength: 1,
    semver: SEMVER.NULL,
    type: 'mv',
  },
  {
    code: ':adhesive_bandage:',
    description: 'Simple Fix for a Non-Critical Issue',
    emoji: '🩹',
    emojiLength: 1,
    semver: SEMVER.PATCH,
    type: 'patch',
  },
  {
    code: ':zap:',
    description: 'Improve Performance',
    emoji: '⚡️',
    emojiLength: 1,
    semver: SEMVER.PATCH,
    type: 'perf',
  },
  {
    code: ':poop:',
    description: 'Write Bad Code That Needs to Be Improved',
    emoji: '💩',
    emojiLength: 1,
    semver: SEMVER.NULL,
    type: 'poo',
  },
  {
    code: ':fire:',
    description: 'Remove Code or Files',
    emoji: '🔥',
    emojiLength: 1,
    semver: SEMVER.NULL,
    type: 'prune',
  },
  {
    code: ':pushpin:',
    description: 'Pin Dependencies to Specific Versions',
    emoji: '📌',
    emojiLength: 1,
    semver: SEMVER.PATCH,
    type: 'pushpin',
  },
  {
    code: ':recycle:',
    description: 'Refactor Code',
    emoji: '♻️',
    emojiLength: 0,
    semver: SEMVER.NULL,
    type: 'refactor',
  },
  {
    code: ':bookmark:',
    description: 'Release / Version Tags',
    emoji: '🔖',
    emojiLength: 1,
    semver: SEMVER.NULL,
    type: 'release',
  },
  {
    code: ':rewind:',
    description: 'Revert Changes',
    emoji: '⏪️',
    emojiLength: 1,
    semver: SEMVER.PATCH,
    type: 'revert',
  },
  {
    code: ':coffin:',
    description: 'Remove Dead Code',
    emoji: '⚰️',
    emojiLength: 0,
    semver: SEMVER.NULL,
    type: 'rip',
  },
  {
    code: ':passport_control:',
    description: 'Work on Code Related to Authorization Roles and Permissions',
    emoji: '🛂',
    emojiLength: 1,
    semver: SEMVER.PATCH,
    type: 'roles',
  },
  {
    code: ':fast_forward:',
    description: 'Create Rollforward Version',
    emoji: '⏩️',
    emojiLength: 1,
    semver: SEMVER.NULL,
    type: 'rollforward',
  },
  {
    code: ':rocket:',
    description: 'Custom Type for CI/CD to Hook into Run Build Override',
    emoji: '🚀️',
    emojiLength: 1,
    semver: SEMVER.PATCH,
    type: 'run-build',
  },
  {
    code: ':closed_lock_with_key:',
    description: 'Add or Update Secrets',
    emoji: '🔐',
    emojiLength: 1,
    semver: SEMVER.NULL,
    type: 'secrets',
  },
  {
    code: ':lock:',
    description: 'Fix Security Issues',
    emoji: '🔒️',
    emojiLength: 1,
    semver: SEMVER.PATCH,
    type: 'security',
  },
  {
    code: ':seedling:',
    description: 'Add or Update Seed Files',
    emoji: '🌱',
    emojiLength: 1,
    semver: SEMVER.NULL,
    type: 'seed',
  },
  {
    code: ':mag:',
    description: 'Improve Seo',
    emoji: '🔍️',
    emojiLength: 1,
    semver: SEMVER.PATCH,
    type: 'seo',
  },
  {
    code: ':camera_flash:',
    description: 'Add or Update Snapshots',
    emoji: '📸',
    emojiLength: 1,
    semver: SEMVER.NULL,
    type: 'snapshot',
  },
  {
    code: ':money_with_wings:',
    description: 'Add Sponsorships or Money Related Infrastructure',
    emoji: '💸',
    emojiLength: 1,
    semver: SEMVER.NULL,
    type: 'sponsor',
  },
  {
    code: ':art:',
    description: 'Improve Structure / Format of the Code',
    emoji: '🎨',
    emojiLength: 1,
    semver: SEMVER.NULL,
    type: 'style',
  },
  {
    code: ':test_tube:',
    description: 'Add a Failing Test',
    emoji: '🧪',
    emojiLength: 1,
    semver: SEMVER.NULL,
    type: 'test-fail',
  },
  {
    code: ':white_check_mark:',
    description: 'Add Update or Pass Tests',
    emoji: '✅',
    emojiLength: 1,
    semver: SEMVER.NULL,
    type: 'test',
  },
  {
    code: ':speech_balloon:',
    description: 'Add or Update Text and Literals',
    emoji: '💬',
    emojiLength: 1,
    semver: SEMVER.PATCH,
    type: 'texts',
  },
  {
    code: ':label:',
    description: 'Add or Update Types',
    emoji: '🏷️',
    emojiLength: 0,
    semver: SEMVER.PATCH,
    type: 'types',
  },
  {
    code: ':pencil2:',
    description: 'Fix Typos',
    emoji: '✏️',
    emojiLength: 0,
    semver: SEMVER.PATCH,
    type: 'typo',
  },
  {
    code: ':lipstick:',
    description: 'Add or Update the UI and Style Files',
    emoji: '💄',
    emojiLength: 1,
    semver: SEMVER.PATCH,
    type: 'ui',
  },
  {
    code: ':arrow_up:',
    description: 'Upgrade Dependencies',
    emoji: '⬆️',
    emojiLength: 0,
    semver: SEMVER.PATCH,
    type: 'upgrade',
  },
  {
    code: ':children_crossing:',
    description: 'Improve User Experience / Usability',
    emoji: '🚸',
    emojiLength: 1,
    semver: SEMVER.PATCH,
    type: 'ux',
  },
  {
    code: ':safety_vest:',
    description: 'Add or update code related to validation',
    emoji: '🦺',
    emojiLength: 1,
    semver: SEMVER.PATCH,
    type: 'validation',
  },
  {
    code: ':construction:',
    description: 'Work in Progress',
    emoji: '🚧',
    emojiLength: 1,
    semver: SEMVER.NULL,
    type: 'wip',
  },
]

export default types
