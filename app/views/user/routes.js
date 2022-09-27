const routes = [
  {
    path: '/user',
    title: '登录注册',
    hideMenu: true,
    component: () => import('./src'),
    children: [
      {
        path: '/signin',
        name: '登录',
        component: () => import('./src/login'),
      },
      {
        path: '/signup',
        name: '注册',
        component: () => import('./src/signup'),
      },
    ],
  },
];

export default routes;
