import "./App.css";
import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Weather App</h1>
        <Weather />
        <br />
        <Footer />
      </header>
    </div>
  );
}

export default App;
