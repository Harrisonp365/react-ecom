import styles from "./ProductPage.module.scss";
import { Link } from "react-router-dom";

const ProductPage = ({ product }) => {
  return (
    <div className={styles.ProductPage}>
      <h3>{product.name} </h3>
      <h3>{product.variant} edition</h3>
      <img className={styles.ProductPage_img} src={product.imageUrl} />
      <Link to={"/cart"}>
        <p>Price: {product.price}</p>
      </Link>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductPage;

//Here I can add extra details and a cart link for each item as it will only display one item and extra details
