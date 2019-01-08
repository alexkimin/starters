## Index

[DEV Environment Setup](#dev-environment-setup)

[Get Started](#get-started)

[Testing and Build](#testing-and-build)

[Relative path resolve config](#relative-path-resolve-config)

[Architecture design](#architecture-design)

[Todos](#todos)

[Todos](#todos)

---

## DEV Environment Setup

### Env (important)

- NODE - 8.12.0 (LTS)

chekcing node version `node --version`

if you installed [nvm](https://github.com/creationix/nvm),

`nvm install 8.12.0` and then, `nvm use 8.12.0`

### Linting

will be excuted as pre-commit hook.

- tslint: airbnb
- prettier: airbnb
- stylelint: airbnb

### vscode settings

#### 1. install recommended extensions

`npm run install:ext`

and reload vscode (press F1 -> reload window).

[trouble shooting]

If you faced error that 'code command not found',

press F1 -> Shell Command: install 'code' command in PATH

then, excute above npm script again.

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

Start component dev server (styleguidist, default port: 4040)

```
npm run start:comp
```

---

## Testing and Build

Testing scripts

```
// running 1 time jest unit testing
npm run test

// watch mode
npm run test:watch

// generating coverage
npm run test:cov

// opening the coverage report
npm run test:open
```

Cache clear scripts

```
npm run clean
```

Build scripts

```
// build with testing
npm run build

// build without testing
npm run build:only

// build with bundle analysis
npm run build:ba

// build component catalogue (styleguidist)
npm run build:comp
```

---

## Relative path resolve config

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
