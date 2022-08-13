const routes = [
  {
    path: '/user',
    title: '登录注册',
    hideMenu: true,
    component: () => import('@app/views/user'),
    children: [
      {
        path: '/signin',
        name: '登录',
        component: () => import('@app/views/user/login'),
      },
      {
        path: '/signup',
        name: '注册',
        component: () => import('@app/views/user/signup'),
      },
    ],
  },
  {
    path: '/404',
    name: '404',
    component: import('@app/views/404'),
    hideMenu: true,
  },
];

export default routes;
