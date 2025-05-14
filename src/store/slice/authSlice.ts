import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface State {
	role: string
	nameOrganization: string
	notifications: {
		id: number
		street: string
		coordinates: [number, number]
		organizationProvider: string
		status: string
	}[]
}

const initialState: State = {
	role: 'Backbone provider',
	nameOrganization: 'ООО МТС',
	notifications: [],
}

export const authSlice = createSlice({
	name: 'authSlice',
	initialState,
	reducers: {
		setRole(state, action: PayloadAction<string>) {
			state.role = action.payload
		},
		registration(state, action: PayloadAction<string>) {
			state.nameOrganization = action.payload
		},
		addNotification(state, action) {
			state.notifications = action.payload
		},
	},
})

export const { setRole, registration } = authSlice.actions
export default authSlice.reducer
