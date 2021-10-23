import products from "../../Services/products";
import ProductCard from "../ProductCard";
import styles from "./Products.module.scss";

const Products = () => {
  return (
    <div className={styles.Products}>
      {products.map((product, id) => (
        <ProductCard product={product} key={id} />
      ))}
    </div>
  );
};

export default Products;
