## 1. DEV environment setup

### vscode

`.vscode/settings.json`

```json
{
  "editor.formatOnSave": true,
  "javascript.format.enable": false,
  "eslint.autoFixOnSave": true,
  "prettier.eslintIntegration": true
}
```

## 2. Relative path import resolve config

`./jsconfig.json`

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["src/*"],
      "@component/*": ["src/component/*"]
      // add more ....
    }
  }
}
```

The path will resolve to jest `moduleNameMapper` and webpack `resolve.alias`.

Now you can import sth like `import { Button } from '@component/Button';`
