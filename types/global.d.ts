import * as vscode from "vscode"

declare global {
  interface API {
    /**
     * Activates this extension and returns its public API.
     * @callback
     * @returns A promise that will resolve when this extension has been activated. {@link Extension.activate}.
     */
    activate: (context: vscode.ExtensionContext) => void

    deactivate: () => void
  }

  interface Configuration {
    show: boolean
    input: string
  }
}

declare module "#vscode" {
  import vscode = require("vscode")
  export default vscode
}

export {}
