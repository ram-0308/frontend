import { useEffect, useState } from "react"
import Apidetail from "./Apidetail"
 
const Apiex=()=>
{
 
 
 
    let  [posts,setPost]=useState([])
 
   
     useEffect(()=>
        {
         
           
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res)=> res.json())
      .then((temp)=>setPost(temp))
      .catch((e)=>console.log(e))
     
   
 
 
 
 
        },[])
 
 
    return(<>
   
   
       
    {
       
       posts.map((temp)=> <Apidetail id={temp.id} title={temp.title} body={temp.body}/>)
    }
 
   
 
 
    </>)
}
 
export default Apiex