import {useState, useEffect} from 'react';
import apiList from '@app/utils/getApis';
import {logout} from '@app/utils/utils';
import {userInfoStore} from '@app/store/stores';

const useGetProfile = () => {
  const {profileFn} = apiList;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getProfile = async () => {
      setLoading(true);
      try {
        const {code, result} = (await profileFn()) || {};
        setLoading(false);
        if (!result) {
          logout(true);
          return;
        }
        if (code === 200) {
          userInfoStore.setState(result);
        }
      } catch (err) {
        setLoading(false);
      }
    };
    getProfile();
  }, []);
  return [loading];
};

export default useGetProfile;
