import { BaseQueryFn } from '@reduxjs/toolkit/query'
import { AxiosError, AxiosRequestConfig } from 'axios'
import axiosInstance from './axiosInstance'

type axiosBaseQueryResponse = BaseQueryFn<
	{
		url: string
		method: AxiosRequestConfig['method']
		data?: AxiosRequestConfig['data']
		params?: AxiosRequestConfig['params']
	},
	unknown,
	unknown
>

export const axiosBaseQuery = (): axiosBaseQueryResponse => {
	return async ({ url, method, data, params }) => {
		try {
			const result = await axiosInstance({ url, method, data, params })
			return { data: result.data }
		} catch (axiosError) {
			const err = axiosError as AxiosError
			return {
				error: {
					status: err.response?.status,
					data: err.response?.data || err.message,
				},
			}
		}
	}
}
