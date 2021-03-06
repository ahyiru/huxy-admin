// import {storage} from '@huxy/utils';
// 
// import {designReg, confirmDesignPage} from '@app/utils/confirmDesignPage';
// 
// import whiteList from '../routes/whiteList';

export const browserRouter = !process.env.isDev;

const {DEV_ROOT_DIR, PRD_ROOT_DIR} = require('@configs');

export const basepath = browserRouter ? PRD_ROOT_DIR : DEV_ROOT_DIR;

const initPath = `${browserRouter ? '' : '#'}/`;

// const whiteRoutes = browserRouter ? whiteList : whiteList.map(path => `#${path}`);
// 
// const token = storage.get('token');
// 
// const demoBackReg = /\/playground\/utils\/list\/auth\/[0-9a-z]+/;

const routerListen = {};

const routerListenFn = (path, prevPath) => {
  if (!routerListen[path]) {
    routerListen[path] = {};
  }
  let delay = 0;
  if (!prevPath) {
    routerListen[path].start = new Date();
  } else {
    if (!routerListen[prevPath]) {
      routerListen[prevPath] = {};
    }
    routerListen[path].start = routerListen[prevPath].end = new Date();
    delay = routerListen[prevPath].end - routerListen[prevPath].start;
  }
  console.log(`${prevPath || '初始化'}页面停留时间：`, delay, routerListen);
};

const beforeRender = (input, next) => {
  const {path, prevPath} = input;
  const validPath = path.split('?')[0];
  if (validPath === initPath) {
    return next({path: '/'});
  }
  /* if (!token && !whiteRoutes.includes(validPath)) {
    return next({path: '/user/signin'});
  }
  if (path !== prevPath && demoBackReg.test(prevPath)) {
    // designReg
    return confirmDesignPage(next);
  } */
  next();
  routerListenFn(path,prevPath);
};

export default {
  browserRouter,
  beforeRender,
  basepath,
  // afterRender,
};
