import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App" data-test="App">
        <Navbar />
        <Switch>
          <Route path="/cart" component={Cart} data-test="Cart" />
          <Route exact path="/" component={Home} data-test="Home" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
