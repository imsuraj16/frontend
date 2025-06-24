import axios from "../../api/apiconfig";
import { loadAllUser, loadUser, logout } from "../reducers/userSlice";


export const registerUser = (userData)=>async(dispatch)=>{

const {data} = await axios.post('/user',userData)

}


export const loginUser = (user)=>async(dispatch)=>{

const{data} = await axios.get(`/user?email=${user.email}&password=${user.password}`)

localStorage.setItem('user',JSON.stringify(data[0]))
dispatch(currentUser())
}


export const currentUser = ()=> async(dispatch)=>{

const user = JSON.parse(localStorage.getItem('user'))
if(user){
    dispatch(loadUser(user))
}

}

export const logoutuser = ()=>async(dispatch)=>{

    localStorage.removeItem('user')
    dispatch(logout())
    
}



export const getAllUsers = ()=>async (dispatch)=>{

    const {data} = await axios.get('/user')
    dispatch(loadAllUser(data))
    
}