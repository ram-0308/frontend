import { useContext } from "react";
import { MyContext } from "./MyContext";
 
const BCard=()=>
{
 
 
 
  let {age,name}=useContext(MyContext)
 
  return(<>
 
    <h1>Age {age}</h1>
    <h2>Name{name}</h2>
 
  </>)
}
export default BCard;