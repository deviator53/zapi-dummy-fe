import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isSubscribed: false,
    error: null,
    message: null,
    subscriptionData: {}
}

const subscriptionSlice = createSlice({
    name: 'subscription',
    initialState,
    reducers: {
        setSubscriptionData: (state, action) => {
            state.subscriptionData = action.payload
        },
        removeSubscriptionData: state => {
            state.subscriptionData = null
        }
    }
})

export const { setSubscriptionData, removeSubscriptionData } = subscriptionSlice.actions
export default subscriptionSlice.reducer
