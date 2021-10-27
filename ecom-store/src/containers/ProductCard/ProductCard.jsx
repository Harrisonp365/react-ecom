import styles from "./ProductCard.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { updateProduct } from "../../Services/dbCRUD";

const ProductCard = ({ product }) => {
  const [favourite, setFavourite] = useState(product.favourited);

  const handleSubmit = async (event) => {
    setFavourite(!favourite);
    const partial = {
      favourited: favourite,
    };
    await updateProduct(product.id, partial);
  };

  return (
    <div className={styles.ProductCard}>
      <h3>{product.name}</h3>
      <h3>{product.variant}</h3>
      <Link to={`/products/${product.id}`}>
        {" "}
        <img
          className={styles.ProductCard_img}
          src={product.imageUrl}
          alt={product.name}
        />{" "}
      </Link>
      <p>Price: ${product.price}</p>
      <div>
        <button value={favourite} onClick={handleSubmit}>
          Favourited{product.favourited}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
