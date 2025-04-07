import vscode from "./vscode.js"
import { DISPLAY_NAME, Commands } from "./const.js"

/**
 * @param {vscode.ExtensionContext}context
 */
export default context => {
  // 只有在扩展激活之后,才会显示出来
  const statusItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left)
  // statusItem.command = CommandKeys.output
  statusItem.command = {
    title: DISPLAY_NAME,
    command: Commands.hello,
    tooltip: `打开输出面板`,
    arguments: [{ hello: "world" }]
  }

  statusItem.tooltip = `打开 ${DISPLAY_NAME} 输出面板`
  statusItem.text = "$(rocket)"
  // statusItem.color = '#ff0000'
  statusItem.show()

  return new vscode.Disposable(() => {})
}
