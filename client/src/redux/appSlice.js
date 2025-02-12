import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
    name: 'app',
    initialState: {
        open: false,
        user: null,
        email: [],
        selectedEmail: null,
        searchedText: ""
    },
    reducers:{
        setOpen:(state, action)=>{
            state.open = action.payload
        },
        setUser:(state, action)=>{
            state.user = action.payload
        },
        setEmail:(state, action)=>{
            state.email = action.payload
        },
        setSelectedEmail:(state, action)=>{
            state.selectedEmail = action.payload
        },
        setSearchedText:(state, action) => {
            state.searchedText = action.payload
        }
    }
});
export const {setOpen, setUser, setEmail, setSelectedEmail, setSearchedText} = appSlice.actions;
export default appSlice.reducer;