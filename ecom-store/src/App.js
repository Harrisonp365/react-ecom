import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./App.module.scss";
import Header from "./containers/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/nvidia/:id">{/* <Nvidia /> */}</Route>
        <Route path="/nvidia">{/* <Nvidias /> */}</Route>
        <Route path="/amd/:id">{/* <AMD /> */}</Route>
        <Route path="/amd">{/* <AMDs /> */}</Route>
        <Route path="/cart"></Route>
        <Route path="/">
          <Header />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

//Router
//Nav
//Switch statement
//Route -- path to display
