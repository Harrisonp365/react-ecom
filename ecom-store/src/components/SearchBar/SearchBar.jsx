import { useState, useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  const [currentSearch, setCurrentSearch] = useState("");
  const { setSearch } = useContext(SearchContext);

  const handleChange = (e) => {
    setCurrentSearch(e.target.value);
  };

  const handleClick = (e) => {
    setSearch(currentSearch);
    setCurrentSearch("");
  };

  return (
    <div className={styles.SearchBar}>
      <input
        className={styles.SearchBar_input}
        type="text"
        placeholder="Search for you graphics card here"
        onChange={handleChange}
      />
      <button className={styles.SearchBar_button} onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
