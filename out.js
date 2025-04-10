// src/vscode.js
import { createRequire } from "node:module";
var require2 = createRequire(import.meta.url);
var vscode = require2("vscode");
var vscode_default = vscode;

// src/const.js
var EXNTENSION_ID = "vscode-extension-template";
var DISPLAY_NAME = "Extension Template";
var Commands = {
  hello: `${EXNTENSION_ID}.hello`
};
var Config = {
  show: true,
  input: ""
};
var message = `Thank you for using ${DISPLAY_NAME}`;

// src/utils.js
function getConfig() {
  const config = vscode_default.workspace.getConfiguration(EXNTENSION_ID);
  for (const key in Config) {
    Config[key] = config.get(key);
  }
  return Config;
}
function getExtensionJson(context) {
  return context.extension.packageJSON;
}
function welcome() {
  console.log(`Register ${EXNTENSION_ID} extension .`);
  const disposable = new vscode_default.Disposable(() => {
    vscode_default.window.showInformationMessage(message);
  });
  return disposable;
}

// src/provider.js
var provider_default = () => {
  const disposable = vscode_default.commands.registerCommand(Commands.hello, async () => {
    const { input } = getConfig();
    vscode_default.window.showInformationMessage(input);
  });
  return disposable;
};

// src/statusbar.js
var statusbar_default = (context) => {
  const statusItem = vscode_default.window.createStatusBarItem(vscode_default.StatusBarAlignment.Left);
  statusItem.command = {
    title: DISPLAY_NAME,
    command: Commands.hello,
    tooltip: `\u6253\u5F00\u8F93\u51FA\u9762\u677F`,
    arguments: [{ hello: "world" }]
  };
  statusItem.tooltip = `\u6253\u5F00 ${DISPLAY_NAME} \u8F93\u51FA\u9762\u677F`;
  statusItem.text = "$(rocket)";
  statusItem.show();
  return new vscode_default.Disposable(() => {
  });
};

// src/extension.js
var cmd = provider_default();
var list = [cmd];
function activate(context) {
  const json = getExtensionJson(context);
  console.log("[ json ]->", JSON.stringify(json));
  context.subscriptions.push(welcome());
  context.subscriptions.push(provider_default());
  context.subscriptions.push(statusbar_default(context));
}
function deactivate() {
  list.forEach((i) => i.dispose());
}
export {
  activate,
  deactivate
};
