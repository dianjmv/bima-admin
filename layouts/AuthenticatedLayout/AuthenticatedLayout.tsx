import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getLocalAuthToken } from '../../utils/Utils';
import { useLogout, useSetUserInfo } from '../../store/auth/authHooks';
import { get } from 'lodash';
import { useSetUserQuery } from '../../services/users';

export default function AuthenticatedLayout({ children }) {
  const { data, isError, isLoading, refetch, error } = useSetUserQuery();
  const setUserInfo = useSetUserInfo();
  const logout = useLogout();
  console.log('AuthenticatedLayout', error);
  useEffect(() => {
    refetch();
  }, []);
  useEffect(() => {
    if (data) {
      setUserInfo(data);
    }
    const status = get(error, 'status');
    if (status && status === 401) {
      logout();
    }
  }, [isError, data, isLoading]);
  const router = useRouter();
  useEffect(() => {
    const authLocal = getLocalAuthToken();
    if (!authLocal) router.push('/auth/login');
  }, []);
  return (
    <div className={'h-screen bg-gray-100 overflow-y-auto'}>{children}</div>
  );
}
