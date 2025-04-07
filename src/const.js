/**
 * 当前插件的唯一标识符,应该与 package.json中的 configuration.id相对应
 * @example
 * context.extension.id == "publisher.name"
 * vscode.extensions.getExtension(id).id == "publisher.name"
 */
export const EXNTENSION_ID = "vscode-extension-template"

/**
 * 插件名字, package.json -> displayName
 */
export const DISPLAY_NAME = "Extension Template"

/**
 * package.json -> contributes -> commands
 */
export const Commands = {
  hello: `${EXNTENSION_ID}.hello`
}

/**
 * 配置
 */
export const Config = {
  show: true,
  input: ""
}

// 插件启动后的欢迎语
export const message = `Thank you for using ${DISPLAY_NAME}`

// 文件选择 glob
export const selector = [{ scheme: "file", language: "markdown", pattern: "**/*.md" }]
