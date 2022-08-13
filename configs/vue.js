const app = {
  HOST: process.env.IP || 'localhost',
  PORT: process.env.PORT | 3500,
  PRO_PORT: process.env.PRO_PORT || 3501,
  BUILD_DIR: './build',
  PUBLIC_DIR: '../public',
  DEV_ROOT_DIR: '',
  PRD_ROOT_DIR: '/',
  PROXY: 'http://47.105.94.51:9202',
  MOCK: 'http://localhost:3502',
  SERVER_PORT: 7502,
  appNane: '...',
};

module.exports = app;
