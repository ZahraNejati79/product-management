import { useState } from "react";
import ProductForm from "../ProductForm/ProductForm";
import ProductList from "../ProductList/ProductList";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const addHandler = (product) => {
    console.log(product);
    const newProduct = {
      category: product,
      name: product,
      id: products.length,
    };
    setProducts([...products, newProduct]);
  };
  return (
    <div>
      productManagement
      <ProductForm submitHandler={addHandler} />
      <ProductList products={products} />
    </div>
  );
};

export default ProductManagement;
