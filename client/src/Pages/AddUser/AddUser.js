import React, { useState } from 'react'
import "./AddUser.css"
// import {useDispatch} from 'react-redux'
import{addUser} from '../../slices/userSlice'
import axios from 'axios'

const AddUser = () => {
  const [userInfo,setUserInfo] = useState({
    name:"",
    age:"",
    address:"",
    mobileno:"",
    aadharno:"",
  });

  // const dispatch = useDispatch()
  




  const handleChange=(event) => {
      const{name,value} = event.target;
      setUserInfo((currInfo)=>{
        return{
          ...currInfo,
          [name]:value,
        }
      })
  };
 const add = async ()=>{
 
  if(
    !userInfo.name ||
    !userInfo.age ||
    !userInfo.address|| 
    !userInfo.mobileno ||
    !userInfo.aadharno 

  ) {
    alert("please enter all details");
    return;
  }
  let token = localStorage.getItem("token");
  // console.log(token);
  try {
    const {data} = await axios.post("http://localhost:4000/users/add",userInfo,{
      headers:{
        Authorization: token,
      },
    })
    alert(data.msg)
   
   
    setUserInfo({
      name:"",
      age:"",
      address:"",
      mobileno:"",
      aadharno:"",
   });
  } catch (error) {
    console.log(error);
  }

   
  
  
  // dispatch(addUser(userInfo));
  //   setUserInfo({
  //   name:"",
  //   age:"",
  //   address:"",
  //   mobileno:"",
  //   aadharno:"",
  // })
}

 


 
  
  return (
    <div className='home'> 
    <div className='home__container'>
       <div className='form__container'>
         <h1 className='home__title'>Enter Customer Data</h1>
         <input
         type='text'
         name='name'
         placeholder='Enter user name'
         value ={userInfo.name}
         onChange={handleChange}
         />
         <br/>
         <input
         type='number'
         name='age'
         placeholder='Enter user age'
         value ={userInfo.age}
         onChange={handleChange}
         />
         <br/>
         <input
         type='text'
         name='address'
         placeholder='Enter user address'
         value ={userInfo.address}
         onChange={handleChange}
         />
         <br/>
         <input
         type='number'
         name='mobileno'
         placeholder='Enter user mobile no'
         value ={userInfo.mobileno}
         onChange={handleChange}
         />
         <br/>
        <input
         type='number'
         name='aadharno'
         placeholder='Enter user aadhar no'
         value ={userInfo.aadharno}
         onChange={handleChange}
         />
         <br/>
         <button onClick={()=>add()}>Submit data</button>

       </div>

    </div>
    </div>
  )
}

export default AddUser;