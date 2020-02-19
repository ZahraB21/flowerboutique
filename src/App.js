import React from "react";
import Navbar from "./components/headerComponents/navbar";
import Banner from "./components/headerComponents/banner";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Banner />
      </header>
      <main></main>
      {/* <footer>Photo by Monica Galentino on Unsplashon Unsplash</footer> */}
    </div>
  );
}

export default App;
