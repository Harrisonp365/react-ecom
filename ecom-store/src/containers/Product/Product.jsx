import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard";
import { useState, useEffect } from "react";
import { findProduct } from "../../Services/dbCRUD";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const populateProducts = async () => {
      const data = await findProduct(id);
      setProduct(data);
    };
    populateProducts();
  }, [id]);

  if (!product) {
    return <h1>Sorry, no product was found</h1>;
  }

  return <ProductCard product={product} />;
  //Turn this to like a productPage and show extra details
};

export default Product;
