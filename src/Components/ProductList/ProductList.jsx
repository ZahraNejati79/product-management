import Product from "../product/product";

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </div>
  );
};

export default ProductList;
