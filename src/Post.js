import React,{useState,useEffect}from 'react'

const Post = props => {
    const [posts,setPosts]=useState();
    const[addedPost,setAddedPost]=useState();
    useEffect(()=>{
        console.log('useEffect')
        fetch('https://jsonplaceholder.typicode.com/users/1/posts').then(res=>res.json())
        .then(data=>setPosts(data));
    })
    console.log('render');
  return (
      <section>
          <h3>Posts Component</h3>
          <p>{props.count}</p>
          <input onChange={(e)=>setAddedPost({title:e.target.value})}/>
          <button onClick={()=>setPosts([...posts,addedPost])}>add post</button>
          {posts?posts.map(post=><p key={post.title}>{post.title}</p>):null}
      </section>)}


export default Post;