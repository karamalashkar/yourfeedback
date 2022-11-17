import { store } from "../redux/Store"

//getting token from redux store
export const getToken = ()=>{
    let token=store.getState().token
    return token
}