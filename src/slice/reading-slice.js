import { createSlice } from "@reduxjs/toolkit";

const ReadingSlice=createSlice({
    name:'reading books',
    initialState:{
        items:[],
        pageReading:0
    },
    reducers:{
        addOrRemoveBook(state,actions){
            const book=actions.payload.book;
            const foundBook=state.items.find(b=>book.id===b.id);
            console.log(foundBook);
            if(!foundBook){
                console.log('Dodajem knjigu!')
                state.items.push(book);
                state.pageReading+=book.pageCount;
            }else{
                console.log('Uklanjam knjigu!')
                const index=state.items.findIndex(b=>b.id===book.id);
                state.items.splice(index,1);
                state.pageReading-=book.pageCount
                
            }
        }
    }
})

export const readingReducer=ReadingSlice.reducer;
export const readingActions=ReadingSlice.actions;