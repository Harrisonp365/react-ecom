import { useEffect, useState, useContext } from "react";
import { getProducts } from "../../Services/dbCRUD";
import ProductCard from "../ProductCard";
import { SearchContext } from "../../context/SearchContext";
import styles from "./Products.module.scss";

const Products = () => {
  const { search } = useContext(SearchContext);
  const [products, setProducts] = useState(null);

  const populateProducts = async () => {
    const products = await getProducts();
    setProducts(products);
  };

  useEffect(() => {
    populateProducts();
  }, []);

  const handleSubmit = () => populateProducts();

  // const filterProducts = products.filter((product) =>
  //   product.name.toLowerCase().includes(search.toLowerCase)
  // );

  return (
    <div className={styles.Products}>
      {products &&
        products
          .filter((product) => product.name.toLowerCase().includes(search))
          .map((product, id) => (
            <ProductCard onSubmit={handleSubmit} product={product} key={id} />
          ))}
    </div>
  );
};

export default Products;
