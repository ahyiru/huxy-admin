import layoutRoutes from '@app/views/layout/routes';
import pageRoutes from '@app/views/page/routes';
import playgroundRoutes from '@app/views/playground/routes';

const profileRoutes = {
  path: '/profile',
  name: '个人中心',
  title: '个人中心',
  hideMenu: true,
  component: props => <h1>{<h1>{props.inputPath} is comming...</h1>}</h1>,
};

export default [layoutRoutes, pageRoutes, playgroundRoutes, profileRoutes];
