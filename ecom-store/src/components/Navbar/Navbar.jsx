import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <ul className={styles.Navbar_ul}>
        <li className={styles.Navbar_logo}>
          <Link to="/" stle={styles.logo_link}>
            RTX.R.US
          </Link>
        </li>
        {/* <li className={styles.Navbar_item}>
          <Link to="/" stle={styles.link_style}>
            Home
          </Link>
        </li> */}
        <li className={styles.Navbar_item}>
          <Link to="/products" stle={styles.link_style}>
            Graphics Cards
          </Link>
        </li>
        <li className={styles.Navbar_item}>
          <Link to="/cart" stle={styles.link_style}>
            Cart
          </Link>
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
