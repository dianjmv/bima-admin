import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSetUserQuery } from '../../services/bima';
import { useDispatch } from 'react-redux';
import { logout, setUserInfo } from '../../store/slices/auth';
import { getLocalAuthToken } from '../../utils/Utils';

export default function AuthenticatedLayout({ children }) {
  const { data, isError, isLoading, error, refetch } = useSetUserQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    refetch();
  }, []);
  useEffect(() => {
    if (data) {
      dispatch(setUserInfo(data));
    }
    if (error) {
      dispatch(logout());
    }
  }, [isError, data, isLoading]);
  const router = useRouter();
  console.log(error);
  useEffect(() => {
    const authLocal = getLocalAuthToken();
    if (!authLocal) router.push('/auth/login');
  }, []);
  return (
    <div className={'h-screen bg-gray-100 overflow-y-auto'}>{children}</div>
  );
}
