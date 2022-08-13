import {useState} from 'react';
import {Spinner} from '@huxy/components';
import {storage, message} from '@huxy/utils';

import apiList from '@app/utils/getApis';

import {nameRule, checkVolid} from '@app/utils/rules';

import {useIntls} from '@app/components/intl';

import Input from '@app/components/base/input';
import Button from '@app/components/base/button';
import GithubIcon from '@app/components/githubIcon';

const {loginFn} = apiList;

const thirdLoginStyle = {
  textAlign: 'center',
  fontSize: '3.6rem',
};

const formItem = {
  position: 'relative',
  paddingBottom: '25px',
};
const errorMessage = {
  position: 'absolute',
  color: 'var(--red2)',
  top: '35px',
  left: 0,
};

const Index = props => {
  const getIntls = useIntls();
  const [isPending, setIsPending] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [nameMes, setNameMes] = useState('');
  /* useEffect(() => {
    const {code, token} = props.params ?? {};
    if (code) {
      githubAuth(code);
      return;
    }
    if (token) {
      activeEmail(token);
      return;
    }
    if (isAuthed()) {
      props.router.push('/');
    }
  }, []); */

  const onFinish = async (values, isVistor) => {
    if (!isVistor) {
      if (!checkValues(nameRule, setNameMes)) {
        return;
      }
    }
    setIsPending(true);
    try {
      const {code, token, message: msg} = await loginFn(values);
      if (code === 200) {
        message.success(msg);
        storage.set('token', token);
        // props.router.push('/');
        location.href = '/';
      }
    } catch (err) {
      location.href = '/';
    }
    setIsPending(false);
  };

  const auth = () => {
    const client_id = '61721ef923095e006d18';
    location.href = `https://github.com/login/oauth/authorize?client_id=${client_id}`;
  };

  const checkValues = (rule, setState) => {
    const mes = checkVolid(rule, name);
    if (mes) {
      setState(mes);
      return false;
    }
    return true;
  };

  const nameChange = e => {
    const val = e.target.value;
    setName(val);
    const mes = checkVolid(nameRule, val);
    setNameMes(mes ?? '');
  };

  return (
    <>
      <form name="login" autoComplete="off">
        <div style={formItem}>
          <Input placeholder={getIntls('login.username')} value={name} onChange={nameChange} />
          {nameMes ? <span style={errorMessage}>{nameMes}</span> : null}
        </div>
        <div style={formItem}>
          <Input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder={getIntls('login.password')} autoComplete="new-password" />
        </div>
        <div style={formItem}>
          <Button type="button" className="block info" onClick={() => onFinish({name, password})}>
            {getIntls('login.login')}
          </Button>
        </div>
        <div style={formItem}>
          <Button type="button" className="block" onClick={() => onFinish({name: 'test1', password: 'test1234'}, true)}>
            {getIntls('login.visitor')}
          </Button>
        </div>
      </form>
      <div>
        <div style={{overflow: 'hidden'}}>
          <a style={{float: 'right'}} onClick={e => props.router.push('/user/signup')}>
            {getIntls('login.signup')}
          </a>
          <a style={{float: 'left'}} onClick={e => props.router.push('/user/signup')}>
            {getIntls('login.forgetPwd')}
          </a>
        </div>
        <div className="split-line" style={{padding: '15px 0'}}>
          {getIntls('login.thirdParty')}
        </div>
        <div style={thirdLoginStyle}>
          <a>
            <GithubIcon onClick={() => auth()}/>
          </a>
        </div>
      </div>
      {isPending && <Spinner global />}
    </>
  );
};

export default Index;
