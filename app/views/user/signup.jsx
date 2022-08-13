import {useState} from 'react';
import {message} from '@huxy/utils';
import apiList from '@app/utils/getApis';
import {nameRule, emailRule, passwordRule, confirmRule, checkVolid} from '@app/utils/rules';
import {useIntls} from '@app/components/intl';
import Input from '@app/components/base/input';
import Button from '@app/components/base/button';

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

const confirmMessage = '两次输入的密码不一致!';

const Index = props => {
  const getIntls = useIntls();
  const [name, setName] = useState({value: '', message: ''});
  const [email, setEmail] = useState({value: '', message: ''});
  const [password, setPassword] = useState({value: '', message: ''});
  const [confirm, setConfirm] = useState({value: '', message: ''});
  const [hasSignup, setHasSignup] = useState(false);

  const onFinish = async values => {
    const {code, message: msg} = await apiList.signupFn(values);
    if (code === 200) {
      message.success(msg);
      setHasSignup(true);
      // props.router.push('/');
      // location.href='/';
    }
  };
  const nameChange = value => {
    const message = checkVolid(nameRule, value);
    setName({value, message});
  };
  const emailChange = value => {
    const message = checkVolid(emailRule, value);
    setEmail({value, message});
  };
  const passwordChange = (value, isOnchange = true) => {
    const message = checkVolid(passwordRule, value);
    setPassword({value, message});
    const confirmValue = confirm.value;
    if (isOnchange && confirmValue) {
      if (confirmValue !== value) {
        setConfirm({value: confirmValue, message: confirmMessage});
      } else {
        setConfirm({value: confirmValue, message: ''});
      }
    }
  };
  const confirmChange = value => {
    const message = value ? (value === password.value ? '' : confirmMessage) : '';
    setConfirm({value, message});
  };
  const hasError = name.message || email.message || password.message || confirm.message;
  const hasEmpty = !name.value || !email.value || !password.value || !confirm.value;
  return !hasSignup ? (
    <>
      <form name="signup" autoComplete="off">
        <div style={formItem}>
          <Input value={name.value} placeholder={getIntls('login.username')} onChange={e => nameChange(e.target.value)} />
          {name.message ? <span style={errorMessage}>{name.message}</span> : null}
        </div>
        <div style={formItem}>
          <Input value={email.value} placeholder={getIntls('login.email')} onChange={e => emailChange(e.target.value)} />
          {email.message ? <span style={errorMessage}>{email.message}</span> : null}
        </div>
        <div style={formItem}>
          <Input type="password" value={password.value} onChange={e => passwordChange(e.target.value)} placeholder={getIntls('login.password')} autoComplete="new-password" />
          {password.message ? <span style={errorMessage}>{password.message}</span> : null}
        </div>
        <div style={formItem}>
          <Input type="password" value={confirm.value} onChange={e => confirmChange(e.target.value)} placeholder={getIntls('login.confirmPwd')} autoComplete="new-password" />
          {confirm.message ? <span style={errorMessage}>{confirm.message}</span> : null}
        </div>
        <div style={formItem}>
          <Button disabled={hasError || hasEmpty} type="button" className="block info" onClick={e => onFinish({name: name.value, email: email.value, password: password.value})}>
            {getIntls('login.signup')}
          </Button>
        </div>
      </form>
      <div>
        <div style={{textAlign: 'center'}}>
          <a onClick={e => props.router.push('/user/signin')}>
            <span className="ico-left" style={{paddingRight: 4}} />
            <span style={{verticalAlign: 'bottom'}}>{getIntls('login.backLogin')}</span>
          </a>
        </div>
      </div>
    </>
  ) : (
    <div style={{background: '#ccc', borderRadius: '4px'}}>
      <div>
        <h2>{getIntls('login.signup_msg')}</h2>
        <h4>{getIntls('login.signup_sub_msg')}</h4>
        <Button className="info" onClick={() => (location.href = '/')}>
          {getIntls('login.backLogin')}
        </Button>
      </div>
    </div>
  );
};

export default Index;
