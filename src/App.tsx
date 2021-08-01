import React from "react";
import "./App.css";
import Register from "./screens/register"
import Login from "./screens/login"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Homepage from "./screens/home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
            <Switch>
              <Route exact path="/home" component={Homepage} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/" component={Login} />
            </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
