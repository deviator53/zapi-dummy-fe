import { configureStore } from '@reduxjs/toolkit'

import userReducer from './features/user/userSlice'
import priceReducer from './features/pricing/pricingSlice'
import apiReducer from './features/api/apiSlice'
import modalReducer from './features/modal/modalSlice'
import searchReducer from './features/search/searchSlice'
import singleApiReducer from './features/singleApi/singleApiSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        pricing: priceReducer,
        apis: apiReducer,
        modal: modalReducer,
        search: searchReducer,
        singleApis: singleApiReducer,
    }
})