import DeadCodePlugin from 'webpack-deadcode-plugin';

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

export default {
  app,
  webpack: (rootPath, appPath) => ({
    dev: {
      plugins: [
        new DeadCodePlugin({
          patterns: [`${appPath}/**/*.(js|jsx|css|less|json|png|jpg|jpeg)`],
          exclude: ['**/node_modules/**', '**/build/**', '**/draft/**'],
          log: 'none',
          exportJSON: rootPath,
        }),
      ],
    },
    prod: {
      copy: [
        {
          from: `${appPath}/public/.spa`,
          to: `${appPath}/build/.spa`,
        },
      ],
    },
  }),
};
