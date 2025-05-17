import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IConnectionLink, IPillar, IPillarLink } from '../../interfaces/mapInterfaces'

interface State {
	pillars: IPillar[]
	pillarLinks: IPillarLink[]
	connectionLinks: IConnectionLink[]
}

const initialState: State = {
	pillars: [],
	pillarLinks: [],
	connectionLinks: [],
}

export const mapSlice = createSlice({
	name: 'mapSlice',
	initialState,
	reducers: {
		setPillars(state, action: PayloadAction<IPillar[]>) {
			state.pillars = action.payload
		},
		addPillar(state, action: PayloadAction<IPillar>) {
			state.pillars.push(action.payload)
		},
		setPillarLinks(state, action: PayloadAction<IPillarLink[]>) {
			state.pillarLinks = action.payload
		},
		setConnectionLinks(state, action: PayloadAction<IConnectionLink[]>) {
			state.connectionLinks = action.payload
		},
		addConnectionLinks(state, action: PayloadAction<IConnectionLink>) {
			state.connectionLinks.push(action.payload)
		},
	},
})

export const { setPillars, addPillar, setPillarLinks, setConnectionLinks, addConnectionLinks } =
	mapSlice.actions
export default mapSlice.reducer
