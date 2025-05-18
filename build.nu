(
  esbuild
  src/extension.js
  --bundle
  --format=esm
  --platform=node
  --outfile=out.js
  # --minify
)

vsce package --no-dependencies
