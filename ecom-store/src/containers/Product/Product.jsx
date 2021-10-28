import { useParams } from "react-router-dom";
import ProductPage from "../ProductPage";
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

  return <ProductPage product={product} />;
};

export default Product;
