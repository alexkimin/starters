## Index

[1. DEV environment setup](#1.-dev-environment-setup)

[3. Relative path import resolve config](#3.-relative-path import-resolve-config)

## 1. DEV environment setup

---

### env

- NDOE - 8.12.0 (LTS)

---

### Linting

will be excuted as pre-commit hook

- tslint: airbnb
- prettier: airbnb
- stylelint: airbnb

---

### vscode

#### 1. install recommended extensions

`npm run install:ext`

and reload vscode (press F1 -> reload window)

#### 2. setup workspace settings

`.vscode/settings.json`

```json
{
  "editor.formatOnSave": true,
  "javascript.format.enable": false,
  "tslint.autoFixOnSave": true,
  "prettier.tslintIntegration": true
}
```

---

## 3. Relative path import resolve config

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

The path will be resolved to jest `moduleNameMapper` and webpack `resolve.alias`. please check the file if you want to know current path configs.

Now you can import sth like `import { Button } from '@component/Button';`

---
