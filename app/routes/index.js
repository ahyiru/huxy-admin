import traverItem from '@huxy/utils/src/traverItem';

import staticRoutes from './routerComp/staticRoutes';
import {playgroundRoutes} from './routerComp/dynamicRoutes';

const dynamicRoutes = [playgroundRoutes];

const allRoutes = [
  {
    path: '/',
    component: () => import('@common/layout'),
    children: dynamicRoutes,
  },
  ...staticRoutes,
];

const routes = (nameList, routerList) =>
  traverItem((item, parent) => {
    const fullPath = [...parent, item]
      .map((item) => item.path)
      .join('')
      .replace('//', '/');
    item.name = nameList?.[fullPath] ?? item.name;
    item.id = routerList?.find((route) => route.path === fullPath)?._id;
    if (typeof item.componentPath === 'string') {
      item.component = () => import(`@app/views${item.componentPath}`);
    }
  })(allRoutes);

export default routes;