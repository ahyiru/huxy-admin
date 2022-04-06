import {useRoute} from '@huxy/router';
import {useWinResize} from '@huxy/use/src/useViewSize';
import Anico from '@huxy/components/src/anico';

const CustomCollapse = (props) => {
  const {useStore} = useRoute();
  const {width} = useWinResize();
  const [collapsed, setCollapsed] = useStore('huxy-collapse');
  return width < 1024 ? (
    <a {...props} onClick={(e) => setCollapsed(!collapsed)}>
      <Anico type={collapsed ? 'right' : ''} />
    </a>
  ) : null;
};

export default CustomCollapse;
