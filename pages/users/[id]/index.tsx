import Head from 'next/head';
import { useRouter } from 'next/router';
import DashboardLayout from '../../../layouts/DashboardLayout';
export default function EditUser() {
  const router = useRouter();
  console.log(router.query);
  return (
    <DashboardLayout>
      <Head>
        <title>Edit User</title>
      </Head>
    </DashboardLayout>
  );
}
