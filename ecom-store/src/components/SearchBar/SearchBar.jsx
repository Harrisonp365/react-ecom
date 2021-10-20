import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <div className={styles.SearchBar}>
      <input
        className={styles.SearchBar_input}
        type="text"
        placeholder="Search for you graphics card here"
      />
      <button className={styles.SearchBar_button}>Search</button>
    </div>
  );
};

export default SearchBar;
