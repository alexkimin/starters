## Index

[DEV environment setup](#dev-environment-setup)

[Get Started](#get-started)

[Testing and Build](#testing-and-build)

[Relative path import resolve config](#relative-path-import-resolve-config)

---

## DEV environment setup

### Env

- NDOE - 8.12.0 (LTS)

### Linting

will be excuted as pre-commit hook.

- tslint: airbnb
- prettier: airbnb
- stylelint: airbnb

### vscode settings

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

## Get Started

Start dev server with local api

```
npm start
npm run start
```

Start dev server with deployed api (sit/uat)

```
npm run start:sit
npm run start:uat
```

---

## Relative path import resolve config

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

The path will be resolved to jest `moduleNameMapper` and webpack `resolve.alias`. please check the config file if you want to know current path configs.

Now you can import sth like `import { Button } from '@component/Button';`
