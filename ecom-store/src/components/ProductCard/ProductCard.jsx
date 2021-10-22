import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.Card}>
      <div>
        <h2>{product.name}</h2>
        <h3>{product.variant}</h3>
        <img src={product.imageUrl} />
        <h3>{product.price}</h3>
        <p>{product.quantity} In stock.</p>
      </div>
    </div>
  );
};

export default ProductCard;

//Product card to be used to display products on both the
//home page and AMD/RTX pages
//Takes in a product<----
//Contains
//Name
//Image-Link to purchase

//CREATE CONTEXT EXAMPLE
//import createContext from "react"

//export const SearchContext = createContext();

//const SearchProvider = ({children}) => {
//  const [search, setSearch] = useState("");
//  const data = {search, setSearch};
//
//return (
//  <SearchContext.Provider value={data}> {children} </SearchContext.Provider>
//)
//}

//export default SearchProvider;
