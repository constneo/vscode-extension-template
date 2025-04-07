import onCommand from "./provider.js"
import { welcome } from "./utils.js"
import vscode from "./vscode.js"
import statusbar from "./statusbar.js"

/**
 * @param {vscode.ExtensionContext} context
 */
export function activate(context) {
  welcome()

  context.subscriptions.push(onCommand())
  context.subscriptions.push(statusbar(context))
}

export function deactivate() {}
