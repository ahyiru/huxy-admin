const routes = [
  {
    path: '/user',
    title: '登录注册',
    icon: 'TeamOutlined',
    hideMenu: true,
    component: props => <div>login</div>,
    children: [
      {
        path: '/signin',
        name: '登录',
        component: props => <h1>登录</h1>,
      },
    ],
  },
  {
    path: '/404',
    name: '404',
    component: import('@app/404'),
    hideMenu: true,
  },
  {
    path: '/profile',
    name: '个人中心',
    title: '个人中心',
    hideMenu: true,
    component: <h1>个人中心</h1>,
  },
];

export default routes;
