const ProductCard = ({ product }) => {
  return (
    <div>
      <h3>
        {product.name} - {product.variant}
      </h3>
      <img src={product.imageUrl} />
      <p>{product.price}</p>
      <p>{product.favourited}</p>
    </div>
  );
};

export default ProductCard;
