import { useState } from "react";
import styles from "./ProductForm.module.css";

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
    <form onSubmit={onSubmit} className={styles.productForm}>
      <input
        className={styles.productInput}
        onChange={onchange}
        value={product}
        type="text"
        placeholder="product name"
      />
      <button type="submit">Add product</button>
    </form>
  );
};

export default ProductForm;
