import {FullPage} from '@huxy/components';

const Index = ({panel}) => <FullPage panel={panel} fullIcon={props => <i className="ico-plus" {...props} />} exitIcon={props => <i className="ico-minus" {...props} />} />;

export default Index;
