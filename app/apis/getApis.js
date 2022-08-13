const apiList = [
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

export default apiList;
