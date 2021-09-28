const Product = ({ product }) => {
  return (
    <div>
      <div>category:{product.category}</div>
      <div>name:{product.name}</div>
    </div>
  );
};

export default Product;
