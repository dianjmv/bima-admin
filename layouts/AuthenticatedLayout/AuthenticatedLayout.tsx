import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSetUserQuery } from '../../services/bima';
import { useDispatch } from 'react-redux';
import {logout, setUserInfo} from '../../store/slices/auth';

export default function AuthenticatedLayout({ children }) {
  const { data, isError, isLoading } = useSetUserQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isError) {
      dispatch(logout());
    }
    if (data) {
      dispatch(setUserInfo(data));
    }
  }, [isError, data, isLoading]);
  const router = useRouter();
  useEffect(() => {
    const authLocal = localStorage.getItem('bima_security');
    if (!authLocal) router.push('/auth/login');
  }, []);
  return (
    <div className={'h-screen bg-gray-100 overflow-y-auto'}>{children}</div>
  );
}
