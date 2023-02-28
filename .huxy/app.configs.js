const app = {
  // HOST: 'http://localhost',
  PORT: 3000,
  PROD_PORT: 3001,
  PUBLIC_DIR: 'public',
  BUILD_DIR: 'build',
  DEV_ROOT_DIR: '/',
  PROD_ROOT_DIR: '/huxy-admin',
  projectName: '...',
  /* PROXY: {
    url: 'http://api.ihuxy.com',
    prefix: '/api',
  }, */
  envConfigs: {
    // 全局环境变量
    name: '项目名',
    _id: '其它属性',
  },
};

module.exports = {
  app,
  webpack: {
    prod: {
      copy: [
        {
          from: 'app/public/.spa',
          to: 'app/build/.spa',
        },
      ],
    },
  },
};
