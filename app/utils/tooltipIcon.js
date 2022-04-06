import {Tooltip} from 'antd';
import isObject from '@huxy/utils/src/isObject';
import fixIcons from './fixIcons';
const tooltipIcon = (icon) => {
  if (isObject(icon)) {
    return <Tooltip title={icon.label}>{fixIcons(icon.icon)}</Tooltip>;
  }
  return fixIcons(icon);
};

export default tooltipIcon;