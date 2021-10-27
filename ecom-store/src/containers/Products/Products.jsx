import { useEffect, useState } from "react";
import { getProducts } from "../../Services/dbCRUD";
import ProductCard from "../ProductCard";
import styles from "./Products.module.scss";

const Products = () => {
  const [products, setProducts] = useState(null);

  const populateProducts = async () => {
    const products = await getProducts();
    setProducts(products);
  };

  useEffect(() => {
    populateProducts();
  }, []);

  const handleSubmit = () => populateProducts();

  return (
    <div className={styles.Products}>
      {products &&
        products.map((product, id) => (
          <ProductCard onSubmit={handleSubmit} product={product} key={id} />
        ))}
    </div>
  );
};

export default Products;
