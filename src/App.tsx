import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Avatar } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="p-5 bg-white grid justify-end">
        <Avatar
          href="#"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          name={{ text: "Welcome!", textColor: "text-blue font-bold" }}
          text={{ text: "@pokemon", textColor: "text-blue font-bold" }}
        />
      </div>
      <header className="App-header">
        <p className="font-press-start text-blue-dark">Hello Vite + React!</p>
        <p>
          <button
            className="border-4 border-red-dark font-quicksand text-blue-dark"
            type="button"
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </button>
        </p>
        <p className="font-quicksand text-blue-dark">
          Edit <code>App.tsx</code> and save to test HMR updates.
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

export default App;
