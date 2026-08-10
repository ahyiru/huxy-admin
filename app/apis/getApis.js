import fetcher from './fetcher';
import {defProject} from '@app/configs';

// const getApis = () => fetcher({url: '/apis/list', params: {projectId: defProject?.id, current: 1, size: 100}});

const apiList = projectId => [
  {
    name: 'login',
    url: '/auth/login',
    method: 'post',
  },
  {
    name: 'logout',
    url: '/auth/logout',
  },
  {
    name: 'signup',
    url: '/auth/signup',
    method: 'post',
  },
  {
    name: 'profile',
    url: '/users/profile',
    method: 'get',
  },
  {
    name: 'allUser',
    url: '/users/allUser',
  },
];

const getApis = () => ({result: {list: apiList(defProject?.id)}});

const apis = (await getApis()).result?.list ?? [];

export default apis;
