import { useState } from "react"
import { useNavigate } from "react-router-dom"
 
const Login=()=>
{
 
 
let [Id,setId]=useState()
 
 
let [pass,setPass]=useState()
 
 
let [newpass,setNewPass] = useState()

const nav = useNavigate()
 
  const handleUserId=(event)=>
  {
  setId(event.target.value)
  }
 
 
  const handleUserPass=(event)=>
  {
  setPass(event.target.value)
  }

  const handlenewpass=(event)=>{
    setNewPass(event.target.value)
  }
 
 
  const signUp=()=>
  {
    localStorage.setItem(Id,pass)
   
  }
 
 const signIn=()=>
    {
 
       let p= localStorage.getItem(Id);
       if(p==pass)
       {
       // nav("/Welcome",{state:{Id,pass}})


        let data={Id,pass}
        data=JSON.stringify(data)
        localStorage.setItem("data",data)

        nav("/Welcome")


       }
       else{
        alert("Try again")
       }
 
    }
 
 
  const updatePassword = () => {
    let p = localStorage.getItem(Id);
    if (p === pass) {
      localStorage.setItem(Id, newpass);
      alert("Password updated successfully");
    } else {
      alert("Invalid Credentials");
    }
  };
 
return(<>
 
 
<div className="cont">
<input type="text" placeholder="enter user id " onChange={handleUserId}/>
 
 
<input type="password" placeholder="enter Password " onChange={handleUserPass}/>


<input type="password" placeholder="enter the new Password" onChange={handlenewpass} />
 
<button onClick={signIn}> Sign In</button>
<button onClick={signUp}> Sign up</button>
<button onClick={updatePassword}>Update password</button>
 
 
</div>
 
 
</>)
 
 
}
export default Login