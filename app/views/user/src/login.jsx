import {useEffect, useState} from 'react';
import {Spinner} from '@huxy/components';
import {storage, message} from '@huxy/utils';
import {useIntls} from '@app/components/intl';
import Input from '@app/components/base/input';
import Button from '@app/components/base/button';
import GithubIcon from '@app/components/githubIcon';

import {isAuthed, goPage} from '@app/utils/utils';

import {apiList, formRules, github_client_id, github_oauth_url} from '../configs';

const {githubFn, loginFn, activeEmailFn} = apiList;
const {customNameRule: nameRule, checkVolid} = formRules;

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
  useEffect(() => {
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
  }, []);

  const githubAuth = async code => {
    setIsPending(true);
    try {
      const {code: msgCode, token} = await githubFn({code});
      if (msgCode === 200) {
        storage.set('token', token);
        // props.router.push('/');
        goPage();
      }
    } catch (err) {}
    setIsPending(false);
  };
  const activeEmail = async query => {
    setIsPending(true);
    try {
      const {code, token, message: msg} = await activeEmailFn({token: query});
      if (code === 200) {
        message.success(msg);
        storage.set('token', token);
        // props.router.push('/');
        goPage();
      }
    } catch (err) {}
    setIsPending(false);
  };

  const onFinish = async values => {
    if (!checkValues(nameRule, setNameMes)) {
      return;
    }
    setIsPending(true);
    try {
      const {code, token, message: msg} = await loginFn(values);
      if (code === 200) {
        message.success(msg);
        storage.set('token', token);
        // props.router.push('/');
        goPage();
      }
    } catch (err) {}
    setIsPending(false);
  };

  const auth = () => {
    location.href = `${github_oauth_url}?client_id=${github_client_id}`;
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
