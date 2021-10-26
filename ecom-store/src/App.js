import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./containers/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import SearchProvider from "./context/SearchContext";
import Products from "./containers/Products";
import Product from "./containers/Product";
import { Carousel } from "react-bootstrap";

function App() {
  return (
    <Router>
      <SearchProvider>
        <Navbar />
        <Switch>
          <Route path="/products/:id">
            <Product />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/cart"></Route>
          <Route path="/">
            <Header />
            <Carousel />
            <Products />
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
