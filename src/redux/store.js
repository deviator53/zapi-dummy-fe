import { configureStore } from '@reduxjs/toolkit'

import userReducer from './features/user/userSlice'
import profileReducer from './features/user/profileIdSlice'
import priceReducer from './features/pricing/pricingSlice'
import apiReducer from './features/api/apiSlice'
import modalReducer from './features/modal/modalSlice'
import searchReducer from './features/search/searchSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        profileId: profileReducer,
        pricing: priceReducer,
        apis: apiReducer,
        modal: modalReducer,
        search: searchReducer
    }
})