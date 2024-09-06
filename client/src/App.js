import React,{useEffect} from 'react'
import Home from './Pages/Home/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Users from './Pages/Users/Users'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Update from './Pages/Update/Update'
import Login from './Pages/Login/Login'
import Verify from './Pages/Verify/Verify'
import { useDispatch } from 'react-redux'
import { handleLogin } from './slices/userSlice'
import AddUser from './Pages/AddUser/AddUser'
import PrivateRoute from './Components/PrivateRoute'


const App = () => {

  const dispatch =useDispatch();
  useEffect(()=>{
    let token = localStorage.getItem("token");
    if(token){
         dispatch(handleLogin(token));
    }
  },[]);
  return(
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route element ={<PrivateRoute/>}>
    <Route path='/add-User' element={<AddUser/>}/>
    <Route path='/update/:id' element={<Update/>}/>
    <Route path='/users' element={<Users/>}/>
    </Route>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path="/verify/:token"element={<Verify/>}/>
    

   




   </Routes>
   </BrowserRouter>
  );


 
    
  
}

export default App