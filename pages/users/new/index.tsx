import Head from 'next/head';
import DashboardLayout from '../../../layouts/DashboardLayout';
import UserCreation from '../../../components/UserCreation';

export default function CreateUserPage() {
  return (
    <DashboardLayout>
      <Head>
        <title>Users</title>
      </Head>
      <UserCreation />
    </DashboardLayout>
  );
}
