const play={
  HOST:process.env.IP||'http://localhost',
  PORT:process.env.PORT||6300,
  PRO_PORT:process.env.PRO_PORT||6301,
  BUILD_DIR:'./build',
  PUBLIC_DIR:'../public',
  DEV_ROOT_DIR:'/',
  PRD_ROOT_DIR:'/',
  PROXY:'http://47.105.94.51:9202',
  TARGET:'/api',
  MOCK:'http://localhost:6302',
  SERVER_PORT:6303,
  basepath:'/',
  platform:'pc',
  projectName:'...',
};

module.exports=play;
