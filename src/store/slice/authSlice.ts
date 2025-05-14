import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface State {
	currentNameOrganization: string
	role: number
	organization: string
	notifications: {
		id: number
		street: string
		coordinates: [number, number]
		organizationProvider: string
		status: string
	}[]
}

const initialState: State = {
	currentNameOrganization: 'ООО МТС',
	role: 0,
	organization: '',
	notifications: [],
}

export const authSlice = createSlice({
	name: 'authSlice',
	initialState,
	reducers: {
		setRole(state, action: PayloadAction<number>) {
			state.role = action.payload
		},
		registration(state, action: PayloadAction<string>) {
			state.organization = action.payload
		},
		addNotification(state, action) {
			state.notifications = action.payload
		},
	},
})

export const { setRole, registration } = authSlice.actions
export default authSlice.reducer
