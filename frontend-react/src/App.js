import { useEffect, useState } from "react";
import BCard from "./BCard";
import { Message } from 'semantic-ui-react'
 import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
 import {
  ModalHeader,
  ModalDescription,
  ModalContent,
  ModalActions,
  Button,
  Header,
  Modal,
} from 'semantic-ui-react'

const temp = [
  { bname: "JavaScript Basics", price: 299, qty: 10, city: "Delhi" },
  { bname: "Learning Python", price: 499, qty: 5, city: "Mumbai" },
  { bname: "Mastering Java", price: 399, qty: 8, city: "Chennai" },
  { bname: "Web Dev Guide", price: 199, qty: 15, city: "Kolkata" },
  { bname: "React Essentials", price: 349, qty: 12, city: "Bangalore" },
  { bname: "Node.js Handbook", price: 429, qty: 7, city: "Pune" },
  { bname: "HTML & CSS", price: 150, qty: 20, city: "Hyderabad" },
  { bname: "C++ for Beginners", price: 250, qty: 10, city: "Ahmedabad" },
  { bname: "Data Structures", price: 300, qty: 9, city: "Jaipur" },
  { bname: "Machine Learning", price: 550, qty: 4, city: "Chandigarh" },
  { bname: "AI Fundamentals", price: 600, qty: 3, city: "Bhopal" },
  { bname: "Django for All", price: 375, qty: 6, city: "Nagpur" },
  { bname: "Spring Boot Intro", price: 420, qty: 7, city: "Lucknow" },
  { bname: "Flutter Dev", price: 310, qty: 8, city: "Patna" },
  { bname: "SQL Mastery", price: 280, qty: 11, city: "Surat" },
  { bname: "MongoDB Guide", price: 270, qty: 13, city: "Indore" },
  { bname: "AWS for Developers", price: 650, qty: 2, city: "Noida" },
  { bname: "Cyber Security", price: 480, qty: 5, city: "Kanpur" },
  { bname: "Kotlin in Action", price: 360, qty: 6, city: "Thane" },
  { bname: "TypeScript Deep Dive", price: 330, qty: 9, city: "Amritsar" }
];


const App=()=>
{
 
 const [open, setOpen] = useState(false)
  let [flag,setFlag]=useState(0)
  let [marks,setMarks]=useState(0)

  const [books,setBooks]=useState([])
  let [name,setName]=useState();
  let [qty,setQty]=useState();
  let [price,setPrice]=useState();
  let [city,setCity]=useState();
 const [added, setAdded] = useState(false);


useEffect(()=>
{
  setTimeout(()=>
    {
      setBooks(temp)
    },2000)
 
},[])


 
console.log(books);
 
const handleadd=()=>{

let addbook={bname:name, price:price, qty:qty, city:city}

    setBooks([...books, addbook]);
    setOpen(false)
    setAdded(true);

}

let[bookname, setbookname]=useState();
let[newprice, setnewprice]=useState();
const handleupdate=()=>{

  let updatebook = books.map((temp)=>temp.bname == bookname ? {...temp, price:newprice}:temp)
  setBooks(updatebook)
  setOpen(false)
}


const handleMarks=(e)=>
{
  setMarks(e.target.value)
 
}
 
const showR=()=>
{
  if(marks==0)
  {
    setFlag(0)
  }
  else if(marks<50)
  {
    setFlag(1)
  }
  else{
    setFlag(2)
  }
}
 
 
return(<>



    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Add Item</Button>}
    >

                  <input type="text" placeholder="enter book name " onChange={(e)=>setName(e.target.value)}/><br/>
                <input type="text" placeholder="enter book qty " onChange={(e)=>setQty(e.target.value)}/><br/>
 
        <input type="text" placeholder="enter book price " onChange={(e)=>setPrice(e.target.value)}/> <br/>
        <input type="text" placeholder="enter book city " onChange={(e)=>setCity(e.target.value)}/><br/>
 
        <button onClick={handleadd}> Add Item </button>
         <button onClick={()=>setOpen(false)}> Cancel </button>
    </Modal>


        <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Update Price</Button>}
    >
      <input type="text" placeholder="enter book name " onChange={(e)=>setbookname(e.target.value)}/><br/>
         <input type="text" placeholder="enter book price " onChange={(e)=>setnewprice(e.target.value)}/> <br/>
       <button onClick={handleupdate}> update Item </button>
        <button onClick={()=>setOpen(false)}> Cancel </button>

    </Modal>





     
          <input type="text" placeholder="Enter your total marks" onChange={handleMarks}/>

       <button onClick={showR}>Show Result</button>   
{flag==0 ? null : (flag==1 ? <Message color='black'>Fail</Message> : <Message color='brown'>Pass</Message>)}



        {added==true ? (<Message color='brown'>book added</Message>):null}
 
{
  books.length>0?
  books.map((temp)=><BCard  bname={temp.bname}  price={temp.price}  qty={temp.qty} city={temp.city}/>)
  :
   (
  <Segment>
    <Dimmer active>
      <Loader />
    </Dimmer>
  </Segment>
)

}
 
 
 
 
 
</>)
 
 
}
 
 
export default App;