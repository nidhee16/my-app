

import React from 'react';
import { useNavigate } from 'react-router-dom';


function Headers(props) {
  
const navigate=useNavigate()

const goToHome=()=>{
  navigate('/')
}
    return (
        <div className='ui fixed menu'>
           <div className='ui container center'>
             <h1 onClick={goToHome} style={{cursor:'pointer'}}>E-shop</h1>
             
           </div>
           
        </div>
    );
}

export default Headers;