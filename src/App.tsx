import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{
          display: "block",
          borderRadius: "3px",
          flexGrow: 1,
          height: "23px",
          maxWidth: "100%",
          color: "rgb(23, 23, 23)",
          backgroundColor: "rgb(255, 255, 255)",
          width: "219px",
          margin: "-3px -4px",
          padding: "2px 3px",
          font: '700 14px Inter, -apple-system, "system-ui", "Segoe UI", Roboto, sans-serif',
          border: "1px solid rgb(10, 14, 27)",
        }}
      >
        <p>Nexus Design System 1</p>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
