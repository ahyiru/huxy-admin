import {useState} from 'react';
import {TabHeader, Drawer} from '@huxy/components';
import {useDebounce} from '@huxy/use';
import {storage, copyToClipboard, message} from '@huxy/utils';
import {Row, Col} from '@app/components/row';
// import Panel from '@app/components/panel';
import {sizeRules} from '@app/utils/sizeRules';
import getThemeList from '@app/configs/theme';
import {useMenuTypeStore, useThemeStore} from '@app/store/stores';
import {useIntls} from '@app/components/intl';
import Input from '@app/components/base/input';
import Button from '@app/components/base/button';
import Radio from '@app/components/base/radio';
import Select from '@app/components/base/select';

const delay = 500;

const labelStyle = {
  display: 'block',
  textAlign: 'right',
  lineHeight: '32px',
};

const getSizeList = list =>
  Object.keys(list).map(key => {
    const size = list[key];
    const value = size.replace(/[^0-9]/gi, '') - 0;
    const unit = size.replace(value, '');
    const units = Object.keys(sizeRules[key]);
    const range = sizeRules[key][unit];
    return {
      key,
      value,
      unit,
      units,
      min: range[0],
      max: range[1],
    };
  });

const tabs = i18nCfg => [
  {
    key: 'layout',
    value: i18nCfg.layoutDesign,
  },
  {
    key: 'size',
    value: i18nCfg.sizeDesign,
  },
  {
    key: 'color',
    value: i18nCfg.colorDesign,
  },
];

const Index = props => {
  const getIntls = useIntls();
  const themeLang = getIntls('theme', {});
  const i18nCfg = getIntls('main.layout', {});
  const [theme, setTheme] = useThemeStore();
  const [menuType, setMenuType] = useMenuTypeStore('vertical');

  const [active, setActive] = useState('layout');
  const [visible, setVisible] = useState(false);

  const [size, setSize] = useState(10);
  const changeFontSize = useDebounce(value => document.documentElement.style.setProperty('--rootSize', value), delay);
  const changeLayout = useDebounce((value, save = false) => {
    const newTheme = {
      name: 'custom',
      key: 'custom',
      list: value,
    };
    setTheme(newTheme);
    if (save) {
      storage.set('theme', newTheme);
      message.success(i18nCfg.save_cfg_msg);
    }
  }, delay);

  const saveConfig = () => {
    changeLayout(theme.list, true);
    setVisible(false);
  };
  const copyConfig = () => {
    copyToClipboard(JSON.stringify(theme.list));
    setVisible(false);
    message.success(i18nCfg.copy_cfg_msg);
  };

  const changeFont = value => {
    setSize(value);
    changeFontSize(`${(value * 100) / 16}%`);
  };
  const selectTheme = current => {
    storage.set('theme', current);
    setTheme(current);
  };

  const changeSizes = (key, value, unit) => {
    // e.persist();
    theme.list.sizes[key] = `${value || ''}${unit}`;
    changeLayout(theme.list);
  };
  const changeUnit = (key, unit) => {
    const value = unit === 'px' ? 1200 : 100;
    theme.list.sizes[key] = `${value}${unit}`;
    changeLayout(theme.list);
  };

  const changeColors = (e, key) => {
    const {value} = e.target;
    theme.list.colors[key] = value;
    changeLayout(theme.list);
  };

  const comps = {
    layout: (
      <>
        <div className="vertical-item">
          <label>{i18nCfg.menuType}</label>
          <Radio
            style={{marginTop: '5px'}}
            value={menuType}
            onChange={value => setMenuType(value)}
            options={[
              {value: 'vertical', label: getIntls('main.layout.vertical')},
              {value: 'horizontal', label: getIntls('main.layout.horizontal')},
              {value: 'compose', label: getIntls('main.layout.compose')},
            ]}
          />
        </div>
        <div className="vertical-item">
          <label>{i18nCfg.fontSize}</label>
          <Input type="range" min={6} max={16} value={size} onChange={e => changeFont(e.target.value)} />
        </div>
        <Row className="select-item">
          {getThemeList(getIntls).map(item => (
            <Col key={item.key} span={6} onClick={e => selectTheme(item)}>
              <a className={`item${item.key === theme.key ? ' selected' : ''}`}>{item.name}</a>
            </Col>
          ))}
        </Row>
      </>
    ),
    size: getSizeList(theme.list.sizes).map(({key, value, unit, units, min, max}) => (
      <Row key={key} gutter={[10, 10]}>
        <Col span={5}>
          <span style={labelStyle}>{themeLang[key]}：</span>
        </Col>
        <Col span={6}>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Input type="number" min={min} max={max} value={value} onChange={e => changeSizes(key, e.target.value, unit)} />
            {units.length > 1 ? (
              <Select value={unit} onChange={e => changeUnit(key, e.target.value)} options={units.map(u => ({value: u, label: u}))} />
            ) : (
              <div style={{padding: 4, fontSize: '1.4rem'}}>{units[0]}</div>
            )}
          </div>
        </Col>
      </Row>
    )),
    color: Object.keys(theme.list.colors).map(key => (
      <Row key={key} gutter={[10, 10]}>
        <Col span={5}>
          <span style={labelStyle}>{themeLang[key]}：</span>
        </Col>
        <Col span={6}>
          <Input type="color" value={theme.list.colors[key]} onChange={e => changeColors(e, key)} />
        </Col>
      </Row>
    )),
  };

  return (
    <>
      <a className={visible ? 'active' : ''} onClick={e => setVisible(true)}>
        <span className="ico-block" />
      </a>
      <Drawer
        close={() => setVisible(false)}
        open={visible}
        className="configs-drawer"
        width="300px"
        header={
          <>
            <Button onClick={() => saveConfig()}>{i18nCfg.saveConfig}</Button>
            <Button type="primary" onClick={() => copyConfig()} style={{marginLeft: 12}}>
              {i18nCfg.copyConfig}
            </Button>
          </>
        }
      >
        <TabHeader flex tabs={tabs(i18nCfg)} switchTab={key => setActive(key)} />
        <div className="layout-setting" style={{padding: '15px 0'}}>
          {comps[active]}
        </div>
      </Drawer>
    </>
  );
};
export default Index;
