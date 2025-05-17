import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface State {
	isInitialized: boolean
	isAuth: boolean
}

const initialState: State = {
	isInitialized: false,
	isAuth: false,
}

export const authSlice = createSlice({
	name: 'authSlice',
	initialState,
	reducers: {
		setAuth(state, action: PayloadAction<boolean>) {
			state.isAuth = action.payload
		},
		setInitialized(state, action: PayloadAction<boolean>) {
			state.isInitialized = action.payload
		},
	},
})

export const { setAuth, setInitialized } = authSlice.actions
export default authSlice.reducer
