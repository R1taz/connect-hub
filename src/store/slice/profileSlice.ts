import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IConnection } from '../../interfaces/profileInterfaces'

interface State {
	connections: IConnection[]
}

const initialState: State = {
	connections: [],
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
	},
})

export const { setConnection, addConnection } = profileSlice.actions
export default profileSlice.reducer
