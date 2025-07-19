import { useParams } from "react-router-dom";
const Showproduct=()=>{

let {itemCode, name, price, quantity, city}=useParams()


    return(<>

    <h1>{name}</h1>
    <h2>{itemCode}</h2>
    <h2>{price}</h2>
    <h2>{quantity}</h2>
    <h2>{city}</h2>
    
    
    </>)
}
export default Showproduct