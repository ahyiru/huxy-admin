const lowcode = {
  HOST: process.env.IP || 'http://localhost',
  PORT: process.env.PORT || 4200,
  PRO_PORT: process.env.PRO_PORT || 4201,
  BUILD_DIR: './build',
  PUBLIC_DIR: '../public',
  DEV_ROOT_DIR: '/',
  PRD_ROOT_DIR: '/',
  PROXY: {
    url: 'http://47.105.94.51:9202',
    prefix: '/api',
  },
  MOCK: '127.0.0.1:4202',
  SERVER_PORT: 4203,
  projectName: 'lowcode',
  defProject: {
    name: 'template',
    _id: '123456',
  },
};

module.exports = lowcode;
