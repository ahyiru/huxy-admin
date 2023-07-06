import layoutRoutes from '@app/views/layout/routes';
import payerRoutes from '@app/views/payer/routes';
import messageRoutes from '@app/views/message/routes';
import playgroundRoutes from '@app/views/playground/routes';

const profileRoutes = {
  path: '/profile',
  name: '个人中心',
  title: '个人中心',
  hideMenu: true,
  component: () => import('@app/views/user/src/profile'),
};

export default [layoutRoutes, payerRoutes, playgroundRoutes, ...messageRoutes, profileRoutes];
