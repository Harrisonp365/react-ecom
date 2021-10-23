import products from "../../Services/products";
import ProductCard from "../ProductCard";

const Products = () => {
  return (
    <div>
      {products.map((product, id) => (
        <ProductCard product={product} key={id} />
      ))}
    </div>
  );
};

export default Products;
