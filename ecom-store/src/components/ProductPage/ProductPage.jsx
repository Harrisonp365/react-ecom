import styles from "./ProductPage.module.scss";
import { Link } from "react-router-dom";

const ProductPage = ({ product }) => {
  const handleClick = () => {
    alert("Product added to cart");
  };

  return (
    <div className={styles.ProductPage}>
      <h1 className={styles.ProductPage_title}>
        {product.name} {product.variant}
      </h1>
      <img className={styles.ProductPage_img} src={product.imageUrl} />
      <div className={styles.ProductPage_cart}>
        <Link
          className={styles.ProductPage_cartLink}
          to={"/cart"}
          onClick={handleClick}
        >
          <p className={styles.ProductPage_cartLink}>Add to cart</p>
        </Link>
        <p className={styles.ProductPage_price}>
          Price: <p className={styles.PriceColor}> ${product.price}</p>
        </p>
      </div>
      <p className={styles.ProductPage_desc}>{product.description}</p>
      <h4 className={styles.ProductPage_quantity}>
        {product.quantity} Currently in stock
      </h4>
    </div>
  );
};

export default ProductPage;

//Here I can add extra details and a cart link for each item as it will only display one item and extra details
