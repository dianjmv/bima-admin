import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AuthenticatedLayout({ children }) {
  const router = useRouter();
  useEffect(() => {
    const authLocal = localStorage.getItem('bima_security');
    if (!authLocal) router.push('/auth/login');
  }, []);
  return <>{children}</>;
}
