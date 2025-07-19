import "./App.css"
const Book=({name,price,qty,location,pic})=>{









    return(<>
    
    <div className="cont">
    <img src={pic}/>
    <h1>Name:{name}</h1>
    <h2>Price:{price}</h2>
    <h2>Quantity:{qty}</h2>
    <h2>Location:{location}</h2>
    </div>
    
    </>)
}
export default Book;