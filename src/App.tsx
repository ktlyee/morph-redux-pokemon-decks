import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { BasicBadge } from './components'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App mt-24">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="font-press-start">Hello Vite + React!</p>
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
      </header> */}
      <BasicBadge text="Badge" textStyle="text-sm text-white font-medium font-press-start" backgroundColor="bg-red" />
    </div>
  );
}

export default App