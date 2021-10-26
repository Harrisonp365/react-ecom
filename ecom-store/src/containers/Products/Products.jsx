import { useLocation } from "react-router";
import { useEffect } from "react";
import { getProducts } from "../../Services/dbCRUD";
import ProductCard from "../ProductCard";
import styles from "./Products.module.scss";

const useQuery = () => {
  const location = useLocation();
  return new URLSearchParams(location.search);
};

const Products = () => {
  const [products, setProducts] = useState(null);
  const query = useQuery();
  const name = query.get("name") ?? "";

  useEffect(() => {
    const populateProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };

    populateProducts();
  }, []);

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
