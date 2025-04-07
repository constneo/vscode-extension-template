# Vscode Extension Template

## Options

```json
// .vscode/settings.json
{
  "vscode-extension-template.show": false,
  "vscode-extension-template.input": "Hello,vscode."
}
```

## Build

```shell
npm install

npm install -g @vscode/vsce

vsce package --no-dependencies

vsce package --dependencies
```

## Document

[Contribution Points](https://code.visualstudio.com/api/references/contribution-points)  
[Extension Manifest](https://code.visualstudio.com/api/references/extension-manifest)
