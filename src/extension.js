import onCommand from "./provider.js"
import { getConfig, getExtensionJson } from "./utils.js"
import vscode from "./vscode.js"
import statusbar from "./statusbar.js"

const cmd = onCommand()

const list = [cmd]

/**
 * 初始化扩展
 * @param {vscode.ExtensionContext} context
 */
async function init(context) {
  const { show } = getConfig()

  if (show) {
    list.forEach(i => context.subscriptions.push(i))
  } else {
    list.forEach(i => i.dispose())
  }

  // when 条件
  vscode.commands.executeCommand("setContext", "constneo.show", show)
}

/**
 * 激活扩展
 * @param {vscode.ExtensionContext} context
 * @returns {void}
 */
export function activate(context) {
  const json = getExtensionJson(context)
  // console.log("[ json ]->", JSON.stringify(json))
  console.log("[ json ]->", json)

  context.subscriptions.push(welcome())
  context.subscriptions.push(onCommand())
  context.subscriptions.push(statusbar(context))
}

/**
 * 释放资源
 * @returns {void}
 */
export function deactivate() {
  list.forEach(i => i.dispose())
}
