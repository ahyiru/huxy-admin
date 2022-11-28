import {browserRouter, basepath} from '.';

import errorBoundary from '@app/apis/report/pageError';
import routeReport from '@app/apis/report/routeChange';

const initPath = `${browserRouter ? '' : '#'}/`;

const beforeRender = (input, next) => {
  const {path, prevPath} = input;
  const validPath = path.split('?')[0];
  if (validPath === initPath) {
    return next({path: '/'});
  }
  /* if (!token && !whiteRoutes.includes(validPath)) {
    return next({path: '/user/signin'});
  } */
  next();
};

let listenRouteInit = false;

const afterRender = output => {
  const {path, name, stay} = output;
  let firstLoadTime;
  if (!listenRouteInit) {
    firstLoadTime = stay;
    listenRouteInit = true;
  }
  if (!path.includes('/user/')) {
    routeReport({path, name, firstLoadTime});
  }
};

export default {
  browserRouter,
  beforeRender,
  basepath,
  errorBoundary,
  afterRender,
};
