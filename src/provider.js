import vscode from "./vscode.js"
import { getConfig } from "./utils.js"
import { Commands } from "./const.js"

/**
 * Register command.
 * @returns {vscode.Disposable}
 */
export default () => {
  const disposable = vscode.commands.registerCommand(Commands.hello, async () => {
    const { input } = getConfig()
    vscode.window.showInformationMessage(input)
  })

  return disposable
}

/**
 * 监听文件
 * @returns {vscode.FileSystemWatcher}
 */
export function onWatcher() {
  const watcher = vscode.workspace.createFileSystemWatcher("**/*.{md,json}")
  // watcher.onDidCreate(() => {})
  return watcher
}
