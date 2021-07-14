import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TestComponent } from "./testComponents"

function App() {
  return (
    <div className="App">
      <TestComponent/>
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
