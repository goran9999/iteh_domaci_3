import {configureStore} from '@reduxjs/toolkit'
import { bookReducers } from '../slice/book-slice';


const store=configureStore({
    reducer:{
        books:bookReducers
    }
})

export default store;