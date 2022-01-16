import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSetUserQuery } from '../../services/bima';
import { getLocalAuthToken } from '../../utils/Utils';
import { useSetUserInfo } from '../../store/auth/authHooks';

export default function AuthenticatedLayout({ children }) {
  const { data, isError, isLoading, refetch } = useSetUserQuery();
  const setUserInfo = useSetUserInfo();
  useEffect(() => {
    refetch();
  }, []);
  useEffect(() => {
    if (data) {
      setUserInfo(data);
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
