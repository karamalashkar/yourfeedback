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
        deleteUser:()=>{
            return initialState
        },
        setToken:(state, action)=>{
              state.token = action.payload.token
          },    
      }
  }
)
export const {updateUser, deleteUser,setToken } = userSlice.actions
export default userSlice.reducer

