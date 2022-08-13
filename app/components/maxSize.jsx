import {MaxSize} from '@huxy/components';

const Index = ({panel}) => <MaxSize panel={panel} target="page-container" fullIcon={props => <i className="ico-minus" {...props} />} exitIcon={props => <i className="ico-close" {...props} />} />;

export default Index;
