import { createSlice } from "@reduxjs/toolkit";

const evalSlice = createSlice({
    name:'eval',
    initialState:{
        eval:0
    },
    reducers:{
        evaluate(state,action){
            state.eval += Number(action.payload);
        },
        reset(state){
            state.eval = 0;
        }
    }
})

export default evalSlice.reducer
export const {evaluate, reset} = evalSlice.actions