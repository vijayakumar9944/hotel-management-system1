import React ,{useState,useEffect}from 'react'
import './Update.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector,useDispatch} from 'react-redux'
import{updateUser} from '../../slices/userSlice'

const Update = () => {
  const{id}=useParams();
  const dispatch = useDispatch();
  const navigate =useNavigate()
  const users =useSelector((state)=>state.userInfo.users)
  const [userInfo,setUserInfo]=useState(null)

  useEffect(()=>{
    const user =users.find((user)=>user.id===id)
    setUserInfo(user)
  },[id])
  const handleChange=(event) => {
    const{name,value} = event.target;
    setUserInfo((currInfo)=>{
      return{
        ...currInfo,
        [name]:value,
      }
    })
};
const add = ()=>{
 dispatch(updateUser(userInfo))
 navigate('/users')

 
}
if (!userInfo){
    return <h1>please check the id</h1>
}
  console.log(userInfo);
  

  return (
    <div className='home'> 
    <div className='home__container'>
       <div className='form__container'>
         <h1 className='home__title'>Update user information</h1>
         <input
         type='text'
         placeholder='enter user uuid'
         disabled
         value ={userInfo.id}
         />
         <br/>
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
         <button onClick={()=>add()}>Update user</button>

       </div>

    </div>
    </div>
  )
}

export default Update