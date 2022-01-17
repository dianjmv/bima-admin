import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginType } from '../types/LoginType';
import { CredentialsType } from '../types/CredentialsType';
import { getLocalAuthToken } from '../utils/Utils';

export const bimaApi = createApi({
  refetchOnMountOrArgChange: 30,
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
  tagTypes: ['Users'],
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
    })
  })
});
export const { useLoginUserMutation } = bimaApi;
