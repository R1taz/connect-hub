import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IConnection } from '../../interfaces/profileInterfaces'
import { IOrganization } from '../../interfaces/authInterfaces'

interface State {
	connections: IConnection[]
	organizations: IOrganization[]
}

const initialState: State = {
	connections: [],
	organizations: [],
}

export const profileSlice = createSlice({
	name: 'profileSlice',
	initialState,
	reducers: {
		setConnection(state, action: PayloadAction<IConnection[]>) {
			state.connections = action.payload
		},
		addConnection(state, action: PayloadAction<IConnection>) {
			state.connections.push(action.payload)
		},
		setOrganizations(state, action: PayloadAction<IOrganization[]>) {
			state.organizations = action.payload
		},
	},
})

export const { setConnection, addConnection, setOrganizations } = profileSlice.actions
export default profileSlice.reducer
