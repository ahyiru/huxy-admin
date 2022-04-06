import staticRoutes from './routerComp/staticRoutes';
import traverItem from '@huxy/utils/src/traverItem';

const whiteList = [];

traverItem((item, parent) => {
  const path = `${parent.map((v) => v.path).join('')}${item.path}`;
  whiteList.push(path);
})(staticRoutes);

export default whiteList;