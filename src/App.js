import "./App.css";
import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Weather App</h1>
        <Weather />
        <Footer />
      </header>
    </div>
  );
}

export default App;
