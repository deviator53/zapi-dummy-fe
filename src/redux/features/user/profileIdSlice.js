import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const url = process.env.REACT_APP_BASE_URL

const initialState = {
    profileId: {},
    isLoggedIn: false,
}

export const fetchUsers = createAsyncThunk('profileId/fetchUsers', async(_, thunkAPI) => {
    try {
        const response = await fetch(`${url}/profile/:id`)
        const data = await response.json()
        return data.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

const profileIdSlice = createSlice({
    name: 'profileId',
    initialState,
    reducers: {
        clearError: state => {
            state.error = null
        }
    },
    extraReducers: {
        [fetchUsers.pending]: state => {
            state.isLoading = true
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.isLoading = false
            state.profileId = action.payload
            console.log(action.payload)
        },
        [fetchUsers.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export const { clearError } = profileIdSlice.actions
export default profileIdSlice.reducer