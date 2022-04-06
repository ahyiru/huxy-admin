const appName=require('./appName');
const app=require('./app');
const cfg={
  app,
};

const configs=cfg[appName]||app;
configs.appName=appName;

module.exports=configs;
