import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slice/authSlice'
import mapSlice from './slice/mapSlice'
import { mapApi } from '../api/mapApi'

export const store = configureStore({
	reducer: {
		authSlice,
		mapSlice,
		[mapApi.reducerPath]: mapApi.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat([mapApi.middleware]),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
