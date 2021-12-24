import Head from 'next/head';
import DashboardLayout from '../../../layouts/DashboardLayout';
import UserCreation from '../../../components/UserCreation';

export default function CreateUserPage() {
  return (
    <DashboardLayout>
      <Head>
        <title>Users</title>
      </Head>
      <div className="mt-8">
        <h2 className="max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
          Create new user
        </h2>
        <div className="sm:block">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col mt-2">
              <div className="align-middle min-w-full overflow-x-auto overflow-hidden sm:rounded-lg">
                <UserCreation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
