import { createSlice} from '@reduxjs/toolkit';
// import Update from '../Pages/Update/Update';
import axios from 'axios';




const initialState ={
    users:[],
    user:null,
};
export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.users =[...state.users,action.payload];
        },
        removeUser:(state,action)=>{
            const newSetOfUsers = state.users.filter((user)=>user.id !== action.payload);
        
        state.users = newSetOfUsers;
    },
    updateUser:(state,action)=>{
        const newUsers =state.users.map((user)=>{
            if(user.id===action.payload.id){
                return action.payload
            }
            return user
        })
        state.users =newUsers;

    },
    setUser:(state,action)=>{
        state.user=action.payload;
    },
    logoutUser:(state,action)=>{
        state.user=null;
    }
},  
    
});
export const { addUser ,removeUser,updateUser,setUser,logoutUser} = userSlice.actions;

export default userSlice.reducer;

export const handleLogin = (token)=>{
    return async(dispatch)=>{
        const response =await axios.get("http://localhost:4000/user/data",{
            headers:{
                Authorization:token,
            },
        });
        dispatch(setUser(response.data));
    };
}