import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface State {
	role: number
}

const initialState: State = {
	role: 1,
}

export const authSlice = createSlice({
	name: 'authSlice',
	initialState,
	reducers: {
		setRole(state, action: PayloadAction<number>) {
			state.role = action.payload
		},
	},
})

export const { setRole } = authSlice.actions
export default authSlice.reducer
