import { useLocation } from "react-router";
import products from "../../Services/products";
import ProductCard from "../ProductCard";
import styles from "./Products.module.scss";

const useQuery = () => {
  const location = useLocation();
  return new URLSearchParams(location.search);
};

const Products = () => {
  const query = useQuery();
  const name = query.get("name") ?? "";

  const filteredResult = products.filter((product) => {
    return `${product.name}`.toLowerCase().includes(name);
  });

  return (
    <div className={styles.Products}>
      {filteredResult.map((product, id) => (
        <ProductCard product={product} key={id} />
      ))}
    </div>
  );
};

export default Products;
