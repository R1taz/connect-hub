import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserData } from '../../interfaces/usersInterfaces'

interface State {
	user: UserData | null
}

const initialState: State = {
	user: {
		id: null,
		email: '',
		username: '',
		user_info: null,
	},
}

const userSlice = createSlice({
	name: 'userSlice',
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<UserData>) {
			state.user = action.payload
		},
		clearUser(state) {
			state.user = null
		},
	},
})

export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer
