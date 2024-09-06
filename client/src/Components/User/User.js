import React from 'react'
import'./User.css'
import{useNavigate} from 'react-router-dom'

const User = ({id,name,age,address,mobileno,aadharno,deleteUser}) => {
    const navigate =useNavigate();

    const update =()=>{
        navigate(`/update/${id}`);
    }

  return (
    <div className='user'>
        <h2>
            Id:<span>{id}</span>
        </h2>
        <h3>
            Name:<span>{name}</span>
        </h3>
             <h3>Age:<span>{age}</span>
        </h3>
        <h3>Address:<span>{address}</span>
        </h3>
        <h3>Mobileno:<span>{mobileno}</span>
        </h3>
         <h3>Aadharno:<span>{aadharno}</span></h3>
         <div className='user__bottom'>
            <button className='user__delete' onClick={deleteUser}>Delete</button>
            <button className='user__update' onClick={update}>Update</button>
            
         </div>
    </div>

  )
}

export default User