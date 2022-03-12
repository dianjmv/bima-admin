import { bimaApi } from './bima';
import { RolesTypes } from '../types/RolesTypes';

const roleServices = bimaApi.injectEndpoints({
  endpoints: (builder) => ({
    getRoles: builder.query({
      query: () => {
        return { url: `role` };
      }
    })
    // getRole: builder.get(`/roles/:id`).build(),
    // createRole: builder.post(`/roles`).build(),
    // updateRole: builder.put(`/roles/:id`).build(),
    // deleteRole: builder.delete(`/roles/:id`).build()
  })
});
export const { useGetRolesQuery } = roleServices;

export default roleServices;
