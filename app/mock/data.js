import uuidv4 from '@huxy/utils/src/uuidv4';
import {randTrue} from '@huxy/utils/src/rand';

export const fakeList = (type, num = 10) =>
  [...Array(num)].map((item, index) => ({
    type,
    id: uuidv4(),
    name: `精品小黄瓜${type}-${index}`,
    unitType: randTrue() ? '10公斤/件' : ['件', '包', '斤'],
  }));

export const fakeData = () => [
  {
    id: uuidv4(),
    name: '全部货物',
    value: '',
  },
  {
    id: uuidv4(),
    name: '精品到货欢迎选购',
    value: '1',
    list: fakeList('1', 20),
  },
  {
    id: uuidv4(),
    name: '叶菜类',
    value: '2',
    list: fakeList('2', 16),
  },
  {
    id: uuidv4(),
    name: '根茎类',
    value: '3',
    list: fakeList('3', 48),
  },
  {
    id: uuidv4(),
    name: '菇类',
    value: '4',
    list: fakeList('4', 6),
  },
];
