import React ,{useEffect, useState}from 'react';
import{Link,useParams} from 'react-router-dom';
import axios from'axios'
import './Verify.css'

const Verify = () => {
  const{token}=useParams();
  
  
  const [loading,setLoading]=useState(true);

  const verifyUser = async()=>{
    try {
      const response =await axios.get(`http://localhost:4000/user/verify/${token}`);
      alert(response.data.msg);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      
    }
  };
  useEffect(()=>{
    if(token){
      verifyUser();
    }
  },[token]);
  if (loading){
    return(
      <div className='verify__loading'>
        <img src='https://loading.io/assets/mod/spinner/comets/sample.gif' 
        alt=''></img>
      </div>
    );
      
    
  }
  return (
    <div className='verify'><h1>Verified Successfully</h1>
    <img src='https://media.tenor.com/bm8Q6yAlsPsAAAAj/verified.gif'
    alt='' className='verified'></img>
     <Link to="/login"><button>Login Now</button></Link>
    </div>
  )
}

export default Verify;