import { useEffect, useState } from "react"

const ApiEx=()=>{

    const [Products, setProducts] = useState([]);

    useEffect(()=>{

        fetch("https://dummyjson.com/products")
        .then((temp)=>temp.json())
        .then((res) => {
        setProducts(res.products);
      })
        .catch()
    },[])



    return (
    <>
      <h1>All Products</h1>

      {Products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        Products.map((item) => (
          <div key={item.id} >
            <strong>{item.title}</strong> - ₹{item.price}
          </div>
        ))
      )}
    </>
  );
}
export default ApiEx