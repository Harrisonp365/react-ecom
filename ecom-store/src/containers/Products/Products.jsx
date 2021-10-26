import { useEffect, useState } from "react";
import { getProducts } from "../../Services/dbCRUD";
import ProductCard from "../ProductCard";
import styles from "./Products.module.scss";

const Products = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const populateProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    populateProducts();
  }, []);

  return (
    <div className={styles.Products}>
      {products &&
        products.map((product, id) => (
          <ProductCard product={product} key={id} />
        ))}
    </div>
  );
};

export default Products;
