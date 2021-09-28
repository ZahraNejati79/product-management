import { useEffect, useState } from "react";
import CategoryForm from "../CategoryForm/CategoryForm";
import ProductForm from "../ProductForm/ProductForm";
import ProductList from "../ProductList/ProductList";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const option = {
      value: category[category.length - 1],
      label: category[category.length - 1],
    };
    setOptions([...options, option]);

    console.log(options);
  }, [category]);

  useEffect(() => {
    console.log("option");
  }, [options]);
  const addProduct = (product) => {
    console.log(product);
    const newProduct = {
      category: product,
      name: product,
      id: products.length,
    };
    setProducts([...products, newProduct]);
    console.log(products);
  };

  const addCategory = (categoryy) => {
    console.log(categoryy);
    setCategory([...category, categoryy]);
    console.log(category);
  };

  return (
    <div>
      <ProductForm submitHandler={addProduct} />
      <CategoryForm submitHandler={addCategory} options={options} />
      <ProductList products={products} />
    </div>
  );
};

export default ProductManagement;
