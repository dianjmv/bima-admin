import { useGetUsersQuery } from '../../services/bima';
import { useEffect, useState } from 'react';
import DataGrid from '../DataGrid';
import {useRouter} from "next/router";
import {UserType} from "../../types/UserType";




const columns = [
  {
    accessor: 'firstName',
    Header: 'First name'
  },
  {
    accessor: 'lastName',
    Header: 'Last name'
  },
  {
    accessor: 'email',
    Header: 'Email'
  },
  {
    accessor: 'phone',
    Header: 'Phone Number'
  },
  {
    accessor: 'username',
    Header: 'Username'
  }
];

export default function UsersList() {
  const router = useRouter();
  const [actualPage, setActualPage] = useState(1);
  const { data, isLoading, isError, error, isFetching, refetch } =
    useGetUsersQuery({
      page: actualPage,
      size: 10
    });
  useEffect(() => {
    if (isError) {
      console.error(error);
    }
  }, [isLoading, isError, data, isFetching]);

  function nextPage() {
    setActualPage(actualPage + 1);
    refetch();
  }
  function previousPage() {
    setActualPage(actualPage - 1);
    refetch();
  }
  function deleteUser(user: UserType) {
    console.log(user);
  }
  async function editUser(user: UserType) {
    console.log(user);
    await router.push(`/users/${user.id}`);
  }
  return (
    <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg h-full">
      {!isLoading && data ? (
        <DataGrid
          columns={columns}
          data={data.items}
          page={data.page}
          size={data.size}
          total={data.total}
          nextPage={nextPage}
          previousPage={previousPage}
          onEdit={editUser}
          onDelete={deleteUser}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
