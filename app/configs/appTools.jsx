import {fullScreen, message} from '@huxy/utils';
import Icon from '@app/components/icon';
import report from '@app/apis/report/report';

import FullPage from '@app/components/fullScreen';
import metamask from '@app/assets/images/metamask.svg';
import GithubIcon from '@app/components/icons/github';

const appList = [
  {
    key: 'github',
    name: 'Github',
    icon: <GithubIcon />,
    handler: () => {
      window.open('https://github.com/ahyiru/huxy-admin');
    },
  },
  {
    key: 'metamask',
    name: 'MetaMask',
    icon: <img src={metamask} alt="metamask" />,
    handler: async () => {
      console.log('连接成功！');
    },
  },
];
const toolList = [
  {
    key: 'fullscreen',
    name: '全屏',
    icon: <FullPage onClick={e => {}} />,
    handler: () => {
      fullScreen();
    },
  },
  {
    key: 'screencapture',
    name: '截屏',
    icon: <Icon icon="CameraOutlined" />,
    handler: () => {
      console.log('下载成功！');
    },
  },
];

const AppTools = () => {
  return <div className="app-tools">
    <div className="app-list">
      {
        appList.map(({key, name, icon, handler}) => <span key={key} className="link" onClick={e => {
          e.stopPropagation();
          handler();
          report({
            actionType: 'click',
            category: 'navbar',
            text: 'app-tools',
            value: name,
          });
        }} title={name}>
          <span className="at-icon">{icon}</span>
          <span className="at-name">{name}</span>
        </span>)
      }
    </div>
    <div className="tool-list">
      {
        toolList.map(({key, name, icon, handler}) => <span key={key} className="link" onClick={e => {
          e.stopPropagation();
          handler();
          report({
            actionType: 'click',
            category: 'navbar',
            text: 'app-tools',
            value: name,
          });
        }} title={name}>
          <span className="at-icon">{icon}</span>
          <span className="at-name">{name}</span>
        </span>)
      }
    </div>
  </div>;
};

export default AppTools;
