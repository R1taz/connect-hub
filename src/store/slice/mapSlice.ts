import { createSlice } from '@reduxjs/toolkit'

interface IPillar {
	street: string
	coordinates: [number, number]
	rating: number
}

interface State {
	pillars: IPillar[]
}

const initialState: State = {
	pillars: [],
}

export const mapSlice = createSlice({
	name: 'mapSlice',
	initialState,
	reducers: {
		setPillars(state, action) {
			state.pillars = action.payload
		},
		addPillar(state, action) {
			state.pillars.push(action.payload)
		},
		removePillar(state, action) {
			state.pillars = state.pillars.filter(pillar => pillar !== action.payload)
		},
	},
})

export const { setPillars, addPillar, removePillar } = mapSlice.actions
export default mapSlice.reducer
