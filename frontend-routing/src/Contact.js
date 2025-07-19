import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

const nav = useNavigate()

const opensign=()=>{

    nav("/Login")

}

  return (<>
  
  <h1>Contact Us</h1>
  <button onClick={opensign}>Login</button>
  </>)
};

export default Contact;
