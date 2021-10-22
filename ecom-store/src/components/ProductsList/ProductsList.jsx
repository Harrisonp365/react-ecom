import ProductCard from "../ProductCard/ProductCard";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

const ProductsList = ({ products }) => {
  const { search } = useContext(SearchContext);

  const searchRes = products.filter((product) => product.name.includes(search));

  return (
    <>
      {searchRes.map((product, i) => (
        <ProductCard product={product} key={i} />
      ))}
    </>
  );
};

export default ProductsList;
