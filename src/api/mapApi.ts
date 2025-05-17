import { createApi } from '@reduxjs/toolkit/query/react'
import { IConnectionLink, IPillar, IPillarLink, IAddPillar } from '../interfaces/mapInterfaces'
import { axiosBaseQuery } from './axiosBaseQuery'

export const mapApi = createApi({
	reducerPath: 'mapApi',
	baseQuery: axiosBaseQuery(),
	endpoints: builder => ({
		getPillars: builder.query<IPillar[], void>({
			query: () => ({
				url: '/poles',
				method: 'GET',
			}),
		}),
		getPillarLinks: builder.query<IPillarLink[], void>({
			query: () => ({
				url: '/pole_links',
				method: 'GET',
			}),
		}),
		getConnectionLinks: builder.query<{ connection_links: IConnectionLink[] }, void>({
			query: () => ({
				url: '/connection_links',
				method: 'GET',
			}),
		}),
		addPillar: builder.mutation<IPillar, IAddPillar>({
			query: body => ({
				url: '/poles/',
				method: 'POST',
				data: body,
			}),
		}),
	}),
})

export const {
	useGetPillarsQuery,
	useGetPillarLinksQuery,
	useGetConnectionLinksQuery,
	useAddPillarMutation,
} = mapApi
