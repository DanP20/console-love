import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./components/TinderCards"
import "./App.css";


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat"></Route>
          <Route path="/">
          <TinderCards />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

{
  /* Tinder Cards */
}
{
  /* Buttons below Tinder Cards */
}

{
  /* chat screen */
}
{
  /* individual chat screen */
}
