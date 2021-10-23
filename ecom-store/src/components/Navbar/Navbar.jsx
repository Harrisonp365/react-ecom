import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <ul className={styles.Navbar_ul}>
        <li className={styles.Navbar_item}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.Navbar_item}>
          <Link to="/nvidia">Graphics Cards</Link>
        </li>
        {/* <li className={styles.Navbar_item}>
          <Link to="/amd">AMD</Link>
        </li> */}
        <li className={styles.Navbar_item}>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

//Home page to display carousel (Home to display both RTX and AMD)
//Home clicks can link to product page with cart options, price, stock info etc
//RTX cards
//AMD cards
//Cart page

//react-router-dom not yet installed read docs

//CART
//remove item from cart
//Cart collection -> single cart record
//
//card obj (
//products: [
//  id: prodId,
//  quant: 1
//]
//)

//fetch cart collection
//modify quantity then set cart again
