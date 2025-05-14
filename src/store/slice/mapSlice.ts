import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IPillar {
	id: number
	location: [number, number]
	maxConnection: number
	currentConnection: number
	factConnection: number
	userId: number
	status: string
}

interface State {
	pillars: Pillar[]
}

interface Pillar {
	street: string
	coordinates: [number, number]
	rating: number
	status: string
}

const initialState: State = {
	pillars: [
		{
			street: 'УЛ. РОЖДЕСТВЕНСКАЯ 7',
			coordinates: [56.330176, 43.997982],
			rating: 5,
			status: 'ОЖИДАНИЕ',
		},
		{
			street: 'УЛ. ЛЕНИНА 34А',
			coordinates: [56.285413, 43.930088],
			rating: 4,
			status: 'ПРИНЯТО',
		},
		{
			street: 'УЛ. ЗЕЛЕНОДОЛЬСКАЯ 54',
			coordinates: [56.311152, 43.92521],
			rating: 3,
			status: 'ОТКЛОНЕНО',
		},
		{
			street: 'УЛ. БЕЛИНСКОГО 41',
			coordinates: [56.313019, 44.007747],
			rating: 1,
			status: 'ОЖИДАНИЕ',
		},
	],
}

export const mapSlice = createSlice({
	name: 'mapSlice',
	initialState,
	reducers: {
		setPillars(state, action) {
			state.pillars = action.payload
		},
		addPillar(state, action: PayloadAction<Pillar>) {
			state.pillars.push(action.payload)
		},
		removePillar(state, action) {
			state.pillars = state.pillars.filter(pillar => pillar !== action.payload)
		},
	},
})

export const { setPillars, addPillar, removePillar } = mapSlice.actions
export default mapSlice.reducer
