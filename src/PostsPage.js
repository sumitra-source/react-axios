import React,{useState}from 'react';
import Post from './Post';

const PostsPage = props => {
    const[count,setCount]=useState(0);
    const[user,setUser]=useState(1);
  return (
    <div>
    <button onClick={()=>setCount(count+1)}>increment</button><span>{count}</span>
    <button onClick={()=>setUser(user+1)}>Change user</button>
    <Post count={count} user={user}/>
    </div>
  )
}

export default PostsPage