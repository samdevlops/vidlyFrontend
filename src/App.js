import "./App.css";
import React from "react";
import MainComponent from "./components/mainComponent";
import Navbar from "./components/navbarComponent";
import About from "./components/Pages/about";
import Contact from "./components/Pages/contact";
import Info from "./components/Pages/info";
import Profile from "./components/Pages/profile";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/info" Component={Info} />
          <Route path="/profile" Component={Profile} />
          <Route path="/" Component={MainComponent} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
