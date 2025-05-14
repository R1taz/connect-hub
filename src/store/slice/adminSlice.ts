import { createSlice } from '@reduxjs/toolkit'

interface State {}

const initialState: State = {}

const adminSlice = createSlice({
	name: 'adminSlice',
	initialState,
	reducers: {},
})

export default adminSlice.reducer
