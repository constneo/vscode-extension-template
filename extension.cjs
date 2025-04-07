/**
 * Load extension from ESM.
 * @typedef {import("./types/global")}
 * @param   {string} value ESM path
 * @returns {Promise<API>} Return a promise of the extension.
 */
async function loader(value) {
  const esm = await import(value)

  return {
    activate: context => esm.activate(context),
    deactivate: () => esm.deactivate()
  }
}

module.exports = loader("./src/extension.js")
