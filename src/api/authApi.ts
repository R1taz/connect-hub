import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from './axiosBaseQuery'
import { UserData } from '../interfaces/usersInterfaces'
import { IOrganization, RequestRegistration } from '../interfaces/authInterfaces'

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: axiosBaseQuery(),
	endpoints: builder => ({
		login: builder.mutation<{ auth_token: string }, { username: string; password: string }>({
			query: body => ({
				url: '/auth/token/login',
				method: 'POST',
				data: body,
			}),
		}),
		logout: builder.mutation<void, void>({
			query: () => ({
				url: '/auth/token/logout',
				method: 'POST',
			}),
		}),
		registration: builder.mutation<void, RequestRegistration>({
			query: body => ({
				url: '/auth/users/',
				method: 'POST',
				data: body,
			}),
		}),
		authMe: builder.query<UserData, void>({
			query: () => ({
				url: '/auth/users/me',
				method: 'GET',
			}),
		}),
		getOrganizations: builder.query<IOrganization[], void>({
			query: () => ({
				url: '/organizations',
				method: 'GET',
			}),
		}),
		getOrganizationById: builder.query<IOrganization, number>({
			query: id => ({
				url: `/organizations/${id}`,
				method: 'GET',
			}),
		}),
	}),
})

export const {
	useLoginMutation,
	useLogoutMutation,
	useRegistrationMutation,
	useAuthMeQuery,
	useLazyAuthMeQuery,
	useGetOrganizationsQuery,
	useLazyGetOrganizationByIdQuery,
} = authApi
