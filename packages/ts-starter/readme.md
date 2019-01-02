## 1. DEV environment setup

### env

- NDOE - 8.12.0 (LTS)

### Linting

- tslint: airbnb
- prettier: airbnb
- stylelint: airbnb

### vscode

`.vscode/settings.json`

```json
{
  "editor.formatOnSave": true,
  "javascript.format.enable": false,
  "tslint.autoFixOnSave": true,
  "prettier.tslintIntegration": true
}
```

## 2. Relative path import resolve config

`./tsconfig.json`

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

The path will be resolved to jest `moduleNameMapper` and webpack `resolve.alias`.

Now you can import sth like `import { Button } from '@component/Button';`
