import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://backend.msmnorth.com/api/admin',
    credentials: 'include',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Zones', 'Categories', 'Orders'], // Tags to manage cache invalidation

  endpoints: (builder) => ({

    signup: builder.mutation({
      query: (data) => ({
        url: '/signup',
        method: 'POST',
        body: data,
      }),
    }),

    signin: builder.mutation({
      query: (data) => ({
        url: '/signin',
        method: 'POST',
        body: data,
      }),
    }),

    signout: builder.mutation({
      query: () => ({
        url: '/signout',
        method: 'POST',
      }),
    }),

    fetchAdmin: builder.query({
      query: () => '/profile',
    }),



    fetchUsers: builder.query({
      query: () => '/users',
    }),

    fetchZones: builder.query({
      query: () => '/all-zones',
      providesTags: ['Zones'],
    }),

    addZone: builder.mutation({
      query: (zone) => ({
        url: '/add-zone',
        method: 'POST',
        body: zone,
      }),
      invalidatesTags: ['Zones'],
    }),

    deleteZone: builder.mutation({
      query: (id) => ({
        url: `/delete-zone/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Zones'],
    }),

    fetchCategories: builder.query({
      query: () => '/all-categories',
      providesTags: ['Categories'],
    }),

    addCategory: builder.mutation({
      query: (formData) => ({
        url: '/add-category',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Categories'],
    }),

    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/delete-category/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Categories'],
    }),

    fetchOrders: builder.query({
      query: () => '/all-orders',
      providesTags: ['Orders'],
    }),

    generateImage: builder.mutation({
      query: (name) => ({
        url: '/ai-image',
        method: 'POST',
        body: { name },
      }),
    }),


  }),
});

export const {
  useSignupMutation,
  useSigninMutation,
  useSignoutMutation,
  useFetchAdminQuery,
  useFetchUsersQuery,
  useFetchZonesQuery,
  useAddZoneMutation,
  useDeleteZoneMutation,
  useFetchCategoriesQuery,
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useFetchOrdersQuery,
  useGenerateImageMutation,
} = adminApi;
