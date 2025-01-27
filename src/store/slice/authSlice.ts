import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface State {
	currentNameOrganization: string
	role: number
	login: string
	password: string
}

const initialState: State = {
	currentNameOrganization: 'ООО МТС',
	role: 1,
	login: 'CAcascas123',
	password: 'dasdadasd1231',
}

export const authSlice = createSlice({
	name: 'authSlice',
	initialState,
	reducers: {
		setRole(state, action: PayloadAction<number>) {
			state.role = action.payload
		},
		setCurrentNameOrganization(state, action) {
			state.currentNameOrganization = action.payload
		},
		setLoginAndPass(state, action) {
			state.login = action.payload.login
			state.password = action.payload.password
		},
	},
})

export const { setRole, setCurrentNameOrganization, setLoginAndPass } =
	authSlice.actions
export default authSlice.reducer
