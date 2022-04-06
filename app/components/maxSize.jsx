import {PlusSquareOutlined, MinusSquareOutlined} from '@ant-design/icons';
import MaxSize from '@huxy/components/src/maxSize';

const Index = ({panel}) => <MaxSize panel={panel} target="page-container" fullIcon={PlusSquareOutlined} exitIcon={MinusSquareOutlined} />;

export default Index;
