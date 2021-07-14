import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TestComponent } from "./testComponents"
import axios from "axios";

const handleClick = ({}) => {
  axios.get("https://pokeapi.co/api/v2/pokemon/ditto").then((res) => {
    console.log(res.data);
  }) 
}

function App() {
  return (
    <div className="App">
      <TestComponent/>
      <button className="h-10 w-20 text-white bg-blue-dark rounded-md hover:bg-blue-dark" onClick={handleClick}> Test this </button>
      <header className="App-header">
        <p className="font-press-start">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
