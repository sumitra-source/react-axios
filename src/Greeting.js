import React,{useContext} from 'react';
import {UserContext}from './Context';
const Greeting=props=>{
    const [user,setUser]=useContext(UserContext);
    return(
        <div className='Greeting'>
        <h2>Welcome,{user}!</h2>
        <button onClick={()=>setUser('Sumitra')}>Change User</button>
        </div>
    )
    }

export default Greeting