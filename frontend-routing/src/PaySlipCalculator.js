import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
const PaySlipCalculator=()=>{


    let[Name , setName]=useState()
    let[ID, setID]=useState()
    let[Salary, setSalary]= useState()

    const nav = useNavigate()

    const cal=()=>{

        nav("/Showpayslip",{state:{Name,ID,Salary: Number(Salary)}})
    }

    return(<>
    
    <input type="text" placeholder="enter user id " onChange={(e)=>setID(e.target.value)}/>
    <input type="text" placeholder="enter the name " onChange={(e)=>setName(e.target.value)}/>
    <input type="text" placeholder="enter the salary " onChange={(e)=>setSalary(e.target.value)}/>
    <button onClick={cal}>Calculate PaySlip</button>
    
    
    </>)
}
export default PaySlipCalculator