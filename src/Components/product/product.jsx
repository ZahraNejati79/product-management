import styles from "./Product.module.css";

const Product = ({ product }) => {
  return (
    <div className={styles.product}>
      <div>category:{product.category}</div>
      <div>name:{product.name}</div>
    </div>
  );
};

export default Product;
