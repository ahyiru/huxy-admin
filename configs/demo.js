// const getIPs=require('../scripts/getIPs');
// const localIp=getIPs().slice(-1)??'http://127.0.0.1';
const app={
  HOST:process.env.IP||'http://localhost',
  PORT:process.env.PORT||9500,
  PRO_PORT:process.env.PRO_PORT||9501,
  BUILD_DIR:'./build',//'build',
  // DIST:'../build',
  PUBLIC_DIR:'../public',
  DEV_ROOT_DIR:'/',
  PRD_ROOT_DIR:'/',
  PROXY:'http://47.105.94.51:9202',
  // PROXY:`${localIp}:9202`,
  TARGET:'/api',
  MOCK:'http://localhost:9502',
  SERVER_PORT:9503,
  basepath:'/',
  platform:'pc',
  projectName:'招摇山',
  // publicPath:'http://localhost:9500/',
};

module.exports=app;
