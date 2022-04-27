import {uuidv4,sleep} from '@huxy/utils';

export const fakeFetch = async (params) => {
  // showLoading();
  await sleep();
  // hideLoading();
  return {
    code: 200,
    message: 'success！',
    result: {},
  };
};

export const fakeList = (type, num = 10) => [...Array(num)].map((item, index) => ({id: uuidv4(), type}));
