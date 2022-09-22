import {storage} from '@huxy/utils';
import apiList from '@app/utils/getApis';
import {prefix} from '@app/configs';

export const goPage = (url = '') => location.href = `${prefix}${url}`;

export const logout = isLogout => {
  !isLogout && apiList.logoutFn?.();
  storage.rm('token');
  goPage('/user/signin');
};

export const isAuthed = () => storage.get('token');
