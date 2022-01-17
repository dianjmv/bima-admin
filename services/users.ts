import { bimaApi } from './bima';
import { UsersPaginated, UserType } from '../types/UserType';
import { snakeCase } from 'lodash';

const userServices = bimaApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<UsersPaginated, { page?: number; size?: number }>({
      query: (args) => {
        const { page, size } = args;
        return { url: `users/?page=${page}&size=${size}` };
      },
      providesTags: [{ type: 'Users', id: 'LIST' }],
      transformResponse: (response: any) => {
        const userInformationParsed = response?.items?.flatMap((user) => ({
          id: user.id,
          firstName: user.first_name,
          lastName: user.last_name,
          createdAt: user.created_at,
          modifiedAt: user.modified_at,
          email: user.email,
          isAdmin: user.is_admin,
          phone: user.phone,
          username: user.username
        }));
        return {
          items: userInformationParsed,
          total: response.total,
          page: response.page,
          size: response.size
        };
      }
    }),
    setUser: builder.query<UserType, void>({
      query: () => ({
        url: 'security/me'
      }),
      transformResponse: (response: any) => {
        return {
          id: response.id,
          firstName: response.first_name,
          lastName: response.last_name,
          createdAt: response.created_at,
          modifiedAt: response.modified_at,
          email: response.email,
          isAdmin: response.is_admin,
          phone: response.phone,
          username: response.username,
          avatar: response.avatar
        };
      }
    }),
    createUser: builder.mutation<any, UserType>({
      query: (userLogin) => {
        const newUser = Object.fromEntries(
          Object.entries(userLogin).map((element) => [
            snakeCase(element[0]),
            element[1]
          ])
        );
        return {
          url: 'users',
          method: 'POST',
          body: newUser
        };
      }
    })
  })
});
export const { useGetUsersQuery, useSetUserQuery, useCreateUserMutation } =
  userServices;
export default userServices;
