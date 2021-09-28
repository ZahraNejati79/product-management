import { useState } from "react";

const ProductForm = ({ submitHandler }) => {
  const [product, setProduct] = useState("");
  const onchange = (e) => {
    console.log(e.target.value);
    setProduct(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    submitHandler(product);
    setProduct("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input onChange={onchange} value={product} type="text" />
      <button type="submit">Add product</button>
    </form>
  );
};

export default ProductForm;
