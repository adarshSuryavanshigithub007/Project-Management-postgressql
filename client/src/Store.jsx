import { configureStore } from '@reduxjs/toolkit'
import { userLoginReducer } from './redux/reducers/LoginReducers'

const store = configureStore({
    reducer: {
        userLogin: userLoginReducer,

    },
})

export default store