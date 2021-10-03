import { useEffect, useState } from "react";
import styles from "./ProductManagement.module.css";
import CategoryForm from "../CategoryForm/CategoryForm";
import ProductForm from "../ProductForm/ProductForm";
import ShowManagement from "../ShowManagement/ShowMangement";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [show, setShow] = useState("");

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

  const ManagerHandler = () => {
    setShow("true");
  };
  const showHandler = () => {
    setShow("false");
  };
  const exiteHandler = () => {
    setShow("");
  };

  return (
    <div className={styles.productManager}>
      {show === "" ? (
        <>
          <button onClick={ManagerHandler}>Product manager</button>
          <button onClick={showHandler}>show status</button>
        </>
      ) : show === "true" ? (
        <div>
          <button onClick={exiteHandler}> exite</button>
          <CategoryForm
            submitHandler={addCategory}
            options={options}
            selectCategory={selectCategory}
          />
          <ProductForm submitHandler={addProduct} />
        </div>
      ) : (
        <div>
          <button onClick={exiteHandler}> exite</button>
          <ShowManagement products={products} category={category} />
        </div>
      )}
    </div>
  );
};

export default ProductManagement;
