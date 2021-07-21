import React, { useState } from "react";
import "./App.css";
import { TestComponent } from "./testComponents"
import Register from "./screens/register"
import Login from './screens/Login'
import { Route, Switch } from "react-router-dom"
import { NavLink } from "react-router-dom"

function App() {
  return (
    <div className="App">
          <Switch>
            {/* <Route exact path="/" component={TestComponent} /> */}
            <Route exact path="/register" component={Register} />
            <Route exact path="/" component={Login} />
          </Switch>
      {/* <header className="App-header">
        <NavLink className="p-2 m-3 text-white bg-blue-dark rounded-md hover:bg-blue-dark" exact to='/'> Test Component </NavLink>
        <NavLink className="p-2 text-white bg-blue-dark rounded-md hover:bg-blue-dark" to='/register'> Test Register </NavLink>
      </header> */}
    </div>
  )
}

export default App
