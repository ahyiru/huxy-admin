import uuidv4 from '@huxy/utils/src/uuidv4';
import sleep from '@huxy/utils/src/sleep';

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
