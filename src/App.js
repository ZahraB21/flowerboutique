import React from "react";
import Navbar from "./components/headerComponents/navbar";
import Banner from "./components/headerComponents/banner";
import Mission from "./components/mainComponents/mission";
import Flowers from "./components/mainComponents/flowers";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Banner />
      </header>
      <main>
        <Mission />
        <Flowers />
      </main>
      {/* <footer>Photos by Monica Galentino, Thomas AE Lanty on Unsplashon</footer> */}
    </div>
  );
}

export default App;
