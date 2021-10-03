import { useState } from "react";
import ProductList from "../ProductList/ProductList";

const ShowManagement = ({ products, category }) => {
  const [prooducts, setproducts] = useState(products);
  return (
    <div>
      <ProductList products={prooducts} />
    </div>
  );
};

export default ShowManagement;
