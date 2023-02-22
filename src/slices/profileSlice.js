import { createSlice } from "@reduxjs/toolkit";

const sliceProfile = createSlice({
    initialState:{
        firstname : 'Love',
        lastname: '',
        email: ''
    },
    name: 'Profile',
    reducers: {
        setProfile: (state,{payload})=>{
            state = {...state, ...payload}
            return state
        }
    }
})

export const slice = sliceProfile.reducer
export const {setProfile} = sliceProfile.actions
