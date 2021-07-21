import React, { useState } from "react";
import "./App.css";
import { TestComponent } from "./testComponents"
import Register from "./screens/register"
import Login from "./screens/login"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { NavLink } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
          <Switch>
            {/* <Route exact path={["/", "/home"]} component={TestComponent} /> */}
            <Route exact path="/register" component={Register} />
            {/* <Route exact path='/login' component={Login} /> */}
          </Switch>
      {/* <header className="App-header">
        <NavLink className="p-2 m-3 text-white bg-blue-dark rounded-md hover:bg-blue-dark" exact to='/'> Test Component </NavLink>
        <NavLink className="p-2 text-white bg-blue-dark rounded-md hover:bg-blue-dark" to='/register'> Test Register </NavLink>
      </header> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
