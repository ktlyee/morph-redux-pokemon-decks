import React from "react";
import "./App.css";
import Register from "./screens/register"
import Login from "./screens/login"
import { Route, Switch } from "react-router-dom"
import Homepage from "./screens/home";
import FavoritePage from "./screens/favorite";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/home" component={Homepage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Login} />
        <Route path="/favorite" component={FavoritePage} />
      </Switch>
      {/* <FavoritePage /> */}
    </div>
  )
}

export default App
