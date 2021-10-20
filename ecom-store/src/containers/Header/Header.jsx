import SearchBar from "../../components/SearchBar";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <h1 className={styles.title}>RTX . R . US</h1>
      <SearchBar />
    </>
  );
};
export default Header;
