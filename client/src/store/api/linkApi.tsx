import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICreateLinkDto, ILink } from '../../types';


export const linkApi = createApi({
  reducerPath: 'trelloApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  tagTypes: ['Simple'],
  endpoints: (builder) => ({
    getAllLinks: builder.query<ILink[], void>({
      query: () => ({
        url: '/link',
        method: 'GET',
      }),
      providesTags: ['Simple'],
    }),
    createLink: builder.mutation<ILink, ICreateLinkDto>({
      query: (createLinkDto) => ({
        url: '/link',
        method: 'POST',
        body: createLinkDto,
      }),
      invalidatesTags: ['Simple'],
    }),
    findOneLink: builder.query<ILink, number>({
      query: (id) => ({
        url: `/link/${id}`,
        method: 'POST',
      })
    }),
    removeLink: builder.mutation<void, number>({
      query: (id) => ({
        url: `/link/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Simple'],
    }),
  })
});

export const {
  useLazyGetAllLinksQuery,
  useCreateLinkMutation,
  useRemoveLinkMutation,
} = linkApi;
