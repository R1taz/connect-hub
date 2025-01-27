import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../constants/constants'

export const mapApi = createApi({
	reducerPath: 'mapApi',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: builder => ({
		getPillars: builder.query({
			query: () => `/poles`,
		}),
	}),
})

export const { useGetPillarsQuery } = mapApi
