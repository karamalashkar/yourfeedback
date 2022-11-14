import AsyncStorage from '@react-native-async-storage/async-storage';

//define the base url to be used
export const baseURL = 'http://192.168.1.5:8000/api/v1/user';

//get token from async storage
const getToken = async()=>{
    const token=await AsyncStorage.getItem('token');
    return token;
}

const token=getToken();