import logo from '@app/assets/images/logo.png';

import styles from './index.less';

const Index = (props) => {
  const i18ns = props.store.getState('i18ns');
  const {title} = i18ns;

  return (
    <div className={styles.page}>
      <div className={styles['login-panel']}>
        <div className={styles.title}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>
          <h2>{title}</h2>
        </div>
        <div className={styles.content}>{props.children}</div>
      </div>
      <div className={styles.copyright}>
        <a className={styles.copy}>©2022 ihuxy</a>
        <a className={styles.right} href="https://beian.miit.gov.cn/">京ICP备15005899号-2</a>
      </div>
    </div>
  );
};

export default Index;
