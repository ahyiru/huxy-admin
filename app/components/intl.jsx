import {useRoute} from '@huxy/router';

const Intls = ({keys, children}) => {
  const {store} = useRoute();
  const i18ns = store.getState('i18ns');
  return i18ns?.getValue(keys) ?? children ?? '';
};

export default Intls;
