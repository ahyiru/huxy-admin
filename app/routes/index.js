import {traverItem, arr2TreeByPath, mergeArr} from '@huxy/utils';

import {notAdmin} from '@app/utils/isAdmin';

import Icon from '@app/components/icon';

import staticRoutes from './routerComp/staticRoutes';
import dynamicRoutes from './routerComp/dynamicRoutes';
import defaultPermList from './defaultPermList';

const whiteList = ['/playground'];

const getWhiteRoute = fullpath => whiteList.find(route => fullpath.indexOf(`${route}/`) !== 0 && route !== fullpath);

const allRoutes = [
  {
    path: '/',
    component: () => import('@app/commons/layout'),
    children: dynamicRoutes,
  },
  ...staticRoutes,
];

const routes = (routerList, nameList, permList, profile) => {
  const isAdmin = !notAdmin();
  const serverRoutes = traverItem(({denied, ...rest}) => {
    if (rest.parentId.length > 1) {
      rest.path = rest.path.replace(rest.parentId, '');
    }
    return rest;
  })(arr2TreeByPath(routerList || []));

  const fullList = mergeArr(allRoutes, serverRoutes, 'path');

  const permission = [...new Set([...(permList || []), ...defaultPermList])];

  return traverItem((item, parent) => {
    item.fullpath = [...parent, item].map(item => item.path).join('').replace('//', '/');
    item.id = item._id;
    item.name = nameList?.[item.fullpath] ?? item.name;
    let icon = item.icon;
    if (icon && icon !== true) {
      item.icon = <Icon icon={icon} />;
    }
    if (typeof item.denied === 'function') {
      item.denied = item.denied();
    }
    if (!isAdmin && getWhiteRoute(item.fullpath)) {
      item.denied = item.denied || !permission.includes(item.fullpath);
    }
  })(fullList);
};

export default routes;
