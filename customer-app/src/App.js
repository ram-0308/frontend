import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState("");
  const [actno, setAct] = useState('');
  const [name, setName] = useState('');
  const [balance, setBalance] = useState('');
  const [type, setType] = useState('');
  const [amt, setamt] =useState()
  const [searchResult, setSearchResult] = useState(null);
    let [user,setUser] = useState([])
    let [flag,setFlag]=useState(true);
 
  useEffect(()=>{
    getAllData()
  },[flag])

   
 

  const saveData = async () => {
    const data = { actno, name, balance, type };

   

    try {
      const res = await axios.post("http://localhost:8085/saveData", data);
      console.log("Response:", res.data);
      setAct('');
      setName('');
      setBalance('');
      setType('');
      setFlag(true)
    } catch (err) {
      console.error(" Error saving data:", err);
      
    }
  };

    const RemoveData=async()=>
   {
        let res= await axios.delete(`http://localhost:8085/getDelete/${actno}`)
        setMsg(res.data)
        
 
   }

      const Deposit=async()=>
   {
     let res= await axios.put(`http://localhost:8085/deposit/${actno}/${amt}`)
        setMsg(res.data)
        setFlag(false)
 
   }

      const searchByAct=async()=>
 
    {
           let res= await axios.get(`http://localhost:8085/getData/${actno}`)
             console.log("hhhhhhh")
              console.log(res.data)
             setSearchResult(res.data);
    }
   
        const getAllData = async() =>{
    let res = await axios.get("http://localhost:8085/getalluser")
    setUser(res.data)
    console.log(res.data)
    setFlag(true)
  }


  return (
    <div className="cont">
      <h2>Customer Entry Form</h2>
      <input
        type="text"
        placeholder='Enter Account No'
        value={actno}
        onChange={(e) => setAct(e.target.value)}
      />
      <input
        type="text"
        placeholder='Enter Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder='Enter Balance'
        value={balance}
        onChange={(e) => setBalance(e.target.value)}
      />
      <input
        type="text"
        placeholder='Enter Type'
        value={type}
        onChange={(e) => setType(e.target.value)}
      />


      <input
        type="text"
        placeholder='Enter deposit amt'
        value={amt}
        onChange={(e) => setamt(e.target.value)}
      />

    

      <button onClick={saveData}>Save Data</button>
      <button onClick={RemoveData}>Remove Data</button>
      <button onClick={Deposit}>Deposit Amount</button>
      <button onClick={searchByAct}>  search by Account number</button>
      
              {
          user.map((temp)=><h1>{temp.name} {temp.balance}</h1>)
        }



      {searchResult && (
       <div>
        <h3>Customer Found: {searchResult.name}</h3>
       </div>
      )}

    </div>

    

    
  );
}

export default App;
