import {phoneIcon} from '@common/icons';
import {fakeFetch} from './utils';
import {fakeData} from './data';
import {store} from '../components/useStore';

import {uuidv4,randItem} from '@huxy/utils';

const userInfo = [];

const shopInfo = [
  {
    id: uuidv4(),
    title: '四季美景商行',
    avatar: phoneIcon,
    name: '王叔',
    tel: 15992652285,
    addr: '武汉四季美商行地方我去文1002-2008',
    datadb: fakeData(),
  },
];
const statusList = ['pending', 'received', 'cashed', 'cancelled'];

export const setUserInfo = async (info) => {
  const res = await fakeFetch();
  userInfo.push(info);
  store.setState({userInfo});
  return {
    ...res,
    result: info,
  };
};

export const getUserInfo = async (code) => {
  const res = await fakeFetch();
  const infos = store.getState('userInfo');
  const userInfo = infos.find((item) => item.code === code);
  return {
    ...res,
    result: userInfo,
  };
};

export const getShopInfo = async (id) => {
  const res = await fakeFetch();
  return {
    ...res,
    result: shopInfo[0],
  };
};

export const getOrderTypes = async (uid) => {
  const res = await fakeFetch();
  const {datadb = []} = shopInfo.find((item) => item.id === uid) || {};
  return {
    ...res,
    result: datadb.map(({list, ...rest}) => rest),
  };
};

export const getOrderListByType = async ({type, pageSize, pageNum, name, uid}) => {
  const res = await fakeFetch();
  const {datadb = []} = shopInfo.find((item) => item.id === uid) || {};
  const index = pageSize * (pageNum - 1);
  let temp = [];
  if (type) {
    temp = datadb.find((item) => item.value === type)?.list ?? [];
  } else {
    datadb.map(({list}) => temp.push(...(list || [])));
  }
  const reg = new RegExp(name, 'gi');
  const list = temp.filter((item) => item.name.toString().match(reg)).slice(index, index + pageSize);
  return {
    ...res,
    result: {
      pageNum,
      pageSize,
      total: temp.length,
      list,
    },
  };
};

export const getOrderList = async (uid) => {
  const res = await fakeFetch();
  const orderInfo = store.getState('orderInfo') || [];
  const curOrderInfo = orderInfo.filter((item) => item.uid === uid);
  return {
    ...res,
    result: curOrderInfo,
  };
};

export const getOrderInfo = async ({id, uid}) => {
  const res = await fakeFetch();
  const orderInfo = store.getState('orderInfo') || [];
  const curOrderInfo = orderInfo.filter((item) => item.uid === uid);
  const curInfo = curOrderInfo.find((item) => item.id === id) || {};
  return {
    ...res,
    result: curInfo,
  };
};

export const cancelOrder = async ({id, uid}) => {
  const res = await fakeFetch();
  const orderInfo = store.getState('orderInfo') || [];
  const curOrderInfo = orderInfo.filter((item) => item.uid === uid);
  const curInfo = curOrderInfo.find((item) => item.id === id);
  if (curInfo) {
    curInfo.status = 'cancelled';
    store.setState({orderInfo: [...orderInfo]});
    return {
      ...res,
      result: curInfo,
    };
  }
  return res;
};

export const setOrderInfo = async (data) => {
  const res = await fakeFetch();
  const oldData = store.getState('orderInfo') || [];
  const curInfo = {orderTime: +new Date(), ...data, id: uuidv4(), status: randItem(statusList), code: Math.random().toString().slice(2, 10)};
  const newData = [...oldData, curInfo];
  store.setState({orderInfo: newData});
  return {
    ...res,
    result: curInfo,
  };
};
