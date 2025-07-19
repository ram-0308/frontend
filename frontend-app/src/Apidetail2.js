import "./App.css";

const Apidetail2 = ({
  id,
  title,
  image,
  price,
  description,
  brand,
  model,
  color,
  category,
  discount,
}) => {
  return (
    <div className="cont">
      <h1>Id: {id}</h1>
      <h2>Title: {title}</h2>
      <img src={image} alt={title} width="200" />
      <h2>Price: ${price}</h2>
      <h2>Desc: {description}</h2>
      <h2>Brand: {brand}</h2>
      <h2>Model: {model}</h2>
      <h2>Color: {color}</h2>
      <h2>Category: {category}</h2>
      <h2>Discount: {discount}%</h2>
    </div>
  );
};

export default Apidetail2;
