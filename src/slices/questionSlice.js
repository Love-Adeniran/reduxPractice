import { createSlice } from "@reduxjs/toolkit";

const sliceQuestion = createSlice({
    initialState:{
        questionIndex: 0,
        answer: []
    },
    name: 'test',
    reducers:{
        setTest: (state,{payload})=>{
            console.log(state.answer)
        }
    }

})
export const Qslice = sliceQuestion.reducer
export const {setTest} = sliceQuestion.actions