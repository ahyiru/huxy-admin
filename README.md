## huxy


[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ahyiru/ihuxy/blob/develop/LICENSE)
[![npm version](https://img.shields.io/npm/v/@huxy/router.svg)](https://www.npmjs.com/package/@huxy/router)
[![Build Status](https://api.travis-ci.com/ahyiru/ihuxy.svg?branch=develop)](https://app.travis-ci.com/github/ahyiru/ihuxy)
[![](https://img.shields.io/badge/blog-ihuxy-blue.svg)](http://ihuxy.com/)


### 运行

可自行配置运行项目，如运行 `template` 项目：

```js
npm start ---dirname=app

```

默认运行 `app` 目录。`npm start`。

其它一些命令：

```js
"build": "webpack --config scripts/webpack.production.js --progress",
"analyze": "ANALYZE=1 webpack --config scripts/webpack.production.js --progress",
"server": "nodemon scripts/server.js --watch scripts/server.js",
"test": "jest --colors --coverage",
"eslint": "eslint 'app/**/*.{js,jsx}'",
"stylelint": "stylelint 'app/**/*.{css,less}'",
"prettier": "prettier 'app/**/*' --write --ignore-unknown",
"prettier-md": "prettier 'app/**/*.md' --write --ignore-unknown",
"stylelintLayout": "stylelint 'commons/styles/*.{css,less}'",
"lint": "npm run eslint && npm run stylelint",
"lint-fix": "eslint --fix 'app/**/*.{js,jsx}' && stylelint --fix 'app/**/*.{css,less}'",
"release": "standard-version",

```


### 配置

`configs/app.js`

主要配置有：运行端口、资源路径、打包路径、代理地址等。

```js
const app={
  HOST:process.env.IP||'http://localhost',
  PORT:process.env.PORT||7500,
  PRO_PORT:process.env.PRO_PORT||7501,
  BUILD_DIR:'./build',
  PUBLIC_DIR:'../public',
  DEV_ROOT_DIR:'/',
  PRD_ROOT_DIR:'/',
  PROXY:'http://47.105.94.51:9202',
  TARGET:'/api',
  MOCK:'http://localhost:7502',
  SERVER_PORT:7202,
  basepath:'/',
  platform:'pc',
  projectName:'',
};

```