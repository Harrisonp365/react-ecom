import ProductsList from "../../components/ProductsList";
import styles from "./ProductContainer.module.scss";

const ProductContainer = () => {
  const products = [
    {
      name: "RTX 3090",
      imageUrl:
        "https://www.pcworld.com/wp-content/uploads/2021/09/dsc01056-100858556-orig.jpg?resize=1240%2C826&quality=50&strip=all",
      price: 10000,
      quantity: 1,
      variant: "founders",
    },
    {
      name: "AMD",
      imageUrl:
        "https://www.pcworld.com/wp-content/uploads/2021/09/dsc01056-100858556-orig.jpg?resize=1240%2C826&quality=50&strip=all",
      price: 10000,
      quantity: 1,
      variant: "founders",
    },
    {
      name: "RTX 3090",
      imageUrl:
        "https://www.pcworld.com/wp-content/uploads/2021/09/dsc01056-100858556-orig.jpg?resize=1240%2C826&quality=50&strip=all",
      price: 10000,
      quantity: 1,
      variant: "founders",
    },
  ];

  return (
    <div className={styles.CardContainer}>
      <ProductsList products={products} />
    </div>
  );
};

export default ProductContainer;
