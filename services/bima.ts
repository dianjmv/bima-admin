import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginType } from '../types/LoginType';
import { CredentialsType } from '../types/CredentialsType';
import { UserType } from '../types/UserType';
import { getLocalAuthToken } from '../utils/Utils';

export const bimaApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/',
    prepareHeaders: (headers) => {
      const bimaSecurity = getLocalAuthToken();
      const token = bimaSecurity?.access_token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
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
    getUsers: builder.query<UserType[], void>({
      query: () => ({
        url: 'users'
      }),
      providesTags: [{ type: 'User', id: 'LIST' }],
      transformResponse: (response: any) => {
        return response?.items?.flatMap((user) => ({
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
      }
    }),
    setUser: builder.query<UserType, void>({
      query: () => ({
        url: 'security/me'
      }),
      providesTags: [{ type: 'User', id: 'LIST' }],
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
          username: response.username
        };
      }
    })
  })
});
export const { useLoginUserMutation, useGetUsersQuery, useSetUserQuery } =
  bimaApi;
