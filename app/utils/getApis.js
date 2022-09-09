import fetcher, {dlApi} from '@app/apis/fetcher';
import getApis from '@app/apis/getApis';

const apiList = {};

const getList = async () => {
  const {result} = await getApis();
  return result?.list ?? [];
};

export const getApiFn = async () => {
  let apis = [];
  try {
    apis = await getList();
  } catch (err) {}
  apis.map(api => {
    const {name, fnName, dataType, url, isDl, ...rest} = api;
    const fetchFn = isDl ? dlApi : fetcher;
    const funcName = fnName ?? `${name}Fn`;
    const paramsKey = dataType || (rest.method === 'post' ? 'data' : 'params');
    apiList[funcName] = data => fetchFn({...rest, url: typeof url === 'function' ? url(data) : url, [paramsKey]: data});
  });
  return apiList;
};

export default apiList;
