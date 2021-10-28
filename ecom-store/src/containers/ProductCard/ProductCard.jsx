import styles from "./ProductCard.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { updateProduct } from "../../Services/dbCRUD";

const ProductCard = ({ product, onSubmit }) => {
  const [favourite, setFavourite] = useState(product.favourited);

  const handleSubmit = async (event) => {
    setFavourite(!favourite);
    const partial = {
      favourited: favourite,
    };
    await updateProduct(product.id, partial);
    onSubmit();
  };

  let classes;
  if (favourite === true) {
    classes = [styles.Fav_btn];
  } else {
    classes = [styles.Fav_btn_false];
  }

  return (
    <div className={styles.ProductCard}>
      <h3 className={styles.ProductCard_title}>
        {product.name} {product.variant}
      </h3>
      <Link to={`/products/${product.id}`}>
        {" "}
        <img
          className={styles.ProductCard_img}
          src={product.imageUrl}
          alt={product.name}
        />{" "}
      </Link>
      <p className={styles.ProductCard_price}>Price: ${product.price}</p>
      <div className={styles.ProductCard_btn_div}>
        <button className={classes} value={favourite} onClick={handleSubmit}>
          Favourite{product.favourited}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
