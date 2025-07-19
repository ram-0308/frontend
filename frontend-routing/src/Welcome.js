import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react"

const Welcome = () => {
 // const data = useLocation();
 // const { Id, pass } = data.state ;

   let [Id,setId]=useState();

   useEffect(()=>
  {
    let data=localStorage.getItem("data")
 
    data=JSON.parse(data)
    setId(data.Id)
    console.log(data.Id)
  }
    ,[])

  return (
    <>
      <h1>Welcome {Id}</h1>
      
    </>
  );
};

export default Welcome;
