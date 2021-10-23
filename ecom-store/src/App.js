import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./App.module.scss";
import Header from "./containers/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import SearchProvider from "./context/SearchContext";
import ProductContainer from "./containers/ProductsContainer/ProductContainer";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  return (
    <Router>
      <SearchProvider>
        <Navbar />
        <Switch>
          <Route path="/nvidia/:id">{<ProductCard />}</Route>
          <Route path="/nvidia">{/* <Nvidias /> */}</Route>
          <Route path="/cart"></Route>
          <Route path="/">
            <Header />
            <ProductContainer />
          </Route>
        </Switch>
      </SearchProvider>
    </Router>
  );
}

export default App;

//Router
//Nav
//Switch statement
//Route -- path to display

// {<Route path="/amd/:id">{/* <AMD /> */}</Route>
// <Route path="/amd">{/* <AMDs /> */}</Route>}
