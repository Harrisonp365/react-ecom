import styles from "./ProductCard.module.scss";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  return (
    <div className={styles.ProductCard}>
      <h3>{product.name} </h3>
      <h3>{product.variant}</h3>
      <Link to={`/products/${product.id}`}>
        {" "}
        <img className={styles.ProductCard_img} src={product.imageUrl} />{" "}
      </Link>
      <p>Price: ${product.price}</p>
      <p>{product.favourited}</p>
    </div>
  );
};

export default ProductCard;
