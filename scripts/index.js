const express=require('express');
const webpack=require('webpack');
const colors=require('colors');

// const https=require('https');
// const fs=require('fs');
// const path=require('path');

const cors=require('cors');
const logger=require('morgan');
const bodyParser=require('body-parser');
const compression=require('compression');

const webpackDevMiddleware=require('webpack-dev-middleware');
const webpackHotMiddleware=require('webpack-hot-middleware');

const webpackConfig=require('./webpack.development');

const {appName,HOST,PORT,PROXY,MOCK}=require('../configs');

const getIPs=require('./getIPs');

const {createProxyMiddleware}=require('http-proxy-middleware');

const app = express();

const compiler = webpack(webpackConfig);

const proxyCfg=require('./appProxy');

const mocks=require('./mock');

if(Array.isArray(PROXY)){
  PROXY.map(proxyItem=>{
    const {prefix,opts}=proxyCfg(PROXY);
    app.use(prefix,createProxyMiddleware(opts));
  });
}else{
  const {prefix,opts}=proxyCfg(PROXY);
  app.use(prefix,createProxyMiddleware(opts));
}

const devMiddleware=webpackDevMiddleware(compiler,{
  publicPath:webpackConfig.output.publicPath,
  // index:'index.html',
  // outputFileSystem:{},
  stats: {
    preset: 'minimal',
    moduleTrace: true,
    errorDetails: true,
    colors:true,
  },
});

app.use(webpackHotMiddleware(compiler));
app.use(devMiddleware);

app.set('host', HOST);
app.set('port', PORT);

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json({limit:'20mb'}));
app.use(bodyParser.urlencoded({limit:'20mb',extended:true}));
app.use(compression());

// browserRouter
app.use('*',(req,res,next)=>{
  const htmlBuffer=compiler.outputFileSystem.readFileSync(`${webpackConfig.output.path}/index.html`);
  res.set('Content-Type','text/html');
  res.send(htmlBuffer);
  res.end();
});

/* app.get('/subRouter',(req,res)=>{
  const htmlBuffer=devMiddleware.outputFileSystem.readFileSync(`${webpackConfig.output.path}/index.html`);
  res.send(htmlBuffer.toString());
}); */

/* https */
/* const cert=path.resolve(__dirname,'../cert');
const options={
  key:fs.readFileSync(`${cert}/server.key`),
  cert:fs.readFileSync(`${cert}/server.cert`),
  // passphrase: 'YOUR PASSPHRASE HERE',
};
const httpsServer=https.createServer(options,app); */
/* https */

app.listen(app.get('port'),err=>{
  if(err){
    console.log(err);
    return false;
  }
  const ips=getIPs().map(ip=>`${ip}:${app.get('port')}`).join('\n');
  // open(`http://${app.get('host')}:${app.get('port')}`);
  console.log('\n'+appName.magenta+': ???????????????! '.cyan+'???'.green);
  console.log(`\n????????????: ${app.get('port')} ,????????????,?????????...`.cyan);
  console.log('-----------------------------------'.blue);
  // console.log(` ????????????: http://${app.get('host')}:${app.get('port')}`.magenta);
  console.log(`????????????: \n`.magenta);
  console.log(`${ips} \n`.magenta);
  console.log(`????????????????????????????????????????????? `.cyan+`npm run build`.green);
  console.log('-----------------------------------'.blue);
  console.log('\n?????? CTRL-C ????????????\n'.blue);
});

if(appName==='demo'){
  mocks();
}
/* app.get('test',(req,res)=>{
  return res.send({id:'test'});
});

app.get('/users/test1',(req,res)=>{
  console.log(req.originalUrl);
  res.send({users:'huy'});
}); */




