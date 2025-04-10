const DEV = "./src/extension.js"
const PRO = "./out.js"

/**
 * Load extension from ESM.
 * @typedef {import("./types/global")}
 *  returns {Promise<API>} Return a promise of the extension.
 */
async function loader() {
  return {
    activate: async context => {
      if (context.extensionMode === 2) {
        const esm = await import(DEV)
        esm.activate(context)
      } else {
        const bundle = await import(PRO)
        bundle.activate(context)
      }
    }
    // deactivate: () => esm.deactivate()
  }
}

module.exports = loader()
