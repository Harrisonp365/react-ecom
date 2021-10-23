import styles from "./ProductCard.module.scss";
const ProductCard = ({ product }) => {
  return (
    <div className={styles.ProductCard}>
      <h3>{product.name} </h3>
      <h3>{product.variant} edition</h3>
      <img className={styles.ProductCard_img} src={product.imageUrl} />
      <p>Price: {product.price}</p>
      <p>{product.favourited}</p>
    </div>
  );
};

export default ProductCard;
