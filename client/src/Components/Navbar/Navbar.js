import React from 'react'
import './Navbar.css'
import{Link}from'react-router-dom'
import{useDispatch, useSelector}from"react-redux";
import { logoutUser } from '../../slices/userSlice';


const Navbar = () => {
  const user = useSelector((state)=>state.userInfo.user);

  const dispatch =useDispatch();

  const logout =()=>{
    dispatch(logoutUser());
    localStorage.removeItem("token")
  }
  return (
    <nav>
        <h1>HOTEL MANAGEMENT SYSTEM</h1>
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/add-user'>Add User</Link>

          <Link to='/users'>Users</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          {user ? (
            <button onClick={logout}>Logout</button>
          ):(
            <Link to='/login'>Login</Link>
            )}
          {user && <h1>{user.name}</h1>}
        </ul>


    </nav>
  )
}

export default Navbar