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
  if (!path.includes('/user/')) {
    routeReport();
  }
};

export default {
  browserRouter,
  beforeRender,
  basepath,
  errorBoundary,
  // afterRender,
};
