import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
