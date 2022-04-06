import storage from '@huxy/utils/src/storage';
import {sysLang} from '@huxy/utils/src/sysInfo';

const getLang = () => storage.get('language') || sysLang();

export default getLang;
