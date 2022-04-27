import {browserRouter} from '@app/configs';

export const dashboardRoutes = {
  path: '/dashboard',
  name: '仪表盘',
  icon: 'HomeOutlined',
  children: [
    {
      path: '/screen1',
      name: 'screen1',
      icon: 'DashboardOutlined',
      component: () => import('@app/views/dashboard/screen1'),
    },
    {
      path: '/screen2',
      name: 'screen2',
      icon: 'DashboardOutlined',
      component: () => import('@app/views/dashboard/screen2'),
    },
  ],
};

export const commonRoutes = [
  {
    path: '/commons',
    name: ' Common',
    icon: 'ShopOutlined',
    children: [
      {
        path: '/canvas',
        name: '图形绘制',
        icon: 'AreaChartOutlined',
        component: () => import('@app/views/commons/canvas'),
      },
    ],
  },
  {
    path: '/profile',
    name: '个人中心',
    title: '个人中心',
    hideMenu: true,
    component: () => import('@app/user/profile'),
  },
];

export const playgroundRoutes = {
  path: '/playground',
  name: ' Playground',
  icon: 'ConsoleSqlOutlined',
  children: [
    {
      path: '/demo',
      name: 'demo',
      icon: 'MergeCellsOutlined',
      denied: browserRouter,
      component: () => import('@app/views/demo'),
    },
    {
      path: '/icons',
      name: 'icons',
      icon: 'PictureOutlined',
      component: () => import('@app/views/demo/icons'),
    },
    {
      path: '/panel',
      name: 'panel',
      component: () => import('@app/views/demo/panel'),
    },
    {
      path: '/styles',
      name: 'styles',
      component: () => import('@app/views/demo/styles'),
    },
    {
      path: '/modal',
      name: 'modal',
      component: () => import('@app/views/demo/modal'),
    },
    {
      path: '/demo-tools',
      name: 'tools',
      component: () => import('@app/views/demo/tools'),
    },
    {
      path: '/bagua',
      name: 'bagua',
      component: () => import('@app/views/demo/bagua'),
    },
    {
      path: '/configTable',
      name: 'configTable',
      component: () => import('@app/views/demo/configList'),
    },
    {
      path: '/configTable/add',
      name: '添加用户',
      hideMenu: true,
      component: () => import('@app/views/demo/configList/add'),
    },
    {
      path: '/configTable/edit/:id',
      name: '编辑用户',
      component: () => import('@app/views/demo/configList/add'),
    },
    {
      path: '/configTable/auth/:id',
      name: '路由权限设置',
      component: () => import('@app/views/demo/configList/auth'),
    },
  ],
};
