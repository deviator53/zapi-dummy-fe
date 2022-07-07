import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const url = process.env.REACT_APP_BASE_URL

const initialState = {
    apis: [],
    isLoading: false,
    error: null
}

export const getApis = createAsyncThunk('apis/getApis', async(_, thunkAPI) => {
    try {
        const response = await fetch(`${url}/categories`)
        const data = await response.json()
        return data.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

const apiSlice = createSlice({
    name: 'apis',
    initialState,
    reducers: {
        clearError: state => {
            state.error = null
        }
    },
    extraReducers: {
        [getApis.pending]: state => {
            state.isLoading = true
        },
        [getApis.fulfilled]: (state, action) => {
            state.isLoading = false
            state.apis = action.payload
            console.log(action.payload)
        },
        [getApis.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export const { clearError } = apiSlice.actions
export default apiSlice.reducer