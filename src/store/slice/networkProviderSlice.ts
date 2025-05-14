import { createSlice } from '@reduxjs/toolkit'

interface State {}

const initialState: State = {}

const networkProviderSlice = createSlice({
	name: 'networkProviderSlice',
	initialState,
	reducers: {},
})

export default networkProviderSlice.reducer
