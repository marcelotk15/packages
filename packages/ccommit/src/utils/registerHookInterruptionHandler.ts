/*!
 * reference: https://github.com/carloscuesta/gitmoji-cli
 */
import colors from 'ansi-colors'
import process from 'node:process'

const registerHookInterruptionHandler = () => {
  // Allow to interrupt the hook without cancelling the commit
  process.on('SIGINT', () => {
    console.log(colors.magenta.bold('❯ [ccommit] interrupted'))
    process.exit(0)
  })
}

export { registerHookInterruptionHandler }
