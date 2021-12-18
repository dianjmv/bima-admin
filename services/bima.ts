import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginType } from '../types/LoginType';
import { CredentialsType } from '../types/CredentialsType';

export const bimaApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    loginUser: builder.mutation<CredentialsType, LoginType>({
      query: (userLogin) => {
        const user = `username=${userLogin.username}&password=${userLogin.password}`;
        return {
          url: 'security/token',
          method: 'POST',
          body: user,
          headers: { 'content-type': 'application/x-www-form-urlencoded' }
        };
      }
    }),
    getUsers: builder.query({
      query: () => 'users',
      providesTags: [{ type: 'User', id: 'LIST' }]
    })
  })
});
export const { useLoginUserMutation, useGetUsersQuery } = bimaApi;
