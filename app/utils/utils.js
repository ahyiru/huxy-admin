import {storage} from '@huxy/utils';
import apiList from '@app/utils/getApis';
import {browserRouter} from '@app/configs';

export const logout = isLogout => {
  !isLogout && apiList.logoutFn?.();
  storage.rm('token');
  location.href = `${browserRouter ? '' : '#'}/user/signin`;
};

export const isAuthed = () => storage.get('token');
