const routes = {
  path: '/playground',
  name: 'Playground',
  icon: 'ico-flag',
  children: [
    {
      path: '/icons',
      name: 'icons',
      component: () => import('./src/icons'),
    },
    {
      path: '/panel',
      name: 'panel',
      component: () => import('./src/panel'),
    },
    {
      path: '/styles',
      name: 'styles',
      component: () => import('./src/styles'),
    },
    {
      path: '/modal',
      name: 'modal',
      component: () => import('./src/modal'),
    },
    {
      path: '/demo-tools',
      name: 'tools',
      component: () => import('./src/tools'),
    },
  ],
};

export default routes;
