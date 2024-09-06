import React, { useState} from 'react'
import axios from "axios"
import { useDispatch } from 'react-redux';
import{handleLogin} from'..//..//slices/userSlice';
import{useNavigate}from"react-router-dom";

const Login = () => {
    const [loginType,setLoginType]=useState(false);
    const navigate = useNavigate();
    const[name,setName]= useState("");
    const[email,setEmail] =useState("");
    const[password,setPassword]=useState("");
    const dispatch = useDispatch();

    const login =async()=>{
        try {
            const response = await axios.post("http://localhost:4000/user/login",{
                email,
                password,
            });
            
            localStorage.setItem("token",response.data.token);
            dispatch(handleLogin(response.data.token));
            navigate("/")
            
        } catch (error) {
            console.log(error);
            
        }
    }

    const signup = async()=>{
        try {
            const response = await axios.post("http://localhost:4000/user/signup",{
                name,
                email,
                password
            })
            console.log(response);
            alert(response.data.msg);
            
        } catch (error) {
            console.log(error);
            
        }
    }
  return (
    <div>
        {loginType ? <div>
            <h1>Login</h1>
            <div>
                <input type='text' placeholder='enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}></input><br></br>
                <input type='password' placeholder='enter your password' value={password} onChange={(e)=>setPassword(e.target.value)}></input><br></br>
                <button onClick={login}>Login</button>
                <button onClick={()=>setLoginType(false)}>Create an account</button>

            </div>
        </div>:<div>
            <h1>Signup</h1>
            <div>
                <input type='text' placeholder='enter your name' value={name} onChange={(e)=>setName(e.target.value)}></input><br></br>
                <input type='text' placeholder='enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}></input><br></br>
                <input type='password' placeholder='enter your password' value={password} onChange={(e)=>setPassword(e.target.value)}></input><br></br>
                <button onClick={signup}>Signup</button>
                <button onClick={()=>setLoginType(true)}>Login to your account</button>

            </div>
            </div>}
    </div>
  )
}

export default Login