import { useEffect, useState } from "react";
import CategoryForm from "../CategoryForm/CategoryForm";
import ProductForm from "../ProductForm/ProductForm";
import ProductList from "../ProductList/ProductList";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const selectCategory = (selectcategory) => {
    console.log("selectcC in selectCategory: ", selectcategory);
    setSelectedCategory(selectcategory);
  };

  useEffect(() => {
    const option = {
      value: category[category.length - 1],
      label: category[category.length - 1],
    };
    setOptions([...options, option]);
  }, [category]);

  const addProduct = (product) => {
    console.log("this is selectedCategory in add : ", selectedCategory);
    console.log(product);
    const newProduct = {
      category: selectedCategory,
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
      <CategoryForm
        submitHandler={addCategory}
        options={options}
        selectCategory={selectCategory}
      />
      <ProductForm submitHandler={addProduct} />
      <ProductList products={products} />
    </div>
  );
};

export default ProductManagement;
