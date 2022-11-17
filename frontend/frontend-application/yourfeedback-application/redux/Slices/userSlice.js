import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user:{},
    token:'',
}
export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        updateUser :(state, action)=>{
            state.user = action.payload.user
        },    
      }
  }
)
export const {updateUser} = userSlice.actions
export default userSlice.reducer
