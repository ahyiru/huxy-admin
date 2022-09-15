import Page from '@app/views/page';

export const configRoutes = {
  path: '/layout',
  name: '框架配置',
  icon: 'ico-layout',
  component: () => import('@app/views/layout'),
};
export const profileRoutes = {
  path: '/profile',
  name: '个人中心',
  title: '个人中心',
  hideMenu: true,
  component: props => <h1>{<h1>{props.inputPath} is comming...</h1>}</h1>,
};
export const pageRoutes = {
  path: '/page1',
  name: '一级菜单',
  icon: 'ico-loop',
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
          icon: 'ico-arrow-right',
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
      icon: 'ico-time',
      component: Page,
    },
  ],
};
export const playgroundRoutes = {
  path: '/playground',
  name: ' Playground',
  icon: 'ico-knot',
  children: [
    {
      path: '/icons',
      name: 'icons',
      icon: 'ico-music',
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
