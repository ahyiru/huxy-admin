// import {notAdmin} from '@app/utils/isAdmin';

const routes = {
  path: '/payer',
  name: '会员管理',
  icon: 'AccountBookOutlined',
  hideMenu: true,
  children: [
    {
      path: '/count',
      name: '包次会员',
      icon: 'FundViewOutlined',
      children: [
        {
          path: '/member',
          name: '开通会员',
          icon: 'ShoppingOutlined',
          component: () => import('./src/count/member'),
        },
        {
          path: '/order',
          name: '订单列表',
          icon: 'AuditOutlined',
          component: () => import('./src/count/order'),
        },
        {
          path: '/pay',
          name: '支付',
          icon: 'DollarOutlined',
          hideMenu: true,
          component: () => import('./src/count/pay'),
        },
      ],
    },
  ],
};

export default routes;
