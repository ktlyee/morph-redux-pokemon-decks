import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TestComponent } from "./testComponents"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <TestComponent/>
      <header className="App-header">
        <p className="font-press-start text-blue-dark">Hello Vite + React!</p>
        <p>
          <button
            className="p-3 rounded-3xl border-4 border-red-dark font-quicksand text-blue-dark"
            type="button"
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </button>
        </p>
        
        <p className="font-press-start">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
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

export default App
