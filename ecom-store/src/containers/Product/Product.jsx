import { useParams } from "react-router-dom";
import products from "../../Services/products";
import ProductCard from "../ProductCard";

const Product = () => {
  const { id } = useParams();
  const product = products.find((product) => {
    return product.id === parseInt(id);
  });

  if (!product) {
    return <h1>Sorry, no product was found</h1>;
  }

  return <ProductCard product={product} />;
};

export default Product;
