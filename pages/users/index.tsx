import DashboardLayout from '../../layouts/DashboardLayout';
import Head from 'next/head';
import { Button } from 'evergreen-ui';
import { useRouter } from 'next/router';
import UsersList from '../../components/UsersList';

export default function UsersPage() {
  const router = useRouter();

  return (
    <DashboardLayout>
      <Head>
        <title>Users</title>
      </Head>
      <div className="mt-8">
        <div className="max-w-6xl mx-auto mt-8 px-4 grid grid-cols-2">
          <h2 className="text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8 text-left">
            Users
          </h2>
          <div className="text-right">
            <Button
              marginRight={16}
              appearance="primary"
              onClick={() => router.push('/users/new')}
            >
              Add User
            </Button>
          </div>
        </div>

        <div className="sm:block">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col mt-2">
              <UsersList />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
