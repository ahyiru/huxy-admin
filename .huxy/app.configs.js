const app = {
  // HOST: 'http://localhost',
  PORT: 8080,
  PROD_PORT: 8081,
  PUBLIC_DIR: 'public',
  BUILD_DIR: 'build',
  DEV_ROOT_DIR: '/',
  PROD_ROOT_DIR: '/',
  projectName: 'XX平台',
  /* PROXY: {
    url: 'http://127.0.0.1:9000',
    prefix: '/api',
  }, */
  defProject: {
    // 项目全局配置
    name: '项目名',
    _id: '其它属性',
  },
};

module.exports = {app};
