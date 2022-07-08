import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const url = process.env.REACT_APP_BASE_URL

const initialState = {
    singleApis: [],
    isLoading: false,
    error: null
}

export const getSingleApis = createAsyncThunk('singleApis/getSingleApis', async(_, thunkAPI) => {
    try {
        const response = await fetch(`${url}/api`)
        const data = await response.json()
        return data.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

const singleApiSlice = createSlice({
    name: 'singleApis',
    initialState,
    reducers: {
        clearError: state => {
            state.error = null
        }
    },
    extraReducers: {
        [getSingleApis.pending]: state => {
            state.isLoading = true
        },
        [getSingleApis.fulfilled]: (state, action) => {
            state.isLoading = false
            state.singleApis = action.payload
            console.log(action.payload)
        },
        [getSingleApis.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export const { clearError } = singleApiSlice.actions
export default singleApiSlice.reducer