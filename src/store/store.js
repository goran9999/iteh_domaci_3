import {configureStore} from '@reduxjs/toolkit'
import { bookReducers } from '../slice/book-slice';
import { readingReducer } from '../slice/reading-slice';

const store=configureStore({
    reducer:{
        books:bookReducers,
        reading:readingReducer
    }
})

export default store;