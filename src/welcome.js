import { EXNTENSION_ID, message } from "./const.js"
import vscode from "./vscode.js"

/**
 * 右下角的欢迎语
 * @return {vscode.Disposable}
 */
export function welcome() {
  console.log(`Register ${EXNTENSION_ID} extension .`)

  const disposable = new vscode.Disposable(() => {
    vscode.window.showInformationMessage(message)
  })

  return disposable
}
