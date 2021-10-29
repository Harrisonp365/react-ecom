import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { findProductByBrand } from "../../Services/dbCRUD";
import BrandCards from "../../components/BrandCards/BrandCards";

const ProductsByBrand = () => {
  const { brand } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const populateProducts = async () => {
      const data = await findProductByBrand(brand);
      setProduct(data);
    };
    populateProducts();
  }, [brand]);

  if (!product) {
    return <h1>Sorry, no product was found</h1>;
  }

  return <BrandCards product={product} />;
};

export default ProductsByBrand;
