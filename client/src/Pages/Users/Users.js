import React, { useEffect, useState } from 'react'

import User from '../../Components/User/User'
import {Link} from 'react-router-dom'


import axios from 'axios'

const Users = () => {
  const[users,setUsers]=useState([])
 let token = localStorage.getItem("token");

const getData = async()=>{
  try {
    const {data}=await axios.get("http://localhost:4000/users/all",{
      headers:
      {
        Authorization:token,
      }
    });
    setUsers(data.users)
  } catch (error) {
    console.log(error);
    
  }
}

useEffect(()=>{
  getData();
},[]);
  const deleteUser = async(id)=>{
  try {
    const {data}= await axios.delete(`http://localhost:4000/users/delete/${id}`,
      {headers:{
        Authorization:token,
      }

      }
    );
    alert(data.msg);
    getData();
  } catch (error) {
    console.log(error);
  }
  }
  return ( <div className='users'>
    <div className='users__title'>Users</div>
<div className='users__container'> 
  {
   users.length === 0 ? (
    <div className='users__empty'>
      <h1>No users found</h1>
      <h3> 
        <Link to='/add-User'>Add Users</Link>
      </h3>
    </div>
   ):
   (
    users.map((user)=>{
    return(
       <User
       key={user._id}
       id={user._id}
       name={user.name}
       age ={user.age}
       address={user.address}
       mobileno={user.mobileno}
       aadharno={user.aadharno}
       deleteUser={()=>deleteUser(user._id)}
       />
    )
   })
  )}
</div>
  </div>
  )
  
}
export default Users;

