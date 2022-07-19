import Layout from '@huxy/layout';
import useNavList from './components/useNavList';
import useFormatMenu from './components/useFormatMenu';

import * as configs from './configs';

const Index = props => {
  const {store,useStore}=props;
  const i18ns=store.getState('i18ns');
  const [leftList,rightList]=useNavList({store,useStore});
  const menus=useFormatMenu();
  return <Layout title={i18ns?.title} {...props} {...menus} leftList={leftList} rightList={rightList} {...configs} />;
};

export default Index;

