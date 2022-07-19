import UiI18n from './components/uiI18n';
import Layout from './layout';

const Index = props => <UiI18n useStore={props.useStore}><Layout {...props} /></UiI18n>;

export default Index;

