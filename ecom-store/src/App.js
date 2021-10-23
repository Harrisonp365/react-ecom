import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./containers/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import SearchProvider from "./context/SearchContext";

function App() {
  return (
    <Router>
      <SearchProvider>
        <Navbar />
        <Switch>
          <Route path="/nvidia/:id">{}</Route>
          <Route path="/nvidia">{/* <Nvidias /> */}</Route>
          <Route path="/cart"></Route>
          <Route path="/">
            <Header />
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
