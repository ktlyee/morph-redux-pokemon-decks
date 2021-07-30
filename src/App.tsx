import React, { useState } from "react";
import "./App.css";
import { TestComponent } from "./testComponents"
import Register from "./screens/register"
import Login from "./screens/login"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { NavLink } from "react-router-dom"
import Homepage from "./screens/home";
import CardDetailPage from "./screens/card_info";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
          <Switch>
            <Route exact path="/home" component={Homepage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/" component={Login} />
            {/* <Route path="/card_info" component={CardDetailPage} /> */}
            {/* <Route path="/test-component" component={TestComponent}/> */}
          </Switch>
          {/* <CardDetailPage pokemonName='pidgeotto' isOpen={true} handleClose={() => {}} /> */}
      {/* <header className="App-header">
        <NavLink className="p-2 m-3 text-white bg-blue-dark rounded-md hover:bg-blue-dark" to='/test-component'> Test Component </NavLink>
        <NavLink className="p-2 text-white bg-blue-dark rounded-md hover:bg-blue-dark" to='/register'> Test Register </NavLink>
        <NavLink className="p-2 text-white bg-blue-dark rounded-md hover:bg-blue-dark" to='/login'> Test Login </NavLink>
      </header> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
