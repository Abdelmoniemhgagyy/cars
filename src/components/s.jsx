import React from 'react'
import {useEffect,useState} from "react"
import axios from "axios"
function ComA() {
    let [count,setCount]=useState(0)
    let [posts,setPosts]=useState([])
    // useEffect(()=>
    //    {
    //    axios.get("https://jsonplaceholder.org/posts").then((res) => setPosts(res.data))
    //    } ,[])


    // ---------------one post by id--------------
    let [post,setPost]=useState({});
    let [id,setId]=useState(1);
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.org/posts/${id}`)
        .then((res)=>{
            setPost(res.data)
        })
    },[id])

  return (
    <div>
        <button onClick={()=> setCount(count+1)}>Increase</button>
        {count}
        <button onClick={()=> setCount(count-1)}>Decrease</button>
        <hr/>
        <br />
        {/* {posts.map((post)=> <div key={post.id}>{post.title} <h1>""</h1></div>)} */}
        <hr />
        <br />
            <input type="text" onChange={(e) => setId(e.target.value)}/>
           
          <div>{id}-{post.title}</div> 
    </div>
  )
}

export default ComA