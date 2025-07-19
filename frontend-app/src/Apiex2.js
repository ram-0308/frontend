import { useEffect, useState } from "react";
import Apidetail2 from "./Apidetail2";

const Apiex2 = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
fetch("https://fakestoreapi.in/api/products")
  .then((res) => res.json())
  .then((temp) => {
    console.log(temp); // ✅ Check this output in the browser console
    setPost(temp);
  })
  .catch((e) => console.log(e));

  }, []);


  return (
    <>
      {posts.map((temp) => (
        <Apidetail2
          
          id={temp.id}
          title={temp.title}
          image={temp.image}
          price={temp.price}
          description={temp.description}
          brand={temp.brand}
          model={temp.model}
          color={temp.color}
          category={temp.category}
          discount={temp.discount}
        />
      ))}
    </>
  );
};

export default Apiex2;
