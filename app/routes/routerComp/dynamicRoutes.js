import Page from '@app/views/page';

export const appRoutes = {
  path: '/apps',
  name: ' App',
  component: props => <h1>首页</h1>,
};

export const pageRoutes = {
  path: '/page1',
  name: '一级菜单',
  icon: 'FileTextOutlined',
  children: [
    {
      path: '/page1-1',
      name: '二级菜单1',
      component: Page,
    },
    {
      path: '/page1-2',
      name: '二级菜单2',
      children: [
        {
          path: '/page1-2-1',
          name: '三级菜单1',
          icon: 'RobotOutlined',
          component: Page,
        },
        {
          path: '/page1-2-2',
          name: '三级菜单2',
          children: [
            {
              path: '/page1-2-2-1',
              name: '四级菜单1',
              component: Page,
            },
            {
              path: '/page1-2-2-2',
              name: '四级菜单1-disabled',
              component: Page,
              linkProps: {
                disabled: true,
              },
            },
            {
              path: '/page1-2-2-3',
              name: '四级菜单3-_blank',
              component: Page,
              linkProps: {
                target: '_blank',
              },
            },
          ],
        },
      ],
    },
    {
      path: '/page1-3',
      name: '二级菜单3',
      icon: 'RobotOutlined',
      component: Page,
    },
  ],
};
export const playgroundRoutes = {
  path: '/playground',
  name: ' Playground',
  icon: 'ConsoleSqlOutlined',
  children: [
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
      path: '/tools',
      name: 'tools',
      component: () => import('@app/views/demo/tools'),
    },
  ],
};
