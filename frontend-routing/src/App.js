import logo from './logo.svg';
import './App.css';
import { Link, Route,  Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Faq from './Faq';
import Login from './Login';
import Welcome from './Welcome';
import Showpayslip from './Showpayslip';
import PaySlipCalculator from './PaySlipCalculator';
import UCard from './UCard';

import ShowU from './ShowU';
import UserList from './UseiList';
import ProductList from './ProductList';
import Productcard from './Productcard';
import Showproduct from './Showproduct';
import Protected from './Protected';


function App() {






  return (
    <div className="App">

<table border="2"> <tr>
  <Link to="/"><td> Home</td></Link>
   
  <Link to="/faq"><td>FAQ</td></Link> 
 
  <Link to="/Contact"><td>Contact</td></Link>

  <Link to="/Login"><td>Login</td></Link>

  <Link to="/PaySlipCalculator"><td>PaySlipCalculator</td></Link>
 
 

 <Link to="/userlist"><td>UserList</td></Link>

 <Link to="/productlist"><td>ProductList</td></Link>
   
   </tr></table>






 <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/Contact" element={<Contact/>}/>

    

      <Route path="/faq" element={<Protected Component={Faq} />} />




      <Route  path="/Login" element={<Login/>}/>
      <Route  path="/Welcome" element={<Welcome/>}/>
      <Route  path="/Showpayslip" element={<Showpayslip/>}/>
      <Route  path="/PaySlipCalculator" element={<PaySlipCalculator/>}/>
      <Route  path="/ucard" element={<UCard/>}/>
      <Route path="/ucard/:UserId/:Name/:Salary" element={<ShowU />} />
      <Route  path="/userlist" element={<UserList/>}/>
       <Route  path="/productlist" element={<ProductList/>}/>
       <Route  path="/productcard" element={<Productcard/>}/>
       <Route path="/productcard/:itemCode/:name/:price/:quantity/:city" element={<Showproduct/>} />
 
 
</Routes>



    </div>

  );
}

export default App;
