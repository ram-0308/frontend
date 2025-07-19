import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Showpayslip = () => {
  const data = useLocation();
  const { Name, ID, Salary } = data.state;

  const [bonus, setbonus] = useState(0);
  const [Total, setTotal] = useState(0);

  useEffect(() => {
    let calculatedBonus = Salary < 5000 ? Salary * 0.05 : Salary * 0.1;
    setbonus(calculatedBonus);
    setTotal(Salary + calculatedBonus);
  }, [Salary]);

  return (
    <>
      <h1>Name: {Name}</h1>
      <h2>ID: {ID}</h2>
      <h2>Salary: {Salary}</h2>
      <h2>Bonus: {bonus}</h2>
      <h2>Total Salary: {Total}</h2>
    </>
  );
};

export default Showpayslip;
